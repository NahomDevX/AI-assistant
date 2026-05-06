const express = require('express');
const router = express.Router();
const { getChatResponse } = require('../services/groq');

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Received message:', message);
    
    const response = await getChatResponse(message);
    console.log('Sending response back');
    
    res.json({ response });
  } catch (error) {
    console.error('Chat route error:', error);
    // Send back the actual error message to frontend
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

module.exports = router;