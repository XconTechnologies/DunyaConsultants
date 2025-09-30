import { useState } from "react";
import { Plus, Trash2, GripVertical, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { ContentBlock } from "@shared/schema";

interface ContentBlocksProps {
  blocks: ContentBlock[];
  onChange: (blocks: ContentBlock[]) => void;
  content?: string; // Main content HTML to determine insertion points
}

export default function ContentBlocks({ blocks, onChange, content = '' }: ContentBlocksProps) {
  const [expandedBlockId, setExpandedBlockId] = useState<string | null>(null);

  const addBlock = (type: ContentBlock['type']) => {
    const newBlock: ContentBlock = {
      id: `block-${Date.now()}`,
      type,
      position: 0, // Default to position 0 (start of content)
      data: getDefaultDataForType(type),
    } as ContentBlock;

    onChange([...blocks, newBlock]);
    setExpandedBlockId(newBlock.id);
  };

  const updateBlock = (blockId: string, data: any) => {
    const updatedBlocks = blocks.map(block =>
      block.id === blockId ? { ...block, data: { ...block.data, ...data } } : block
    );
    onChange(updatedBlocks);
  };

  const deleteBlock = (blockId: string) => {
    onChange(blocks.filter(block => block.id !== blockId));
  };

  const moveBlock = (blockId: string, direction: 'up' | 'down') => {
    const index = blocks.findIndex(b => b.id === blockId);
    if (index === -1) return;
    
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= blocks.length) return;

    const newBlocks = [...blocks];
    [newBlocks[index], newBlocks[newIndex]] = [newBlocks[newIndex], newBlocks[index]];
    
    onChange(newBlocks);
  };

  const updateBlockPosition = (blockId: string, position: number) => {
    const updatedBlocks = blocks.map(block =>
      block.id === blockId ? { ...block, position } : block
    );
    onChange(updatedBlocks);
  };

  // Extract insertion points from HTML content
  const getInsertionPoints = () => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    const insertionPoints: { value: number; label: string }[] = [
      { value: 0, label: 'At the beginning' }
    ];
    
    const elements = tempDiv.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, table');
    elements.forEach((el, index) => {
      const tagName = el.tagName.toLowerCase();
      const text = el.textContent?.substring(0, 40) || '';
      const label = `After ${tagName.toUpperCase()}${index + 1}: "${text}${text.length > 40 ? '...' : ''}"`;
      insertionPoints.push({ value: index + 1, label });
    });
    
    insertionPoints.push({ value: 999, label: 'At the end' });
    
    return insertionPoints;
  };

  const insertionPoints = getInsertionPoints();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Content Blocks</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Block
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem onClick={() => addBlock('faq')}>
              FAQ Block
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addBlock('table')}>
              Table Block
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addBlock('html')}>
              HTML Block
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addBlock('button')}>
              Button Block
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addBlock('image')}>
              Image Block
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addBlock('youtube')}>
              YouTube Embed
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addBlock('spacer')}>
              Spacer Block
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addBlock('divider')}>
              Divider Block
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addBlock('schema')}>
              Schema Block (SEO)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {blocks.length === 0 && (
        <div className="text-center py-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
          No content blocks added yet. Click "Add Block" to get started.
        </div>
      )}

      <div className="space-y-3">
        {blocks.map((block, index) => (
          <Card key={block.id} className="border-l-4 border-l-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <GripVertical className="w-4 h-4 text-gray-400" />
                  <span className="font-medium capitalize">{block.type} Block</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => moveBlock(block.id, 'up')}
                    disabled={index === 0}
                  >
                    ↑
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => moveBlock(block.id, 'down')}
                    disabled={index === blocks.length - 1}
                  >
                    ↓
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedBlockId(expandedBlockId === block.id ? null : block.id)}
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedBlockId === block.id ? 'rotate-180' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteBlock(block.id)}
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>

              {expandedBlockId === block.id && (
                <div className="mt-4 space-y-4">
                  {/* Position Selector */}
                  <div className="pb-4 border-b">
                    <Label className="text-sm font-medium mb-2 block">Block Position</Label>
                    <Select
                      value={block.position?.toString() || '999'}
                      onValueChange={(value) => updateBlockPosition(block.id, parseInt(value))}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select position..." />
                      </SelectTrigger>
                      <SelectContent>
                        {insertionPoints.map((point) => (
                          <SelectItem key={point.value} value={point.value.toString()}>
                            {point.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500 mt-1">
                      Choose where this block should appear in your content
                    </p>
                  </div>
                  
                  {renderBlockEditor(block, updateBlock)}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function getDefaultDataForType(type: ContentBlock['type']): any {
  switch (type) {
    case 'faq':
      return { 
        questions: [
          { 
            question: 'Enter your question...', 
            answer: 'Enter your answer...', 
            questionBgColor: '#f3f4f6', 
            answerBgColor: '#ffffff' 
          }
        ]
      };
    case 'table':
      return { rows: 3, cols: 3, headers: [], cells: [], hasHeader: true };
    case 'html':
      return { html: '<div>Enter your HTML here...</div>' };
    case 'button':
      return { text: 'Click Me', url: '#', bgColor: '#1D50C9', textColor: '#ffffff', alignment: 'center' as const, borderWidth: 0, borderRadius: 8 };
    case 'image':
      return { url: '', alt: '', alignment: 'center' as const, width: '100%' };
    case 'youtube':
      return { url: '', videoId: '' };
    case 'spacer':
      return { height: 40 };
    case 'divider':
      return { thickness: 1, width: '100%' };
    case 'schema':
      return { schemaJson: '{}' };
    default:
      return {};
  }
}

function renderBlockEditor(block: ContentBlock, updateBlock: (blockId: string, data: any) => void) {
  switch (block.type) {
    case 'faq':
      return <FAQBlockEditor block={block} updateBlock={updateBlock} />;
    case 'table':
      return <TableBlockEditor block={block} updateBlock={updateBlock} />;
    case 'html':
      return <HTMLBlockEditor block={block} updateBlock={updateBlock} />;
    case 'button':
      return <ButtonBlockEditor block={block} updateBlock={updateBlock} />;
    case 'image':
      return <ImageBlockEditor block={block} updateBlock={updateBlock} />;
    case 'youtube':
      return <YouTubeBlockEditor block={block} updateBlock={updateBlock} />;
    case 'spacer':
      return <SpacerBlockEditor block={block} updateBlock={updateBlock} />;
    case 'divider':
      return <DividerBlockEditor block={block} updateBlock={updateBlock} />;
    case 'schema':
      return <SchemaBlockEditor block={block} updateBlock={updateBlock} />;
    default:
      return null;
  }
}

// FAQ Block Editor
function FAQBlockEditor({ block, updateBlock }: any) {
  // Migrate old format to new format if needed and get current questions
  const getQuestions = () => {
    if (block.data.questions && Array.isArray(block.data.questions) && block.data.questions.length > 0) {
      return block.data.questions;
    }
    // Fallback for old format or new blocks
    return [
      {
        question: block.data.question || 'Enter your question...',
        answer: block.data.answer || 'Enter your answer...',
        questionBgColor: block.data.questionBgColor || '#f3f4f6',
        answerBgColor: block.data.answerBgColor || '#ffffff'
      }
    ];
  };

  const questions = getQuestions();

  const addQuestion = () => {
    const currentQuestions = getQuestions();
    const newQuestions = [...currentQuestions, {
      question: 'Enter your question...',
      answer: 'Enter your answer...',
      questionBgColor: '#f3f4f6',
      answerBgColor: '#ffffff'
    }];
    updateBlock(block.id, { questions: newQuestions });
  };

  const removeQuestion = (index: number) => {
    const currentQuestions = getQuestions();
    if (currentQuestions.length === 1) return; // Keep at least one question
    const newQuestions = currentQuestions.filter((_: any, i: number) => i !== index);
    updateBlock(block.id, { questions: newQuestions });
  };

  const updateQuestion = (index: number, field: string, value: string) => {
    const currentQuestions = getQuestions();
    const newQuestions = currentQuestions.map((q: any, i: number) => 
      i === index ? { ...q, [field]: value } : q
    );
    updateBlock(block.id, { questions: newQuestions });
  };

  return (
    <div className="space-y-4">
      {questions.map((q: any, index: number) => (
        <div key={index} className="border rounded-lg p-4 space-y-3 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-700">Question {index + 1}</span>
            {questions.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeQuestion(index)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            )}
          </div>
          
          <div>
            <Label>Question</Label>
            <Input
              value={q.question}
              onChange={(e) => updateQuestion(index, 'question', e.target.value)}
              placeholder="Enter question..."
            />
          </div>
          
          <div>
            <Label>Answer</Label>
            <Textarea
              value={q.answer}
              onChange={(e) => updateQuestion(index, 'answer', e.target.value)}
              placeholder="Enter answer..."
              rows={4}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Question Background Color</Label>
              <Input
                type="color"
                value={q.questionBgColor || '#f3f4f6'}
                onChange={(e) => updateQuestion(index, 'questionBgColor', e.target.value)}
              />
            </div>
            <div>
              <Label>Answer Background Color</Label>
              <Input
                type="color"
                value={q.answerBgColor || '#ffffff'}
                onChange={(e) => updateQuestion(index, 'answerBgColor', e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
      
      <Button
        variant="outline"
        size="sm"
        onClick={addQuestion}
        className="w-full"
        data-testid="button-add-question"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Question
      </Button>
    </div>
  );
}

// Table Block Editor
function TableBlockEditor({ block, updateBlock }: any) {
  const [rows, setRows] = useState(block.data.rows || 3);
  const [cols, setCols] = useState(block.data.cols || 3);
  const hasInitialized = block.data.cells && block.data.cells.length > 0;

  const initializeTable = () => {
    const headers = Array(cols).fill('').map((_, i) => `Header ${i + 1}`);
    const cells = Array(rows).fill(null).map(() => Array(cols).fill(''));
    updateBlock(block.id, { rows, cols, headers, cells, hasHeader: true });
  };

  const updateHeader = (colIndex: number, value: string) => {
    const newHeaders = [...(block.data.headers || [])];
    newHeaders[colIndex] = value;
    updateBlock(block.id, { headers: newHeaders });
  };

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const newCells = [...(block.data.cells || [])];
    if (!newCells[rowIndex]) {
      newCells[rowIndex] = [];
    }
    newCells[rowIndex][colIndex] = value;
    updateBlock(block.id, { cells: newCells });
  };

  return (
    <div className="space-y-4">
      {!hasInitialized ? (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Rows</Label>
              <Input
                type="number"
                min="1"
                value={rows}
                onChange={(e) => setRows(parseInt(e.target.value) || 1)}
              />
            </div>
            <div>
              <Label>Columns</Label>
              <Input
                type="number"
                min="1"
                value={cols}
                onChange={(e) => setCols(parseInt(e.target.value) || 1)}
              />
            </div>
          </div>
          <Button onClick={initializeTable} size="sm">
            Initialize Table
          </Button>
        </>
      ) : (
        <>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-semibold">Table Content ({block.data.rows} rows × {block.data.cols} columns)</Label>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => updateBlock(block.id, { cells: [], headers: [], rows: 3, cols: 3 })}
              >
                Reset Table
              </Button>
            </div>
            
            {/* Table Headers */}
            {block.data.hasHeader && (
              <div className="space-y-2">
                <Label className="text-xs text-gray-600">Headers</Label>
                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${block.data.cols}, 1fr)` }}>
                  {block.data.headers?.map((header: string, colIndex: number) => (
                    <Input
                      key={`header-${colIndex}`}
                      value={header}
                      onChange={(e) => updateHeader(colIndex, e.target.value)}
                      placeholder={`Header ${colIndex + 1}`}
                      className="text-sm font-semibold"
                    />
                  ))}
                </div>
              </div>
            )}
            
            {/* Table Cells */}
            <div className="space-y-2">
              <Label className="text-xs text-gray-600">Table Data</Label>
              <div className="space-y-2">
                {block.data.cells?.map((row: string[], rowIndex: number) => (
                  <div 
                    key={`row-${rowIndex}`} 
                    className="grid gap-2" 
                    style={{ gridTemplateColumns: `repeat(${block.data.cols}, 1fr)` }}
                  >
                    {row.map((cell: string, colIndex: number) => (
                      <Input
                        key={`cell-${rowIndex}-${colIndex}`}
                        value={cell}
                        onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                        placeholder={`R${rowIndex + 1}C${colIndex + 1}`}
                        className="text-sm"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// HTML Block Editor
function HTMLBlockEditor({ block, updateBlock }: any) {
  return (
    <div>
      <Label>HTML/CSS/JavaScript</Label>
      <Textarea
        value={block.data.html}
        onChange={(e) => updateBlock(block.id, { html: e.target.value })}
        placeholder="Enter HTML, CSS, or JavaScript..."
        rows={8}
        className="font-mono text-sm"
      />
    </div>
  );
}

// Button Block Editor
function ButtonBlockEditor({ block, updateBlock }: any) {
  return (
    <div className="space-y-3">
      <div>
        <Label>Button Text</Label>
        <Input
          value={block.data.text}
          onChange={(e) => updateBlock(block.id, { text: e.target.value })}
        />
      </div>
      <div>
        <Label>URL</Label>
        <Input
          value={block.data.url}
          onChange={(e) => updateBlock(block.id, { url: e.target.value })}
          placeholder="https://..."
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Background Color</Label>
          <Input
            type="color"
            value={block.data.bgColor}
            onChange={(e) => updateBlock(block.id, { bgColor: e.target.value })}
          />
        </div>
        <div>
          <Label>Text Color</Label>
          <Input
            type="color"
            value={block.data.textColor}
            onChange={(e) => updateBlock(block.id, { textColor: e.target.value })}
          />
        </div>
      </div>
      <div>
        <Label>Alignment</Label>
        <Select
          value={block.data.alignment}
          onValueChange={(value) => updateBlock(block.id, { alignment: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
            <SelectItem value="stretch">Stretch</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label>Border Width (px)</Label>
          <Input
            type="number"
            min="0"
            value={block.data.borderWidth}
            onChange={(e) => updateBlock(block.id, { borderWidth: parseInt(e.target.value) || 0 })}
          />
        </div>
        <div>
          <Label>Border Radius (px)</Label>
          <Input
            type="number"
            min="0"
            value={block.data.borderRadius}
            onChange={(e) => updateBlock(block.id, { borderRadius: parseInt(e.target.value) || 0 })}
          />
        </div>
      </div>
    </div>
  );
}

// Image Block Editor
function ImageBlockEditor({ block, updateBlock }: any) {
  return (
    <div className="space-y-3">
      <div>
        <Label>Image URL</Label>
        <Input
          value={block.data.url}
          onChange={(e) => updateBlock(block.id, { url: e.target.value })}
          placeholder="https://..."
        />
      </div>
      <div>
        <Label>Alt Text</Label>
        <Input
          value={block.data.alt}
          onChange={(e) => updateBlock(block.id, { alt: e.target.value })}
        />
      </div>
      <div>
        <Label>Alignment</Label>
        <Select
          value={block.data.alignment}
          onValueChange={(value) => updateBlock(block.id, { alignment: value })}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Left</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="right">Right</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Width</Label>
        <Input
          value={block.data.width}
          onChange={(e) => updateBlock(block.id, { width: e.target.value })}
          placeholder="e.g. 100%, 500px, 50vw"
        />
      </div>
    </div>
  );
}

// YouTube Block Editor
function YouTubeBlockEditor({ block, updateBlock }: any) {
  const extractVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  };

  return (
    <div className="space-y-3">
      <div>
        <Label>YouTube URL</Label>
        <Input
          value={block.data.url}
          onChange={(e) => {
            const url = e.target.value;
            const videoId = extractVideoId(url);
            updateBlock(block.id, { url, videoId });
          }}
          placeholder="https://www.youtube.com/watch?v=..."
        />
      </div>
      {block.data.videoId && (
        <div className="text-sm text-gray-600">
          Video ID: {block.data.videoId}
        </div>
      )}
    </div>
  );
}

// Spacer Block Editor
function SpacerBlockEditor({ block, updateBlock }: any) {
  return (
    <div>
      <Label>Height (px)</Label>
      <Input
        type="number"
        min="0"
        value={block.data.height}
        onChange={(e) => updateBlock(block.id, { height: parseInt(e.target.value) || 0 })}
      />
    </div>
  );
}

// Divider Block Editor
function DividerBlockEditor({ block, updateBlock }: any) {
  return (
    <div className="space-y-3">
      <div>
        <Label>Thickness (px)</Label>
        <Input
          type="number"
          min="1"
          value={block.data.thickness}
          onChange={(e) => updateBlock(block.id, { thickness: parseInt(e.target.value) || 1 })}
        />
      </div>
      <div>
        <Label>Width</Label>
        <Input
          value={block.data.width}
          onChange={(e) => updateBlock(block.id, { width: e.target.value })}
          placeholder="e.g. 100%, 500px, 80%"
        />
      </div>
    </div>
  );
}

// Schema Block Editor
function SchemaBlockEditor({ block, updateBlock }: any) {
  return (
    <div>
      <Label>Schema JSON (for search engines only)</Label>
      <Textarea
        value={block.data.schemaJson}
        onChange={(e) => updateBlock(block.id, { schemaJson: e.target.value })}
        placeholder='{"@context": "https://schema.org", "@type": "FAQPage", ...}'
        rows={10}
        className="font-mono text-sm"
      />
      <p className="text-xs text-gray-500 mt-2">
        This block is only visible to search engine crawlers, not to users.
      </p>
    </div>
  );
}
