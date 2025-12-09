// This is a copy of blocks-to-html.ts but for browser use (doesn't require document)
import type { Block, ListItem, FaqItem, TipBlock, ConsultationBlock, WhatsAppChannelBlock } from '@/components/admin/custom-block-editor';

export function blocksToHtmlPreview(blocks: Block[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks.map(blockToHtml).join('\n');
}

function blockToHtml(block: Block): string {
  switch (block.type) {
    case 'heading':
      return `<h${block.level}>${escapeHtmlPreview(block.text || '')}</h${block.level}>`;
    
    case 'paragraph':
      // Don't escape HTML in paragraphs since they can contain rich formatting
      return `<p>${block.text || ''}</p>`;
    
    case 'code':
      const language = block.language ? ` class="language-${escapeHtmlPreview(block.language)}"` : '';
      return `<pre><code${language}>${escapeHtmlPreview(block.code || '')}</code></pre>`;
    
    case 'list':
      return renderList(block.items, block.style);
    
    case 'table':
      return renderTable(block.data);
    
    case 'image':
      return `<img src="${escapeHtmlPreview(block.url || '')}" alt="${escapeHtmlPreview(block.alt || '')}" class="max-w-full h-auto" />`;
    
    case 'html':
      return block.html || '';
    
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
  // Safety check for undefined or empty items
  if (!items || !Array.isArray(items) || items.length === 0) return '';
  
  const tag = style === 'ol' ? 'ol' : 'ul';
  let html = `<${tag}>\n`;
  
  items.forEach(item => {
    // Remove leading bullets or numbers from text if present
    let cleanText = (item.text || '')
      .replace(/^[•●○■□▪▫◆◇‣⁃∙⦿⦾]+\s*/g, '')
      .replace(/^\d+\.\s*/g, '')
      .trim();
    
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
  // Safety check for undefined or empty data
  if (!data || !Array.isArray(data) || data.length === 0) return '';
  
  let html = '<table class="border-collapse border border-gray-300 w-full">\n';
  html += '  <tbody>\n';
  
  data.forEach((row, rowIndex) => {
    if (!row || !Array.isArray(row)) return;
    html += '    <tr>\n';
    row.forEach((cell) => {
      const tag = rowIndex === 0 ? 'th' : 'td';
      html += `      <${tag} class="border border-gray-300 px-4 py-2">${escapeHtmlPreview(cell || '')}</${tag}>\n`;
    });
    html += '    </tr>\n';
  });
  
  html += '  </tbody>\n';
  html += '</table>';
  return html;
}

function renderFaq(items: FaqItem[]): string {
  // Safety check for undefined or empty items
  if (!items || !Array.isArray(items) || items.length === 0) {
    return '<div class="faq-section" style="padding: 1rem; color: #666;">No FAQ items added yet.</div>';
  }
  
  let html = '<div class="faq-section" style="border: 1px solid #e5e7eb; border-radius: 0.5rem; overflow: hidden; background: white;">\n';
  
  items.forEach((item, index) => {
    html += '  <div class="faq-item" style="border-bottom: 1px solid #e5e7eb;">\n';
    html += '    <div class="faq-question" style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 1rem 1.5rem; background: white; cursor: pointer; font-weight: 500; color: #111827; font-size: 0.875rem; line-height: 1.5; text-align: left; transition: background-color 0.2s ease;">\n';
    html += `      <span>${escapeHtmlPreview(item.question || '')}</span>\n`;
    html += `      <svg class="faq-chevron${index === 0 ? ' expanded' : ''}" viewBox="0 0 24 24" fill="none" style="width: 1rem; height: 1rem; color: #6b7280; transition: transform 0.2s ease; flex-shrink: 0; margin-left: 0.75rem; ${index === 0 ? 'transform: rotate(180deg);' : ''}">\n`;
    html += '        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9 6 6 6-6"/>\n';
    html += '      </svg>\n';
    html += '    </div>\n';
    html += `    <div class="faq-answer" style="display: ${index === 0 ? 'block' : 'none'}; padding: ${index === 0 ? '0 1.5rem 1rem 1.5rem' : '0 1.5rem'}; background: white; color: #6b7280; font-size: 0.875rem; line-height: 1.5; border-top: 1px solid #f3f4f6; margin: 0; ${index === 0 ? 'max-height: 1000px; opacity: 1;' : 'max-height: 0px; opacity: 0;'} transition: all 0.3s ease; overflow: hidden;">\n`;
    html += `      <p style="margin: 0; padding-top: 0.5rem;">${escapeHtmlPreview(item.answer || '')}</p>\n`;
    html += '    </div>\n';
    html += '  </div>\n';
  });
  
  html += '</div>';
  return html;
}

function renderTip(block: TipBlock): string {
  const prefix = block.prefix || 'Tip:';
  const text = block.text || '';
  
  return `
    <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-left: 4px solid #0ea5e9; padding: 1rem 1.25rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
        <svg style="width: 1.25rem; height: 1.25rem; color: #0ea5e9; flex-shrink: 0; margin-top: 0.125rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <div>
          <span style="font-weight: 600; color: #0369a1;">${escapeHtmlPreview(prefix)}</span>
          <span style="color: #334155; font-style: italic;"> ${escapeHtmlPreview(text)}</span>
        </div>
      </div>
    </div>
  `;
}

function renderConsultation(block: ConsultationBlock): string {
  const title = block.title || 'Book a Consultation';
  const description = block.description || '';
  const buttonText = block.buttonText || 'Book Now';
  const buttonUrl = block.buttonUrl || '#';
  const buttonBgColor = block.buttonBgColor || '#1D50C9';
  const buttonTextColor = block.buttonTextColor || '#ffffff';
  const buttonBorderRadius = block.buttonBorderRadius ?? 8;
  
  return `
    <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border: 1px solid #e2e8f0; border-radius: 0.75rem; padding: 2rem; margin: 1.5rem 0; text-align: center;">
      <h3 style="font-size: 1.5rem; font-weight: 700; color: #1e293b; margin: 0 0 0.75rem 0;">${escapeHtmlPreview(title)}</h3>
      ${description ? `<p style="color: #64748b; margin: 0 0 1.25rem 0;">${escapeHtmlPreview(description)}</p>` : ''}
      <a href="${escapeHtmlPreview(buttonUrl)}" style="display: inline-block; background-color: ${buttonBgColor}; color: ${buttonTextColor}; padding: 0.75rem 1.5rem; border-radius: ${buttonBorderRadius}px; text-decoration: none; font-weight: 600; transition: opacity 0.2s;">${escapeHtmlPreview(buttonText)}</a>
    </div>
  `;
}

function renderWhatsAppChannel(block: WhatsAppChannelBlock): string {
  const title = block.title || 'Join Our WhatsApp Channel';
  const description = block.description || '';
  const buttonText = block.buttonText || 'Join Channel';
  const channelUrl = block.channelUrl || '#';
  const buttonBgColor = block.buttonBgColor || '#25D366';
  const buttonTextColor = block.buttonTextColor || '#ffffff';
  const buttonBorderRadius = block.buttonBorderRadius ?? 8;
  
  return `
    <div style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); border: 1px solid #86efac; border-radius: 0.75rem; padding: 2rem; margin: 1.5rem 0; text-align: center;">
      <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.75rem;">
        <svg style="width: 1.5rem; height: 1.5rem; color: #25D366;" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <h3 style="font-size: 1.5rem; font-weight: 700; color: #166534; margin: 0;">${escapeHtmlPreview(title)}</h3>
      </div>
      ${description ? `<p style="color: #15803d; margin: 0 0 1.25rem 0;">${escapeHtmlPreview(description)}</p>` : ''}
      <a href="${escapeHtmlPreview(channelUrl)}" target="_blank" rel="noopener noreferrer" style="display: inline-block; background-color: ${buttonBgColor}; color: ${buttonTextColor}; padding: 0.75rem 1.5rem; border-radius: ${buttonBorderRadius}px; text-decoration: none; font-weight: 600; transition: opacity 0.2s;">${escapeHtmlPreview(buttonText)}</a>
    </div>
  `;
}

function escapeHtmlPreview(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
