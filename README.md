# 🤖 AI Assistant

A full-stack AI Assistant with real-time chat and text summarization, powered by Groq's Llama 3.3 70B model.

## 🚀 Tech Stack

| Frontend | Backend | AI |
|----------|---------|-----|
| React 18 | Node.js | Groq API |
| Vite | Express | Llama 3.3 |
| Tailwind CSS | CORS | 70B params |

## ✨ Features

- 💬 **Real-time AI Chat** - Instant responses with typing animation
- 📝 **Text Summarizer** - Condense long text into key points
- 🌓 **Dark/Light Mode** - Toggle themes with persistence
- 💾 **Chat History** - Saved automatically in browser
- 📱 **Responsive Design** - Works on all devices


## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Groq API key ([Get free key](https://console.groq.com))

### Installation

```bash
# Clone repository
git clone https://github.com/NahomDevX/AI-assistant.git
cd AI-assistant

# Backend setup
cd backend
npm install
echo "GROQ_API_KEY=your_key_here" > .env
echo "PORT=5000" >> .env
npm run dev

# Frontend setup (new terminal)
cd frontend
npm install
echo "VITE_API_URL=http://localhost:5000/api" > .env
npm run dev
