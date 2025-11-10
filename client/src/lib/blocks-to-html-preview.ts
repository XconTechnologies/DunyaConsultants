// This is a copy of blocks-to-html.ts but for browser use (doesn't require document)
import type { Block, ListItem, FaqItem } from '@/components/admin/custom-block-editor';

export function blocksToHtmlPreview(blocks: Block[]): string {
  return blocks.map(blockToHtml).join('\n');
}

function blockToHtml(block: Block): string {
  switch (block.type) {
    case 'heading':
      return `<h${block.level}>${escapeHtmlPreview(block.text)}</h${block.level}>`;
    
    case 'paragraph':
      return `<p>${escapeHtmlPreview(block.text)}</p>`;
    
    case 'code':
      const language = block.language ? ` class="language-${escapeHtmlPreview(block.language)}"` : '';
      return `<pre><code${language}>${escapeHtmlPreview(block.code)}</code></pre>`;
    
    case 'list':
      return renderList(block.items, block.style);
    
    case 'table':
      return renderTable(block.data);
    
    case 'image':
      return `<img src="${escapeHtmlPreview(block.url)}" alt="${escapeHtmlPreview(block.alt)}" class="max-w-full h-auto" />`;
    
    case 'html':
      return block.html;
    
    case 'faq':
      return renderFaq(block.items);
    
    default:
      return '';
  }
}

function renderList(items: ListItem[], style: 'ul' | 'ol', depth = 0): string {
  if (items.length === 0) return '';
  
  const tag = style === 'ol' ? 'ol' : 'ul';
  let html = `<${tag}>\n`;
  
  items.forEach(item => {
    html += `  <li>${escapeHtmlPreview(item.text)}`;
    if (item.children && item.children.length > 0) {
      html += '\n' + renderList(item.children, style, depth + 1);
    }
    html += '</li>\n';
  });
  
  html += `</${tag}>`;
  return html;
}

function renderTable(data: string[][]): string {
  let html = '<table class="border-collapse border border-gray-300 w-full">\n';
  html += '  <tbody>\n';
  
  data.forEach((row, rowIndex) => {
    html += '    <tr>\n';
    row.forEach((cell, colIndex) => {
      const tag = rowIndex === 0 ? 'th' : 'td';
      html += `      <${tag} class="border border-gray-300 px-4 py-2">${escapeHtmlPreview(cell)}</${tag}>\n`;
    });
    html += '    </tr>\n';
  });
  
  html += '  </tbody>\n';
  html += '</table>';
  return html;
}

function renderFaq(items: FaqItem[]): string {
  let html = '<div class="faq-section" style="border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background: white;">\n';
  
  items.forEach((item, index) => {
    html += '  <div class="faq-item" style="border-bottom: 1px solid #e5e7eb;">\n';
    html += '    <div class="faq-question" style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 1rem 1.5rem; background: white; cursor: pointer; font-weight: 500; color: #111827; font-size: 0.875rem; line-height: 1.5; text-align: left; transition: background-color 0.2s ease;">\n';
    html += `      <span>${escapeHtmlPreview(item.question)}</span>\n`;
    html += `      <svg class="faq-chevron${index === 0 ? ' expanded' : ''}" viewBox="0 0 24 24" fill="none" style="width: 1rem; height: 1rem; color: #6b7280; transition: transform 0.2s ease; flex-shrink: 0; margin-left: 0.75rem; ${index === 0 ? 'transform: rotate(180deg);' : ''}">\n`;
    html += '        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/>\n';
    html += '      </svg>\n';
    html += '    </div>\n';
    html += `    <div class="faq-answer" style="display: ${index === 0 ? 'block' : 'none'}; padding: ${index === 0 ? '0 1.5rem 1rem 1.5rem' : '0 1.5rem'}; background: white; color: #6b7280; font-size: 0.875rem; line-height: 1.5; border-top: 1px solid #f3f4f6; margin: 0; ${index === 0 ? 'max-height: 1000px; opacity: 1;' : 'max-height: 0px; opacity: 0;'} transition: all 0.3s ease; overflow: hidden;">\n`;
    html += `      <p style="margin: 0; padding-top: 0.5rem;">${escapeHtmlPreview(item.answer)}</p>\n`;
    html += '    </div>\n';
    html += '  </div>\n';
  });
  
  html += '</div>';
  return html;
}

function escapeHtmlPreview(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
