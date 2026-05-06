import React from 'react';
import { Cpu, Zap, Shield, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          About AI Assistant
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A powerful full-stack AI application built with modern technologies, providing intelligent chat assistance and text processing capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We aim to democratize AI technology by making it accessible, easy to use, and integrated into everyday applications. 
            Our AI Assistant leverages state-of-the-art language models to provide intelligent responses, text summarization, 
            and data processing capabilities that help users save time and boost productivity.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            Technology Stack
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Cpu className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">Frontend: React + Vite + TailwindCSS</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">Backend: Node.js + Express</span>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">AI: Groq API (Llama 3 8B)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">Deployment: Vercel + Railway</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Real-time Chat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Instant AI responses with typing indicators and message history</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Text Summarization</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">AI-powered text analysis and summarization</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Dark Mode</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Toggle between light and dark themes for comfortable viewing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;