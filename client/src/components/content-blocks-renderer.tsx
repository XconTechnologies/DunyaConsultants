import type { ContentBlock } from "@shared/schema";

interface ContentBlocksRendererProps {
  blocks?: ContentBlock[];
  content?: string; // Main content HTML
  integrated?: boolean; // If true, insert blocks within content
}

export default function ContentBlocksRenderer({ blocks, content = '', integrated = false }: ContentBlocksRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  const sortedBlocks = [...blocks].sort((a, b) => (a.position ?? 999) - (b.position ?? 999));

  // If integrated mode, insert blocks at their positions within content
  if (integrated && content) {
    return <IntegratedContentRenderer content={content} blocks={sortedBlocks} />;
  }

  // Otherwise, render blocks separately
  return (
    <div className="content-blocks-wrapper space-y-6 mt-8 prose prose-xl max-w-none">
      {sortedBlocks.map((block) => (
        <div key={block.id}>
          {renderBlock(block)}
        </div>
      ))}
    </div>
  );
}

// Integrated renderer that inserts blocks at specific positions
function IntegratedContentRenderer({ content, blocks }: { content: string; blocks: ContentBlock[] }) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  
  const elements = tempDiv.querySelectorAll('p, h1, h2, h3, h4, h5, h6, ul, ol, blockquote, table');
  const contentParts: JSX.Element[] = [];
  
  // Group blocks by position
  const blocksByPosition = new Map<number, ContentBlock[]>();
  blocks.forEach(block => {
    const pos = block.position ?? 999;
    if (!blocksByPosition.has(pos)) {
      blocksByPosition.set(pos, []);
    }
    blocksByPosition.get(pos)?.push(block);
  });
  
  // Add blocks at position 0 (beginning)
  if (blocksByPosition.has(0)) {
    blocksByPosition.get(0)?.forEach((block, idx) => {
      contentParts.push(
        <div key={`block-0-${idx}`} className="my-6">
          {renderBlock(block)}
        </div>
      );
    });
  }
  
  // Add content elements with blocks inserted after them
  elements.forEach((el, index) => {
    contentParts.push(
      <div 
        key={`content-${index}`} 
        dangerouslySetInnerHTML={{ __html: el.outerHTML }}
      />
    );
    
    // Insert blocks after this element
    const blocksAfter = blocksByPosition.get(index + 1);
    if (blocksAfter) {
      blocksAfter.forEach((block, idx) => {
        contentParts.push(
          <div key={`block-${index + 1}-${idx}`} className="my-6">
            {renderBlock(block)}
          </div>
        );
      });
    }
  });
  
  // Add blocks at the end (position >= 999 OR position > number of elements)
  // This ensures blocks with out-of-range positions don't disappear
  blocks.forEach((block, idx) => {
    const pos = block.position ?? 999;
    if (pos >= 999 || pos > elements.length) {
      contentParts.push(
        <div key={`block-end-${idx}`} className="my-6">
          {renderBlock(block)}
        </div>
      );
    }
  });
  
  return <div className="integrated-content prose prose-xl max-w-none">{contentParts}</div>;
}

function renderBlock(block: ContentBlock) {
  switch (block.type) {
    case 'faq':
      return <FAQBlock block={block} />;
    case 'table':
      return <TableBlock block={block} />;
    case 'html':
      return <HTMLBlock block={block} />;
    case 'button':
      return <ButtonBlock block={block} />;
    case 'image':
      return <ImageBlock block={block} />;
    case 'youtube':
      return <YouTubeBlock block={block} />;
    case 'spacer':
      return <SpacerBlock block={block} />;
    case 'divider':
      return <DividerBlock block={block} />;
    case 'schema':
      return <SchemaBlock block={block} />;
    default:
      return null;
  }
}

