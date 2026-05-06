require('dotenv').config();
const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const models = [
  "llama-3.3-70b-versatile",
  "llama-3.1-70b-versatile", 
  "llama-3.1-8b-instant",
  "gemma2-9b-it"
];

async function testModels() {
  console.log('Testing available models...\n');
  
  for (const model of models) {
    try {
      console.log(`Testing model: ${model}`);
      const completion = await groq.chat.completions.create({
        messages: [{ role: "user", content: "Say 'Working!'" }],
        model: model,
        max_tokens: 10,
      });
      console.log(`✅ ${model} - WORKING\n`);
    } catch (error) {
      console.log(`❌ ${model} - FAILED: ${error.message}\n`);
    }
  }
}

testModels();