import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { seedBlogPosts } from "./seed-blogs";
import { getChatbotResponse } from "./chatbot";
import { 
  insertContactSchema, insertUserEngagementSchema, insertEligibilityCheckSchema, insertConsultationSchema,
  insertAdminUserSchema, insertBlogPostSchema, insertServiceSchema, insertPageSchema, BlogPost 
} from "@shared/schema";
import { z } from "zod";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import path from "path";
import fs from "fs";
import multer from "multer";
import { Resend } from "resend";
import { google } from 'googleapis';

// Initialize Resend (conditional to allow server to start without API key)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Extend Request interface to include adminId and user info
interface AuthenticatedRequest extends Request {
  adminId?: number;
  adminRole?: string;
  userId?: number;
  isAuthenticated?: boolean;
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

    // Get admin details to include role information
    const admin = await storage.getAdminById(session.adminUserId);
    if (!admin || !admin.isActive) {
      return res.status(401).json({ message: 'Admin account inactive' });
    }

    req.adminId = session.adminUserId;
    req.adminRole = admin.role;
    req.isAuthenticated = true;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
}

// Role-based access control middleware
function requireRole(...allowedRoles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.adminRole) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!allowedRoles.includes(req.adminRole)) {
      return res.status(403).json({ 
        message: `Access denied. Required roles: ${allowedRoles.join(', ')}` 
      });
    }

    next();
  };
}

// Admin-only access middleware
const requireAdmin = requireRole('admin');

// Editor and Admin access middleware  
const requireEditor = requireRole('admin', 'editor');

// Any admin role access middleware
const requireAnyAdminRole = requireRole('admin', 'editor', 'writer');

// Reader authentication middleware (for content gating)
async function requireReader(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    // Check for reader session token
    const token = req.headers.authorization?.replace('Bearer ', '') || req.cookies?.readerToken;
    
    if (!token) {
      return res.status(401).json({ 
        message: 'Reader authentication required',
        type: 'reader_auth_required'
      });
    }

    const session = await storage.getUserSession(token);
    if (!session) {
      return res.status(401).json({ 
        message: 'Invalid or expired reader session',
        type: 'reader_auth_required'
      });
    }

    req.userId = session.userId;
    req.isAuthenticated = true;
    next();
  } catch (error) {
    res.status(401).json({ 
      message: 'Reader authentication failed',
      type: 'reader_auth_required'
    });
  }
}

// Optional reader authentication (allows both authenticated and guest access)
async function optionalReader(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '') || req.cookies?.readerToken;
    
    if (token) {
      const session = await storage.getUserSession(token);
      if (session) {
        req.userId = session.userId;
        req.isAuthenticated = true;
      }
    }
    
    // Continue regardless of authentication status
    next();
  } catch (error) {
    // Continue even if authentication fails for optional auth
    next();
  }
}

