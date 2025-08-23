import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { seedBlogPosts } from "./seed-blogs";
import { getChatbotResponse } from "./chatbot";
import { 
  insertContactSchema, insertUserEngagementSchema, insertEligibilityCheckSchema, insertConsultationSchema,
  insertAdminUserSchema, insertBlogPostSchema, insertServiceSchema, insertPageSchema 
} from "@shared/schema";
import { z } from "zod";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import path from "path";
import fs from "fs";
import multer from "multer";

// Extend Request interface to include adminId
interface AuthenticatedRequest extends Request {
  adminId?: number;
}

// Admin authentication middleware
async function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const session = await storage.getAdminSession(token);
    if (!session) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }

    req.adminId = session.adminUserId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
}

// Initialize default admin user
async function initializeAdmin() {
  try {
    const existingAdmin = await storage.getAdminByUsername('admin');
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      await storage.createAdminUser({
        username: 'admin',
        password: hashedPassword,
        email: 'admin@dunyaconsultants.com',
        role: 'admin'
      });
      console.log('Default admin user created: admin/admin123');
    }

    // Seed blog posts
    await seedBlogPosts();
  } catch (error) {
    console.error('Failed to initialize admin user:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize admin user
  await initializeAdmin();
  // Chatbot route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, context } = req.body;
      
      if (!message) {
        return res.status(400).json({ 
          success: false, 
          message: "Message is required" 
        });
      }

      const response = await getChatbotResponse(message, context);
      
      res.json({ 
        success: true, 
        response,
        message: "Response generated successfully"
      });
    } catch (error) {
      console.error('Chatbot error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to get chatbot response",
        response: "I'm having trouble responding right now. Please contact our consultants directly for immediate assistance."
      });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch testimonials" 
      });
    }
  });

  // Engagement tracking routes
  app.post("/api/engagement/track", async (req, res) => {
    try {
      const result = insertUserEngagementSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Invalid engagement data", details: result.error });
      }
      
      const engagement = await storage.trackEngagement(result.data);
      
      // Check for new achievements after tracking engagement
      const newAchievements = await storage.checkAndAwardBadges(result.data.sessionId);
      
      res.status(201).json({ engagement, newAchievements });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/engagement/stats/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const stats = await storage.getUserStats(sessionId);
      if (!stats) {
        // Create initial stats for new session
        const newStats = await storage.updateUserStats(sessionId, {});
        return res.json(newStats);
      }
      res.json(stats);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/engagement/achievements/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const achievements = await storage.getUserAchievements(sessionId);
      res.json(achievements);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/engagement/check-badges/:sessionId", async (req, res) => {
    try {
      const { sessionId } = req.params;
      const newAchievements = await storage.checkAndAwardBadges(sessionId);
      res.json(newAchievements);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Eligibility check submission
  app.post("/api/eligibility-check", async (req, res) => {
    try {
      const eligibilityData = insertEligibilityCheckSchema.parse(req.body);
      const eligibilityCheck = await storage.createEligibilityCheck(eligibilityData);
      res.json({ success: true, eligibilityCheck });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit eligibility check" 
        });
      }
    }
  });

  // Consultation booking
  app.post("/api/consultations", async (req, res) => {
    try {
      const consultationData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(consultationData);
      res.json({ success: true, consultation });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to book consultation" 
        });
      }
    }
  });

  // Contact form (updated route to match frontend)
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Email confirmation endpoint
  app.post("/api/send-email", async (req, res) => {
    try {
      const { to, subject, html, attachment } = req.body;
      
      // In a real implementation, you would use SendGrid or another email service
      // For now, we'll simulate email sending and return success
      console.log(`Simulating email send to: ${to}`);
      console.log(`Subject: ${subject}`);
      console.log(`Has attachment: ${!!attachment}`);
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      res.json({ 
        success: true, 
        message: "Email sent successfully",
        emailId: `sim_${Date.now()}_${Math.random().toString(36).substring(7)}`
      });
    } catch (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send email" 
      });
    }
  });

  // ==============================================
  // ADMIN AUTHENTICATION ROUTES
  // ==============================================

  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password required' });
      }

      const admin = await storage.getAdminByUsername(username);
      if (!admin || !admin.isActive) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const isValidPassword = await bcrypt.compare(password, admin.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Create session
      const sessionToken = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

      await storage.createAdminSession({
        sessionToken,
        adminUserId: admin.id,
        expiresAt
      });

      await storage.updateAdminLastLogin(admin.id);

      res.json({
        success: true,
        token: sessionToken,
        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          role: admin.role
        }
      });
    } catch (error) {
      console.error('Admin login error:', error);
      res.status(500).json({ message: 'Login failed' });
    }
  });

  // Admin logout
  app.post("/api/admin/logout", requireAuth, async (req, res) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      if (token) {
        await storage.deleteAdminSession(token);
      }
      res.json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Logout failed' });
    }
  });

  // Verify admin session
  app.get("/api/admin/me", requireAuth, async (req, res) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      const session = await storage.getAdminSession(token!);
      if (!session) {
        return res.status(401).json({ message: 'Session expired' });
      }
      
      const admin = await storage.getAdminByUsername('admin'); // In real app, get by ID
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }

      res.json({
        id: admin.id,
        username: admin.username,
        email: admin.email,
        role: admin.role
      });
    } catch (error) {
      res.status(500).json({ message: 'Session verification failed' });
    }
  });

  // ==============================================
  // BLOG MANAGEMENT ROUTES
  // ==============================================

  // Get all blog posts (admin)
  app.get("/api/admin/blog-posts", requireAuth, async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : req.query.published === 'false' ? false : undefined;
      const posts = await storage.getBlogPosts(published);
      
      // Optional pagination support for better dashboard performance
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const offset = req.query.offset ? parseInt(req.query.offset as string) : 0;
      
      if (limit && limit > 0) {
        const paginatedPosts = posts.slice(offset, offset + limit);
        res.json(paginatedPosts);
      } else {
        res.json(posts); // Return all posts if no limit specified
      }
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch blog posts' });
    }
  });

  // Get single blog post (admin)
  app.get("/api/admin/blog-posts/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch blog post' });
    }
  });

  // Create blog post
  app.post("/api/admin/blog-posts", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const blogData = insertBlogPostSchema.parse({
        ...req.body,
        authorId: req.adminId,
        slug: req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      });
      
      const post = await storage.createBlogPost(blogData);
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: 'Invalid blog post data', errors: error.errors });
      } else {
        res.status(500).json({ message: 'Failed to create blog post' });
      }
    }
  });

  // Update blog post
  app.put("/api/admin/blog-posts/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      if (updates.title && !updates.slug) {
        updates.slug = updates.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
      
      const post = await storage.updateBlogPost(id, updates);
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update blog post' });
    }
  });

  // Delete blog post
  app.delete("/api/admin/blog-posts/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteBlogPost(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete blog post' });
    }
  });

  // ==============================================
  // FILE UPLOAD ROUTES
  // ==============================================

  // Configure multer for file uploads
  const uploadDir = path.join(process.cwd(), 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const upload = multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, uploadDir);
      },
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext);
        const timestamp = Date.now();
        cb(null, `${name}-${timestamp}${ext}`);
      }
    }),
    limits: {
      fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Only image files are allowed!'));
      }
    }
  });

  // Handle image uploads
  app.post("/api/upload", upload.single('image'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ 
          success: false, 
          message: "No file uploaded" 
        });
      }

      const url = `/api/uploads/${req.file.filename}`;
      
      res.json({ 
        success: true, 
        url: url,
        filename: req.file.filename,
        message: "Image uploaded successfully" 
      });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to upload image" 
      });
    }
  });

  // Serve uploaded files
  app.get("/api/uploads/:filename", (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(uploadDir, filename);
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      // Fallback to existing demo image
      const demoImagePath = path.join(process.cwd(), 'attached_assets', 'GRE-Test-Fee-in-Pakistan.webp');
      if (fs.existsSync(demoImagePath)) {
        res.sendFile(demoImagePath);
      } else {
        res.status(404).json({ message: 'File not found' });
      }
    }
  });

  // ==============================================
  // PUBLIC BLOG ROUTES
  // ==============================================

  // Get single published blog post by slug (public) - handles nested paths like 2024/09/06/slug-name
  app.get("/api/blog-posts/*", async (req, res) => {
    // Skip if it's the published endpoint
    if ((req.params as any)['0'] === 'published') {
      return;
    }
    try {
      const slug = (req.params as any)['0']; // This captures the full path after /api/blog-posts/
      console.log(`Looking for blog post with slug: ${slug}`);
      const post = await storage.getBlogPostBySlug(slug);
      console.log(`Found post:`, post ? `${post.title} (published: ${post.isPublished})` : 'none');
      
      if (!post || !post.isPublished) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      
      // Increment view count
      await storage.incrementBlogViews(post.id);
      
      res.json(post);
    } catch (error: any) {
      console.error('Error fetching blog post by slug:', error);
      res.status(500).json({ message: 'Failed to fetch blog post', error: error?.message || error });
    }
  });

  // Get published blog posts (public)
  app.get("/api/blog-posts/published", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts(true); // Only published posts
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch published blog posts' });
    }
  });

  // Delete blog post
  app.delete("/api/admin/blog-posts/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteBlogPost(id);
      res.json({ success: true, message: 'Blog post deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete blog post' });
    }
  });

  // Publish blog post
  app.patch("/api/admin/blog-posts/:id/publish", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      console.log(`Publishing blog post with ID: ${id}`);
      const blogPost = await storage.publishBlogPost(id);
      console.log(`Successfully published blog post: ${blogPost.title}`);
      res.json(blogPost);
    } catch (error: unknown) {
      console.error('Error publishing blog post:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      res.status(500).json({ message: 'Failed to publish blog post', error: errorMessage });
    }
  });

  // ==============================================
  // SERVICES MANAGEMENT ROUTES
  // ==============================================

  // Get all services (admin)
  app.get("/api/admin/services", requireAuth, async (req, res) => {
    try {
      const active = req.query.active === 'true' ? true : req.query.active === 'false' ? false : undefined;
      const services = await storage.getServices(active);
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch services' });
    }
  });

  // Get single service (admin)
  app.get("/api/admin/services/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const service = await storage.getService(id);
      if (!service) {
        return res.status(404).json({ message: 'Service not found' });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch service' });
    }
  });

  // Create service
  app.post("/api/admin/services", requireAuth, async (req, res) => {
    try {
      const serviceData = insertServiceSchema.parse({
        ...req.body,
        slug: req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      });
      
      const service = await storage.createService(serviceData);
      res.status(201).json(service);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: 'Invalid service data', errors: error.errors });
      } else {
        res.status(500).json({ message: 'Failed to create service' });
      }
    }
  });

  // Update service
  app.put("/api/admin/services/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      if (updates.title && !updates.slug) {
        updates.slug = updates.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
      
      const service = await storage.updateService(id, updates);
      res.json(service);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update service' });
    }
  });

  // Delete service
  app.delete("/api/admin/services/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteService(id);
      res.json({ success: true, message: 'Service deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete service' });
    }
  });

  // ==============================================
  // PAGES MANAGEMENT ROUTES
  // ==============================================

  // Get all pages (admin)
  app.get("/api/admin/pages", requireAuth, async (req, res) => {
    try {
      const published = req.query.published === 'true' ? true : req.query.published === 'false' ? false : undefined;
      const pages = await storage.getPages(published);
      res.json(pages);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch pages' });
    }
  });

  // Get single page (admin)
  app.get("/api/admin/pages/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const page = await storage.getPage(id);
      if (!page) {
        return res.status(404).json({ message: 'Page not found' });
      }
      res.json(page);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch page' });
    }
  });

  // Create page
  app.post("/api/admin/pages", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const pageData = insertPageSchema.parse({
        ...req.body,
        authorId: req.adminId,
        slug: req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      });
      
      const page = await storage.createPage(pageData);
      res.status(201).json(page);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: 'Invalid page data', errors: error.errors });
      } else {
        res.status(500).json({ message: 'Failed to create page' });
      }
    }
  });

  // Update page
  app.put("/api/admin/pages/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      if (updates.title && !updates.slug) {
        updates.slug = updates.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }
      
      const page = await storage.updatePage(id, updates);
      res.json(page);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update page' });
    }
  });

  // Delete page
  app.delete("/api/admin/pages/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deletePage(id);
      res.json({ success: true, message: 'Page deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete page' });
    }
  });

  // Publish page
  app.patch("/api/admin/pages/:id/publish", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const page = await storage.publishPage(id);
      res.json(page);
    } catch (error) {
      res.status(500).json({ message: 'Failed to publish page' });
    }
  });

  // ==============================================
  // PUBLIC BLOG ROUTES (for frontend)
  // ==============================================

  // Get published blog posts
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts(true); // Only published
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch blog posts' });
    }
  });

  // Get single published blog post by slug
  app.get("/api/blog-posts/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post || !post.isPublished) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch blog post' });
    }
  });

  // Get published services
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getServices(true); // Only active
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch services' });
    }
  });

  // Get published pages
  app.get("/api/pages", async (req, res) => {
    try {
      const pages = await storage.getPages(true); // Only published
      res.json(pages);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch pages' });
    }
  });

  // Get single published page by slug
  app.get("/api/pages/:slug", async (req, res) => {
    try {
      const page = await storage.getPageBySlug(req.params.slug);
      if (!page || !page.isPublished) {
        return res.status(404).json({ message: 'Page not found' });
      }
      res.json(page);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch page' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
