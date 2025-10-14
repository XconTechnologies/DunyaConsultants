import { Request, Response, NextFunction } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { db } from './db';
import { blogPosts } from '@shared/schema';
import { eq, and } from 'drizzle-orm';

const SOCIAL_CRAWLERS = [
  'facebookexternalhit',
  'Facebot',
  'WhatsApp',
  'Twitterbot',
  'LinkedInBot',
  'Slackbot',
  'TelegramBot',
  'Discordbot',
  'SkypeUriPreview',
  'Pinterest',
  'Instagram'
];

function isSocialCrawler(userAgent: string): boolean {
  if (!userAgent) return false;
  return SOCIAL_CRAWLERS.some(crawler => 
    userAgent.toLowerCase().includes(crawler.toLowerCase())
  );
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

function generateMetaTags(data: {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: string;
  siteName?: string;
}): string {
  const { title, description, image, url, type = 'website', siteName = 'Dunya Consultants' } = data;
  
  const imageUrl = image?.startsWith('http') ? image : `https://dunyaconsultants.com${image}`;
  
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);
  const safeUrl = escapeHtml(url);
  const safeImageUrl = escapeHtml(imageUrl);
  const safeSiteName = escapeHtml(siteName);
  const safeType = escapeHtml(type);
  
  return `
    <title>${safeTitle}</title>
    <meta name="description" content="${safeDescription}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${safeType}" />
    <meta property="og:url" content="${safeUrl}" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    ${image ? `<meta property="og:image" content="${safeImageUrl}" />` : ''}
    <meta property="og:site_name" content="${safeSiteName}" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />
    <meta name="twitter:url" content="${safeUrl}" />
    <meta name="twitter:title" content="${safeTitle}" />
    <meta name="twitter:description" content="${safeDescription}" />
    ${image ? `<meta name="twitter:image" content="${safeImageUrl}" />` : ''}
  `.trim();
}

export async function socialMetaMiddleware(req: Request, res: Response, next: NextFunction) {
  const userAgent = req.headers['user-agent'] || '';
  
  if (!isSocialCrawler(userAgent)) {
    return next();
  }

  const path = req.path;
  const fullUrl = `https://dunyaconsultants.com${req.originalUrl}`;

  try {
    let metaTags = '';

    // Handle blog posts
    const blogMatch = path.match(/^\/blog\/([a-z0-9-]+)$/);
    if (blogMatch) {
      const slug = blogMatch[1];
      
      const post = await db
        .select()
        .from(blogPosts)
        .where(and(
          eq(blogPosts.slug, slug),
          eq(blogPosts.status, 'published')
        ))
        .limit(1);

      if (post.length > 0) {
        const blogPost = post[0];
        const title = blogPost.metaTitle || blogPost.title;
        const description = blogPost.metaDescription || blogPost.excerpt || '';
        const image = blogPost.featuredImage || undefined;

        metaTags = generateMetaTags({
          title: `${title} - Dunya Consultants`,
          description,
          image,
          url: fullUrl,
          type: 'article',
          siteName: 'Dunya Consultants'
        });
      }
    }

    if (metaTags) {
      const isDevelopment = process.env.NODE_ENV === 'development';
      const htmlPath = isDevelopment 
        ? join(process.cwd(), 'client', 'index.html')
        : join(process.cwd(), 'dist', 'public', 'index.html');
      
      let html = readFileSync(htmlPath, 'utf-8');

      const headEndIndex = html.indexOf('</head>');
      if (headEndIndex !== -1) {
        html = html.slice(0, headEndIndex) + '\n    ' + metaTags + '\n  ' + html.slice(headEndIndex);
      }

      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      return res.send(html);
    }
  } catch (error) {
    console.error('Error in social meta middleware:', error);
  }

  next();
}