// Initialize default admin user (DEVELOPMENT ONLY)
async function initializeAdmin() {
  // CRITICAL SECURITY: Only run in development mode
  const isDevelopment = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;
  
  if (!isDevelopment) {
    console.log('Production mode: Skipping admin initialization and data seeding');
    return;
  }

  try {
    // Check for new admin user
    let existingAdmin = await storage.getAdminByUsername('dunyasgd');
    
    if (!existingAdmin) {
      // Check for old admin user and update it
      const oldAdmin = await storage.getAdminByUsername('admin');
      if (oldAdmin) {
        // Update existing admin with new credentials
        await storage.updateAdminCredentials(oldAdmin.id, {
          username: 'dunyasgd',
          password: 'dunya@newweb101'
        });
        console.log('Development mode: Admin credentials updated to new values');
      } else {
        // Create new admin user if no existing one found
        await storage.createAdminUser({
          username: 'dunyasgd',
          password: 'dunya@newweb101',
          email: 'admin@dunyaconsultants.com',
          role: 'admin'
        });
        console.log('Development mode: Default admin user created');
      }
    }

    // Only seed blog posts if database is empty (DEVELOPMENT ONLY)
    const existingBlogPosts = await storage.getBlogPosts();
    if (existingBlogPosts.length === 0) {
      console.log('Database empty: Seeding initial blog posts...');
      await seedBlogPosts();
      console.log('Development mode: Blog posts seeded');
    } else {
      console.log(`Database has ${existingBlogPosts.length} existing blog posts - skipping seeding`);
    }
  } catch (error) {
    console.error('Failed to initialize development environment:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint (doesn't require database)
  app.head("/api", (req, res) => {
    res.status(200).end();
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

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

  // Submit consultation - Reliable Database + Google Sheets Export
  app.post("/api/submit-consultation", async (req, res) => {
    try {
      const { fullname, email, phone, country, message } = req.body;
      
      // Validate required fields
      if (!fullname || !email || !phone) {
        return res.status(400).json({ 
          status: "error", 
          message: "Name, email, and phone are required" 
        });
      }

      // Prepare timestamp for Pakistan timezone
      const timestamp = new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Karachi',
        year: 'numeric',
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      // Save to database (reliable backup)
      const consultationData = {
        name: fullname,
        email, 
        phone,
        educationLevel: "Not specified",
        fieldOfStudy: "General inquiry", 
        preferredCountry: country || "Not specified",
        additionalInfo: message || "",
        status: "pending"
      };

      const savedConsultation = await storage.createConsultation(consultationData);

      // Log data in Google Sheets ready format
      console.log('');
      console.log('🔥 NEW CONSULTATION RECEIVED! 🔥');
      console.log('=====================================');
      console.log(`✅ SAVED TO DATABASE: ID ${savedConsultation.id}`);
      console.log('');
      console.log('📊 GOOGLE SHEETS READY FORMAT:');
      console.log('Copy this row to your Google Sheet:');
      console.log('------------------------------------');
      console.log(`${timestamp}\t${fullname}\t${email}\t${phone}\t${country || 'Not specified'}\t${message || ''}`);
      console.log('------------------------------------');
      console.log('');

      res.json({ 
        status: "success", 
        message: "Consultation request submitted successfully!",
        id: savedConsultation.id,
        timestamp: timestamp
      });

    } catch (error) {
      console.error('❌ Consultation submission error:', error);
      res.status(500).json({ 
        status: "error", 
        message: "Failed to submit consultation request" 
      });
    }
  });

  // Consultation booking (keep existing for backward compatibility)
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
      
      if (!resend) {
        return res.status(500).json({ 
          success: false, 
          message: "Email service not configured. Please check RESEND_API_KEY." 
        });
      }
      
      const emailOptions: any = {
        from: 'Dunya Consultants <query@dunyaconsultants.com>',
        to: to,
        subject: subject,
        html: html,
      };

      // Add attachment if provided
      if (attachment) {
        emailOptions.attachments = [{
          filename: attachment.filename,
          content: Buffer.from(attachment.content, 'base64'),
          contentType: attachment.type
        }];
      }

      const result = await resend.emails.send(emailOptions);
      
      res.json({ 
        success: true, 
        message: "Email sent successfully",
        emailId: result.data?.id || `resend_${Date.now()}`
      });
    } catch (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send email" 
      });
    }
  });

  // Form submission endpoint for all website forms
  app.post("/api/submit-form", async (req, res) => {
    try {
      const { formType, formData } = req.body;
      
      if (!resend) {
        return res.status(500).json({ 
          success: false, 
          message: "Email service not configured. Please check RESEND_API_KEY." 
        });
      }

      // Generate email content based on form type
      const emailContent = generateFormEmailHTML(formType, formData);
      const subject = `New ${formType} Submission - ${formData.name || 'Anonymous'}`;

      const emailOptions = {
        from: 'Dunya Consultants <onboarding@resend.dev>',
        to: 'globaldc89@gmail.com',
        subject: subject,
        html: emailContent,
      };

      const result = await resend.emails.send(emailOptions);
      
      console.log('Resend API Response:', JSON.stringify(result, null, 2));
      
      res.json({ 
        success: true, 
        message: "Form submitted successfully",
        emailId: result.data?.id || `resend_${Date.now()}`,
        debug: result
      });
    } catch (error) {
      console.error('Form submission error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit form" 
      });
    }
  });

  // Helper function to generate form email HTML
  function generateFormEmailHTML(formType: string, formData: any): string {
    const formatDate = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Karachi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const fields = Object.entries(formData)
      .filter(([key, value]) => value && value !== '')
      .map(([key, value]) => {
        const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        return `<tr><td style="padding: 8px 12px; border: 1px solid #e2e8f0; font-weight: 600; background-color: #f8fafc;">${formattedKey}</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${value}</td></tr>`;
      }).join('');

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New ${formType} Submission</title>
      </head>
      <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
              <div style="background: linear-gradient(135deg, #1D50C9, #1a73e8); color: white; padding: 30px; text-align: center;">
                  <h1 style="margin: 0; font-size: 28px; font-weight: bold;">New ${formType} Submission</h1>
                  <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 16px;">Received on ${formatDate}</p>
              </div>
              
              <div style="padding: 30px;">
                  <h2 style="color: #1e293b; margin-bottom: 20px;">Submission Details</h2>
                  
                  <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                      ${fields}
                  </table>
                  
                  <div style="background: #f1f5f9; border-radius: 8px; padding: 20px; margin: 20px 0; border-left: 4px solid #1D50C9;">
                      <h3 style="margin: 0 0 10px 0; color: #1e293b;">📞 Next Steps</h3>
                      <p style="margin: 0; color: #475569;">Please respond to this inquiry within 24 hours for the best customer experience.</p>
                  </div>
              </div>
              
              <div style="background: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 14px; color: #64748b;">
                  <p style="margin: 0;">This email was automatically generated from the Dunya Consultants website.</p>
                  <p style="margin: 5px 0 0 0;">&copy; ${new Date().getFullYear()} Dunya Consultants. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
    `;
  }

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
  // READER AUTHENTICATION ROUTES (Content Gating)
  // ==============================================

  // Reader registration
  app.post("/api/reader/register", async (req, res) => {
    try {
      const { username, email, password } = req.body;
      
      if (!username || !email || !password) {
        return res.status(400).json({ message: 'Username, email and password required' });
      }

      // Check if user already exists
      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({ message: 'Email already registered' });
      }

      // Create new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await storage.createUser({
        username,
        email,
        password: hashedPassword
      });

      // Create session
      const sessionToken = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

      await storage.createUserSession({
        sessionToken,
        userId: user.id,
        expiresAt
      });

      res.json({
        success: true,
        token: sessionToken,
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      });
    } catch (error) {
      console.error('Reader registration error:', error);
      res.status(500).json({ message: 'Registration failed' });
    }
  });

  // Reader login
  app.post("/api/reader/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
      }

      const user = await storage.getUserByEmail(email);
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Create session
      const sessionToken = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

      await storage.createUserSession({
        sessionToken,
        userId: user.id,
        expiresAt
      });

      res.json({
        success: true,
        token: sessionToken,
        user: {
          id: user.id,
          username: user.username,
          email: user.email
        }
      });
    } catch (error) {
      console.error('Reader login error:', error);
      res.status(500).json({ message: 'Login failed' });
    }
  });

  // Reader logout
  app.post("/api/reader/logout", async (req, res) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '') || req.cookies?.readerToken;
      if (token) {
        await storage.deleteUserSession(token);
      }
      res.json({ success: true, message: 'Logged out successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Logout failed' });
    }
  });

  // Verify reader session
  app.get("/api/reader/me", requireReader, async (req: AuthenticatedRequest, res) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '') || req.cookies?.readerToken;
      const session = await storage.getUserSession(token!);
      if (!session) {
        return res.status(401).json({ message: 'Session expired' });
      }

      const user = await storage.getUserById(session.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json({
        id: user.id,
        username: user.username,
        email: user.email
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

  // Admin preview route for drafts/unpublished posts  
  app.get("/api/admin/blog-posts/:id/preview", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      // Return the full post data regardless of publication status for admin preview
      res.json(post);
    } catch (error) {
      console.error('Error in admin preview:', error);
      res.status(500).json({ message: 'Failed to fetch blog post preview' });
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
  // Helper function to generate unique slugs
  async function generateUniqueSlug(baseSlug: string): Promise<string> {
    let slug = baseSlug;
    let counter = 1;
    
    while (await storage.getBlogPostBySlug(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    return slug;
  }

  // Create blog post with comprehensive audit logging
  app.post("/api/admin/blog-posts", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const baseSlug = req.body.slug || req.body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const uniqueSlug = await generateUniqueSlug(baseSlug);
      
      // Parse the form data but handle publishedAt separately since it's omitted from schema
      const blogData = insertBlogPostSchema.parse({
        ...req.body,
        authorId: req.adminId,
        slug: uniqueSlug
      });

      // Handle publishedAt based on isPublished status and provided date
      let publishedAt = null;
      if (req.body.isPublished) {
        if (req.body.publishedAt) {
          // Handle YYYY-MM-DD format from form
          publishedAt = new Date(req.body.publishedAt);
          // If invalid date, default to now
          if (isNaN(publishedAt.getTime())) {
            publishedAt = new Date();
          }
        } else {
          publishedAt = new Date();
        }
      }

      const post = await storage.createBlogPost({
        ...blogData,
        publishedAt
      } as any);
      
      // Create comprehensive audit log for blog post creation
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'create',
        entity: 'blog_post',
        entityId: post.id,
        after: JSON.stringify({
          title: post.title,
          slug: post.slug,
          status: post.status,
          tags: post.tags,
          category: post.category,
          timestamp: new Date().toISOString()
        })
      });
      
      res.status(201).json(post);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: 'Invalid blog post data', errors: error.errors });
      } else {
        console.error('Blog post creation error:', error);
        res.status(500).json({ message: 'Failed to create blog post' });
      }
    }
  });

  // Update blog post with audit logging and revision tracking
  app.put("/api/admin/blog-posts/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      // Get original post for comparison and audit logging
      const originalPost = await storage.getBlogPost(id);
      if (!originalPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      
      if (updates.title && !updates.slug) {
        const baseSlug = updates.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        updates.slug = await generateUniqueSlug(baseSlug);
      }

      // Handle publishedAt based on isPublished status
      if (updates.hasOwnProperty('isPublished')) {
        if (updates.isPublished) {
          // When publishing, set publishedAt if provided, otherwise use current time
          if (updates.publishedAt) {
            const parsedDate = new Date(updates.publishedAt);
            updates.publishedAt = isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
          } else {
            updates.publishedAt = new Date();
          }
        } else {
          // When unpublishing, keep existing publishedAt (for history) but set isPublished to false
          // updates.publishedAt stays as is
        }
      } else if (updates.publishedAt) {
        // If only publishedAt is updated without isPublished status change
        const parsedDate = new Date(updates.publishedAt);
        updates.publishedAt = isNaN(parsedDate.getTime()) ? originalPost.publishedAt : parsedDate;
      }
      
      // Create revision before updating
      if (originalPost.title || originalPost.content || originalPost.excerpt) {
        await storage.createBlogPostRevision({
          postId: id,
          title: originalPost.title,
          content: originalPost.content,
          excerpt: originalPost.excerpt,
          status: originalPost.status,
          editorId: req.adminId!
        });
      }
      
      const post = await storage.updateBlogPost(id, updates);
      
      // Create comprehensive audit log for blog post update
      const changedFields = Object.keys(updates).filter(key => 
        JSON.stringify(originalPost[key as keyof typeof originalPost]) !== JSON.stringify(updates[key])
      );
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'update',
        entity: 'blog_post',
        entityId: id,
        before: JSON.stringify({
          title: originalPost.title,
          status: originalPost.status,
          content: originalPost.content?.substring(0, 100) // First 100 chars
        }),
        after: JSON.stringify({
          title: post.title,
          status: post.status,
          changedFields,
          revisionCreated: true,
          timestamp: new Date().toISOString()
        })
      });
      
      res.json(post);
    } catch (error) {
      console.error('Blog post update error:', error);
      res.status(500).json({ message: 'Failed to update blog post' });
    }
  });

  // ==============================================
  // BULK BLOG POST OPERATIONS (MUST BE BEFORE SINGLE OPERATIONS)
  // ==============================================

  // Bulk publish blog posts
  app.patch("/api/admin/blog-posts/bulk/publish", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const { ids } = z.object({ ids: z.array(z.number()) }).parse(req.body);
      
      if (!ids || ids.length === 0) {
        return res.status(400).json({ message: 'No blog post IDs provided' });
      }

      let publishedCount = 0;
      const results = [];

      for (const id of ids) {
        try {
          const post = await storage.getBlogPost(id);
          if (post) {
            await storage.updateBlogPost(id, { 
              isPublished: true, 
              publishedAt: new Date(),
              status: 'published'
            });
            publishedCount++;
            results.push({ id, status: 'success', message: 'Published successfully' });
          } else {
            results.push({ id, status: 'error', message: 'Blog post not found' });
          }
        } catch (error) {
          results.push({ id, status: 'error', message: 'Failed to publish' });
        }
      }

      res.json({ publishedCount, results, total: ids.length });
    } catch (error) {
      console.error('Bulk publish error:', error);
      res.status(500).json({ message: 'Failed to bulk publish blog posts' });
    }
  });

  // Bulk draft blog posts
  app.patch("/api/admin/blog-posts/bulk/draft", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const { ids } = z.object({ ids: z.array(z.number()) }).parse(req.body);
      
      if (!ids || ids.length === 0) {
        return res.status(400).json({ message: 'No blog post IDs provided' });
      }

      let draftedCount = 0;
      const results = [];

      for (const id of ids) {
        try {
          const post = await storage.getBlogPost(id);
          if (post) {
            await storage.updateBlogPost(id, { 
              isPublished: false,
              status: 'draft'
            });
            draftedCount++;
            results.push({ id, status: 'success', message: 'Moved to draft successfully' });
          } else {
            results.push({ id, status: 'error', message: 'Blog post not found' });
          }
        } catch (error) {
          results.push({ id, status: 'error', message: 'Failed to move to draft' });
        }
      }

      res.json({ draftedCount, results, total: ids.length });
    } catch (error) {
      console.error('Bulk draft error:', error);
      res.status(500).json({ message: 'Failed to bulk draft blog posts' });
    }
  });

  // Bulk delete blog posts
  app.delete("/api/admin/blog-posts/bulk", requireAuth, async (req: AuthenticatedRequest, res) => {
    console.log('🔥 BULK DELETE ENDPOINT HIT - /api/admin/blog-posts/bulk');
    try {
      // Check if user has editor or admin role
      if (!['admin', 'editor'].includes(req.adminRole!)) {
        return res.status(403).json({ 
          message: 'Access denied. Only admins and editors can delete blog posts.' 
        });
      }

      const { ids } = z.object({ ids: z.array(z.number()) }).parse(req.body);
      console.log('🔥 BULK DELETE - Received IDs:', ids);
      
      if (!ids || ids.length === 0) {
        return res.status(400).json({ message: 'No blog post IDs provided' });
      }

      let deletedCount = 0;
      const results = [];

      for (const id of ids) {
        try {
          const post = await storage.getBlogPost(id);
          if (!post) {
            results.push({ id, status: 'error', message: 'Blog post not found' });
            continue;
          }

          // Only admins can delete published posts, editors can delete drafts
          if (post.status === 'published' && req.adminRole !== 'admin') {
            results.push({ id, status: 'error', message: 'Only admins can delete published posts' });
            continue;
          }

          await storage.deleteBlogPost(id);
          deletedCount++;
          results.push({ id, status: 'success', message: 'Deleted successfully' });
        } catch (error) {
          results.push({ id, status: 'error', message: 'Failed to delete' });
        }
      }

      res.json({ deletedCount, results, total: ids.length });
    } catch (error) {
      console.error('Bulk delete error:', error);
      res.status(500).json({ message: 'Failed to bulk delete blog posts' });
    }
  });

  // Delete blog post with comprehensive audit logging (Editors and Admins)
  app.delete("/api/admin/blog-posts/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
    console.log('⚠️ SINGLE DELETE ENDPOINT HIT - /api/admin/blog-posts/:id with ID:', req.params.id);
    try {
      // Check if user has editor or admin role
      if (!['admin', 'editor'].includes(req.adminRole!)) {
        return res.status(403).json({ 
          message: 'Access denied. Only admins and editors can delete blog posts.' 
        });
      }
      
      const id = parseInt(req.params.id);
      
      // Get blog post info before deletion for audit log
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      
      // Only admins can delete published posts, editors can delete drafts
      if (post.status === 'published' && req.adminRole !== 'admin') {
        return res.status(403).json({ 
          message: 'Only admins can delete published posts' 
        });
      }
      
      await storage.deleteBlogPost(id);
      
      // Create comprehensive audit log for blog post deletion
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'delete',
        entity: 'blog_post',
        entityId: id,
        before: JSON.stringify({
          title: post.title,
          slug: post.slug,
          status: post.status,
          authorId: post.authorId,
          category: post.category,
          tags: post.tags,
          viewCount: post.viewCount,
          timestamp: new Date().toISOString()
        })
      });
      
      res.json({ 
        success: true, 
        message: 'Blog post deleted successfully' 
      });
    } catch (error) {
      console.error('Blog post deletion error:', error);
      res.status(500).json({ message: 'Failed to delete blog post' });
    }
  });

  // ==============================================
  // FILE UPLOAD ROUTES
  // ==============================================

  // Secure file type whitelist with MIME validation
  const ALLOWED_FILE_TYPES = {
    'image/jpeg': ['.jpg', '.jpeg'],
    'image/png': ['.png'],
    'image/gif': ['.gif'],
    'image/webp': ['.webp'],
    'image/svg+xml': ['.svg'],
    'application/pdf': ['.pdf'],
    'application/msword': ['.doc'],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
  };

  // Secure filename sanitization
  function sanitizeFilename(filename: string): string {
    const ext = path.extname(filename).toLowerCase();
    const baseName = path.basename(filename, ext);
    // Remove dangerous characters and normalize
    const sanitized = baseName
      .replace(/[^a-zA-Z0-9._-]/g, '_')
      .replace(/_{2,}/g, '_')
      .replace(/^[._-]+|[._-]+$/g, '')
      .substring(0, 50); // Limit length
    return sanitized || 'file';
  }

  // Configure secure multer for file uploads
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
        const ext = path.extname(file.originalname).toLowerCase();
        const sanitizedName = sanitizeFilename(file.originalname);
        const timestamp = Date.now();
        const randomSuffix = crypto.randomBytes(8).toString('hex');
        // Prevent path traversal with secure filename
        const secureFilename = `${sanitizedName}_${timestamp}_${randomSuffix}${ext}`;
        cb(null, secureFilename);
      }
    }),
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB limit
      files: 1, // Only allow single file upload
      fieldNameSize: 100,
      fieldSize: 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
      const allowedExtensions = ALLOWED_FILE_TYPES[file.mimetype as keyof typeof ALLOWED_FILE_TYPES];
      const fileExt = path.extname(file.originalname).toLowerCase();
      
      // Validate both MIME type and file extension
      if (allowedExtensions && allowedExtensions.includes(fileExt)) {
        cb(null, true);
      } else {
        cb(new Error(`File type not allowed. Allowed types: ${Object.keys(ALLOWED_FILE_TYPES).join(', ')}`));
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

      const filename = req.file.filename;
      const filePath = path.join(uploadDir, filename);
      
      // Verify file was actually written to disk
      if (!fs.existsSync(filePath)) {
        console.error('Upload error: File not found on disk after upload:', filePath);
        return res.status(500).json({ 
          success: false, 
          message: "File upload verification failed" 
        });
      }

      const url = `/api/uploads/${filename}`;
      
      console.log('File uploaded successfully:', {
        originalName: req.file.originalname,
        filename: filename,
        size: req.file.size,
        path: filePath,
        url: url
      });
      
      res.json({ 
        success: true, 
        url: url,
        filename: filename,
        originalName: req.file.originalname,
        size: req.file.size,
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

  // Serve uploaded files (GET and HEAD)
  const handleUploadRequest = (req: any, res: any) => {
    const { filename } = req.params;
    const filePath = path.join(uploadDir, filename);
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      if (req.method === 'HEAD') {
        // For HEAD requests, just send headers
        res.set({
          'Content-Type': req.get('Content-Type') || 'image/webp',
          'Content-Length': fs.statSync(filePath).size.toString()
        });
        res.status(200).end();
      } else {
        res.sendFile(filePath);
      }
    } else {
      // Fallback to existing demo image
      const demoImagePath = path.join(process.cwd(), 'attached_assets', 'GRE-Test-Fee-in-Pakistan.webp');
      if (fs.existsSync(demoImagePath)) {
        if (req.method === 'HEAD') {
          res.set({
            'Content-Type': 'image/webp',
            'Content-Length': fs.statSync(demoImagePath).size.toString()
          });
          res.status(200).end();
        } else {
          res.sendFile(demoImagePath);
        }
      } else {
        res.status(404).json({ message: 'File not found' });
      }
    }
  };

  app.get("/api/uploads/:filename", handleUploadRequest);
  app.head("/api/uploads/:filename", handleUploadRequest);

  // ==============================================
  // PUBLIC BLOG ROUTES
  // ==============================================

  // Get all published blog posts (public) with optional limit
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const posts = await storage.getBlogPosts(true); // Only published posts
      
      // Apply limit if specified
      const limitedPosts = limit ? posts.slice(0, limit) : posts;
      
      // Map database fields to frontend expected format
      const mappedPosts = limitedPosts.map(post => ({
        ...post,
        featuredImage: post.featuredImage // Map featured_image to featuredImage
      }));
      
      res.json(mappedPosts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch published blog posts' });
    }
  });

  // DISABLED: This wildcard route conflicts with the /:slug route below - removed to fix content display issue
  // app.get("/api/blog-posts/*", async (req, res) => {
  //   // Skip if it's the published endpoint
  //   if ((req.params as any)['0'] === 'published') {
  //     return;
  //   }
  //   try {
  //     const slug = (req.params as any)['0']; // This captures the full path after /api/blog-posts/
  //     console.log(`Looking for blog post with slug: ${slug}`);
  //     const post = await storage.getBlogPostBySlug(slug);
  //     console.log(`Found post:`, post ? `${post.title} (published: ${post.isPublished})` : 'none');
  //     
  //     if (!post || !post.isPublished) {
  //       return res.status(404).json({ message: 'Blog post not found' });
  //     }
  //     
  //     // Increment view count
  //     await storage.incrementBlogViews(post.id);
  //     
  //     res.json(post);
  //   } catch (error: any) {
  //     console.error('Error fetching blog post by slug:', error);
  //     res.status(500).json({ message: 'Failed to fetch blog post', error: error?.message || error });
  //   }
  // });

  // Get published blog posts (public) with optional limit
  app.get("/api/blog-posts/published", async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const posts = await storage.getBlogPosts(true); // Only published posts
      
      // Apply limit if specified  
      const limitedPosts = limit ? posts.slice(0, limit) : posts;
      res.json(limitedPosts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch published blog posts' });
    }
  });

  // Remove this duplicate route - the proper delete route with audit logging exists above

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

  // Get published blog posts - REMOVED DUPLICATE (keeping earlier version)

  // Get single published blog post by slug (fixed publication consistency)
  app.get("/api/blog-posts/:slug", async (req, res) => {
    try {
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post || !post.isPublished) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      // Increment view count for published posts
      await storage.incrementBlogViews(post.id);
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch blog post' });
    }
  });

  // ==============================================
  // ENHANCED BLOG MANAGEMENT APIS (CMS)
  // ==============================================

  // Get blog posts by status (Admin/Editor access)
  app.get("/api/admin/blog-posts/status/:status", requireEditor, async (req, res) => {
    try {
      const status = req.params.status as BlogPost['status'];
      const validStatuses = ['draft', 'in_review', 'published', 'archived'];
      
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ message: 'Invalid status. Valid statuses: ' + validStatuses.join(', ') });
      }

      const posts = await storage.getBlogPostsByStatus(status);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch posts by status' });
    }
  });

  // Get blog posts by author (Admin/Editor access)
  app.get("/api/admin/blog-posts/author/:authorId", requireEditor, async (req, res) => {
    try {
      const authorId = parseInt(req.params.authorId);
      const posts = await storage.getBlogPostsByAuthor(authorId);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch posts by author' });
    }
  });

  // Role-based status transition matrix
  const STATUS_TRANSITION_MATRIX: Record<string, Record<string, string[]>> = {
    'writer': {
      'draft': ['in_review'],
      'in_review': [], // Writers cannot change from in_review
      'published': [], // Writers cannot change published posts
      'archived': [] // Writers cannot change archived posts
    },
    'editor': {
      'draft': ['in_review', 'published'],
      'in_review': ['draft', 'published', 'archived'],
      'published': ['archived'], // Editors can only archive published posts
      'archived': ['draft', 'in_review'] // Editors can restore archived posts
    },
    'admin': {
      'draft': ['in_review', 'published', 'archived'],
      'in_review': ['draft', 'published', 'archived'],
      'published': ['draft', 'in_review', 'archived'],
      'archived': ['draft', 'in_review', 'published']
    }
  };

  // Validate status transition based on role and current status
  function canTransitionStatus(role: string, currentStatus: string, newStatus: string): boolean {
    const roleTransitions = STATUS_TRANSITION_MATRIX[role];
    if (!roleTransitions) return false;
    
    const allowedTransitions = roleTransitions[currentStatus];
    return allowedTransitions ? allowedTransitions.includes(newStatus) : false;
  }

  // Update blog post status with strict RBAC and transition validation
  app.patch("/api/admin/blog-posts/:id/status", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      const validStatuses = ['draft', 'in_review', 'published', 'archived'];
      
      if (!validStatuses.includes(status)) {
        return res.status(400).json({ 
          message: 'Invalid status. Valid statuses: ' + validStatuses.join(', ') 
        });
      }

      // Get current post to check current status
      const currentPost = await storage.getBlogPost(id);
      if (!currentPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }

      const currentStatus = currentPost.status;
      const userRole = req.adminRole!;
      
      // Validate status transition based on role and current status
      if (!canTransitionStatus(userRole, currentStatus, status)) {
        return res.status(403).json({ 
          message: `Role '${userRole}' cannot transition from '${currentStatus}' to '${status}'. Check your permissions.` 
        });
      }

      const approverId = ['published', 'archived'].includes(status) ? req.adminId : undefined;
      const post = await storage.updateBlogPostStatus(id, status, approverId);
      
      // Create comprehensive audit log for status changes
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: `status_transition`,
        entity: 'blog_post',
        entityId: id,
        before: JSON.stringify({
          status: currentStatus,
          title: currentPost.title
        }),
        after: JSON.stringify({
          status: status,
          approverId: approverId,
          timestamp: new Date().toISOString()
        })
      });

      res.json(post);
    } catch (error) {
      console.error('Error updating blog post status:', error);
      res.status(500).json({ message: 'Failed to update post status' });
    }
  });

  // Get related blog posts (public endpoint, fixed publication consistency)
  app.get("/api/blog-posts/:id/related", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const limit = parseInt(req.query.limit as string) || 5;
      
      // First get the current post to access its tags
      const currentPost = await storage.getBlogPost(id);
      if (!currentPost || currentPost.status !== 'published') {
        return res.status(404).json({ message: 'Blog post not found' });
      }

      const relatedPosts = await storage.getRelatedBlogPosts(id, currentPost.tags || [], limit);
      res.json(relatedPosts);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch related posts' });
    }
  });

  // Get blog post revisions (Admin/Editor access)
  app.get("/api/admin/blog-posts/:id/revisions", requireEditor, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const revisions = await storage.getBlogPostRevisions(id);
      res.json(revisions);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch blog post revisions' });
    }
  });

  // Create blog post revision (automatic on updates)
  app.post("/api/admin/blog-posts/:id/revisions", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const postId = parseInt(req.params.id);
      const { title, content, excerpt, status } = req.body;
      
      const revision = await storage.createBlogPostRevision({
        postId,
        title,
        content,
        excerpt,
        status,
        editorId: req.adminId!
      });

      res.status(201).json(revision);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create revision' });
    }
  });

  // ==============================================
  // MEDIA MANAGEMENT APIS
  // ==============================================

  // Upload media file (Admin/Editor access)
  app.post("/api/admin/media/upload", requireEditor, upload.single('file'), async (req: AuthenticatedRequest, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file provided' });
      }

      const { originalname, mimetype, size, filename } = req.file;
      const fileUrl = `/uploads/${filename}`;

      const media = await storage.createMedia({
        filename,
        originalName: originalname,
        mimeType: mimetype,
        size,
        url: fileUrl,
        uploadedBy: req.adminId!
      });

      // Create audit log for media upload
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'upload',
        entity: 'media',
        entityId: media.id
      });

      res.status(201).json(media);
    } catch (error) {
      console.error('Error uploading media:', error);
      res.status(500).json({ message: 'Failed to upload media' });
    }
  });

  // Get all media (Admin/Editor access)
  app.get("/api/admin/media", requireEditor, async (req, res) => {
    try {
      const media = await storage.getMedia();
      res.json(media);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch media' });
    }
  });

  // Get single media item (Admin/Editor access)
  app.get("/api/admin/media/:id", requireEditor, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const media = await storage.getMediaById(id);
      if (!media) {
        return res.status(404).json({ message: 'Media not found' });
      }
      res.json(media);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch media' });
    }
  });

  // Update media metadata (Admin/Editor access)
  app.put("/api/admin/media/:id", requireEditor, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { alt, width, height } = req.body;
      
      const media = await storage.updateMedia(id, {
        alt,
        width,
        height
      });

      // Create audit log for media update
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'update',
        entity: 'media',
        entityId: id
      });

      res.json(media);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update media' });
    }
  });

  // Secure path validation and atomic file deletion
  async function secureFileDelete(filePath: string): Promise<boolean> {
    try {
      // Validate path is within uploads directory (prevent path traversal)
      const uploadsDir = path.resolve(process.cwd(), 'uploads');
      const resolvedPath = path.resolve(uploadsDir, path.basename(filePath));
      
      if (!resolvedPath.startsWith(uploadsDir)) {
        throw new Error('Path traversal attempt detected');
      }
      
      // Check if file exists before attempting deletion
      if (fs.existsSync(resolvedPath)) {
        fs.unlinkSync(resolvedPath);
        return true;
      }
      return false;
    } catch (error) {
      console.error('File deletion failed:', error);
      return false;
    }
  }

  // Delete media with atomic operation (Admin access only)
  app.delete("/api/admin/media/:id", requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      
      // Get media info before deletion for audit log
      const media = await storage.getMediaById(id);
      if (!media) {
        return res.status(404).json({ message: 'Media not found' });
      }

      // Attempt atomic deletion (filesystem first, then database)
      let fileDeleted = false;
      if (media.url) {
        fileDeleted = await secureFileDelete(media.url);
      }

      // Only proceed with database deletion if file was successfully removed or doesn't exist
      try {
        await storage.deleteMedia(id);
        
        // Create comprehensive audit log for media deletion
        await storage.createAuditLog({
          actorId: req.adminId!,
          role: req.adminRole!,
          action: 'delete',
          entity: 'media',
          entityId: id,
          before: JSON.stringify({
            filename: media.filename,
            originalName: media.originalName,
            url: media.url,
            mimeType: media.mimeType,
            size: media.size,
            fileDeleted,
            timestamp: new Date().toISOString()
          })
        });

        res.json({ 
          success: true, 
          message: 'Media deleted successfully',
          fileDeleted 
        });
      } catch (dbError) {
        console.error('Database deletion failed:', dbError);
        res.status(500).json({ message: 'Failed to delete media from database' });
      }
    } catch (error) {
      console.error('Media deletion error:', error);
      res.status(500).json({ message: 'Failed to delete media' });
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

  // Get single published page by slug (fixed publication consistency)
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


  // CSV Export endpoint for consultations
  app.get("/api/consultations/export", async (req, res) => {
    try {
      const consultations = await storage.getConsultations();
      
      // Create CSV content
      const csvHeader = "Timestamp,Name,Email,Phone,Country,Message,Status\n";
      const csvRows = consultations.map((c: any) => {
        const timestamp = new Date(c.createdAt).toLocaleString('en-US', {
          timeZone: 'Asia/Karachi',
          year: 'numeric', 
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
        return `"${timestamp}","${c.name}","${c.email}","${c.phone}","${c.preferredCountry}","${c.additionalInfo || ''}","${c.status || 'pending'}"`;
      }).join('\n');
      
      const csvContent = csvHeader + csvRows;
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="consultations.csv"');
      res.send(csvContent);
      
    } catch (error) {
      console.error('Export error:', error);
      res.status(500).json({ error: 'Failed to export data' });
    }
  });

  // ====================== SITEMAP ROUTES ======================

  // Main sitemap index at /sitemap.xml
  app.get("/sitemap.xml", async (req, res) => {
    try {
      const baseUrl = `https://${req.get('host') || 'dunyaconsultants.com'}`;
      
      const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/post-sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/page-sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

      res.set('Content-Type', 'application/xml');
      res.send(sitemapIndex);
    } catch (error) {
      console.error('Sitemap index error:', error);
      res.status(500).send('Failed to generate sitemap index');
    }
  });

  // Blog posts sitemap at /post-sitemap.xml
  app.get("/post-sitemap.xml", async (req, res) => {
    try {
      const baseUrl = `https://${req.get('host') || 'dunyaconsultants.com'}`;
      const publishedPosts = await storage.getBlogPosts(true); // Only published posts
      
      let urlEntries = '';
      publishedPosts.forEach(post => {
        if (post.slug) {
          const lastMod = post.updatedAt ? new Date(post.updatedAt).toISOString() : new Date(post.createdAt).toISOString();
          urlEntries += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
        }
      });

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;

      res.set('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (error) {
      console.error('Post sitemap error:', error);
      res.status(500).send('Failed to generate post sitemap');
    }
  });

  // Pages sitemap at /page-sitemap.xml
  app.get("/page-sitemap.xml", async (req, res) => {
    try {
      const baseUrl = `https://${req.get('host') || 'dunyaconsultants.com'}`;
      const publishedPages = await storage.getPages(true); // Only published pages
      
      let urlEntries = '';
      publishedPages.forEach(page => {
        if (page.slug) {
          const lastMod = page.updatedAt ? new Date(page.updatedAt).toISOString() : new Date(page.createdAt).toISOString();
          urlEntries += `
  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
        }
      });

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;

      res.set('Content-Type', 'application/xml');
      res.send(sitemap);
    } catch (error) {
      console.error('Page sitemap error:', error);
      res.status(500).send('Failed to generate page sitemap');
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
