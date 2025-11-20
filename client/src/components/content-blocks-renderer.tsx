import { useEffect, useRef, useState } from "react";
import type { ContentBlock } from "@shared/schema";

interface ContentBlocksRendererProps {
  blocks?: ContentBlock[];
  content?: string; // Main content HTML
  integrated?: boolean; // If true, insert blocks within content
}

export default function ContentBlocksRenderer({ blocks, content = '', integrated = false }: ContentBlocksRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  const sortedBlocks = [...blocks].sort((a, b) => (a.position ?? 999) - (b.position ?? 999));

  // If integrated mode AND content exists, check if we should merge or render blocks only
  if (integrated && content) {
    // Check if content contains only placeholders or also has actual block content
    // If content has paragraphs/headings that are ALSO in blocks, we have duplication
    // In that case, render ONLY blocks, not content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    // Count actual content elements (not placeholders)
    const contentElements = Array.from(tempDiv.querySelectorAll('p, h1, h2, h3, h4, h5, h6, div:not([data-block-placeholder])')).filter(el => {
      // Filter out empty elements
      const text = el.textContent || '';
      return text.trim().length > 0;
    });
    
    // If content has actual content elements AND we have blocks, it's likely duplication
    // Render ONLY blocks to avoid duplication
    if (contentElements.length > 0 && blocks.length > 0) {
      return (
        <div className="content-blocks-wrapper prose prose-xl max-w-none">
          {sortedBlocks.map((block) => (
            <div key={block.id}>
              {renderBlock(block)}
            </div>
          ))}
        </div>
      );
    }
    
    // If content has only placeholders, use integrated rendering
    return <IntegratedContentRenderer content={content} blocks={sortedBlocks} />;
  }

  // Otherwise, render blocks separately
  return (
    <div className="content-blocks-wrapper space-y-6 mt-8 prose prose-xl max-w-none">
      {sortedBlocks.map((block) => (
        <div key={block.id}>
          {renderBlock(block)}
        </div>
      ))}
    </div>
  );
}

