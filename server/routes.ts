import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { json } from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // API for newsletter subscription
  app.post('/api/subscribe', json(), async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      // In a real application, this would store the email in a database
      // For this prototype, we'll just return a success response
      
      return res.status(200).json({ 
        success: true, 
        message: 'Subscription successful' 
      });
    } catch (error) {
      console.error('Error in subscription:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred during subscription' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
