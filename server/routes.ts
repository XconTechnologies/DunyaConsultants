import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertUserEngagementSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);
  return httpServer;
}