// Integrated renderer that inserts blocks at specific positions
function IntegratedContentRenderer({ content, blocks }: { content: string; blocks: ContentBlock[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  
  // Extract and inject style tags into the document
  useEffect(() => {
    if (!containerRef.current) return;
    
    const styleTags = tempDiv.querySelectorAll('style');
    const injectedStyles: HTMLStyleElement[] = [];
    
    styleTags.forEach(styleTag => {
      const newStyle = document.createElement('style');
      newStyle.textContent = styleTag.textContent;
      newStyle.setAttribute('data-blog-style', 'true');
      document.head.appendChild(newStyle);
      injectedStyles.push(newStyle);
    });
    
    // Cleanup function to remove injected styles when component unmounts
    return () => {
      injectedStyles.forEach(style => style.remove());
    };
  }, [content]);
  
  // Get all top-level child nodes (element nodes only, skip text nodes with just whitespace)
  const elements = Array.from(tempDiv.childNodes).filter(node => {
    // Keep only element nodes (nodeType === 1)
    if (node.nodeType !== 1) {
      return false;
    }
    // Skip style tags as they're handled separately
    if ((node as Element).tagName.toLowerCase() === 'style') {
      return false;
    }
    return true;
  }) as Element[];
  
  const contentParts: JSX.Element[] = [];
  
  // Debug: Log element count and types
  console.log(`IntegratedContentRenderer: Found ${elements.length} top-level elements`, 
    elements.map((el, i) => `${i}: ${el.tagName}`).join(', '));
  
  // Group blocks by position
  const blocksByPosition = new Map<number, ContentBlock[]>();
  blocks.forEach(block => {
    const pos = block.position ?? 999;
    if (!blocksByPosition.has(pos)) {
      blocksByPosition.set(pos, []);
    }
    blocksByPosition.get(pos)?.push(block);
  });
  
  // Track which blocks have been rendered to avoid duplicates
  const renderedBlockIds = new Set<string | number>();
  
  // Add blocks at position 0 (beginning)
  if (blocksByPosition.has(0)) {
    blocksByPosition.get(0)?.forEach((block, idx) => {
      contentParts.push(
        <div key={`block-0-${idx}`} className="my-6">
          {renderBlock(block)}
        </div>
      );
      renderedBlockIds.add(block.id);
    });
  }
  
  // Add content elements with blocks inserted after them
  elements.forEach((el, index) => {
    contentParts.push(
      <div 
        key={`content-${index}`} 
        dangerouslySetInnerHTML={{ __html: el.outerHTML }}
      />
    );
    
    // Insert blocks after this element
    const blocksAfter = blocksByPosition.get(index + 1);
    if (blocksAfter) {
      blocksAfter.forEach((block, idx) => {
        contentParts.push(
          <div key={`block-${index + 1}-${idx}`} className="my-6">
            {renderBlock(block)}
          </div>
        );
        renderedBlockIds.add(block.id);
      });
    }
  });
  
  // Add blocks at the end (position >= 999 OR position > number of elements)
  // Only add blocks that haven't been rendered yet to avoid duplicates
  blocks.forEach((block, idx) => {
    const pos = block.position ?? 999;
    if ((pos >= 999 || pos > elements.length) && !renderedBlockIds.has(block.id)) {
      contentParts.push(
        <div key={`block-end-${idx}`} className="my-6">
          {renderBlock(block)}
        </div>
      );
      renderedBlockIds.add(block.id);
    }
  });
  
  return <div ref={containerRef} className="integrated-content prose prose-xl max-w-none">{contentParts}</div>;
}

function renderBlock(block: ContentBlock) {
  switch (block.type) {
    case 'paragraph':
      return <ParagraphBlock block={block} />;
    case 'heading':
      return <HeadingBlock block={block} />;
    case 'tip':
      return <TipBlock block={block} />;
    case 'faq':
      return <FAQBlock block={block} />;
    case 'table':
      return <TableBlock block={block} />;
    case 'html':
      return <HTMLBlock block={block} />;
    case 'button':
      return <ButtonBlock block={block} />;
    case 'image':
      return <ImageBlock block={block} />;
    case 'youtube':
      return <YouTubeBlock block={block} />;
    case 'spacer':
      return <SpacerBlock block={block} />;
    case 'divider':
      return <DividerBlock block={block} />;
    case 'schema':
      return <SchemaBlock block={block} />;
    case 'list':
      return <ListBlock block={block} />;
    case 'consultation':
      return <ConsultationBlock block={block} />;
    case 'whatsappChannel':
      return <WhatsAppChannelBlockRenderer block={block} />;
    default:
      return null;
  }
}

// Paragraph Block Renderer
function ParagraphBlock({ block }: { block: ContentBlock & { type: 'paragraph' } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = block.text || '';
  
  if (!text) {
    return null;
  }

  // Check if text contains HTML tags
  const hasHTMLTags = /<[^>]+>/.test(text);
  
  // Handle HTML content with proper style and script extraction
  useEffect(() => {
    if (!containerRef.current || !hasHTMLTags) return;
    
    const container = containerRef.current;
    const htmlContent = text;
    
    // Clear previous content
    container.innerHTML = '';
    
    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    // Extract and handle style tags
    const styleTags = tempDiv.querySelectorAll('style');
    const injectedStyles: HTMLStyleElement[] = [];
    styleTags.forEach(styleTag => {
      const newStyle = document.createElement('style');
      newStyle.textContent = styleTag.textContent;
      newStyle.setAttribute('data-paragraph-style', block.id);
      document.head.appendChild(newStyle);
      injectedStyles.push(newStyle);
      styleTag.remove();
    });
    
    // Extract and handle script tags
    const scriptTags = tempDiv.querySelectorAll('script');
    const scripts: HTMLScriptElement[] = [];
    scriptTags.forEach(scriptTag => {
      const newScript = document.createElement('script');
      Array.from(scriptTag.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      if (scriptTag.src) {
        newScript.src = scriptTag.src;
      } else {
        newScript.textContent = scriptTag.textContent;
      }
      scripts.push(newScript);
      scriptTag.remove();
    });
    
    // Add remaining HTML content
    container.innerHTML = tempDiv.innerHTML;
    
    // Execute scripts after DOM is ready
    scripts.forEach(script => {
      container.appendChild(script);
    });
    
    // Cleanup function
    return () => {
      injectedStyles.forEach(s => s.remove());
      const addedScripts = container.querySelectorAll('script');
      addedScripts.forEach(s => s.remove());
    };
  }, [text, hasHTMLTags, block.id]);
  
  if (hasHTMLTags) {
    // Render as HTML container
    return (
      <div 
        ref={containerRef}
        className="paragraph-block prose prose-xl max-w-none"
        data-testid={`block-paragraph-${block.id}`}
      />
    );
  }

  // Render as plain text
  return (
    <p 
      className="paragraph-block text-gray-700 leading-relaxed"
      data-testid={`block-paragraph-${block.id}`}
    >
      {text}
    </p>
  );
}

// Heading Block Renderer
function HeadingBlock({ block }: { block: ContentBlock & { type: 'heading' } }) {
  const text = block.text || '';
  const level = block.level || 2;
  
  if (!text) {
    return null;
  }

  const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  
  // Check if text contains HTML tags
  const hasHTMLTags = /<[^>]+>/.test(text);
  
  if (hasHTMLTags) {
    return (
      <HeadingTag 
        className="heading-block"
        dangerouslySetInnerHTML={{ __html: text }}
        data-testid={`block-heading-${block.id}`}
      />
    );
  }

  return (
    <HeadingTag 
      className="heading-block"
      data-testid={`block-heading-${block.id}`}
    >
      {text}
    </HeadingTag>
  );
}

// Tip Block Renderer
function TipBlock({ block }: { block: ContentBlock & { type: 'tip' } }) {
  // Handle both new format (data.prefix, data.text) and old format (prefix, text)
  const blockData = block as any;
  const prefix = blockData.data?.prefix || blockData.prefix || '';
  const text = blockData.data?.text || blockData.text || '';

  if (!text) {
    return null;
  }

  return (
    <div 
      className="my-6 p-4 rounded-lg border-l-4"
      style={{
        background: '#fff7ed',
        borderLeftColor: '#f97316'
      }}
      data-testid={`block-tip-${block.id}`}
    >
      <p className="font-family-inter text-base md:text-lg italic leading-relaxed m-0" style={{ fontFamily: 'Inter, Lato, sans-serif' }}>
        {prefix && <strong className="not-italic">{prefix} </strong>}
        {text}
      </p>
    </div>
  );
}

// FAQ Block Renderer
function FAQBlock({ block }: { block: ContentBlock & { type: 'faq' } }) {
  // Support both old single question format and new multiple questions format
  // Handle both block.data.questions (schema format) and block.items (actual format)
  const blockData = block as any;
  const questions = blockData.data?.questions || blockData.items || [
    {
      question: blockData.data?.question || '',
      answer: blockData.data?.answer || ''
    }
  ];

  // Add toggle functionality after component mounts
  useEffect(() => {
    const handleFaqClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('faq-question')) {
        const item = target.closest('.faq-item');
        const allItems = document.querySelectorAll('.faq-item');
        
        // Close all other items
        allItems.forEach(i => {
          if (i !== item) i.classList.remove('active');
        });
        
        // Toggle current item
        item?.classList.toggle('active');
      }
    };

    document.addEventListener('click', handleFaqClick);
    return () => document.removeEventListener('click', handleFaqClick);
  }, []);

  return (
    <div className="faq-container">
      <h2>FAQs</h2>
      <div id="faq-list">
        {questions.map((q: any, index: number) => (
          <div key={index} className="faq-item">
            <button className="faq-question">
              {q.question}
            </button>
            <div className="faq-answer">
              <p>{q.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Table Block Renderer
function TableBlock({ block }: { block: ContentBlock & { type: 'table' } }) {
  const { headers, cells, hasHeader } = block.data || {};

  if (!cells || cells.length === 0) {
    return null;
  }

  return (
    <div className="table-block overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        {hasHeader && headers && headers.length > 0 && (
          <thead>
            <tr className="bg-gray-100">
              {headers.map((header: string, index: number) => (
                <th key={index} className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {cells.map((row: string[], rowIndex: number) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell: string, cellIndex: number) => (
                <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// HTML Block Renderer
function HTMLBlock({ block }: { block: ContentBlock & { type: 'html' } }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !block.data?.html) return;
    
    const container = containerRef.current;
    const htmlContent = block.data.html;
    
    // Clear previous content
    container.innerHTML = '';
    
    // Create a temporary div to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    // Extract and handle style tags
    const styleTags = tempDiv.querySelectorAll('style');
    styleTags.forEach(styleTag => {
      const newStyle = document.createElement('style');
      newStyle.textContent = styleTag.textContent;
      container.appendChild(newStyle);
      styleTag.remove();
    });
    
    // Extract and handle script tags
    const scriptTags = tempDiv.querySelectorAll('script');
    const scripts: HTMLScriptElement[] = [];
    scriptTags.forEach(scriptTag => {
      const newScript = document.createElement('script');
      
      // Copy all attributes
      Array.from(scriptTag.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      
      // Copy script content
      if (scriptTag.src) {
        newScript.src = scriptTag.src;
      } else {
        newScript.textContent = scriptTag.textContent;
      }
      
      scripts.push(newScript);
      scriptTag.remove();
    });
    
    // Add remaining HTML content
    container.innerHTML += tempDiv.innerHTML;
    
    // Execute scripts after DOM is ready
    scripts.forEach(script => {
      container.appendChild(script);
    });
    
    // Cleanup function
    return () => {
      // Remove any added scripts and styles when component unmounts
      const addedScripts = container.querySelectorAll('script');
      const addedStyles = container.querySelectorAll('style');
      addedScripts.forEach(s => s.remove());
      addedStyles.forEach(s => s.remove());
    };
  }, [block.data?.html]);
  
  return <div ref={containerRef} className="html-block" />;
}

// Button Block Renderer
function ButtonBlock({ block }: { block: ContentBlock & { type: 'button' } }) {
  const { text, url, bgColor, textColor, alignment, borderWidth, borderRadius } = block.data || {};

  const alignmentStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    stretch: 'justify-stretch',
  };

  const buttonStyles = {
    backgroundColor: bgColor || '#1D50C9',
    color: textColor || '#ffffff',
    borderWidth: `${borderWidth || 0}px`,
    borderRadius: `${borderRadius || 8}px`,
    borderColor: textColor || '#1D50C9',
  };

  return (
    <div className={`button-block flex ${alignmentStyles[alignment as keyof typeof alignmentStyles] || 'justify-center'}`}>
      <a
        href={url || '#'}
        className="inline-block px-6 py-3 font-semibold transition-opacity hover:opacity-90"
        style={buttonStyles}
        target={url?.startsWith('http') ? '_blank' : undefined}
        rel={url?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {text || 'Click Me'}
      </a>
    </div>
  );
}

// Image Block Renderer
function ImageBlock({ block }: { block: ContentBlock & { type: 'image' } }) {
  const { url, alt, alignment, width } = block.data || {};

  if (!url) {
    return null;
  }

  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`image-block ${alignmentStyles[alignment as keyof typeof alignmentStyles] || 'text-center'}`}>
      <img
        src={url}
        alt={alt || ''}
        style={{ width: width || '100%', maxWidth: '100%', height: 'auto' }}
        className="inline-block"
      />
    </div>
  );
}

// YouTube Block Renderer
function YouTubeBlock({ block }: { block: ContentBlock & { type: 'youtube' } }) {
  const { videoId } = block.data || {};

  if (!videoId) {
    return null;
  }

  return (
    <div className="youtube-block aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  );
}

// Spacer Block Renderer
function SpacerBlock({ block }: { block: ContentBlock & { type: 'spacer' } }) {
  const { height } = block.data || {};

  return (
    <div className="spacer-block" style={{ height: `${height || 40}px` }} />
  );
}

// Divider Block Renderer
function DividerBlock({ block }: { block: ContentBlock & { type: 'divider' } }) {
  const { thickness, width } = block.data || {};

  return (
    <div className="divider-block flex justify-center">
      <hr
        style={{
          width: width || '100%',
          height: `${thickness || 1}px`,
          backgroundColor: '#e5e7eb',
          border: 'none',
        }}
      />
    </div>
  );
}

// Schema Block Renderer (not visible to users, only crawlers)
function SchemaBlock({ block }: { block: ContentBlock & { type: 'schema' } }) {
  const { schemaJson } = block.data || {};

  try {
    const parsedSchema = JSON.parse(schemaJson || '{}');
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parsedSchema) }}
      />
    );
  } catch {
    return null;
  }
}

// List Block Renderer
function ListBlock({ block }: { block: ContentBlock & { type: 'list' } }) {
  const { items = [], style = 'ul' } = block.data || {};

  if (!items || items.length === 0) {
    return null;
  }

  const renderListItems = (listItems: any[], depth = 0) => {
    return listItems.map((item: any, index: number) => {
      // Remove leading bullets or numbers from text if present
      const cleanText = (item.text || '')
        .replace(/^[•●○■□▪▫◆◇‣⁃∙⦿⦾]+\s*/g, '') // Remove bullet points
        .replace(/^\d+\.\s*/g, '') // Remove numbered list markers
        .trim();

      return (
        <li key={item.id || index}>
          {cleanText}
          {item.children && item.children.length > 0 && (
            style === 'ol' ? (
              <ol>{renderListItems(item.children, depth + 1)}</ol>
            ) : (
              <ul>{renderListItems(item.children, depth + 1)}</ul>
            )
          )}
        </li>
      );
    });
  };

  return style === 'ol' ? (
    <ol className="list-content">{renderListItems(items)}</ol>
  ) : (
    <ul className="list-content">{renderListItems(items)}</ul>
  );
}

// Consultation Block Renderer
function ConsultationBlock({ block }: { block: ContentBlock & { type: 'consultation' } }) {
  // Handle both new format (data.*) and old format (direct properties)
  const blockData = block as any;
  const title = blockData.data?.title || blockData.title || 'Book Your Free Consultation';
  const description = blockData.data?.description || blockData.description || 'Ready to start your study abroad journey? Schedule a personalized consultation with our expert advisors.';
  
  // Primary button
  const buttonText = blockData.data?.buttonText || blockData.buttonText || 'Book Free Consultation';
  const buttonUrl = blockData.data?.buttonUrl || blockData.buttonUrl || '/consultation';
  const buttonBgColor = blockData.data?.buttonBgColor || blockData.buttonBgColor || '#FFFFFF';
  const buttonTextColor = blockData.data?.buttonTextColor || blockData.buttonTextColor || '#1D50C9';
  const buttonBorderRadius = blockData.data?.buttonBorderRadius ?? blockData.buttonBorderRadius ?? 12;
  
  // Secondary button (optional) - support both naming conventions
  const button2Text = blockData.data?.secondButtonText || blockData.data?.button2Text || blockData.secondButtonText || blockData.button2Text;
  const button2Url = blockData.data?.secondButtonUrl || blockData.data?.button2Url || blockData.secondButtonUrl || blockData.button2Url;
  const button2BgColor = blockData.data?.secondButtonBgColor || blockData.data?.button2BgColor || blockData.secondButtonBgColor || blockData.button2BgColor || 'rgba(255, 255, 255, 0.2)';
  const button2TextColor = blockData.data?.secondButtonTextColor || blockData.data?.button2TextColor || blockData.secondButtonTextColor || blockData.button2TextColor || '#FFFFFF';
  const button2BorderRadius = blockData.data?.secondButtonBorderRadius ?? blockData.data?.button2BorderRadius ?? blockData.secondButtonBorderRadius ?? blockData.button2BorderRadius ?? 12;
  const button2BorderWidth = blockData.data?.secondButtonBorderWidth ?? blockData.data?.button2BorderWidth ?? blockData.secondButtonBorderWidth ?? blockData.button2BorderWidth ?? 2;
  const button2BorderColor = blockData.data?.secondButtonBorderColor || blockData.data?.button2BorderColor || blockData.secondButtonBorderColor || blockData.button2BorderColor || '#FFFFFF';

  return (
    <div className="my-8 w-full max-w-5xl mx-auto" data-block-type="consultation">
      <div className="rounded-[32px] bg-gradient-to-br from-[#0A5DFF] via-[#0D4FDE] to-[#0A3DB5] px-8 py-12 text-white text-center flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold leading-tight text-white mb-4" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>{title}</h2>
          <p className="max-w-3xl text-base md:text-lg text-white/90 mx-auto" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white/15 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(10,61,181,0.35)]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>20 Minutes Session</h3>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>Comprehensive consultation covering all aspects of your study abroad plans</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white/15 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(10,61,181,0.35)]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>Expert Advisors</h3>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>Connect with certified education consultants with years of experience</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white/15 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(10,61,181,0.35)]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>Personalized Plan</h3>
            <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>Get a customized roadmap tailored to your goals and requirements</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={buttonUrl}
            target={buttonUrl?.startsWith('http') ? '_blank' : undefined}
            rel={buttonUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center justify-center px-8 py-4 font-bold bg-white text-[#0A3DB5] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            style={{ 
              borderRadius: `${buttonBorderRadius}px`,
              fontFamily: 'Inter, Lato, sans-serif !important'
            }}
            data-testid="consultation-button-primary"
          >
            {buttonText}
          </a>
          {button2Text && (
            <a
              href={button2Url}
              target={button2Url?.startsWith('http') ? '_blank' : undefined}
              rel={button2Url?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center px-8 py-4 font-bold border border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{ 
                borderRadius: `${button2BorderRadius}px`,
                fontFamily: 'Inter, Lato, sans-serif !important'
              }}
              data-testid="consultation-button-secondary"
            >
              {button2Text}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// WhatsApp Channel Block Renderer
function WhatsAppChannelBlockRenderer({ block }: { block: ContentBlock & { type: 'whatsappChannel' } }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Handle both new format (data.*) and old format (direct properties)
  const blockData = block as any;
  const title = blockData.data?.title || blockData.title || 'Stay Updated with Our WhatsApp Channel';
  const description = blockData.data?.description || blockData.description || 'Get instant updates on visa news, and study abroad opportunities!';
  const channelUrl = blockData.data?.channelUrl || blockData.channelUrl || 'https://whatsapp.com/channel/0029VbAnwfe8qIzremjcqn2V';
  const buttonText = blockData.data?.buttonText || blockData.buttonText || 'Join Channel';
  const buttonBgColor = blockData.data?.buttonBgColor || blockData.buttonBgColor || '#25D366';
  const buttonTextColor = blockData.data?.buttonTextColor || blockData.buttonTextColor || '#ffffff';
  const buttonHoverColor = blockData.data?.buttonHoverColor || blockData.buttonHoverColor || '#1EA952';
  const buttonBorderRadius = blockData.data?.buttonBorderRadius ?? blockData.buttonBorderRadius ?? 8;

  return (
    <div className="my-8 w-full max-w-4xl mx-auto" data-block-type="whatsappChannel">
      <div className="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-600/20" style={{ color: 'white' }}>
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 sm:gap-4 text-center sm:text-left text-white w-full sm:w-auto">
            <div className="bg-white/20 p-3 sm:p-4 rounded-full backdrop-blur-sm flex-shrink-0 shadow-lg">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div className="text-white">
              <h3 className="font-bold text-lg sm:text-xl mb-1" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>{title}</h3>
              <p className="text-sm sm:text-base text-white/90" style={{ fontFamily: 'Inter, Lato, sans-serif !important' }}>{description}</p>
            </div>
          </div>

          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: isHovered ? buttonHoverColor : buttonBgColor,
              color: buttonTextColor,
              borderRadius: `${buttonBorderRadius}px`,
              fontFamily: 'Inter, Lato, sans-serif !important',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
