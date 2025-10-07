import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { seedBlogPosts } from "./seed-blogs";
import { getChatbotResponse } from "./chatbot";
import { 
  insertContactSchema, insertUserEngagementSchema, insertEligibilityCheckSchema, insertConsultationSchema,
  insertAdminUserSchema, insertBlogPostSchema, insertServiceSchema, insertPageSchema, BlogPost, EditingSession, EditRequest,
  insertCategorySchema, Category, blogPostCategories, insertEventRegistrationSchema
} from "@shared/schema";
import { db } from "./db";
import { eq, sql } from "drizzle-orm";
import { z } from "zod";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import path from "path";
import fs from "fs";
import multer from "multer";
import { Resend } from "resend";
import { google } from 'googleapis';
import { generateUniqueToken, generateRegistrationQRCode } from "./qr-service";
import { appendToSheet } from "./google-sheets-service";
import sgMail from '@sendgrid/mail';

// Initialize Resend (conditional to allow server to start without API key)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Initialize SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

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
const requireUser = requireRole('admin', 'editor');

// Any admin role access middleware (for backwards compatibility)
const requireAnyAdminRole = requireRole('admin', 'editor');

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

    // Create default user account for testing (DEVELOPMENT ONLY)
    let existingUser = await storage.getAdminByUsername('testuser');
    
    if (!existingUser) {
      try {
        await storage.createAdminUser({
          username: 'testuser',
          password: 'testuser123',
          email: 'testuser@dunyaconsultants.com',
          role: 'editor'
        });
        console.log('Development mode: Default test user created');
      } catch (error) {
        console.log('Development mode: Test user already exists or creation failed');
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

  // Events API routes
  app.get("/api/events", async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch events" 
      });
    }
  });

  app.get("/api/events/:id", async (req, res) => {
    try {
      const event = await storage.getEventById(parseInt(req.params.id));
      if (!event) {
        return res.status(404).json({ success: false, message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch event" 
      });
    }
  });

  app.get("/api/events/slug/:slug", async (req, res) => {
    try {
      const event = await storage.getEventBySlug(req.params.slug);
      if (!event) {
        return res.status(404).json({ success: false, message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch event" 
      });
    }
  });

  app.post("/api/events/register", async (req, res) => {
    try {
      const registrationData = insertEventRegistrationSchema.parse(req.body);
      
      // Generate unique token for QR code
      const token = generateUniqueToken();
      
      // Create registration with token
      const registration = await storage.createEventRegistration({
        ...registrationData,
        token
      });

      // Generate QR code
      console.log('About to generate QR code for registration:', registration.id);
      const { qrCodeUrl } = await generateRegistrationQRCode(
        registration.id,
        token,
        registration.eventId
      );
      console.log('QR code generated, URL:', qrCodeUrl);

      // Update registration with QR code URL
      await storage.updateEventRegistrationQR(registration.id, qrCodeUrl);
      console.log('Registration updated with QR code URL');

      // Get event details for email and Google Sheets
      const event = await storage.getEventById(registration.eventId);
      
      if (event) {
        // Sync to Google Sheets (async, don't block response)
        if (process.env.GOOGLE_SHEETS_SPREADSHEET_ID) {
          appendToSheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID, {
            eventTitle: event.title,
            name: registration.name,
            email: registration.email,
            phone: registration.phone,
            education: registration.education,
            destination: registration.destination,
            registrationDate: new Date().toISOString(),
            qrToken: token,
          }).catch(err => console.error('Google Sheets sync error:', err));
        }

        // Send confirmation email using SendGrid
        if (process.env.SENDGRID_API_KEY) {
          const emailData = {
            to: registration.email,
            from: process.env.SENDGRID_FROM_EMAIL || 'noreply@pathvisaconsultants.com',
            subject: `Registration Confirmed: ${event.title}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(135deg, #1D50C9 0%, #0f3a8a 100%); padding: 30px; text-align: center;">
                  <h1 style="color: white; margin: 0;">Registration Confirmed!</h1>
                </div>
                <div style="padding: 30px; background: #f9f9f9;">
                  <p style="font-size: 16px; color: #333;">Dear ${registration.name},</p>
                  <p style="font-size: 14px; color: #666;">Thank you for registering for <strong>${event.title}</strong>!</p>
                  <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
                    <h2 style="color: #1D50C9; margin-top: 0;">Your Event QR Code</h2>
                    <img src="${process.env.REPL_ID ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co${qrCodeUrl}` : `http://localhost:5000${qrCodeUrl}`}" alt="QR Code" style="max-width: 300px;" />
                    <p style="color: #666; margin-top: 15px;">Please show this QR code to our staff on the event date to receive your special prize!</p>
                  </div>
                  <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #1D50C9; margin-top: 0;">Event Details</h3>
                    <p style="margin: 5px 0;"><strong>Event:</strong> ${event.title}</p>
                    <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date(event.eventDate).toLocaleDateString()}</p>
                    <p style="margin: 5px 0;"><strong>Venue:</strong> ${event.venue || 'TBA'}</p>
                  </div>
                  <div style="background: #e8f4f8; padding: 15px; border-left: 4px solid #1D50C9; margin: 20px 0;">
                    <p style="margin: 0; color: #333;"><strong>🎁 Prize Eligibility:</strong> Scan this QR code at the event to become eligible for a prize. Prizes will be distributed within 7-10 days after the event.</p>
                  </div>
                  <p style="font-size: 14px; color: #666;">We look forward to seeing you at the event!</p>
                  <p style="font-size: 14px; color: #666;">Best regards,<br><strong>Dunya Consultants Team</strong></p>
                </div>
                <div style="background: #333; padding: 20px; text-align: center; color: #999; font-size: 12px;">
                  <p style="margin: 0;">© ${new Date().getFullYear()} Dunya Consultants. All rights reserved.</p>
                </div>
              </div>
            `,
          };

          sgMail.send(emailData).catch(err => console.error('SendGrid email error:', err));
        }
      }

      // Return registration with QR code
      const updatedRegistration = await storage.getEventRegistrationByToken(token);
      res.json({ success: true, registration: updatedRegistration });
    } catch (error) {
      console.error('Registration error:', error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid registration data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit registration" 
        });
      }
    }
  });

  // Admin Events Management
  app.get("/api/admin/events", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const events = await storage.getAllEvents();
      res.json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ message: "Failed to fetch events" });
    }
  });

  app.get("/api/admin/events/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const event = await storage.getEventById(id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      console.error("Error fetching event:", error);
      res.status(500).json({ message: "Failed to fetch event" });
    }
  });

  app.post("/api/admin/events", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const eventData = req.body;
      // Convert eventDate string to Date object
      if (eventData.eventDate && typeof eventData.eventDate === 'string') {
        eventData.eventDate = new Date(eventData.eventDate);
      }
      const event = await storage.createEvent(eventData);
      res.json(event);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ message: "Failed to create event" });
    }
  });

  app.patch("/api/admin/events/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const eventData = req.body;
      // Convert eventDate string to Date object if present
      if (eventData.eventDate && typeof eventData.eventDate === 'string') {
        eventData.eventDate = new Date(eventData.eventDate);
      }
      const event = await storage.updateEvent(id, eventData);
      res.json(event);
    } catch (error) {
      console.error("Error updating event:", error);
      res.status(500).json({ message: "Failed to update event" });
    }
  });

  app.delete("/api/admin/events/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteEvent(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting event:", error);
      res.status(500).json({ message: "Failed to delete event" });
    }
  });

  // Event Registration Management
  app.get("/api/admin/events/:eventId/registrations", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const eventId = parseInt(req.params.eventId);
      const registrations = await storage.getEventRegistrations(eventId);
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({ message: "Failed to fetch registrations" });
    }
  });

  app.get("/api/admin/registrations", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const registrations = await storage.getEventRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching all registrations:", error);
      res.status(500).json({ message: "Failed to fetch registrations" });
    }
  });

  // QR Code Scanning for Attendance
  app.post("/api/admin/scan-attendance", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const { token } = req.body;
      
      if (!token) {
        return res.status(400).json({ success: false, message: "QR token is required" });
      }

      const registration = await storage.markAttendance(token);
      
      if (!registration) {
        return res.status(404).json({ success: false, message: "Invalid QR code or registration not found" });
      }

      if (registration.isAttended && registration.attendedAt && 
          new Date(registration.attendedAt).getTime() < Date.now() - 60000) {
        return res.json({ 
          success: true, 
          message: "Attendance already marked",
          registration,
          alreadyScanned: true
        });
      }

      res.json({ 
        success: true, 
        message: "Attendance marked successfully! User is now eligible for prize.",
        registration 
      });
    } catch (error) {
      console.error("Error marking attendance:", error);
      res.status(500).json({ success: false, message: "Failed to mark attendance" });
    }
  });

  // Prize Management
  app.patch("/api/admin/registrations/:id/prize", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!['pending', 'eligible', 'distributed'].includes(status)) {
        return res.status(400).json({ message: "Invalid prize status" });
      }

      const registration = await storage.updatePrizeStatus(id, status);
      res.json(registration);
    } catch (error) {
      console.error("Error updating prize status:", error);
      res.status(500).json({ message: "Failed to update prize status" });
    }
  });

  // Get all event registrations
  app.get("/api/events/registrations/all", async (req, res) => {
    try {
      const registrations = await storage.getAllEventRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching registrations:", error);
      res.status(500).json({ message: "Failed to fetch registrations" });
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

      // Send email notification to info@dunyaconsultants.com
      if (resend) {
        try {
          const emailContent = generateFormEmailHTML('Consultation Request', {
            name: fullname,
            email,
            phone,
            interestedCountry: country || 'Not specified',
            message: message || 'No additional message provided'
          });

          await resend.emails.send({
            from: 'Dunya Consultants <noreply@dunyaconsultants.com>',
            to: 'info@dunyaconsultants.com',
            subject: `New Consultation Request - ${fullname}`,
            html: emailContent,
          });
        } catch (emailError) {
          console.error('Failed to send consultation email:', emailError);
          // Don't fail the request if email fails
        }
      }

      // Google Sheets Integration
      try {
        // Fix private key formatting
        let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY || '';
        if (privateKey && !privateKey.includes('-----BEGIN')) {
          try {
            privateKey = Buffer.from(privateKey, 'base64').toString('utf-8');
          } catch {
            privateKey = privateKey.replace(/\\n/g, '\n');
          }
        } else {
          privateKey = privateKey.replace(/\\n/g, '\n');
        }

        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
            private_key: privateKey,
          },
          scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets = google.sheets({ version: 'v4', auth });
        const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '1XjRr8IFPelGd_CkdN0Ei-l8ryWcWIsY3QLU4N5IQtgc';

        // Append data to Google Sheets
        const values = [[
          timestamp,           // Column A: Timestamp
          fullname,           // Column B: Full Name
          email,              // Column C: Email
          phone,              // Column D: Phone
          country || 'Not specified',  // Column E: Country
          message || ''       // Column F: Message
        ]];

        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: 'Sheet1!A:F',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values,
          },
        });

        console.log('✅ Successfully saved to Google Sheets');
        
        // Log success
        console.log('');
        console.log('🔥 NEW CONSULTATION RECEIVED! 🔥');
        console.log('=====================================');
        console.log(`✅ SAVED TO DATABASE: ID ${savedConsultation.id}`);
        console.log(`✅ SAVED TO GOOGLE SHEETS: ${spreadsheetId}`);
        console.log(`📧 Lead: ${fullname} - ${email} - ${country || 'Not specified'}`);
        console.log('');

      } catch (sheetsError) {
        const errorMessage = sheetsError instanceof Error ? sheetsError.message : 'Unknown Google Sheets error';
        console.error('❌ Google Sheets error (data still saved to database):', errorMessage);
      }

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

  // Add demo data to Google Sheets - for testing only
  app.post("/api/add-demo-consultation", async (req, res) => {
    try {
      // Demo data samples
      const demoData = [
        {
          fullname: "Ahmed Khan",
          email: "ahmed.khan@example.com", 
          phone: "+92 300 1234567",
          country: "Canada",
          message: "Interested in pursuing Masters in Computer Science. Looking for guidance on university selection and visa process."
        },
        {
          fullname: "Fatima Ali",
          email: "fatima.ali@example.com",
          phone: "+92 301 7654321", 
          country: "United Kingdom",
          message: "Want to study MBA in UK. Need help with application process and scholarship opportunities."
        },
        {
          fullname: "Hassan Sheikh",
          email: "hassan.sheikh@example.com",
          phone: "+92 302 9876543",
          country: "Australia", 
          message: "Planning to study Engineering in Australia. Need consultation for university requirements."
        }
      ];

      const results = [];

      for (const demo of demoData) {
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

        // Save to database
        const consultationData = {
          name: demo.fullname,
          email: demo.email,
          phone: demo.phone,
          educationLevel: "Bachelor's Degree",
          fieldOfStudy: "Demo Inquiry", 
          preferredCountry: demo.country,
          additionalInfo: demo.message,
          status: "pending"
        };

        const savedConsultation = await storage.createConsultation(consultationData);

        // Google Sheets Integration
        try {
          // Fix private key formatting
          let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY || '';
          if (privateKey && !privateKey.includes('-----BEGIN')) {
            try {
              privateKey = Buffer.from(privateKey, 'base64').toString('utf-8');
            } catch {
              privateKey = privateKey.replace(/\\n/g, '\n');
            }
          } else {
            privateKey = privateKey.replace(/\\n/g, '\n');
          }

          const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
              private_key: privateKey,
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
          });

          const sheets = google.sheets({ version: 'v4', auth });
          const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '1XjRr8IFPelGd_CkdN0Ei-l8ryWcWIsY3QLU4N5IQtgc';

          // Append data to Google Sheets
          const values = [[
            timestamp,
            demo.fullname,
            demo.email,
            demo.phone,
            demo.country,
            demo.message
          ]];

          await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: 'Sheet1!A:F',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values,
            },
          });

          results.push({
            name: demo.fullname,
            status: "success",
            database_id: savedConsultation.id,
            sheets_status: "saved"
          });

        } catch (sheetsError) {
          const errorMessage = sheetsError instanceof Error ? sheetsError.message : 'Unknown error';
          console.error('❌ Google Sheets error for demo data:', sheetsError);
          results.push({
            name: demo.fullname,
            status: "partial_success",
            database_id: savedConsultation.id,
            sheets_status: "failed",
            error: errorMessage
          });
        }
      }

      console.log('');
      console.log('🚀 DEMO DATA ADDED! 🚀');
      console.log('====================');
      console.log(`✅ Added ${results.length} demo consultation records`);
      console.log(`📊 Check your Google Sheet: https://docs.google.com/spreadsheets/d/1XjRr8IFPelGd_CkdN0Ei-l8ryWcWIsY3QLU4N5IQtgc/edit`);
      console.log('');

      res.json({ 
        status: "success", 
        message: `Successfully added ${results.length} demo consultation records`,
        results: results
      });

    } catch (error) {
      console.error('❌ Demo data addition error:', error);
      res.status(500).json({ 
        status: "error", 
        message: "Failed to add demo data" 
      });
    }
  });

  // Consultation booking (keep existing for backward compatibility)
  app.post("/api/consultations", async (req, res) => {
    try {
      const consultationData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(consultationData);

      // Send email notification to info@dunyaconsultants.com
      if (resend) {
        try {
          const emailContent = generateFormEmailHTML('Consultation Booking Form', req.body);
          await resend.emails.send({
            from: 'Dunya Consultants <noreply@dunyaconsultants.com>',
            to: 'info@dunyaconsultants.com',
            subject: `New Consultation Booking - ${req.body.name || 'Anonymous'}`,
            html: emailContent,
          });
        } catch (emailError) {
          console.error('Failed to send consultation booking email:', emailError);
        }
      }

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

      // Send email notification to info@dunyaconsultants.com
      if (resend) {
        try {
          const emailContent = generateFormEmailHTML('Contact Form', req.body);
          await resend.emails.send({
            from: 'Dunya Consultants <noreply@dunyaconsultants.com>',
            to: 'info@dunyaconsultants.com',
            subject: `New Contact Form Submission - ${req.body.name || 'Anonymous'}`,
            html: emailContent,
          });
        } catch (emailError) {
          console.error('Failed to send contact email:', emailError);
        }
      }

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
        from: 'Dunya Consultants <noreply@dunyaconsultants.com>',
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
        from: 'Dunya Consultants <noreply@dunyaconsultants.com>',
        to: 'info@dunyaconsultants.com',
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
  // AUTHENTICATION ROUTES
  // ==============================================

  // User login
  app.post("/api/user/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: 'Username and password required' });
      }

      const user = await storage.getAdminByUsername(username);
      if (!user || !user.isActive) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Create session
      const sessionToken = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

      await storage.createAdminSession({
        sessionToken,
        adminUserId: user.id,
        expiresAt
      });

      await storage.updateAdminLastLogin(user.id);

      res.json({
        success: true,
        token: sessionToken,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      console.error('User login error:', error);
      res.status(500).json({ message: 'Login failed' });
    }
  });

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
  // USER MANAGEMENT ROUTES (Admin Only)
  // ==============================================

  // Get all admin users (for user management interface)
  app.get("/api/admin/users", requireAuth, requireAdmin, async (req, res) => {
    try {
      const users = await storage.getAllAdminUsers();
      res.json(users);
    } catch (error) {
      console.error('Error fetching admin users:', error);
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  });

  // Create new admin user
  app.post("/api/admin/users", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const { username, email, password, role, permissions } = req.body;
      
      if (!username || !email || !password || !role) {
        return res.status(400).json({ message: 'Username, email, password, and role are required' });
      }

      // Check if user already exists
      const existingUser = await storage.getAdminByUsername(username);
      if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
      }

      // Validate role
      const validRoles = ['admin', 'editor', 'publisher', 'custom'];
      if (!validRoles.includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
      }

      // Create the admin user
      const newUser = await storage.createAdminUser({
        username,
        email,
        password,
        role,
        permissions: permissions || null,
        isActive: true
      });

      // Remove password from response
      const { password: _, ...userResponse } = newUser;
      res.status(201).json(userResponse);
    } catch (error) {
      console.error('Error creating admin user:', error);
      res.status(500).json({ message: 'Failed to create user' });
    }
  });

  // Update admin user (role and permissions)
  app.put("/api/admin/users/:id", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const userId = parseInt(req.params.id);
      const { role, permissions, isActive } = req.body;

      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }

      // Prevent admin from deactivating themselves
      if (req.adminId === userId && isActive === false) {
        return res.status(400).json({ message: 'Cannot deactivate your own account' });
      }

      const updates: any = {};
      if (role !== undefined) {
        const validRoles = ['admin', 'editor', 'publisher', 'custom'];
        if (!validRoles.includes(role)) {
          return res.status(400).json({ message: 'Invalid role' });
        }
        updates.role = role;
      }
      if (permissions !== undefined) updates.permissions = permissions;
      if (isActive !== undefined) updates.isActive = isActive;

      const updatedUser = await storage.updateAdminUser(userId, updates);
      
      // Remove password from response
      const { password: _, ...userResponse } = updatedUser;
      res.json(userResponse);
    } catch (error) {
      console.error('Error updating admin user:', error);
      res.status(500).json({ message: 'Failed to update user' });
    }
  });

  // Delete admin user (soft delete)
  app.delete("/api/admin/users/:id", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const userId = parseInt(req.params.id);

      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }

      // Prevent admin from deleting themselves
      if (req.adminId === userId) {
        return res.status(400).json({ message: 'Cannot delete your own account' });
      }

      await storage.deleteAdminUser(userId);
      res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting admin user:', error);
      res.status(500).json({ message: 'Failed to delete user' });
    }
  });

  // ==============================================
  // POST ASSIGNMENT ROUTES (Admin Only)
  // ==============================================

  // Assign post to user
  app.post("/api/admin/post-assignments", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const { userId, postId } = req.body;

      if (!userId || !postId) {
        return res.status(400).json({ message: 'User ID and Post ID are required' });
      }

      const assignment = await storage.assignPostToUser({
        userId,
        postId,
        assignedBy: req.adminId!
      });

      res.status(201).json(assignment);
    } catch (error) {
      console.error('Error assigning post to user:', error);
      res.status(500).json({ message: 'Failed to assign post' });
    }
  });

  // Remove post assignment
  app.delete("/api/admin/post-assignments/:userId/:postId", requireAuth, requireAdmin, async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const postId = parseInt(req.params.postId);

      if (isNaN(userId) || isNaN(postId)) {
        return res.status(400).json({ message: 'Invalid user ID or post ID' });
      }

      await storage.removePostAssignment(userId, postId);
      res.json({ success: true, message: 'Post assignment removed' });
    } catch (error) {
      console.error('Error removing post assignment:', error);
      res.status(500).json({ message: 'Failed to remove assignment' });
    }
  });

  // Editing Session Management Endpoints
  
  // Start editing session for a post
  app.post("/api/admin/editing-sessions", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const { postId } = req.body;

      if (!postId) {
        return res.status(400).json({ message: 'Post ID is required' });
      }

      // Clean up any inactive sessions first
      await storage.cleanupInactiveEditingSessions();

      // Start new editing session
      const session = await storage.startEditingSession({
        postId: parseInt(postId),
        userId: req.adminId!
      });

      res.status(201).json(session);
    } catch (error) {
      console.error('Error starting editing session:', error);
      res.status(500).json({ message: 'Failed to start editing session' });
    }
  });

  // Update editing activity (keep-alive)
  app.put("/api/admin/editing-sessions/:sessionId/activity", requireAuth, async (req, res) => {
    try {
      const sessionId = parseInt(req.params.sessionId);

      if (isNaN(sessionId)) {
        return res.status(400).json({ message: 'Invalid session ID' });
      }

      await storage.updateEditingActivity(sessionId);
      res.json({ success: true, message: 'Activity updated' });
    } catch (error) {
      console.error('Error updating editing activity:', error);
      res.status(500).json({ message: 'Failed to update activity' });
    }
  });

  // End editing session
  app.delete("/api/admin/editing-sessions/:sessionId", requireAuth, async (req, res) => {
    try {
      const sessionId = parseInt(req.params.sessionId);

      if (isNaN(sessionId)) {
        return res.status(400).json({ message: 'Invalid session ID' });
      }

      await storage.endEditingSession(sessionId);
      res.json({ success: true, message: 'Editing session ended' });
    } catch (error) {
      console.error('Error ending editing session:', error);
      res.status(500).json({ message: 'Failed to end editing session' });
    }
  });

  // Get all active editing sessions (for dashboards)
  app.get("/api/admin/editing-sessions/all", requireAuth, async (req, res) => {
    try {
      // Clean up inactive sessions first
      await storage.cleanupInactiveEditingSessions();

      const allSessions = await storage.getAllActiveEditingSessions();
      
      // Include user information with each session
      const sessionsWithUsers = await Promise.all(
        allSessions.map(async (session: EditingSession) => {
          const user = await storage.getAdminById(session.userId);
          return {
            ...session,
            user: user ? { id: user.id, username: user.username, role: user.role } : null
          };
        })
      );

      res.json(sessionsWithUsers);
    } catch (error) {
      console.error('Error fetching all editing sessions:', error);
      res.status(500).json({ message: 'Failed to fetch editing sessions' });
    }
  });

  // Get active editing sessions for a post
  app.get("/api/admin/posts/:postId/editing-sessions", requireAuth, async (req, res) => {
    try {
      const postId = parseInt(req.params.postId);

      if (isNaN(postId)) {
        return res.status(400).json({ message: 'Invalid post ID' });
      }

      // Clean up inactive sessions first
      await storage.cleanupInactiveEditingSessions();

      const sessions = await storage.getActiveEditingSessions(postId);
      
      // Include user information with each session
      const sessionsWithUsers = await Promise.all(
        sessions.map(async (session) => {
          const user = await storage.getAdminById(session.userId);
          return {
            ...session,
            user: user ? {
              id: user.id,
              username: user.username,
              role: user.role
            } : null
          };
        })
      );

      res.json(sessionsWithUsers);
    } catch (error) {
      console.error('Error fetching editing sessions:', error);
      res.status(500).json({ message: 'Failed to fetch editing sessions' });
    }
  });

  // Admin takeover endpoint
  app.post("/api/admin/editing-sessions/takeover", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const { postId, takeoverUserId } = req.body;

      if (!postId || !takeoverUserId) {
        return res.status(400).json({ message: 'Post ID and takeover user ID are required' });
      }

      // Verify the requesting user is an admin
      if (req.adminRole !== 'admin') {
        return res.status(403).json({ message: 'Only admins can takeover posts' });
      }

      // End all existing editing sessions for this post
      const existingSessions = await storage.getActiveEditingSessions(postId);
      for (const session of existingSessions) {
        if (session.userId !== takeoverUserId) {
          await storage.endEditingSession(session.id);
        }
      }

      // Start new editing session for the admin
      const newSession = await storage.startEditingSession({
        postId: parseInt(postId),
        userId: parseInt(takeoverUserId),
        isActive: true
      });

      res.json({ success: true, message: 'Post takeover successful', session: newSession });
    } catch (error) {
      console.error('Error during admin takeover:', error);
      res.status(500).json({ message: 'Failed to takeover post' });
    }
  });

  // Check if editing session still exists (for takeover detection)
  app.get("/api/admin/editing-sessions/check/:sessionId", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const sessionId = parseInt(req.params.sessionId);

      if (isNaN(sessionId)) {
        return res.status(400).json({ message: 'Invalid session ID' });
      }

      const session = await storage.getEditingSession(sessionId);
      
      if (!session || !session.isActive) {
        return res.status(404).json({ message: 'Session not found or inactive' });
      }

      // Verify session belongs to the requesting user
      if (session.userId !== req.adminId) {
        return res.status(403).json({ message: 'Access denied' });
      }

      res.json({ session, active: true });
    } catch (error) {
      console.error('Error checking editing session:', error);
      res.status(500).json({ message: 'Failed to check session' });
    }
  });

  // Get user's assigned posts
  app.get("/api/admin/users/:id/posts", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const userId = parseInt(req.params.id);

      if (isNaN(userId)) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }

      // Allow users to see their own posts, admins can see any user's posts
      if (req.adminRole !== 'admin' && req.adminId !== userId) {
        return res.status(403).json({ message: 'Access denied' });
      }

      const posts = await storage.getUserAssignedPosts(userId);
      res.json(posts);
    } catch (error) {
      console.error('Error fetching user assigned posts:', error);
      res.status(500).json({ message: 'Failed to fetch assigned posts' });
    }
  });

  // Get post assignments (which users can access a specific post)
  app.get("/api/admin/posts/:id/assignments", requireAuth, requireAdmin, async (req, res) => {
    try {
      const postId = parseInt(req.params.id);

      if (isNaN(postId)) {
        return res.status(400).json({ message: 'Invalid post ID' });
      }

      const assignments = await storage.getPostAssignments(postId);
      res.json(assignments);
    } catch (error) {
      console.error('Error fetching post assignments:', error);
      res.status(500).json({ message: 'Failed to fetch assignments' });
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

  // Get all blog posts (admin) - respects post assignments for non-admin users
  app.get("/api/admin/blog-posts", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const published = req.query.published === 'true' ? true : req.query.published === 'false' ? false : undefined;
      
      let posts;
      
      // Admin users see all posts, non-admin users only see assigned posts
      if (req.adminRole === 'admin') {
        posts = await storage.getBlogPosts(published);
      } else {
        // Non-admin users only see posts assigned to them
        posts = await storage.getUserAssignedPosts(req.adminId!);
        
        // Filter by published status if specified
        if (published !== undefined) {
          posts = posts.filter(post => post.isPublished === published);
        }
      }
      
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
      
      // Auto-assign the post to its creator (unless they're an admin, who sees all posts anyway)
      if (req.adminRole !== 'admin') {
        try {
          await storage.assignPostToUser({
            userId: req.adminId!,
            postId: post.id,
            assignedBy: req.adminId! // Self-assigned
          });
        } catch (assignmentError) {
          console.error('Failed to auto-assign post to creator:', assignmentError);
          // Don't fail the entire operation if assignment fails
        }
      }
      
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

  // Get all published blog posts (public) with optional limit and production sync
  app.get("/api/blog-posts", async (req, res) => {
    try {
      // Add cache-busting headers to ensure fresh data
      res.set({
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const syncFromProduction = req.query.sync === 'production';
      
      // Try to fetch from production if requested
      if (syncFromProduction) {
        try {
          console.log('Attempting to sync blog posts from production...');
          const productionResponse = await fetch('https://dunyaconsultants.com/api/blog-posts');
          
          if (productionResponse.ok) {
            const productionPosts = await productionResponse.json();
            console.log(`Successfully fetched ${productionPosts.length} posts from production`);
            
            // Fix image URLs to point to production and add source flag
            const postsWithFixedImages = productionPosts.map((post: any) => ({
              ...post,
              _source: 'production',
              featuredImage: post.featuredImage?.startsWith('/api/uploads/') 
                ? `https://dunyaconsultants.com${post.featuredImage}`
                : post.featuredImage
            }));
            
            // Apply limit if specified
            const limitedPosts = limit ? postsWithFixedImages.slice(0, limit) : postsWithFixedImages;
            return res.json(limitedPosts);
          } else {
            console.log('Production sync failed with status:', productionResponse.status);
          }
        } catch (syncError) {
          console.log('Production sync failed, falling back to local data:', syncError);
        }
      }
      
      // Fallback to local data - use optimized method to avoid N+1 queries
      const postsWithCategories = await storage.getBlogPostsWithCategories(true); // Only published posts with categories
      
      // Apply limit if specified
      const limitedPosts = limit ? postsWithCategories.slice(0, limit) : postsWithCategories;
      
      // Map database fields to frontend expected format
      const mappedPosts = limitedPosts.map((post) => ({
        ...post,
        _source: 'local',
        featuredImage: post.featuredImage, // Use the existing featuredImage field
        // categories are already included from the optimized query
      }));
      
      res.json(mappedPosts);
    } catch (error) {
      console.error('Error in blog posts API:', error);
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

  // Preview blog post (including drafts) - requires authentication
  app.get("/api/blog-posts/:slug/preview", async (req, res) => {
    try {
      // Check for authentication token
      const token = req.headers.authorization?.replace('Bearer ', '');
      
      if (!token) {
        return res.status(401).json({ message: 'Authentication required for preview' });
      }

      // Verify the token is valid (admin session)
      const session = await storage.getAdminSession(token);
      if (!session) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }

      // Get the blog post (regardless of publication status)
      const post = await storage.getBlogPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      
      // Return the post regardless of publication status for preview
      res.json(post);
    } catch (error) {
      console.error('Preview error:', error);
      res.status(500).json({ message: 'Failed to fetch blog post preview' });
    }
  });

  // ==============================================
  // ENHANCED BLOG MANAGEMENT APIS (CMS)
  // ==============================================

  // Get blog posts by status (Admin/Editor access)
  app.get("/api/admin/blog-posts/status/:status", requireUser, async (req, res) => {
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
  app.get("/api/admin/blog-posts/author/:authorId", requireUser, async (req, res) => {
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
  app.get("/api/admin/blog-posts/:id/revisions", requireUser, async (req, res) => {
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
  app.post("/api/admin/media/upload", requireAuth, requireUser, upload.single('file'), async (req: AuthenticatedRequest, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file provided' });
      }

      const { originalname, mimetype, size, filename } = req.file;
      const fileUrl = `/api/uploads/${filename}`;

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
  app.get("/api/admin/media", requireAuth, requireUser, async (req, res) => {
    try {
      const media = await storage.getMedia();
      res.json(media);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch media' });
    }
  });

  // Get single media item (Admin/Editor access)
  app.get("/api/admin/media/:id", requireAuth, requireUser, async (req, res) => {
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
  app.put("/api/admin/media/:id", requireAuth, requireUser, async (req: AuthenticatedRequest, res) => {
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
  app.delete("/api/admin/media/:id", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
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

  // Import existing media files from uploads directory (Admin access only)
  app.post("/api/admin/media/import", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const uploadsDir = path.resolve(process.cwd(), 'uploads');
      
      if (!fs.existsSync(uploadsDir)) {
        return res.status(404).json({ message: 'Uploads directory not found' });
      }

      const files = fs.readdirSync(uploadsDir);
      const importedFiles = [];
      const errors = [];

      for (const filename of files) {
        try {
          const filePath = path.join(uploadsDir, filename);
          const stats = fs.statSync(filePath);
          
          if (stats.isFile()) {
            // Check if file already exists in database
            const existingMedia = await storage.getMediaByFilename(filename);
            if (existingMedia) {
              continue; // Skip if already imported
            }

            // Extract original name from filename (remove timestamp if present)
            let originalName = filename;
            const timestampMatch = filename.match(/_(\d{13})_[a-f0-9]{16}/);
            if (timestampMatch) {
              originalName = filename.replace(timestampMatch[0], '');
            }

            // Determine MIME type from file extension
            const ext = path.extname(filename).toLowerCase();
            let mimeType = 'application/octet-stream';
            if (['.jpg', '.jpeg'].includes(ext)) mimeType = 'image/jpeg';
            else if (ext === '.png') mimeType = 'image/png';
            else if (ext === '.gif') mimeType = 'image/gif';
            else if (ext === '.webp') mimeType = 'image/webp';
            else if (ext === '.svg') mimeType = 'image/svg+xml';
            else if (ext === '.mp4') mimeType = 'video/mp4';
            else if (ext === '.avi') mimeType = 'video/x-msvideo';
            else if (ext === '.mov') mimeType = 'video/quicktime';
            else if (ext === '.pdf') mimeType = 'application/pdf';
            else if (ext === '.doc') mimeType = 'application/msword';
            else if (ext === '.docx') mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

            const media = await storage.createMedia({
              filename,
              originalName,
              mimeType,
              size: stats.size,
              url: `/api/uploads/${filename}`,
              uploadedBy: req.adminId!
            });

            importedFiles.push(media);
          }
        } catch (fileError) {
          errors.push({ filename, error: fileError.message });
        }
      }

      // Create audit log for mass import - omit entityId since this is a batch operation
      if (importedFiles.length > 0) {
        await storage.createAuditLog({
          actorId: req.adminId!,
          role: req.adminRole!,
          action: 'import',
          entity: 'media',
          entityId: importedFiles[0].id, // Use first imported file as reference
          after: { 
            importedCount: importedFiles.length, 
            errors: errors.length,
            filenames: importedFiles.map(f => f.filename)
          }
        });
      }

      res.json({ 
        imported: importedFiles.length, 
        errors: errors.length,
        files: importedFiles,
        errorDetails: errors.length > 0 ? errors : undefined 
      });
    } catch (error) {
      console.error('Error importing media:', error);
      res.status(500).json({ message: 'Failed to import media files' });
    }
  });

  // ============================================
  // TRASH MANAGEMENT ROUTES
  // ============================================

  // Get all trashed items (Admin access only)
  app.get("/api/trash", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const { type } = req.query;
      const trashedItems = await storage.getTrashedItems(type as string);
      res.json(trashedItems);
    } catch (error) {
      console.error('Error fetching trashed items:', error);
      res.status(500).json({ message: 'Failed to fetch trashed items' });
    }
  });

  // Soft delete media (move to trash)
  app.post("/api/admin/media/:id/trash", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { reason } = req.body;
      
      const trashedMedia = await storage.softDeleteMedia(id, req.adminId!, reason);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'trash',
        entity: 'media',
        entityId: id,
        after: { reason }
      });
      
      res.json({ success: true, media: trashedMedia });
    } catch (error) {
      console.error('Error trashing media:', error);
      res.status(500).json({ message: 'Failed to trash media' });
    }
  });

  // Restore media from trash
  app.post("/api/admin/media/:id/restore", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const restoredMedia = await storage.restoreMedia(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'restore',
        entity: 'media',
        entityId: id
      });
      
      res.json({ success: true, media: restoredMedia });
    } catch (error) {
      console.error('Error restoring media:', error);
      res.status(500).json({ message: 'Failed to restore media' });
    }
  });

  // Permanently delete media (purge)
  app.delete("/api/admin/media/:id/permanent", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      
      const media = await storage.getMediaById(id);
      if (!media) {
        return res.status(404).json({ message: 'Media not found' });
      }
      
      if (!media.trashedAt) {
        return res.status(400).json({ message: 'Media must be trashed before permanent deletion' });
      }
      
      await storage.purgeMedia(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'purge',
        entity: 'media',
        entityId: id,
        before: { filename: media.filename, url: media.url }
      });
      
      res.json({ success: true, message: 'Media permanently deleted' });
    } catch (error) {
      console.error('Error purging media:', error);
      res.status(500).json({ message: 'Failed to permanently delete media' });
    }
  });

  // Soft delete blog post (move to trash)
  app.post("/api/admin/blog-posts/:id/trash", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { reason } = req.body;
      
      const trashedPost = await storage.softDeleteBlogPost(id, req.adminId!, reason);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'trash',
        entity: 'blog_post',
        entityId: id,
        after: { reason }
      });
      
      res.json({ success: true, post: trashedPost });
    } catch (error) {
      console.error('Error trashing blog post:', error);
      res.status(500).json({ message: 'Failed to trash blog post' });
    }
  });

  // Restore blog post from trash
  app.post("/api/admin/blog-posts/:id/restore", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const restoredPost = await storage.restoreBlogPost(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'restore',
        entity: 'blog_post',
        entityId: id
      });
      
      res.json({ success: true, post: restoredPost });
    } catch (error) {
      console.error('Error restoring blog post:', error);
      res.status(500).json({ message: 'Failed to restore blog post' });
    }
  });

  // Permanently delete blog post (purge)
  app.delete("/api/admin/blog-posts/:id/permanent", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      
      const post = await storage.getBlogPost(id);
      if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
      }
      
      if (!post.trashedAt) {
        return res.status(400).json({ message: 'Blog post must be trashed before permanent deletion' });
      }
      
      await storage.purgeBlogPost(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'purge',
        entity: 'blog_post',
        entityId: id,
        before: { title: post.title, slug: post.slug }
      });
      
      res.json({ success: true, message: 'Blog post permanently deleted' });
    } catch (error) {
      console.error('Error purging blog post:', error);
      res.status(500).json({ message: 'Failed to permanently delete blog post' });
    }
  });

  // Soft delete category (move to trash)
  app.post("/api/admin/categories/:id/trash", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { reason } = req.body;
      
      const trashedCategory = await storage.softDeleteCategory(id, req.adminId!, reason);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'trash',
        entity: 'category',
        entityId: id,
        after: { reason }
      });
      
      res.json({ success: true, category: trashedCategory });
    } catch (error) {
      console.error('Error trashing category:', error);
      res.status(500).json({ message: 'Failed to trash category' });
    }
  });

  // Restore category from trash
  app.post("/api/admin/categories/:id/restore", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const restoredCategory = await storage.restoreCategory(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'restore',
        entity: 'category',
        entityId: id
      });
      
      res.json({ success: true, category: restoredCategory });
    } catch (error) {
      console.error('Error restoring category:', error);
      res.status(500).json({ message: 'Failed to restore category' });
    }
  });

  // Permanently delete category (purge)
  app.delete("/api/admin/categories/:id/permanent", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      
      const category = await storage.getCategory(id);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
      
      if (!category.trashedAt) {
        return res.status(400).json({ message: 'Category must be trashed before permanent deletion' });
      }
      
      await storage.purgeCategory(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'purge',
        entity: 'category',
        entityId: id,
        before: { name: category.name, slug: category.slug }
      });
      
      res.json({ success: true, message: 'Category permanently deleted' });
    } catch (error) {
      console.error('Error purging category:', error);
      res.status(500).json({ message: 'Failed to permanently delete category' });
    }
  });

  // Soft delete event (move to trash)
  app.post("/api/admin/events/:id/trash", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { reason } = req.body;
      
      const trashedEvent = await storage.softDeleteEvent(id, req.adminId!, reason);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'trash',
        entity: 'event',
        entityId: id,
        after: { reason }
      });
      
      res.json({ success: true, event: trashedEvent });
    } catch (error) {
      console.error('Error trashing event:', error);
      res.status(500).json({ message: 'Failed to trash event' });
    }
  });

  // Restore event from trash
  app.post("/api/admin/events/:id/restore", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const restoredEvent = await storage.restoreEvent(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'restore',
        entity: 'event',
        entityId: id
      });
      
      res.json({ success: true, event: restoredEvent });
    } catch (error) {
      console.error('Error restoring event:', error);
      res.status(500).json({ message: 'Failed to restore event' });
    }
  });

  // Permanently delete event (purge)
  app.delete("/api/admin/events/:id/permanent", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      
      const event = await storage.getEventById(id);
      if (!event) {
        return res.status(404).json({ message: 'Event not found' });
      }
      
      if (!event.trashedAt) {
        return res.status(400).json({ message: 'Event must be trashed before permanent deletion' });
      }
      
      await storage.purgeEvent(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'purge',
        entity: 'event',
        entityId: id,
        before: { title: event.title, slug: event.slug }
      });
      
      res.json({ success: true, message: 'Event permanently deleted' });
    } catch (error) {
      console.error('Error purging event:', error);
      res.status(500).json({ message: 'Failed to permanently delete event' });
    }
  });

  // Soft delete admin user (move to trash)
  app.post("/api/admin/users/:id/trash", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const { reason } = req.body;
      
      if (id === req.adminId) {
        return res.status(400).json({ message: 'Cannot trash your own account' });
      }
      
      const trashedUser = await storage.softDeleteAdminUser(id, req.adminId!, reason);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'trash',
        entity: 'admin_user',
        entityId: id,
        after: { reason }
      });
      
      res.json({ success: true, user: trashedUser });
    } catch (error) {
      console.error('Error trashing admin user:', error);
      res.status(500).json({ message: 'Failed to trash admin user' });
    }
  });

  // Restore admin user from trash
  app.post("/api/admin/users/:id/restore", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      const restoredUser = await storage.restoreAdminUser(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'restore',
        entity: 'admin_user',
        entityId: id
      });
      
      res.json({ success: true, user: restoredUser });
    } catch (error) {
      console.error('Error restoring admin user:', error);
      res.status(500).json({ message: 'Failed to restore admin user' });
    }
  });

  // Permanently delete admin user (purge)
  app.delete("/api/admin/users/:id/permanent", requireAuth, requireAdmin, async (req: AuthenticatedRequest, res) => {
    try {
      const id = parseInt(req.params.id);
      
      if (id === req.adminId) {
        return res.status(400).json({ message: 'Cannot permanently delete your own account' });
      }
      
      const user = await storage.getAdminById(id);
      if (!user) {
        return res.status(404).json({ message: 'Admin user not found' });
      }
      
      if (!user.trashedAt) {
        return res.status(400).json({ message: 'Admin user must be trashed before permanent deletion' });
      }
      
      await storage.purgeAdminUser(id);
      
      await storage.createAuditLog({
        actorId: req.adminId!,
        role: req.adminRole!,
        action: 'purge',
        entity: 'admin_user',
        entityId: id,
        before: { username: user.username, email: user.email }
      });
      
      res.json({ success: true, message: 'Admin user permanently deleted' });
    } catch (error) {
      console.error('Error purging admin user:', error);
      res.status(500).json({ message: 'Failed to permanently delete admin user' });
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
          // Check if the slug matches the date pattern (YYYY/MM/DD) to determine URL structure
          const datePattern = /^\d{4}\/\d{2}\/\d{2}\//;
          const blogUrl = datePattern.test(post.slug) ? `${baseUrl}/${post.slug}` : `${baseUrl}/blog/${post.slug}`;
          urlEntries += `
  <url>
    <loc>${blogUrl}</loc>
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
      const lastMod = new Date().toISOString();
      
      // Static website pages
      const staticPages = [
        { url: '', priority: '1.0', changefreq: 'daily' }, // Homepage
        { url: 'about', priority: '0.9', changefreq: 'monthly' },
        { url: 'services', priority: '0.9', changefreq: 'monthly' },
        { url: 'contact', priority: '0.8', changefreq: 'monthly' },
        { url: 'blog', priority: '0.8', changefreq: 'daily' },
        { url: 'eligibility-check', priority: '0.7', changefreq: 'monthly' },
        { url: 'consultation-booking', priority: '0.8', changefreq: 'monthly' },
        
        // Study Destinations
        { url: 'study-in-usa', priority: '0.8', changefreq: 'monthly' },
        { url: 'study-in-uk', priority: '0.8', changefreq: 'monthly' },
        { url: 'study-in-canada', priority: '0.8', changefreq: 'monthly' },
        { url: 'study-in-finland', priority: '0.8', changefreq: 'monthly' },
        { url: 'study-in-australia', priority: '0.8', changefreq: 'monthly' },
        { url: 'study-in-belgium', priority: '0.8', changefreq: 'monthly' },
        { url: 'study-in-turkey', priority: '0.8', changefreq: 'monthly' },
        
        // Test Preparation
        { url: 'ielts-preparation', priority: '0.7', changefreq: 'monthly' },
        { url: 'pte-preparation', priority: '0.7', changefreq: 'monthly' },
        { url: 'toefl-preparation', priority: '0.7', changefreq: 'monthly' },
        { url: 'duolingo-preparation', priority: '0.7', changefreq: 'monthly' },
        
        // Tools and Resources
        { url: 'cost-calculator', priority: '0.6', changefreq: 'monthly' },
        { url: 'course-matcher', priority: '0.6', changefreq: 'monthly' },
        { url: 'document-checklist', priority: '0.6', changefreq: 'monthly' },
        
        // Additional Pages
        { url: 'events', priority: '0.6', changefreq: 'weekly' },
        { url: 'testimonials', priority: '0.6', changefreq: 'monthly' },
        { url: 'universities', priority: '0.7', changefreq: 'monthly' },
        { url: 'locations', priority: '0.6', changefreq: 'monthly' },
      ];
      
      let urlEntries = '';
      staticPages.forEach(page => {
        const url = page.url ? `${baseUrl}/${page.url}` : baseUrl;
        urlEntries += `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
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

  // Edit Request API endpoints
  
  // Send edit request
  app.post("/api/admin/edit-requests", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const { postId, currentEditorId } = req.body;

      if (!postId || !currentEditorId) {
        return res.status(400).json({ message: 'Post ID and current editor ID are required' });
      }

      // Check if there's already a pending request from this user for this post
      const existingRequests = await storage.getPostEditRequests(postId);
      const pendingRequestFromUser = existingRequests.find(request => 
        request.status === 'pending' && request.requesterId === req.adminId
      );
      
      if (pendingRequestFromUser) {
        return res.status(409).json({ message: 'You already have a pending edit request for this post' });
      }

      const editRequest = await storage.createEditRequest({
        postId: parseInt(postId),
        requesterId: req.adminId!,
        currentEditorId: parseInt(currentEditorId),
        status: 'pending'
      });

      res.status(201).json(editRequest);
    } catch (error) {
      console.error('Error creating edit request:', error);
      res.status(500).json({ message: 'Failed to create edit request' });
    }
  });

  // Get edit requests for a user (as current editor)
  app.get("/api/admin/edit-requests/for-me", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      // Force no cache with comprehensive headers
      res.set('Cache-Control', 'no-cache, no-store, must-revalidate, private, max-age=0');
      res.set('Pragma', 'no-cache');
      res.set('Expires', '0');
      res.set('ETag', `"${Date.now()}"`); // Dynamic ETag to bust cache
      res.set('Last-Modified', new Date().toUTCString());
      
      const requests = await storage.getUserEditRequests(req.adminId!);
      
      // Include requester information
      const requestsWithUsers = await Promise.all(
        requests.map(async (request) => {
          const requester = await storage.getAdminById(request.requesterId);
          return {
            ...request,
            requester: requester ? { id: requester.id, username: requester.username, role: requester.role } : null
          };
        })
      );

      res.json(requestsWithUsers);
    } catch (error) {
      console.error('Error fetching edit requests:', error);
      res.status(500).json({ message: 'Failed to fetch edit requests' });
    }
  });

  // Respond to edit request (approve/decline)
  app.patch("/api/admin/edit-requests/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const requestId = parseInt(req.params.id);
      const { action } = req.body; // 'approve' or 'decline'

      if (isNaN(requestId)) {
        return res.status(400).json({ message: 'Invalid request ID' });
      }

      if (!action || (action !== 'approve' && action !== 'decline')) {
        return res.status(400).json({ message: 'Action must be "approve" or "decline"' });
      }

      const editRequest = await storage.getEditRequest(requestId);
      if (!editRequest) {
        return res.status(404).json({ message: 'Edit request not found' });
      }

      // Verify that the current user is the target editor
      if (editRequest.currentEditorId !== req.adminId) {
        return res.status(403).json({ message: 'You can only respond to requests sent to you' });
      }

      const status = action === 'approve' ? 'approved' : 'declined';
      const updatedRequest = await storage.updateEditRequestStatus(requestId, status, new Date());

      if (action === 'approve') {
        // End the current user's editing session
        const currentSession = await storage.getUserEditingSession(req.adminId!, editRequest.postId);
        if (currentSession) {
          await storage.endEditingSession(currentSession.id);
        }

        // Start a new editing session for the requester
        await storage.startEditingSession({
          postId: editRequest.postId,
          userId: editRequest.requesterId,
          isActive: true
        });
      }

      res.json(updatedRequest);
    } catch (error) {
      console.error('Error responding to edit request:', error);
      res.status(500).json({ message: 'Failed to respond to edit request' });
    }
  });

  // ====================== PUBLIC CATEGORY ROUTES ======================

  // Public route: Get hierarchical categories (for front-end blog page)
  app.get("/api/categories/hierarchical", async (req, res) => {
    try {
      const hierarchicalCategories = await storage.getHierarchicalCategories(); // All categories
      res.json(hierarchicalCategories);
    } catch (error) {
      console.error('Error fetching hierarchical categories:', error);
      res.status(500).json({ message: 'Failed to fetch hierarchical categories' });
    }
  });

  // Public route: Get parent categories only
  app.get("/api/categories/parents", async (req, res) => {
    try {
      const parentCategories = await storage.getParentCategories(true); // Only active categories
      res.json(parentCategories);
    } catch (error) {
      console.error('Error fetching parent categories:', error);
      res.status(500).json({ message: 'Failed to fetch parent categories' });
    }
  });

  // Public route: Get all categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories(); // All categories
      res.json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ message: 'Failed to fetch categories' });
    }
  });

  // ====================== ENHANCED CATEGORY MANAGEMENT ROUTES ======================

  // Get all categories with SEO fields and post counts
  app.get("/api/admin/categories", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const categories = await storage.getCategories(); // All categories
      
      // Get post counts for each category from many-to-many relationships
      const categoriesWithCounts = await Promise.all(
        categories.map(async (category) => {
          // Get count from junction table
          const postCategoriesCount = await db
            .select({ count: sql<number>`count(*)` })
            .from(blogPostCategories)
            .where(eq(blogPostCategories.categoryId, category.id));
          
          const count = postCategoriesCount[0]?.count || 0;
          
          return {
            ...category,
            count: Number(count)
          };
        })
      );

      res.json(categoriesWithCounts);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ message: 'Failed to fetch categories' });
    }
  });

  // Get hierarchical categories (parent-child structure)
  app.get("/api/admin/categories/hierarchical", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const hierarchicalCategories = await storage.getHierarchicalCategories(true);
      res.json(hierarchicalCategories);
    } catch (error) {
      console.error('Error fetching hierarchical categories:', error);
      res.status(500).json({ message: 'Failed to fetch hierarchical categories' });
    }
  });

  // Get parent categories only
  app.get("/api/admin/categories/parents", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const parentCategories = await storage.getParentCategories(true);
      res.json(parentCategories);
    } catch (error) {
      console.error('Error fetching parent categories:', error);
      res.status(500).json({ message: 'Failed to fetch parent categories' });
    }
  });

  // Get child categories for a specific parent
  app.get("/api/admin/categories/:parentId/children", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const parentId = parseInt(req.params.parentId);
      const childCategories = await storage.getChildCategories(parentId, true);
      res.json(childCategories);
    } catch (error) {
      console.error('Error fetching child categories:', error);
      res.status(500).json({ message: 'Failed to fetch child categories' });
    }
  });

  // Get single category by ID
  app.get("/api/admin/categories/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const categoryId = parseInt(req.params.id);
      const category = await storage.getCategory(categoryId);
      
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      res.json(category);
    } catch (error) {
      console.error('Error fetching category:', error);
      res.status(500).json({ message: 'Failed to fetch category' });
    }
  });

  // Create a new category with SEO fields
  app.post("/api/admin/categories", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const validation = insertCategorySchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: 'Validation error', 
          errors: validation.error.errors 
        });
      }

      const categoryData = validation.data;
      
      // Check if category name already exists
      const existingCategories = await storage.getCategories();
      const existingCategory = existingCategories.find(cat => 
        cat.name.toLowerCase() === categoryData.name?.toLowerCase()
      );
      
      if (existingCategory) {
        return res.status(409).json({ message: 'Category name already exists' });
      }

      // Check if slug already exists (if provided)
      if (categoryData.slug) {
        const existingSlug = existingCategories.find(cat => 
          cat.slug === categoryData.slug
        );
        if (existingSlug) {
          return res.status(409).json({ message: 'Category slug already exists' });
        }
      }

      const category = await storage.createCategory(categoryData);
      
      res.status(201).json({ 
        message: 'Category created successfully',
        category
      });
    } catch (error) {
      console.error('Error creating category:', error);
      res.status(500).json({ message: 'Failed to create category' });
    }
  });

  // Update a category
  app.put("/api/admin/categories/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const categoryId = parseInt(req.params.id);
      const updates = req.body;

      // Validate that category exists
      const existingCategory = await storage.getCategory(categoryId);
      if (!existingCategory) {
        return res.status(404).json({ message: 'Category not found' });
      }

      // Check if new name/slug conflicts with other categories
      if (updates.name) {
        const categories = await storage.getCategories();
        const nameConflict = categories.find(cat => 
          cat.id !== categoryId && cat.name.toLowerCase() === updates.name.toLowerCase()
        );
        if (nameConflict) {
          return res.status(409).json({ message: 'Category name already exists' });
        }
      }

      if (updates.slug) {
        const categories = await storage.getCategories();
        const slugConflict = categories.find(cat => 
          cat.id !== categoryId && cat.slug === updates.slug
        );
        if (slugConflict) {
          return res.status(409).json({ message: 'Category slug already exists' });
        }
      }

      const updatedCategory = await storage.updateCategory(categoryId, updates);
      
      res.json({ 
        message: 'Category updated successfully',
        category: updatedCategory
      });
    } catch (error) {
      console.error('Error updating category:', error);
      res.status(500).json({ message: 'Failed to update category' });
    }
  });

  // Delete a category
  app.delete("/api/admin/categories/:id", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const categoryId = parseInt(req.params.id);
      
      // Check if category exists
      const category = await storage.getCategory(categoryId);
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      // Check if category has any blog posts assigned
      const blogPostCategories = await storage.getBlogPostCategories(0); // We'll need to implement a proper count method
      // For now, check using the old category field too
      const blogPosts = await storage.getBlogPosts();
      const postsWithCategory = blogPosts.filter(post => post.category === category.name);
      
      if (postsWithCategory.length > 0) {
        return res.status(400).json({ 
          message: `Cannot delete category "${category.name}" because it contains ${postsWithCategory.length} post(s). Remove the category from all posts first.` 
        });
      }

      await storage.deleteCategory(categoryId);
      
      res.json({ message: 'Category deleted successfully' });
    } catch (error) {
      console.error('Error deleting category:', error);
      res.status(500).json({ message: 'Failed to delete category' });
    }
  });

  // Assign categories to blog post
  app.post("/api/admin/blog-posts/:id/categories", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const postId = parseInt(req.params.id);
      const { categoryIds } = req.body;

      if (!Array.isArray(categoryIds)) {
        return res.status(400).json({ message: 'categoryIds must be an array' });
      }

      // Validate that the blog post exists
      const blogPost = await storage.getBlogPost(postId);
      if (!blogPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }

      // Validate that all categories exist
      const categories = await storage.getCategories();
      const validCategoryIds = categories.map(cat => cat.id);
      const invalidIds = categoryIds.filter(id => !validCategoryIds.includes(id));
      
      if (invalidIds.length > 0) {
        return res.status(400).json({ 
          message: `Invalid category IDs: ${invalidIds.join(', ')}` 
        });
      }

      // Update blog post categories
      await storage.updateBlogPostCategories(postId, categoryIds);
      
      // Get updated categories for response
      const updatedCategories = await storage.getBlogPostCategories(postId);
      
      res.json({ 
        message: 'Categories updated successfully',
        categories: updatedCategories
      });
    } catch (error) {
      console.error('Error updating blog post categories:', error);
      res.status(500).json({ message: 'Failed to update blog post categories' });
    }
  });

  // Get categories for a specific blog post
  app.get("/api/admin/blog-posts/:id/categories", requireAuth, async (req: AuthenticatedRequest, res) => {
    try {
      const postId = parseInt(req.params.id);
      
      // Validate that the blog post exists
      const blogPost = await storage.getBlogPost(postId);
      if (!blogPost) {
        return res.status(404).json({ message: 'Blog post not found' });
      }

      const categories = await storage.getBlogPostCategories(postId);
      res.json(categories);
    } catch (error) {
      console.error('Error fetching blog post categories:', error);
      res.status(500).json({ message: 'Failed to fetch blog post categories' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
