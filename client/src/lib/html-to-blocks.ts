import type { Block } from '@/components/admin/custom-block-editor';

export function htmlToBlocks(html: string): Block[] {
  if (!html || html.trim() === '') return [];
  
  const blocks: Block[] = [];
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  
  // Process each top-level element in the body
  Array.from(doc.body.children).forEach((element, index) => {
    const block = elementToBlock(element, index);
    if (block) {
      blocks.push(block);
    }
  });
  
  // If no blocks were created but there's text content, create a paragraph
  if (blocks.length === 0 && html.trim()) {
    blocks.push({
      id: generateId(),
      type: 'paragraph',
      text: html.replace(/<[^>]*>/g, '').trim()
    });
  }
  
  return blocks;
}

function elementToBlock(element: Element, index: number): Block | null {
  const tagName = element.tagName.toLowerCase();
  
  // Headings
  if (/^h[1-6]$/.test(tagName)) {
    const level = parseInt(tagName[1]) as 1 | 2 | 3 | 4 | 5 | 6;
    return {
      id: generateId(),
      type: 'heading',
      level,
      text: element.textContent || ''
    };
  }
  
  // Paragraph
  if (tagName === 'p') {
    return {
      id: generateId(),
      type: 'paragraph',
      text: element.innerHTML || ''
    };
  }
  
  // Code blocks
  if (tagName === 'pre') {
    const codeElement = element.querySelector('code');
    const code = codeElement ? codeElement.textContent || '' : element.textContent || '';
    const className = codeElement?.className || '';
    const languageMatch = className.match(/language-(\w+)/);
    
    return {
      id: generateId(),
      type: 'code',
      code,
      language: languageMatch ? languageMatch[1] : 'javascript'
    };
  }
  
  // Lists
  if (tagName === 'ul' || tagName === 'ol') {
    const items = parseListItems(element);
    return {
      id: generateId(),
      type: 'list',
      style: tagName as 'ul' | 'ol',
      items
    };
  }
  
  // Tables
  if (tagName === 'table') {
    const data = parseTable(element);
    return {
      id: generateId(),
      type: 'table',
      data
    };
  }
  
  // Images
  if (tagName === 'img') {
    return {
      id: generateId(),
      type: 'image',
      url: element.getAttribute('src') || '',
      alt: element.getAttribute('alt') || ''
    };
  }
  
  // FAQ sections
  if (element.classList.contains('faq-section')) {
    const items = parseFaqItems(element);
    if (items.length > 0) {
      return {
        id: generateId(),
        type: 'faq',
        items
      };
    }
  }
  
  // Divs and other containers - extract text content as paragraph
  if (element.textContent && element.textContent.trim()) {
    return {
      id: generateId(),
      type: 'paragraph',
      text: element.textContent.trim()
    };
  }
  
  return null;
}

function parseListItems(element: Element): any[] {
  const items: any[] = [];
  
  Array.from(element.children).forEach(li => {
    if (li.tagName.toLowerCase() === 'li') {
      // Get direct text content (not from nested lists)
      let text = '';
      Array.from(li.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent || '';
        } else if (node.nodeType === Node.ELEMENT_NODE && 
                   (node as Element).tagName.toLowerCase() !== 'ul' && 
                   (node as Element).tagName.toLowerCase() !== 'ol') {
          text += (node as Element).textContent || '';
        }
      });
      
      // Check for nested lists
      const nestedList = li.querySelector('ul, ol');
      const children = nestedList ? parseListItems(nestedList) : [];
      
      items.push({
        id: generateId(),
        text: text.trim(),
        children
      });
    }
  });
  
  return items;
}

function parseTable(element: Element): string[][] {
  const data: string[][] = [];
  const rows = element.querySelectorAll('tr');
  
  rows.forEach(row => {
    const cells: string[] = [];
    row.querySelectorAll('td, th').forEach(cell => {
      cells.push(cell.textContent || '');
    });
    if (cells.length > 0) {
      data.push(cells);
    }
  });
  
  // Ensure at least a 2x2 table
  if (data.length === 0) {
    data.push(['', ''], ['', '']);
  }
  
  return data;
}

function parseFaqItems(element: Element): any[] {
  const items: any[] = [];
  const faqItems = element.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question')?.textContent?.trim() || '';
    const answer = item.querySelector('.faq-answer')?.textContent?.trim() || '';
    
    if (question || answer) {
      items.push({
        id: generateId(),
        question,
        answer
      });
    }
  });
  
  return items;
}

function generateId(): string {
  return `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
