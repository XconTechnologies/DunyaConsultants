import type { Block, ListItem, FaqItem, TipBlock } from '@/components/admin/custom-block-editor';

export function blocksToHtml(blocks: Block[]): string {
  return blocks.map(blockToHtml).join('\n');
}

function blockToHtml(block: Block): string {
  switch (block.type) {
    case 'heading':
      return `<h${block.level}>${escapeHtml(block.text)}</h${block.level}>`;
    
    case 'paragraph':
      // Don't escape HTML in paragraphs since they can contain rich formatting (spans, links, strong, etc.)
      return `<p>${block.text}</p>`;
    
    case 'code':
      const language = block.language ? ` class="language-${escapeHtml(block.language)}"` : '';
      return `<pre><code${language}>${escapeHtml(block.code)}</code></pre>`;
    
    case 'list':
      return renderList(block.items, block.style);
    
    case 'table':
      return renderTable(block.data);
    
    case 'image':
      return `<img src="${escapeHtml(block.url)}" alt="${escapeHtml(block.alt)}" class="max-w-full h-auto" />`;
    
    case 'html':
      return block.html; // Don't escape HTML blocks
    
    case 'faq':
      return renderFaq(block.items);
    
    case 'tip':
      return renderTip(block);
    
    default:
      return '';
  }
}

function renderList(items: ListItem[], style: 'ul' | 'ol', depth = 0): string {
  // Safety check for undefined items
  if (!items || items.length === 0) return '';
  
  const tag = style === 'ol' ? 'ol' : 'ul';
  const classes = depth === 0 ? ' class="list-content"' : '';
  let html = `<${tag}${classes}>\n`;
  
  items.forEach(item => {
    // Remove leading bullets or numbers from text if present
    let cleanText = item.text
      .replace(/^[•●○■□▪▫◆◇‣⁃∙⦿⦾]+\s*/g, '') // Remove bullet points
      .replace(/^\d+\.\s*/g, '') // Remove numbered list markers
      .trim();
    
    // Don't escape HTML in list items since they can contain rich formatting
    html += `  <li>${cleanText}`;
    if (item.children && item.children.length > 0) {
      html += '\n' + renderList(item.children, style, depth + 1);
    }
    html += '</li>\n';
  });
  
  html += `</${tag}>`;
  return html;
}

function renderTable(data: string[][]): string {
  // Safety check for undefined data
  if (!data || data.length === 0) return '';
  
  let html = '<table class="border-collapse border border-gray-300 w-full">\n';
  html += '  <tbody>\n';
  
  data.forEach((row, rowIndex) => {
    html += '    <tr>\n';
    row.forEach((cell, colIndex) => {
      const tag = rowIndex === 0 ? 'th' : 'td';
      html += `      <${tag} class="border border-gray-300 px-4 py-2">${escapeHtml(cell)}</${tag}>\n`;
    });
    html += '    </tr>\n';
  });
  
  html += '  </tbody>\n';
  html += '</table>';
  return html;
}

function renderTip(block: TipBlock): string {
  // Safety check for empty text
  if (!block.text) return '';
  
  let html = '<div class="tip-block" style="margin: 1.5rem 0; padding: 1rem 1.25rem; background: #fff7ed; border-left: 4px solid #f97316; border-radius: 0.375rem; font-family: Inter, Lato, sans-serif;">\n';
  html += '  <p style="margin: 0; font-style: italic; font-size: 1.125rem; line-height: 1.7; color: #111827;">\n';
  if (block.prefix) {
    html += `    <strong style="font-style: normal;">${escapeHtml(block.prefix)} </strong>\n`;
  }
  html += `    ${escapeHtml(block.text)}\n`;
  html += '  </p>\n';
  html += '</div>';
  return html;
}

function renderFaq(items: FaqItem[]): string {
  // Safety check for undefined items
  if (!items || items.length === 0) return '';
  
  let html = '<div class="faq-section" style="border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background: white;">\n';
  
  items.forEach((item, index) => {
    html += '  <div class="faq-item" style="border-bottom: 1px solid #e5e7eb;">\n';
    html += '    <div class="faq-question" style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 1rem 1.5rem; background: white; cursor: pointer; font-weight: 500; color: #111827; font-size: 0.875rem; line-height: 1.5; text-align: left; transition: background-color 0.2s ease;">\n';
    html += `      <span>${escapeHtml(item.question)}</span>\n`;
    html += `      <svg class="faq-chevron${index === 0 ? ' expanded' : ''}" viewBox="0 0 24 24" fill="none" style="width: 1rem; height: 1rem; color: #6b7280; transition: transform 0.2s ease; flex-shrink: 0; margin-left: 0.75rem; ${index === 0 ? 'transform: rotate(180deg);' : ''}">\n`;
    html += '        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/>\n';
    html += '      </svg>\n';
    html += '    </div>\n';
    html += `    <div class="faq-answer" style="display: ${index === 0 ? 'block' : 'none'}; padding: ${index === 0 ? '0 1.5rem 1rem 1.5rem' : '0 1.5rem'}; background: white; color: #6b7280; font-size: 0.875rem; line-height: 1.5; border-top: 1px solid #f3f4f6; margin: 0; ${index === 0 ? 'max-height: 1000px; opacity: 1;' : 'max-height: 0px; opacity: 0;'} transition: all 0.3s ease; overflow: hidden;">\n`;
    html += `      <p style="margin: 0; padding-top: 0.5rem;">${escapeHtml(item.answer)}</p>\n`;
    html += '    </div>\n';
    html += '  </div>\n';
  });
  
  html += '</div>';
  return html;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
