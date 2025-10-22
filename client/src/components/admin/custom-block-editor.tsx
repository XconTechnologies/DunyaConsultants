import { useState, useRef } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2, GripVertical, Code, Eye, EyeOff, ChevronDown, ChevronUp, FileCode, ArrowUp, ArrowDown, Check } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { blocksToHtmlPreview } from '@/lib/blocks-to-html-preview';

// Block type definitions
export type BlockType = 'heading' | 'paragraph' | 'code' | 'list' | 'table' | 'image' | 'html' | 'faq';

export interface BaseBlock {
  id: string;
  type: BlockType;
}

export interface HeadingBlock extends BaseBlock {
  type: 'heading';
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

export interface ParagraphBlock extends BaseBlock {
  type: 'paragraph';
  text: string;
}

export interface CodeBlock extends BaseBlock {
  type: 'code';
  code: string;
  language?: string;
}

export interface ListItem {
  id: string;
  text: string;
  children?: ListItem[];
}

export interface ListBlock extends BaseBlock {
  type: 'list';
  style: 'ul' | 'ol';
  items: ListItem[];
}

export interface TableBlock extends BaseBlock {
  type: 'table';
  rows: number;
  cols: number;
  data: string[][];
}

export interface ImageBlock extends BaseBlock {
  type: 'image';
  url: string;
  alt: string;
}

export interface HtmlBlock extends BaseBlock {
  type: 'html';
  html: string;
  showPreview: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqBlock extends BaseBlock {
  type: 'faq';
  items: FaqItem[];
}

export type Block = HeadingBlock | ParagraphBlock | CodeBlock | ListBlock | TableBlock | ImageBlock | HtmlBlock | FaqBlock;

interface CustomBlockEditorProps {
  blocks: Block[];
  onChange: (blocks: Block[]) => void;
  onHtmlView?: () => void;
}

// Generate unique IDs
const generateId = () => `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Sortable Block Wrapper
function SortableBlock({ 
  block, 
  children, 
  onDelete, 
  isSelected, 
  onSelect, 
  onMoveUp, 
  onMoveDown,
  isFirst,
  isLast
}: { 
  block: Block; 
  children: React.ReactNode; 
  onDelete: () => void;
  isSelected: boolean;
  onSelect: (selected: boolean) => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className={`group relative bg-white border rounded-lg p-4 mb-3 transition-colors ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-blue-300'}`}>
      <div className="flex items-start gap-2">
        <Checkbox 
          checked={isSelected}
          onCheckedChange={onSelect}
          className="mt-1"
        />
        <div className="flex flex-col gap-1">
          <button 
            onClick={onMoveUp}
            disabled={isFirst}
            className="text-gray-400 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
            title="Move up"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <button 
            onClick={onMoveDown}
            disabled={isLast}
            className="text-gray-400 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed"
            title="Move down"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1">
          {children}
        </div>
        <button onClick={onDelete} className="mt-1 text-gray-400 hover:text-red-600">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Heading Block Component
function HeadingBlockComponent({ block, onChange }: { block: HeadingBlock; onChange: (block: HeadingBlock) => void }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label className="text-sm font-medium text-gray-700">Heading Level:</Label>
        <Select value={block.level.toString()} onValueChange={(value) => onChange({ ...block, level: parseInt(value) as any })}>
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((level) => (
              <SelectItem key={level} value={level.toString()}>H{level}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Input
        value={block.text}
        onChange={(e) => onChange({ ...block, text: e.target.value })}
        placeholder="Enter heading text..."
        className={`text-${block.level === 1 ? '2xl' : block.level === 2 ? 'xl' : block.level === 3 ? 'lg' : 'base'} font-semibold`}
      />
    </div>
  );
}

// Paragraph Block Component
function ParagraphBlockComponent({ block, onChange }: { block: ParagraphBlock; onChange: (block: ParagraphBlock) => void }) {
  return (
    <Textarea
      value={block.text}
      onChange={(e) => onChange({ ...block, text: e.target.value })}
      placeholder="Enter paragraph text..."
      className="min-h-[100px]"
    />
  );
}

// Code Block Component
function CodeBlockComponent({ block, onChange }: { block: CodeBlock; onChange: (block: CodeBlock) => void }) {
  return (
    <div className="space-y-2">
      <Input
        value={block.language || ''}
        onChange={(e) => onChange({ ...block, language: e.target.value })}
        placeholder="Language (e.g., javascript, python)"
        className="w-48"
      />
      <Textarea
        value={block.code}
        onChange={(e) => onChange({ ...block, code: e.target.value })}
        placeholder="Enter code..."
        className="min-h-[150px] font-mono text-sm"
      />
    </div>
  );
}

// List Block Component
function ListBlockComponent({ block, onChange }: { block: ListBlock; onChange: (block: ListBlock) => void }) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const addItem = (parentItems: ListItem[], parentId?: string) => {
    const newItem: ListItem = { id: generateId(), text: '', children: [] };
    if (parentId) {
      const updateItems = (items: ListItem[]): ListItem[] => {
        return items.map(item => {
          if (item.id === parentId) {
            return { ...item, children: [...(item.children || []), newItem] };
          }
          if (item.children) {
            return { ...item, children: updateItems(item.children) };
          }
          return item;
        });
      };
      onChange({ ...block, items: updateItems(block.items) });
    } else {
      onChange({ ...block, items: [...block.items, newItem] });
    }
  };

  const updateItem = (id: string, text: string) => {
    const updateItems = (items: ListItem[]): ListItem[] => {
      return items.map(item => {
        if (item.id === id) {
          return { ...item, text };
        }
        if (item.children) {
          return { ...item, children: updateItems(item.children) };
        }
        return item;
      });
    };
    onChange({ ...block, items: updateItems(block.items) });
  };

  const removeItem = (id: string) => {
    const removeFromItems = (items: ListItem[]): ListItem[] => {
      return items.filter(item => item.id !== id).map(item => ({
        ...item,
        children: item.children ? removeFromItems(item.children) : []
      }));
    };
    onChange({ ...block, items: removeFromItems(block.items) });
  };

  const renderListItems = (items: ListItem[], depth = 0) => {
    return items.map((item) => (
      <div key={item.id} style={{ marginLeft: `${depth * 24}px` }} className="mb-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">{block.style === 'ol' ? '1.' : '•'}</span>
          <Input
            value={item.text}
            onChange={(e) => updateItem(item.id, e.target.value)}
            placeholder="List item..."
            className="flex-1"
          />
          <Button size="sm" variant="outline" onClick={() => addItem(block.items, item.id)}>
            <Plus className="w-3 h-3" />
          </Button>
          <Button size="sm" variant="outline" onClick={() => removeItem(item.id)}>
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
        {item.children && item.children.length > 0 && renderListItems(item.children, depth + 1)}
      </div>
    ));
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label className="text-sm font-medium text-gray-700">List Style:</Label>
        <Select value={block.style} onValueChange={(value: 'ul' | 'ol') => onChange({ ...block, style: value })}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ul">Unordered (•)</SelectItem>
            <SelectItem value="ol">Ordered (1.)</SelectItem>
          </SelectContent>
        </Select>
        <Button size="sm" onClick={() => addItem(block.items)} className="ml-auto">
          <Plus className="w-4 h-4 mr-1" /> Add Item
        </Button>
      </div>
      <div className="space-y-1">
        {renderListItems(block.items)}
      </div>
    </div>
  );
}

// Table Block Component
function TableBlockComponent({ block, onChange }: { block: TableBlock; onChange: (block: TableBlock) => void }) {
  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const newData = block.data.map((row, ri) =>
      row.map((cell, ci) => (ri === rowIndex && ci === colIndex ? value : cell))
    );
    onChange({ ...block, data: newData });
  };

