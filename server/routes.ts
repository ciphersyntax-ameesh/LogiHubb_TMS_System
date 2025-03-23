import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for lead form submission
  app.post("/api/leads", async (req, res) => {
    try {
      // Validate the lead form data
      const leadData = insertLeadSchema.parse(req.body);
      
      // Add timestamp to the data
      const leadWithTimestamp = {
        ...leadData,
        createdAt: new Date().toISOString(),
      };
      
      // Save the lead to storage
      const savedLead = await storage.createLead(leadWithTimestamp);
      
      return res.status(201).json({ 
        success: true, 
        message: "Lead successfully submitted",
        lead: savedLead
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.details
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Failed to submit lead"
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
