import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// 301 Redirect from www to non-www (security-hardened)
app.use((req: Request, res: Response, next: NextFunction) => {
  const host = req.get('host');
  const canonicalDomain = 'dunyaconsultants.com';
  
  // Only redirect our specific www subdomain to prevent open redirects
  if (host === `www.${canonicalDomain}` || host === `www.${canonicalDomain}:5000`) {
    // Handle multiple proxies by taking first protocol value
    const xForwardedProto = req.get('x-forwarded-proto');
    const protocol = xForwardedProto?.split(',')[0] || (req.secure ? 'https' : req.protocol) || 'https';
    const redirectUrl = `${protocol}://${canonicalDomain}${req.originalUrl}`;
    
    log(`301 Redirect: ${host}${req.originalUrl} → ${canonicalDomain}${req.originalUrl}`);
    return res.redirect(301, redirectUrl);
  }
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve attached assets statically
app.use('/attached_assets', express.static('attached_assets'));

// Serve robots.txt before other routes
app.get("/robots.txt", (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`# robots.txt for dunyaconsultants.com
# Default rule for all bots
User-agent: *
# Disallow access to private or irrelevant areas
Disallow: /admin/
Disallow: /login/
Disallow: /wp-admin/
# Example: block tracking or temp folders (customize if applicable)
# Disallow: /temp/
# Disallow: /*?s=  # block internal search pages (modify as needed)


Allow: /wp-content/uploads/
Allow: /*.css$
Allow: /*.js$
Allow: /*.jpg$
Allow: /*.png$
Allow: /*.svg$

Sitemap: https://dunyaconsultants.com/sitemap.xml`);
});

// Serve sitemap.xml before other routes (must be before Vite middleware)
app.get("/sitemap.xml", (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://dunyaconsultants.com/post-sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://dunyaconsultants.com/page-sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`);
});

// Serve post-sitemap.xml before other routes
app.get("/post-sitemap.xml", (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://dunyaconsultants.com/blog/best-usa-student-visa-consultants</loc>
    <lastmod>2025-09-18T08:03:49.629Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/blog/germany-study-visa-guide</loc>
    <lastmod>2025-09-17T13:05:06.095Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/blog/australia-student-visa-guide</loc>
    <lastmod>2025-09-17T07:30:33.425Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`);
});

// Serve page-sitemap.xml before other routes
app.get("/page-sitemap.xml", (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://dunyaconsultants.com/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/cost-calculator</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/course-match</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/document-checklist</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://dunyaconsultants.com/consultation-booking</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`);
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
