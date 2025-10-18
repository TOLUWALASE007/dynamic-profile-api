// Load environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Define port (Heroku sets this automatically)
const PORT = process.env.PORT || 3001;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// /me endpoint
app.get('/me', async (req, res) => {
  try {
    // Fetch a random cat fact
    const response = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
    const catFact = response.data.fact;

    // Send success response
    res.status(200).json({
      status: "success",
      user: {
        email: "toluwalaseemmanuel20@gmail.com",
        name: "Toluwalase Olaniyan",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    });

  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    // Graceful fallback
    res.status(200).json({
      status: "success",
      user: {
        email: "toluwalaseemmanuel20@gmail.com",
        name: "Toluwalase Olaniyan",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact at the moment. Try again later."
    });
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
