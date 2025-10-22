import { useEffect, useRef, useState } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
// @ts-ignore - EditorJS plugins don't all have type definitions
import Header from '@editorjs/header';
// @ts-ignore
import List from '@editorjs/list';
// @ts-ignore
import NestedList from '@editorjs/nested-list';
// @ts-ignore
import Table from '@editorjs/table';
// @ts-ignore
import ImageTool from '@editorjs/image';
// @ts-ignore
import CodeTool from '@editorjs/code';
// @ts-ignore
import RawTool from '@editorjs/raw';
// @ts-ignore
import LinkTool from '@editorjs/link';
// @ts-ignore
import InlineCode from '@editorjs/inline-code';
import FAQBlock from './editorjs-faq-block';
// @ts-ignore
import edjsHTML from 'editorjs-html';
import { Button } from '@/components/ui/button';
import { Code2, Eye } from 'lucide-react';

interface BlockEditorProps {
  data?: OutputData;
  onChange?: (data: OutputData) => void;
  onReady?: () => void;
  placeholder?: string;
}

export default function BlockEditor({ data, onChange, onReady, placeholder = 'Start writing your content...' }: BlockEditorProps) {
  const editorRef = useRef<EditorJS | null>(null);
  const holderRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [showHTMLView, setShowHTMLView] = useState(false);
  const [htmlOutput, setHtmlOutput] = useState('');

  useEffect(() => {
    if (!holderRef.current || editorRef.current) return;

    const editor = new EditorJS({
      holder: holderRef.current,
      placeholder,
      data: data || undefined,
      onChange: async () => {
        if (onChange && editorRef.current) {
          const savedData = await editorRef.current.save();
          onChange(savedData);
        }
      },
      onReady: () => {
        setIsReady(true);
        onReady?.();
      },
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header',
            levels: [1, 2, 3, 4, 5, 6],
            defaultLevel: 2,
          },
          inlineToolbar: true,
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: 'unordered',
          },
        },
        nestedList: {
          class: NestedList,
          inlineToolbar: true,
        },
        table: {
          class: Table,
          inlineToolbar: true,
          config: {
            rows: 2,
            cols: 3,
          },
        },
        image: {
          class: ImageTool,
          config: {
            uploader: {
              async uploadByFile(file: File) {
                const formData = new FormData();
                formData.append('file', file);
                
                try {
                  const response = await fetch('/api/admin/upload', {
                    method: 'POST',
                    body: formData,
                    credentials: 'include',
                  });
                  
                  if (!response.ok) {
                    throw new Error('Upload failed');
                  }
                  
                  const result = await response.json();
                  return {
                    success: 1,
                    file: {
                      url: result.url,
                    },
                  };
                } catch (error) {
                  console.error('Upload error:', error);
                  return {
                    success: 0,
                  };
                }
              },
              async uploadByUrl(url: string) {
                return {
                  success: 1,
                  file: {
                    url,
                  },
                };
              },
            },
          },
        },
        code: {
          class: CodeTool,
        },
        raw: {
          class: RawTool,
        },
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: '/api/fetch-url-meta', // You'll need to create this endpoint
          },
        },
        inlineCode: {
          class: InlineCode,
        },
        faq: {
          class: FAQBlock,
        },
      },
      i18n: {
        messages: {
          ui: {
            blockTunes: {
              toggler: {
                'Click to tune': 'Click to configure',
              },
            },
          },
          toolNames: {
            Text: 'Paragraph',
            Heading: 'Heading',
            List: 'List',
            'Nested List': 'Nested List',
            Table: 'Table',
            Image: 'Image',
            Code: 'Code',
            Raw: 'HTML',
            Link: 'Link',
            FAQ: 'FAQ',
          },
        },
      },
    });

    editorRef.current = editor;

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  const generateHTML = async () => {
    if (!editorRef.current) return '';

    try {
      const savedData = await editorRef.current.save();
      const edjsParser = edjsHTML();
      
      // Custom parsers for our custom blocks
      const customParsers = {
        faq: (block: any) => {
          const items = block.data.items || [];
          let html = '<div class="faq-section">\n';
          items.forEach((item: any, index: number) => {
            html += `  <div class="faq-item">\n`;
            html += `    <button class="faq-question" data-faq-index="${index}">\n`;
            html += `      <span>${item.question}</span>\n`;
            html += `      <span class="faq-chevron ${index === 0 ? 'expanded' : ''}">▼</span>\n`;
            html += `    </button>\n`;
            html += `    <div class="faq-answer" style="display: ${index === 0 ? 'block' : 'none'}">${item.answer}</div>\n`;
            html += `  </div>\n`;
          });
          html += '</div>';
          return html;
        },
        nestedList: (block: any) => {
          const renderList = (items: any[], style: string): string => {
            const tag = style === 'ordered' ? 'ol' : 'ul';
            let html = `<${tag}>\n`;
            items.forEach(item => {
              html += `  <li>${item.content}`;
              if (item.items && item.items.length > 0) {
                html += '\n' + renderList(item.items, item.style || style);
              }
              html += '</li>\n';
            });
            html += `</${tag}>\n`;
            return html;
          };
          
          return renderList(block.data.items, block.data.style);
        },
      };

      const html = edjsParser.parse(savedData);
      
      // Process custom blocks
      let finalHtml = '';
      savedData.blocks.forEach((block, index) => {
        if (customParsers[block.type as keyof typeof customParsers]) {
          finalHtml += customParsers[block.type as keyof typeof customParsers](block) + '\n';
        } else if (html[index]) {
          finalHtml += html[index] + '\n';
        }
      });
      
      return finalHtml;
    } catch (error) {
      console.error('Error generating HTML:', error);
      return '';
    }
  };

  const toggleHTMLView = async () => {
    if (!showHTMLView) {
      const html = await generateHTML();
      setHtmlOutput(html);
    }
    setShowHTMLView(!showHTMLView);
  };

  return (
    <div className="block-editor-wrapper">
      <div className="mb-4 flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={toggleHTMLView}
          className="flex items-center gap-2"
        >
          {showHTMLView ? <Eye className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
          {showHTMLView ? 'Visual Editor' : 'HTML View'}
        </Button>
      </div>

      {showHTMLView ? (
        <div className="border rounded-lg p-4 bg-gray-50">
          <pre className="text-sm whitespace-pre-wrap font-mono">{htmlOutput}</pre>
        </div>
      ) : (
        <div
          ref={holderRef}
          className="border rounded-lg p-4 min-h-[400px] bg-white"
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
          }}
        />
      )}

      <style>{`
        .cdx-block {
          padding: 0.4em 0;
        }

        .ce-toolbar__plus,
        .ce-toolbar__settings-btn {
          background: #1D50C9;
          color: white;
        }

        .ce-toolbar__plus:hover,
        .ce-toolbar__settings-btn:hover {
          background: #1845B3;
        }

        .ce-popover__item-icon {
          background: #1D50C9;
          color: white;
          border-radius: 4px;
        }

        .ce-popover__item:hover {
          background: #f0f5ff;
        }

        .ce-inline-toolbar {
          background: white;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .ce-inline-tool {
          color: #374151;
        }

        .ce-inline-tool:hover {
          background: #f0f5ff;
          color: #1D50C9;
        }

        .ce-conversion-toolbar {
          background: white;
          border: 1px solid #e5e7eb;
        }

        .ce-settings {
          background: white;
          border: 1px solid #e5e7eb;
        }

        .ce-toolbox {
          background: white;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .ce-block--selected .ce-block__content {
          background: #f0f5ff;
        }
      `}</style>
    </div>
  );
}
