import { useState, useRef } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Trash2, GripVertical, Code, Eye, EyeOff, ChevronDown, ChevronUp, FileCode, ArrowUp, ArrowDown, Check, Heading, Type, List, Table, Image as ImageIcon, FileText, HelpCircle, Calendar, MessageCircle } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { blocksToHtmlPreview } from '@/lib/blocks-to-html-preview';

// Block type definitions
export type BlockType = 'heading' | 'paragraph' | 'code' | 'list' | 'table' | 'image' | 'html' | 'faq' | 'consultation' | 'whatsappChannel';

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

export interface ConsultationBlock extends BaseBlock {
  type: 'consultation';
  title: string;
  description: string;
}

export interface WhatsAppChannelBlock extends BaseBlock {
  type: 'whatsappChannel';
  title: string;
  description: string;
  channelUrl: string;
}

export type Block = HeadingBlock | ParagraphBlock | CodeBlock | ListBlock | TableBlock | ImageBlock | HtmlBlock | FaqBlock | ConsultationBlock | WhatsAppChannelBlock;

interface CustomBlockEditorProps {
  blocks: Block[];
  onChange: (blocks: Block[]) => void;
  onHtmlView?: () => void;
}

// Generate unique IDs
const generateId = () => `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Get block type icon
const getBlockIcon = (type: BlockType) => {
  switch (type) {
    case 'heading': return <Heading className="w-4 h-4" />;
    case 'paragraph': return <Type className="w-4 h-4" />;
    case 'code': return <Code className="w-4 h-4" />;
    case 'list': return <List className="w-4 h-4" />;
    case 'table': return <Table className="w-4 h-4" />;
    case 'image': return <ImageIcon className="w-4 h-4" />;
    case 'html': return <FileCode className="w-4 h-4" />;
    case 'faq': return <HelpCircle className="w-4 h-4" />;
    case 'consultation': return <Calendar className="w-4 h-4" />;
    case 'whatsappChannel': return <MessageCircle className="w-4 h-4" />;
  }
};

// Get block type name
const getBlockTypeName = (type: BlockType) => {
  switch (type) {
    case 'heading': return 'Heading';
    case 'paragraph': return 'Paragraph';
    case 'code': return 'Code';
    case 'list': return 'List';
    case 'table': return 'Table';
    case 'image': return 'Image';
    case 'html': return 'HTML';
    case 'faq': return 'FAQ';
    case 'consultation': return 'Consultation';
    case 'whatsappChannel': return 'WhatsApp Channel';
  }
};

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
    <div 
      ref={setNodeRef} 
      style={style} 
      className={`group relative bg-white rounded-xl overflow-hidden transition-all duration-200 mb-4 ${
        isSelected 
          ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-100' 
          : 'border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200'
      }`}
    >
      {/* Block Header */}
      <div className={`flex items-center justify-between px-4 py-2.5 border-b transition-colors ${
        isSelected ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'
      }`}>
        <div className="flex items-center gap-3">
          {/* Checkbox */}
          <Checkbox 
            checked={isSelected}
            onCheckedChange={onSelect}
            className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
          />
          
          {/* Block Type Badge */}
          <Badge variant="outline" className="flex items-center gap-1.5 font-medium text-gray-700 border-gray-300">
            {getBlockIcon(block.type)}
            <span>{getBlockTypeName(block.type)}</span>
          </Badge>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-1">
          {/* Move Buttons */}
          <button 
            onClick={onMoveUp}
            disabled={isFirst}
            className="p-1.5 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors"
            title="Move up"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <button 
            onClick={onMoveDown}
            disabled={isLast}
            className="p-1.5 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent transition-colors"
            title="Move down"
          >
            <ArrowDown className="w-4 h-4" />
          </button>
          
          {/* Drag Handle */}
          <button 
            {...attributes} 
            {...listeners} 
            className="p-1.5 rounded-md cursor-grab active:cursor-grabbing text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors" 
            title="Drag to reorder"
          >
            <GripVertical className="w-4 h-4" />
          </button>
          
          {/* Divider */}
          <div className="w-px h-6 bg-gray-300 mx-1" />
          
          {/* Delete Button */}
          <button 
            onClick={onDelete} 
            className="p-1.5 rounded-md text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
            title="Delete block"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Block Content */}
      <div className="p-4">
        {children}
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
  
  // Ensure items is always an array
  const items = block.items || [];

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
      onChange({ ...block, items: updateItems(items) });
    } else {
      onChange({ ...block, items: [...items, newItem] });
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
    onChange({ ...block, items: updateItems(items) });
  };

  const removeItem = (id: string) => {
    const removeFromItems = (items: ListItem[]): ListItem[] => {
      return items.filter(item => item.id !== id).map(item => ({
        ...item,
        children: item.children ? removeFromItems(item.children) : []
      }));
    };
    onChange({ ...block, items: removeFromItems(items) });
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
          <Button size="sm" variant="outline" onClick={() => addItem(items, item.id)}>
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
        <Button size="sm" onClick={() => addItem(items)} className="ml-auto">
          <Plus className="w-4 h-4 mr-1" /> Add Item
        </Button>
      </div>
      <div className="space-y-1">
        {renderListItems(items)}
      </div>
    </div>
  );
}

// Table Block Component
function TableBlockComponent({ block, onChange }: { block: TableBlock; onChange: (block: TableBlock) => void }) {
  // Ensure data is always an array
  const data = block.data || [[''],[''],['']]
  
  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const newData = data.map((row, ri) =>
      row.map((cell, ci) => (ri === rowIndex && ci === colIndex ? value : cell))
    );
    onChange({ ...block, data: newData });
  };

  const addRow = () => {
    const newRow = new Array(block.cols || 3).fill('');
    onChange({ ...block, rows: (block.rows || 3) + 1, data: [...data, newRow] });
  };

  const addColumn = () => {
    const newData = data.map(row => [...row, '']);
    onChange({ ...block, cols: (block.cols || 3) + 1, data: newData });
  };

  const removeRow = (index: number) => {
    if ((block.rows || 3) > 1) {
      const newData = data.filter((_, i) => i !== index);
      onChange({ ...block, rows: (block.rows || 3) - 1, data: newData });
    }
  };

  const removeColumn = (index: number) => {
    if ((block.cols || 3) > 1) {
      const newData = data.map(row => row.filter((_, i) => i !== index));
      onChange({ ...block, cols: (block.cols || 3) - 1, data: newData });
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
            {data.map((row, rowIndex) => (
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
              {data[0]?.map((_, colIndex) => (
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
  // Ensure items is always an array
  const items = block.items || [];
  
  const addFaqItem = () => {
    const newItem: FaqItem = { id: generateId(), question: '', answer: '' };
    onChange({ ...block, items: [...items, newItem] });
  };

  const updateFaqItem = (id: string, field: 'question' | 'answer', value: string) => {
    const newItems = items.map(item =>
      item.id === id ? { ...item, [field]: value } : item
    );
    onChange({ ...block, items: newItems });
  };

  const removeFaqItem = (id: string) => {
    onChange({ ...block, items: items.filter(item => item.id !== id) });
  };

  return (
    <div className="space-y-3">
      <Button size="sm" onClick={addFaqItem}>
        <Plus className="w-4 h-4 mr-1" /> Add FAQ Item
      </Button>
      {items.map((item, index) => (
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

// Consultation Block Component
function ConsultationBlockComponent({ block, onChange }: { block: ConsultationBlock; onChange: (block: ConsultationBlock) => void }) {
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-sm font-medium mb-2 block">Title</Label>
        <Input
          value={block.title}
          onChange={(e) => onChange({ ...block, title: e.target.value })}
          placeholder="Enter consultation title..."
        />
      </div>
      <div>
        <Label className="text-sm font-medium mb-2 block">Description</Label>
        <Textarea
          value={block.description}
          onChange={(e) => onChange({ ...block, description: e.target.value })}
          placeholder="Enter consultation description..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
}

// WhatsApp Channel Block Component
function WhatsAppChannelBlockComponent({ block, onChange }: { block: WhatsAppChannelBlock; onChange: (block: WhatsAppChannelBlock) => void }) {
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-sm font-medium mb-2 block">Title</Label>
        <Input
          value={block.title}
          onChange={(e) => onChange({ ...block, title: e.target.value })}
          placeholder="Enter WhatsApp channel title..."
        />
      </div>
      <div>
        <Label className="text-sm font-medium mb-2 block">Description</Label>
        <Textarea
          value={block.description}
          onChange={(e) => onChange({ ...block, description: e.target.value })}
          placeholder="Enter channel description..."
          className="min-h-[80px]"
        />
      </div>
      <div>
        <Label className="text-sm font-medium mb-2 block">Channel URL</Label>
        <Input
          value={block.channelUrl}
          onChange={(e) => onChange({ ...block, channelUrl: e.target.value })}
          placeholder="https://whatsapp.com/channel/..."
        />
      </div>
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
    case 'consultation':
      return <ConsultationBlockComponent block={block} onChange={onChange} />;
    case 'whatsappChannel':
      return <WhatsAppChannelBlockComponent block={block} onChange={onChange} />;
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
        case 'consultation':
          return { id: baseId, type, title: 'Book Your Free Consultation', description: 'Ready to start your study abroad journey? Schedule a personalized consultation with our expert advisors. We\'ll discuss your goals, recommend the best destinations, and create a customized plan for your success.' } as ConsultationBlock;
        case 'whatsappChannel':
          return { id: baseId, type, title: 'Stay Updated with Our WhatsApp Channel', description: 'Get instant updates on visa news, and study abroad opportunities!', channelUrl: 'https://whatsapp.com/channel/0029VbAnwfe8qIzremjcqn2V' } as WhatsAppChannelBlock;
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
      {/* Toolbar */}
      <div className="sticky top-0 z-10 bg-white border border-gray-200 rounded-lg shadow-sm p-3">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {selectedBlocks.size > 0 ? (
              <>
                {/* Selection Badge */}
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-3 py-1.5">
                  <Check className="w-3.5 h-3.5 mr-1.5" />
                  {selectedBlocks.size} selected
                </Badge>
                
                {/* Bulk Actions */}
                <div className="flex items-center gap-1 border-l pl-2 ml-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={moveSelectedBlocksUp} 
                    disabled={selectedBlocks.size === 0}
                    className="h-8"
                  >
                    <ArrowUp className="w-3.5 h-3.5 mr-1.5" /> 
                    Move Up
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={moveSelectedBlocksDown} 
                    disabled={selectedBlocks.size === 0}
                    className="h-8"
                  >
                    <ArrowDown className="w-3.5 h-3.5 mr-1.5" /> 
                    Move Down
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={deleteSelectedBlocks} 
                    className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                  >
                    <Trash2 className="w-3.5 h-3.5 mr-1.5" /> 
                    Delete
                  </Button>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={deselectAll}
                  className="h-8 ml-1"
                >
                  Clear Selection
                </Button>
              </>
            ) : (
              blocks.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={selectAll}
                  className="h-8"
                >
                  <Check className="w-3.5 h-3.5 mr-1.5" />
                  Select All
                </Button>
              )
            )}
          </div>
          
          {/* View Toggle */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowHtmlView(!showHtmlView)}
            className="h-8"
          >
            {showHtmlView ? <Eye className="w-3.5 h-3.5 mr-1.5" /> : <FileCode className="w-3.5 h-3.5 mr-1.5" />}
            {showHtmlView ? 'Show Blocks' : 'View HTML'}
          </Button>
        </div>
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
            <div className="text-center py-16 px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No blocks yet</h3>
              <p className="text-gray-500 mb-6 max-w-sm mx-auto">
                Start building your content by adding blocks below. Choose from headings, paragraphs, images, and more.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600">
                <ArrowDown className="w-4 h-4" />
                Click "Add New Block" to get started
              </div>
            </div>
          )}
        </>
      )}

      {/* Add Block Button */}
      <div className="relative" ref={menuRef}>
        <Button 
          onClick={() => setShowBlockMenu(!showBlockMenu)} 
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-md hover:shadow-lg transition-all"
          size="lg"
        >
          <Plus className="w-5 h-5 mr-2" /> 
          Add New Block
        </Button>
        
        {showBlockMenu && (
          <div className="absolute bottom-full mb-2 w-full bg-white border border-gray-200 rounded-xl shadow-2xl p-3 z-20">
            <div className="grid grid-cols-2 gap-2">
              <Button 
                variant="outline" 
                onClick={() => addBlock('heading')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <Heading className="w-4 h-4 mr-2" />
                Heading
              </Button>
              <Button 
                variant="outline" 
                onClick={() => addBlock('paragraph')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <Type className="w-4 h-4 mr-2" />
                Paragraph
              </Button>
              <Button 
                variant="outline" 
                onClick={() => addBlock('code')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <Code className="w-4 h-4 mr-2" />
                Code
              </Button>
              <Button 
                variant="outline" 
                onClick={() => addBlock('list')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
              <Button 
                variant="outline" 
                onClick={() => addBlock('table')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <Table className="w-4 h-4 mr-2" />
                Table
              </Button>
              <Button 
                variant="outline" 
                onClick={() => addBlock('image')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Image
              </Button>
              <Button 
                variant="outline" 
                onClick={() => addBlock('html')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <FileCode className="w-4 h-4 mr-2" />
                HTML
              </Button>
              <Button 
                variant="outline" 
                onClick={() => addBlock('faq')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQ
              </Button>
              <Button 
                variant="outline" 
                onClick={() => addBlock('consultation')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Consultation
              </Button>
              <Button 
                variant="outline" 
                onClick={() => addBlock('whatsappChannel')} 
                className="justify-start h-12 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