  const addRow = () => {
    const newRow = new Array(block.cols).fill('');
    onChange({ ...block, rows: block.rows + 1, data: [...block.data, newRow] });
  };

  const addColumn = () => {
    const newData = block.data.map(row => [...row, '']);
    onChange({ ...block, cols: block.cols + 1, data: newData });
  };

  const removeRow = (index: number) => {
    if (block.rows > 1) {
      const newData = block.data.filter((_, i) => i !== index);
      onChange({ ...block, rows: block.rows - 1, data: newData });
    }
  };

  const removeColumn = (index: number) => {
    if (block.cols > 1) {
      const newData = block.data.map(row => row.filter((_, i) => i !== index));
      onChange({ ...block, cols: block.cols - 1, data: newData });
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        <Button size="sm" onClick={addRow}>Add Row</Button>
        <Button size="sm" onClick={addColumn}>Add Column</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {block.data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex} className="border border-gray-300 p-1">
                    <Input
                      value={cell}
                      onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                      className="border-0 h-8"
                    />
                  </td>
                ))}
                <td className="p-1">
                  <Button size="sm" variant="ghost" onClick={() => removeRow(rowIndex)}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              {block.data[0]?.map((_, colIndex) => (
                <td key={colIndex} className="p-1 text-center">
                  <Button size="sm" variant="ghost" onClick={() => removeColumn(colIndex)}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Image Block Component
function ImageBlockComponent({ block, onChange }: { block: ImageBlock; onChange: (block: ImageBlock) => void }) {
  return (
    <div className="space-y-2">
      <Input
        value={block.url}
        onChange={(e) => onChange({ ...block, url: e.target.value })}
        placeholder="Image URL..."
      />
      <Input
        value={block.alt}
        onChange={(e) => onChange({ ...block, alt: e.target.value })}
        placeholder="Alt text..."
      />
      {block.url && (
        <img src={block.url} alt={block.alt} className="max-w-full h-auto rounded border" />
      )}
    </div>
  );
}

// HTML Block Component
function HtmlBlockComponent({ block, onChange }: { block: HtmlBlock; onChange: (block: HtmlBlock) => void }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => onChange({ ...block, showPreview: !block.showPreview })}
        >
          {block.showPreview ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
          {block.showPreview ? 'Hide Preview' : 'Show Preview'}
        </Button>
      </div>
      <Textarea
        value={block.html}
        onChange={(e) => onChange({ ...block, html: e.target.value })}
        placeholder="Enter HTML code..."
        className="min-h-[150px] font-mono text-sm"
      />
      {block.showPreview && (
        <div className="border border-gray-300 rounded p-4 bg-gray-50">
          <div dangerouslySetInnerHTML={{ __html: block.html }} />
        </div>
      )}
    </div>
  );
}

// FAQ Block Component
function FaqBlockComponent({ block, onChange }: { block: FaqBlock; onChange: (block: FaqBlock) => void }) {
  const addFaqItem = () => {
    const newItem: FaqItem = { id: generateId(), question: '', answer: '' };
    onChange({ ...block, items: [...block.items, newItem] });
  };

  const updateFaqItem = (id: string, field: 'question' | 'answer', value: string) => {
    const newItems = block.items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onChange({ ...block, items: newItems });
  };

  const removeFaqItem = (id: string) => {
    onChange({ ...block, items: block.items.filter(item => item.id !== id) });
  };

  return (
    <div className="space-y-3">
      <Button size="sm" onClick={addFaqItem}>
        <Plus className="w-4 h-4 mr-1" /> Add FAQ Item
      </Button>
      {block.items.map((item, index) => (
        <div key={item.id} className="border border-gray-200 rounded p-3 space-y-2">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Question {index + 1}</Label>
            <Button size="sm" variant="ghost" onClick={() => removeFaqItem(item.id)}>
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <Input
            value={item.question}
            onChange={(e) => updateFaqItem(item.id, 'question', e.target.value)}
            placeholder="Enter question..."
          />
          <Textarea
            value={item.answer}
            onChange={(e) => updateFaqItem(item.id, 'answer', e.target.value)}
            placeholder="Enter answer..."
            className="min-h-[80px]"
          />
        </div>
      ))}
    </div>
  );
}

// Main Block Renderer
function BlockRenderer({ block, onChange }: { block: Block; onChange: (block: Block) => void }) {
  switch (block.type) {
    case 'heading':
      return <HeadingBlockComponent block={block} onChange={onChange} />;
    case 'paragraph':
      return <ParagraphBlockComponent block={block} onChange={onChange} />;
    case 'code':
      return <CodeBlockComponent block={block} onChange={onChange} />;
    case 'list':
      return <ListBlockComponent block={block} onChange={onChange} />;
    case 'table':
      return <TableBlockComponent block={block} onChange={onChange} />;
    case 'image':
      return <ImageBlockComponent block={block} onChange={onChange} />;
    case 'html':
      return <HtmlBlockComponent block={block} onChange={onChange} />;
    case 'faq':
      return <FaqBlockComponent block={block} onChange={onChange} />;
    default:
      return null;
  }
}

// Main Custom Block Editor Component
export default function CustomBlockEditor({ blocks, onChange, onHtmlView }: CustomBlockEditorProps) {
  const [showBlockMenu, setShowBlockMenu] = useState(false);
  const [showHtmlView, setShowHtmlView] = useState(false);
  const [selectedBlocks, setSelectedBlocks] = useState<Set<string>>(new Set());
  const menuRef = useRef<HTMLDivElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = blocks.findIndex((b) => b.id === active.id);
      const newIndex = blocks.findIndex((b) => b.id === over.id);
      onChange(arrayMove(blocks, oldIndex, newIndex));
    }
  };

  const addBlock = (type: BlockType) => {
    const newBlock: Block = (() => {
      const baseId = generateId();
      switch (type) {
        case 'heading':
          return { id: baseId, type, level: 2, text: '' } as HeadingBlock;
        case 'paragraph':
          return { id: baseId, type, text: '' } as ParagraphBlock;
        case 'code':
          return { id: baseId, type, code: '', language: '' } as CodeBlock;
        case 'list':
          return { id: baseId, type, style: 'ul', items: [{ id: generateId(), text: '', children: [] }] } as ListBlock;
        case 'table':
          return { id: baseId, type, rows: 2, cols: 2, data: [['', ''], ['', '']] } as TableBlock;
        case 'image':
          return { id: baseId, type, url: '', alt: '' } as ImageBlock;
        case 'html':
          return { id: baseId, type, html: '', showPreview: false } as HtmlBlock;
        case 'faq':
          return { id: baseId, type, items: [{ id: generateId(), question: '', answer: '' }] } as FaqBlock;
      }
    })();
    onChange([...blocks, newBlock]);
    setShowBlockMenu(false);
  };

  const updateBlock = (id: string, updatedBlock: Block) => {
    onChange(blocks.map((b) => (b.id === id ? updatedBlock : b)));
  };

  const deleteBlock = (id: string) => {
    onChange(blocks.filter((b) => b.id !== id));
    // Remove from selection if it was selected
    const newSelection = new Set(selectedBlocks);
    newSelection.delete(id);
    setSelectedBlocks(newSelection);
  };

  const toggleSelection = (id: string, selected: boolean) => {
    const newSelection = new Set(selectedBlocks);
    if (selected) {
      newSelection.add(id);
    } else {
      newSelection.delete(id);
    }
    setSelectedBlocks(newSelection);
  };

  const moveBlockUp = (id: string) => {
    const index = blocks.findIndex((b) => b.id === id);
    if (index > 0) {
      onChange(arrayMove(blocks, index, index - 1));
    }
  };

  const moveBlockDown = (id: string) => {
    const index = blocks.findIndex((b) => b.id === id);
    if (index < blocks.length - 1) {
      onChange(arrayMove(blocks, index, index + 1));
    }
  };

  const moveSelectedBlocksUp = () => {
    if (selectedBlocks.size === 0) return;
    
    let newBlocks = [...blocks];
    const selectedIds = Array.from(selectedBlocks);
    
    // Sort by index to move from top to bottom
    const sortedIds = selectedIds.sort((a, b) => {
      const aIndex = newBlocks.findIndex(block => block.id === a);
      const bIndex = newBlocks.findIndex(block => block.id === b);
      return aIndex - bIndex;
    });
    
    // Move each selected block up
    sortedIds.forEach(id => {
      const index = newBlocks.findIndex(b => b.id === id);
      if (index > 0) {
        newBlocks = arrayMove(newBlocks, index, index - 1);
      }
    });
    
    onChange(newBlocks);
  };

  const moveSelectedBlocksDown = () => {
    if (selectedBlocks.size === 0) return;
    
    let newBlocks = [...blocks];
    const selectedIds = Array.from(selectedBlocks);
    
    // Sort by index in reverse to move from bottom to top
    const sortedIds = selectedIds.sort((a, b) => {
      const aIndex = newBlocks.findIndex(block => block.id === a);
      const bIndex = newBlocks.findIndex(block => block.id === b);
      return bIndex - aIndex;
    });
    
    // Move each selected block down
    sortedIds.forEach(id => {
      const index = newBlocks.findIndex(b => b.id === id);
      if (index < newBlocks.length - 1) {
        newBlocks = arrayMove(newBlocks, index, index + 1);
      }
    });
    
    onChange(newBlocks);
  };

  const deleteSelectedBlocks = () => {
    if (selectedBlocks.size === 0) return;
    onChange(blocks.filter(b => !selectedBlocks.has(b.id)));
    setSelectedBlocks(new Set());
  };

  const selectAll = () => {
    setSelectedBlocks(new Set(blocks.map(b => b.id)));
  };

  const deselectAll = () => {
    setSelectedBlocks(new Set());
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-2 gap-2">
        <div className="flex items-center gap-2">
          {selectedBlocks.size > 0 && (
            <>
              <span className="text-sm text-gray-600">{selectedBlocks.size} selected</span>
              <Button variant="outline" size="sm" onClick={moveSelectedBlocksUp} disabled={selectedBlocks.size === 0}>
                <ArrowUp className="w-4 h-4 mr-1" /> Move Up
              </Button>
              <Button variant="outline" size="sm" onClick={moveSelectedBlocksDown} disabled={selectedBlocks.size === 0}>
                <ArrowDown className="w-4 h-4 mr-1" /> Move Down
              </Button>
              <Button variant="outline" size="sm" onClick={deleteSelectedBlocks} className="text-red-600 hover:text-red-700">
                <Trash2 className="w-4 h-4 mr-1" /> Delete
              </Button>
              <Button variant="ghost" size="sm" onClick={deselectAll}>
                Clear
              </Button>
            </>
          )}
          {selectedBlocks.size === 0 && blocks.length > 0 && (
            <Button variant="ghost" size="sm" onClick={selectAll}>
              Select All
            </Button>
          )}
        </div>
        <Button variant="outline" size="sm" onClick={() => setShowHtmlView(!showHtmlView)}>
          {showHtmlView ? <Eye className="w-4 h-4 mr-2" /> : <FileCode className="w-4 h-4 mr-2" />}
          {showHtmlView ? 'Show Blocks' : 'View HTML'}
        </Button>
      </div>

      {showHtmlView ? (
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
          <pre className="overflow-auto text-sm font-mono whitespace-pre-wrap">
            <code>{blocksToHtmlPreview(blocks)}</code>
          </pre>
        </div>
      ) : (
        <>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={blocks.map((b) => b.id)} strategy={verticalListSortingStrategy}>
              {blocks.map((block, index) => (
                <SortableBlock 
                  key={block.id} 
                  block={block} 
                  onDelete={() => deleteBlock(block.id)}
                  isSelected={selectedBlocks.has(block.id)}
                  onSelect={(selected) => toggleSelection(block.id, selected)}
                  onMoveUp={() => moveBlockUp(block.id)}
                  onMoveDown={() => moveBlockDown(block.id)}
                  isFirst={index === 0}
                  isLast={index === blocks.length - 1}
                >
                  <BlockRenderer block={block} onChange={(updated) => updateBlock(block.id, updated)} />
                </SortableBlock>
              ))}
            </SortableContext>
          </DndContext>

          {blocks.length === 0 && (
            <div className="text-center py-12 text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
              No blocks yet. Click "Add Block" to get started!
            </div>
          )}
        </>
      )}

      <div className="relative" ref={menuRef}>
        <Button onClick={() => setShowBlockMenu(!showBlockMenu)} className="w-full">
          <Plus className="w-4 h-4 mr-2" /> Add Block
        </Button>
        
        {showBlockMenu && (
          <div className="absolute bottom-full mb-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2 grid grid-cols-2 gap-2 z-10">
            <Button variant="outline" onClick={() => addBlock('heading')} className="justify-start">Heading</Button>
            <Button variant="outline" onClick={() => addBlock('paragraph')} className="justify-start">Paragraph</Button>
            <Button variant="outline" onClick={() => addBlock('code')} className="justify-start">Code</Button>
            <Button variant="outline" onClick={() => addBlock('list')} className="justify-start">List</Button>
            <Button variant="outline" onClick={() => addBlock('table')} className="justify-start">Table</Button>
            <Button variant="outline" onClick={() => addBlock('image')} className="justify-start">Image</Button>
            <Button variant="outline" onClick={() => addBlock('html')} className="justify-start">HTML</Button>
            <Button variant="outline" onClick={() => addBlock('faq')} className="justify-start">FAQ</Button>
          </div>
        )}
      </div>
    </div>
  );
}
