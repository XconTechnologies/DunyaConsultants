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

function renderConsultation(block: ConsultationBlock): string {
  const { 
    title = 'Book Your Free Consultation',
    description = 'Ready to start your study abroad journey? Schedule a personalized consultation with our expert advisors.',
    buttonText = 'Book Free Consultation',
    buttonUrl = '/consultation',
    buttonBgColor = '#1D50C9',
    buttonTextColor = '#ffffff',
    buttonBorderRadius = 8
  } = block;
  
  return `
    <div class="consultation-block" style="margin: 2rem auto; max-width: 80rem; width: 100%;">
      <div style="background: linear-gradient(to right, #1D50C9, #1845B3); border-radius: 1rem; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); padding: 2.5rem; border: 1px solid rgba(29, 80, 201, 0.2); color: white;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 style="font-size: 1.875rem; font-weight: bold; color: white; margin-bottom: 1rem; font-family: Inter, Lato, sans-serif;">${escapeHtml(title)}</h2>
          <p style="color: rgba(255, 255, 255, 0.9); font-size: 1.125rem; max-width: 48rem; margin: 0 auto; font-family: Inter, Lato, sans-serif;">${escapeHtml(description)}</p>
        </div>
        <div style="display: flex; justify-content: center; align-items: center;">
          <a href="${escapeHtml(buttonUrl)}" ${buttonUrl.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} style="display: inline-flex; align-items: center; justify-content: center; padding: 1rem 2rem; font-weight: bold; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); transition: all 0.3s; background-color: ${escapeHtml(buttonBgColor)}; color: ${escapeHtml(buttonTextColor)}; border-radius: ${buttonBorderRadius}px; text-decoration: none; font-family: Inter, Lato, sans-serif;">
            ${escapeHtml(buttonText)}
          </a>
        </div>
      </div>
    </div>
  `;
}

function renderWhatsAppChannel(block: WhatsAppChannelBlock): string {
  const { 
    title = 'Stay Updated with Our WhatsApp Channel',
    description = 'Get instant updates on visa news, and study abroad opportunities!',
    channelUrl = 'https://whatsapp.com/channel/0029VbAnwfe8qIzremjcqn2V',
    buttonText = 'Join Channel',
    buttonBgColor = '#25D366',
    buttonTextColor = '#ffffff',
    buttonBorderRadius = 8
  } = block;
  
  return `
    <div class="whatsapp-channel-block" style="margin: 2rem auto; max-width: 64rem; width: 100%;">
      <div style="background: linear-gradient(to right, #1D50C9, #1845B3); border-radius: 1rem; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1); padding: 2rem; border: 1px solid rgba(29, 80, 201, 0.2); color: white;">
        <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap;">
          <div style="display: flex; align-items: center; gap: 1rem; text-align: left; color: white; flex: 1;">
            <div style="background: rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: 9999px; backdrop-filter: blur(8px); flex-shrink: 0; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);">
              <svg style="width: 2rem; height: 2rem; color: white;" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div style="color: white;">
              <h3 style="font-weight: bold; font-size: 1.25rem; margin-bottom: 0.25rem; font-family: Inter, Lato, sans-serif;">${escapeHtml(title)}</h3>
              <p style="font-size: 1rem; color: rgba(255, 255, 255, 0.9); margin: 0; font-family: Inter, Lato, sans-serif;">${escapeHtml(description)}</p>
            </div>
          </div>
          <a href="${escapeHtml(channelUrl)}" target="_blank" rel="noopener noreferrer" style="flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 1.5rem; font-weight: bold; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1); transition: all 0.3s; background-color: ${escapeHtml(buttonBgColor)}; color: ${escapeHtml(buttonTextColor)}; border-radius: ${buttonBorderRadius}px; text-decoration: none; font-family: Inter, Lato, sans-serif;">
            ${escapeHtml(buttonText)}
          </a>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