// FAQ Block Renderer
function FAQBlock({ block }: { block: ContentBlock & { type: 'faq' } }) {
  // Support both old single question format and new multiple questions format
  const questions = block.data.questions || [
    {
      question: block.data.question || '',
      answer: block.data.answer || '',
      questionBgColor: block.data.questionBgColor || '#f3f4f6',
      answerBgColor: block.data.answerBgColor || '#ffffff'
    }
  ];

  return (
    <div className="faq-block space-y-4">
      {questions.map((q: any, index: number) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <div 
            className="p-4 font-semibold"
            style={{ backgroundColor: q.questionBgColor || '#f3f4f6' }}
          >
            {q.question}
          </div>
          <div 
            className="p-4"
            style={{ backgroundColor: q.answerBgColor || '#ffffff' }}
          >
            {q.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

// Table Block Renderer
function TableBlock({ block }: { block: ContentBlock & { type: 'table' } }) {
  const { headers, cells, hasHeader } = block.data;

  if (!cells || cells.length === 0) {
    return null;
  }

  return (
    <div className="table-block overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        {hasHeader && headers && headers.length > 0 && (
          <thead>
            <tr className="bg-gray-100">
              {headers.map((header: string, index: number) => (
                <th key={index} className="border border-gray-300 px-4 py-2 text-left font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {cells.map((row: string[], rowIndex: number) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell: string, cellIndex: number) => (
                <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// HTML Block Renderer
function HTMLBlock({ block }: { block: ContentBlock & { type: 'html' } }) {
  return (
    <div 
      className="html-block"
      dangerouslySetInnerHTML={{ __html: block.data.html || '' }}
    />
  );
}

// Button Block Renderer
function ButtonBlock({ block }: { block: ContentBlock & { type: 'button' } }) {
  const { text, url, bgColor, textColor, alignment, borderWidth, borderRadius } = block.data;

  const alignmentStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    stretch: 'justify-stretch',
  };

  const buttonStyles = {
    backgroundColor: bgColor || '#1D50C9',
    color: textColor || '#ffffff',
    borderWidth: `${borderWidth || 0}px`,
    borderRadius: `${borderRadius || 8}px`,
    borderColor: textColor || '#1D50C9',
  };

  return (
    <div className={`button-block flex ${alignmentStyles[alignment as keyof typeof alignmentStyles] || 'justify-center'}`}>
      <a
        href={url || '#'}
        className="inline-block px-6 py-3 font-semibold transition-opacity hover:opacity-90"
        style={buttonStyles}
        target={url?.startsWith('http') ? '_blank' : undefined}
        rel={url?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {text || 'Click Me'}
      </a>
    </div>
  );
}

// Image Block Renderer
function ImageBlock({ block }: { block: ContentBlock & { type: 'image' } }) {
  const { url, alt, alignment, width } = block.data;

  if (!url) {
    return null;
  }

  const alignmentStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`image-block ${alignmentStyles[alignment as keyof typeof alignmentStyles] || 'text-center'}`}>
      <img
        src={url}
        alt={alt || ''}
        style={{ width: width || '100%', maxWidth: '100%', height: 'auto' }}
        className="inline-block"
      />
    </div>
  );
}

// YouTube Block Renderer
function YouTubeBlock({ block }: { block: ContentBlock & { type: 'youtube' } }) {
  const { videoId } = block.data;

  if (!videoId) {
    return null;
  }

  return (
    <div className="youtube-block aspect-video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  );
}

// Spacer Block Renderer
function SpacerBlock({ block }: { block: ContentBlock & { type: 'spacer' } }) {
  const { height } = block.data;

  return (
    <div className="spacer-block" style={{ height: `${height || 40}px` }} />
  );
}

// Divider Block Renderer
function DividerBlock({ block }: { block: ContentBlock & { type: 'divider' } }) {
  const { thickness, width } = block.data;

  return (
    <div className="divider-block flex justify-center">
      <hr
        style={{
          width: width || '100%',
          height: `${thickness || 1}px`,
          backgroundColor: '#e5e7eb',
          border: 'none',
        }}
      />
    </div>
  );
}

// Schema Block Renderer (not visible to users, only crawlers)
function SchemaBlock({ block }: { block: ContentBlock & { type: 'schema' } }) {
  const { schemaJson } = block.data;

  try {
    const parsedSchema = JSON.parse(schemaJson || '{}');
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(parsedSchema) }}
      />
    );
  } catch {
    return null;
  }
}
