// Load environment variables first
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chat');
const summarizeRoutes = require('./routes/summarize');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);
app.use('/api/summarize', summarizeRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Groq API Key configured: ${process.env.GROQ_API_KEY ? 'Yes' : 'No'}`);
});