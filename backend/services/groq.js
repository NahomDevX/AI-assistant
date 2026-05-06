const Groq = require('groq-sdk');

// Debug: Check if API key is loaded
if (!process.env.GROQ_API_KEY) {
  console.error('ERROR: GROQ_API_KEY is not set in environment variables');
  process.exit(1);
}

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = "You are a smart assistant inside a web app. Help users navigate, answer questions, and process data. Be helpful, concise, and friendly.";

async function getChatResponse(userMessage) {
  try {
    console.log('Sending request to Groq API...');
    
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      model: "llama-3.3-70b-versatile", // Currently working model
      temperature: 0.7,
      max_tokens: 1024,
    });

    console.log('Received response from Groq');
    return completion.choices[0]?.message?.content || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Groq API Error Details:', error);
    
    // Provide more specific error messages
    if (error.status === 401) {
      throw new Error('Invalid API key. Please check your Groq API key.');
    } else if (error.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    } else if (error.code === 'ENOTFOUND') {
      throw new Error('Network error. Please check your internet connection.');
    } else {
      throw new Error(`Groq API error: ${error.message}`);
    }
  }
}

async function summarizeText(text) {
  try {
    console.log('Sending summarization request...');
    
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a text summarization assistant. Summarize the following text concisely while preserving key information. Keep the summary to 2-3 sentences."
        },
        {
          role: "user",
          content: `Please summarize this text: ${text}`
        }
      ],
      model: "llama-3.3-70b-versatile", // Currently working model
      temperature: 0.5,
      max_tokens: 512,
    });

    return completion.choices[0]?.message?.content || "Unable to summarize the text.";
  } catch (error) {
    console.error('Groq API Error Details:', error);
    throw new Error(`Summarization failed: ${error.message}`);
  }
}

module.exports = { getChatResponse, summarizeText };