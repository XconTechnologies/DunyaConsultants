import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { socialMetaMiddleware } from "./social-meta-middleware";
import { readFileSync } from "fs";
import { join } from "path";

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

// Cache headers middleware for static assets (production only)
app.use((req: Request, res: Response, next: NextFunction) => {
  const isProduction = app.get("env") === "production";
  
  // Only apply cache headers in production and for static assets from /assets or /attached_assets
  if (isProduction && (req.url.startsWith('/assets/') || req.url.startsWith('/attached_assets/'))) {
    if (req.url.match(/\.(jpg|jpeg|png|gif|webp|svg|ico|css|js|woff|woff2|ttf|eot)$/)) {
      // All hashed assets: cache for 1 year (immutable)
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
  next();
});

// Serve attached assets statically (long cache in production only)
const isProduction = app.get("env") === "production";
app.use('/attached_assets', express.static('attached_assets', 
  isProduction ? { maxAge: '365d', immutable: true } : {}
));

// Serve QR codes statically (long cache in production only)
app.use('/qr-codes', express.static('public/qr-codes',
  isProduction ? { maxAge: '365d', immutable: true } : {}
));

// Serve robots.txt before other routes
app.get("/robots.txt", (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
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

# Allow specific crawlers full access
User-agent: Amazonbot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GPTBot
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: OAI-SearchBot/1.0; +https://openai.com/searchbot
Allow: /

Sitemap: https://dunyaconsultants.com/sitemap.xml `);
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

  // Dynamic canonical URL injection middleware - runs for ALL requests
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Only intercept HTML requests, not API or assets
    if (req.path.startsWith('/api/') || req.path.startsWith('/assets/') || req.path.startsWith('/attached_assets/') || req.path.match(/\.(css|js|jpg|jpeg|png|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
      return next();
    }

    // Intercept response to inject dynamic meta tags
    const originalSend = res.send;
    res.send = function(data: any) {
      if (typeof data === 'string' && data.includes('<!-- DYNAMIC_META_TAGS -->')) {
        // Build the full URL from the request
        const protocol = req.get('x-forwarded-proto')?.split(',')[0] || (req.secure ? 'https' : 'http');
        const host = req.get('host') || 'dunyaconsultants.com';
        const fullUrl = `${protocol}://${host}${req.originalUrl}`;
        const baseUrl = `${protocol}://${host}`;

        const dynamicMetaTags = `
    <!-- Canonical URL for proper domain attribution -->
    <link rel="canonical" href="${fullUrl}" />
    
    <!-- Facebook Domain Verification -->
    <meta property="fb:app_id" content="1131878482257088" />
    <meta property="og:site_name" content="Dunya Consultants" />
    <meta property="og:url" content="${fullUrl}" />`;

        data = data.replace('<!-- DYNAMIC_META_TAGS -->', dynamicMetaTags);
      }
      return originalSend.call(this, data);
    } as any;

    next();
  });

  // Social media crawler meta tag injection - must be before Vite
  app.use(socialMetaMiddleware);

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
