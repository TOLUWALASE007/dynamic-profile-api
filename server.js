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

// Define port (Pxxl App sets PORT automatically)
const PORT = process.env.PORT || 3000;

// Favicon endpoint
app.get('/favicon.ico', (req, res) => {
  res.status(204).end();
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Dynamic Profile API is running!',
    endpoints: {
      profile: '/me',
      health: '/health'
    },
    timestamp: new Date().toISOString()
  });
});

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

// Catch-all route for undefined endpoints
app.get('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: 'Available endpoints: /, /me, /health',
    timestamp: new Date().toISOString()
  });
});

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Available endpoints:`);
  console.log(`   - GET / (root)`);
  console.log(`   - GET /me (profile API)`);
  console.log(`   - GET /health (health check)`);
  console.log(`   - GET /favicon.ico (favicon)`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
  process.exit(1);
});

// Export for testing
module.exports = app;