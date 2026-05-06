const express = require('express');
const router = express.Router();
const { summarizeText } = require('../services/groq');

router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const summary = await summarizeText(text);
    res.json({ summary });
  } catch (error) {
    console.error('Summarize route error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;