import { Request, Response, NextFunction } from 'express';
import { readFileSync } from 'fs';
import { join } from 'path';
import { db } from './db';
import { blogPosts, events } from '@shared/schema';
import { eq, and } from 'drizzle-orm';
import { extractFirstImage } from './image-extractor';

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

function normalizeImageUrl(image?: string): string {
  if (!image) return '';
  
  // Already absolute URL
  if (image.startsWith('http://') || image.startsWith('https://')) {
    return image;
  }
  
  // Ensure leading slash for relative URLs
  const path = image.startsWith('/') ? image : '/' + image;
  return `https://dunyaconsultants.com${path}`;
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
  
  const imageUrl = normalizeImageUrl(image);
  
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

// Default fallback image for pages without specific images
const DEFAULT_FEATURED_IMAGE = '/attached_assets/hero-background.jpg';

// Static page meta data mapping
const STATIC_PAGE_META: { [key: string]: { title: string; description: string; image?: string } } = {
  '/': {
    title: 'Study Abroad Consultants in Pakistan - Dunya Consultants',
    description: 'Looking for top Study Abroad Consultants in Pakistan? Dunya Consultants offers expert guidance for global education. Apply now!',
    image: '/attached_assets/hero-background.jpg'
  },
  '/about': {
    title: 'About Dunya Consultants - Your Trusted Study Abroad Partner',
    description: 'Learn about Dunya Consultants, Pakistan\'s leading study abroad consultancy with expert guidance for international education.',
    image: '/attached_assets/about-hero.jpg'
  },
  '/contact': {
    title: 'Contact Dunya Consultants - Get Expert Study Abroad Guidance',
    description: 'Get in touch with our expert study abroad consultants. We\'re here to help you achieve your international education goals.',
    image: '/attached_assets/contact-hero.jpg'
  },
  '/services': {
    title: 'Our Services - Study Abroad Consultancy',
    description: 'Comprehensive study abroad services including university selection, visa guidance, and pre-departure support.',
    image: '/attached_assets/services-hero.jpg'
  },
  '/events': {
    title: 'Study Abroad Events & Expos - Dunya Consultants',
    description: 'Join our study abroad events and education expos. Meet university representatives and get expert guidance.',
    image: '/attached_assets/events-hero.jpg'
  },
  '/destinations/usa': {
    title: 'Study in USA - Complete Guide for Pakistani Students',
    description: 'Complete guide to studying in USA for Pakistani students. Learn about universities, visas, scholarships, and more.',
    image: '/attached_assets/usa-flag.jpg'
  },
  '/destinations/uk': {
    title: 'Study in UK - Complete Guide for Pakistani Students',
    description: 'Everything you need to know about studying in the UK. University admissions, student visas, and scholarships.',
    image: '/attached_assets/uk-flag.jpg'
  },
  '/destinations/canada': {
    title: 'Study in Canada - Complete Guide for Pakistani Students',
    description: 'Discover opportunities to study in Canada. University programs, student visas, and immigration pathways.',
    image: '/attached_assets/canada-flag.jpg'
  },
  '/destinations/australia': {
    title: 'Study in Australia - Complete Guide for Pakistani Students',
    description: 'Study in Australia with expert guidance. University admissions, student visas, and post-study work opportunities.',
    image: '/attached_assets/australia-flag.jpg'
  },
  '/destinations/finland': {
    title: 'Study in Finland - Complete Guide for Pakistani Students',
    description: 'Explore opportunities to study in Finland. Quality education, affordable living, and beautiful Nordic culture.',
    image: '/attached_assets/finland-flag.jpg'
  },
  '/destinations/belgium': {
    title: 'Study in Belgium - Complete Guide for Pakistani Students',
    description: 'Study in Belgium with our expert guidance. Universities, scholarships, and living in the heart of Europe.',
    image: '/attached_assets/belgium-flag.jpg'
  },
  '/destinations/turkey': {
    title: 'Study in Turkey - Complete Guide for Pakistani Students',
    description: 'Discover study opportunities in Turkey. Scholarships, universities, and experiencing Turkish culture.',
    image: '/attached_assets/turkey-flag.jpg'
  },
  // Study Abroad Pages (new URLs)
  '/study-abroad/usa': {
    title: 'Study in USA from Pakistan - Complete Guide 2024 | Dunya Consultants',
    description: 'Complete guide to study in USA from Pakistan. Learn about USA student visa requirements, costs, scholarships, top universities, work opportunities, and expert guidance from best USA study visa consultants.',
    image: '/objects/uploads/study-in-the-usa_1763961982261_811b2918.webp'
  },
  '/study-abroad/uk': {
    title: 'Study in the UK: Step-by-Step Guide for Pakistani Students',
    description: 'Find out how Pakistani students can successfully apply to UK universities. Learn about scholarships, visa processes, and career opportunities post-graduation.',
    image: '/attached_assets/uk-flag.jpg'
  },
  '/study-abroad/canada': {
    title: 'Study in Canada',
    description: 'Study in Canada - Ranked 3rd in Life Quality Index. Pakistani students can work while studying, get post-graduation work permits, pathway to PR within 3 years, and access to 223 universities with affordable living costs.',
    image: '/attached_assets/canada-flag.jpg'
  },
  '/study-abroad/australia': {
    title: 'Study in Australia',
    description: 'Study in Australia with world-class education and post-study work rights (2-4 years). Pakistani students benefit from globally recognized degrees, multicultural society, work opportunities, and pathway to permanent residency.',
    image: '/attached_assets/australia-flag.jpg'
  },
  '/study-abroad/finland': {
    title: 'Study in Finland',
    description: 'Experience Nordic excellence with Finland\'s world-class education system. Pakistani students benefit from research-focused programs, innovation hubs, EU education advantages, and beautiful Scandinavian lifestyle with English-taught courses.',
    image: '/attached_assets/finland-flag.jpg'
  },
  '/study-abroad/belgium': {
    title: 'Study in Belgium',
    description: 'Study in Belgium at the heart of Europe. Pakistani students enjoy multilingual education, affordable tuition, EU job market access, rich cultural heritage, and excellent research opportunities in historic European cities.',
    image: '/attached_assets/belgium-flag.jpg'
  },
  '/study-abroad/turkey': {
    title: 'Study in Turkey',
    description: 'Bridge between Europe and Asia - Study in Turkey with affordable tuition ($3,500-6,000/year), modern facilities, Turkish government scholarships, and rich cultural heritage. Gateway to international opportunities for Pakistani students.',
    image: '/attached_assets/turkey-flag.jpg'
  },
  '/test-prep/ielts': {
    title: 'IELTS Preparation - Dunya Consultants',
    description: 'Expert IELTS preparation courses. Achieve your target band score with our comprehensive training program.',
    image: '/attached_assets/ielts-prep.jpg'
  },
  '/test-prep/pte': {
    title: 'PTE Preparation - Dunya Consultants',
    description: 'Professional PTE preparation courses. Get the score you need for your study abroad journey.',
    image: '/attached_assets/pte-prep.jpg'
  },
  '/test-prep/toefl': {
    title: 'TOEFL Preparation - Dunya Consultants',
    description: 'Comprehensive TOEFL preparation. Excel in your English language proficiency test.',
    image: '/attached_assets/toefl-prep.jpg'
  },
  '/test-prep/duolingo': {
    title: 'Duolingo English Test Preparation - Dunya Consultants',
    description: 'Prepare for the Duolingo English Test with expert guidance and proven strategies.',
    image: '/attached_assets/duolingo-prep.jpg'
  },
  // Office Pages
  '/offices/sargodha-head-office': {
    title: 'Dunya Consultants Sargodha | Study Abroad & Visa Experts',
    description: 'Want to study abroad but don\'t know where to begin? We\'re here to help. We help you with every step, from picking a course to securing your visa, at Dunya Consultants (Sargodha).',
    image: '/attached_assets/IMG-20240909-WA0043_1756189128801.jpg'
  },
  '/offices/lahore-dha': {
    title: 'Lahore DHA Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Lahore DHA helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-lahore-dha.jpg'
  },
  '/offices/lahore-dha-city': {
    title: 'Lahore DHA City Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Lahore DHA City helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-lahore-dha-city.jpg'
  },
  '/offices/lahore-johar': {
    title: 'Lahore Johar Town Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Lahore Johar Town helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-lahore-johar.jpg'
  },
  '/offices/islamabad': {
    title: 'Islamabad Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Islamabad helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-islamabad.jpg'
  },
  '/offices/islamabad-blue-area': {
    title: 'Islamabad Blue Area Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Islamabad Blue Area helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-islamabad-blue-area.jpg'
  },
  '/offices/karachi': {
    title: 'Karachi Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Karachi helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-karachi.jpg'
  },
  '/offices/karachi-gulshan': {
    title: 'Karachi Gulshan Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Karachi Gulshan helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-karachi-gulshan.jpg'
  },
  '/offices/faisalabad': {
    title: 'Faisalabad Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Faisalabad helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-faisalabad.jpg'
  },
  '/offices/faisalabad-civil-lines': {
    title: 'Faisalabad Civil Lines Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Faisalabad Civil Lines helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-faisalabad-civil-lines.jpg'
  },
  '/offices/multan': {
    title: 'Multan Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Multan helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-multan.jpg'
  },
  '/offices/gujranwala': {
    title: 'Gujranwala Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Gujranwala helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-gujranwala.jpg'
  },
  '/offices/sialkot': {
    title: 'Sialkot Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Sialkot helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-sialkot.jpg'
  },
  '/offices/gujrat': {
    title: 'Gujrat Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Gujrat helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-gujrat.jpg'
  },
  '/offices/bahawalpur': {
    title: 'Bahawalpur Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Bahawalpur helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-bahawalpur.jpg'
  },
  '/offices/mianchannu': {
    title: 'Mian Channu Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Mian Channu helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-mian-channu.jpg'
  },
  '/offices/mandi-bahauddin': {
    title: 'Mandi Bahauddin Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Mandi Bahauddin helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-mandi-bahauddin.jpg'
  },
  '/offices/sheikhupura': {
    title: 'Sheikhupura Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Sheikhupura helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-sheikhupura.jpg'
  },
  '/offices/peshawar': {
    title: 'Peshawar Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Peshawar helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-peshawar.jpg'
  },
  '/offices/jhelum': {
    title: 'Jhelum Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Jhelum helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-jhelum.jpg'
  },
  '/offices/mardan': {
    title: 'Mardan Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Mardan helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-mardan.jpg'
  },
  '/offices/saudi-arabia-jeddah': {
    title: 'Jeddah Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Jeddah helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-jeddah.jpg'
  },
  '/offices/turkey-istanbul': {
    title: 'Istanbul Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Istanbul helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-istanbul.jpg'
  },
  '/offices/egypt-cairo': {
    title: 'Cairo Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Cairo helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-cairo.jpg'
  },
  '/offices/edinburgh': {
    title: 'Edinburgh Office - Dunya Consultants',
    description: 'Expert study abroad consultants in Edinburgh helping students with university selection, visa guidance, and IELTS preparation for USA, UK, Canada, Australia, and more.',
    image: '/attached_assets/office-edinburgh.jpg'
  }
};

// Function to get meta data for a path (with fallbacks)
function getPageMeta(path: string): { title: string; description: string; image: string } {
  // Exact match
  if (STATIC_PAGE_META[path]) {
    const meta = STATIC_PAGE_META[path];
    return {
      title: meta.title,
      description: meta.description,
      image: meta.image || DEFAULT_FEATURED_IMAGE
    };
  }

  // Pattern matching for dynamic routes
  if (path.startsWith('/destinations/') || path.startsWith('/study-abroad/')) {
    return {
      title: 'Study Abroad Destinations - Dunya Consultants',
      description: 'Explore study abroad destinations with expert guidance from Dunya Consultants.',
      image: DEFAULT_FEATURED_IMAGE
    };
  }

  if (path.startsWith('/test-prep/')) {
    return {
      title: 'Test Preparation - Dunya Consultants',
      description: 'Professional test preparation courses for IELTS, PTE, TOEFL, and more.',
      image: DEFAULT_FEATURED_IMAGE
    };
  }

  if (path.startsWith('/offices/')) {
    return {
      title: 'Our Offices - Dunya Consultants',
      description: 'Visit our offices across Pakistan for expert study abroad consultation.',
      image: DEFAULT_FEATURED_IMAGE
    };
  }

  // Default fallback for any other page
  return {
    title: 'Dunya Consultants - Study Abroad Experts',
    description: 'Expert study abroad consultation services. Your trusted partner for international education.',
    image: DEFAULT_FEATURED_IMAGE
  };
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
        
        // Priority: featured image → first content image → default fallback
        let image = blogPost.featuredImage;
        if (!image) {
          const extractedImage = extractFirstImage(
            blogPost.content || '', 
            blogPost.contentBlocks as any || []
          );
          image = extractedImage || DEFAULT_FEATURED_IMAGE;
        }

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
    // Handle event pages
    else if (path.match(/^\/events\/([a-z0-9-]+)$/)) {
      const eventMatch = path.match(/^\/events\/([a-z0-9-]+)$/);
      if (eventMatch) {
        const slug = eventMatch[1];
        
        const eventResult = await db
          .select()
          .from(events)
          .where(and(
            eq(events.slug, slug),
            eq(events.isActive, true)
          ))
          .limit(1);

        if (eventResult.length > 0) {
          const event = eventResult[0];
          const title = event.title;
          const description = event.shortDescription || event.excerpt || '';
          const image = event.detailImage || event.image || DEFAULT_FEATURED_IMAGE;

          metaTags = generateMetaTags({
            title: `${title} - Dunya Consultants`,
            description,
            image,
            url: fullUrl,
            type: 'event',
            siteName: 'Dunya Consultants'
          });
        }
      }
    }
    // Handle static pages (with fallback for any unmatched routes)
    else {
      const pageData = getPageMeta(path);
      metaTags = generateMetaTags({
        title: pageData.title,
        description: pageData.description,
        image: pageData.image,
        url: fullUrl,
        type: 'website',
        siteName: 'Dunya Consultants'
      });
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
