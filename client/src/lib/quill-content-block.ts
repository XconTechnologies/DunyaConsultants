import ReactQuill from 'react-quill';
const Quill = ReactQuill.Quill;
import type { ContentBlock } from '@shared/schema';

const BlockEmbed = Quill.import('blots/block/embed') as any;

interface ContentBlockValue {
  id: string;
  block: ContentBlock;
}

class ContentBlockBlot extends BlockEmbed {
  static blotName = 'contentBlock';
  static tagName = 'div';
  static className = 'quill-content-block';

  static create(value: ContentBlockValue) {
    const node = super.create();
    node.setAttribute('contenteditable', 'false');
    node.setAttribute('data-block-id', value.id);
    node.className = 'quill-content-block my-4 p-4 border-2 border-blue-500 border-dashed rounded-lg bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors';
    
    const blockInfo = document.createElement('div');
    blockInfo.className = 'text-sm font-semibold text-blue-700 mb-2 flex items-center justify-between';
    blockInfo.innerHTML = `
      <span class="flex items-center gap-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        ${value.block.type.toUpperCase()} Block (Position: ${value.block.position ?? 'end'})
      </span>
      <span class="text-xs text-blue-600">Click to edit</span>
    `;
    
    const preview = document.createElement('div');
    preview.className = 'content-block-preview bg-white p-3 rounded border border-blue-200';
    preview.setAttribute('data-preview-container', 'true');
    
    node.appendChild(blockInfo);
    node.appendChild(preview);
    
    return node;
  }

  static value(node: HTMLElement): ContentBlockValue {
    return {
      id: node.getAttribute('data-block-id') || '',
      block: {} as ContentBlock
    };
  }
}

Quill.register(ContentBlockBlot);

export default ContentBlockBlot;
export type { ContentBlockValue };
