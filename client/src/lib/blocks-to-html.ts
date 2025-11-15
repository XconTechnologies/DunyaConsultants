import type { Block, ListItem, FaqItem, TipBlock, ConsultationBlock, WhatsAppChannelBlock } from '@/components/admin/custom-block-editor';

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
    
    case 'consultation':
      return renderConsultation(block);
    
    case 'whatsappChannel':
      return renderWhatsAppChannel(block);
    
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
  // Return lightweight placeholder instead of full HTML
  // This will be replaced with the React component during rendering
  return `<div data-block-placeholder="tip" data-block-id="${(block as any).id || 'unknown'}"></div>`;
}

function renderFaq(items: FaqItem[]): string {
  // Return lightweight placeholder instead of full HTML
  // This will be replaced with the React component during rendering
  // Note: We need to get the block ID from somewhere - for now use a timestamp
  const blockId = `faq_${Date.now()}`;
  return `<div data-block-placeholder="faq" data-block-id="${blockId}"></div>`;
}

function renderConsultation(block: ConsultationBlock): string {
  // Return lightweight placeholder instead of full HTML
  // This will be replaced with the React component during rendering
  return `<div data-block-placeholder="consultation" data-block-id="${(block as any).id || 'unknown'}"></div>`;
}

function renderWhatsAppChannel(block: WhatsAppChannelBlock): string {
  // Return lightweight placeholder instead of full HTML
  // This will be replaced with the React component during rendering
  return `<div data-block-placeholder="whatsappChannel" data-block-id="${(block as any).id || 'unknown'}"></div>`;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
