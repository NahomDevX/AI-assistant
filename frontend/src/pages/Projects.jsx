import React from 'react';
import { Bot, FileText, Mic, Database, Shield, Cloud } from 'lucide-react';

const projects = [
  {
    icon: Bot,
    title: 'AI Chat Assistant',
    description: 'Real-time conversational AI powered by Groq API with context awareness and natural language understanding.',
    tags: ['React', 'Node.js', 'Groq API', 'TailwindCSS'],
  },
  {
    icon: FileText,
    title: 'Text Summarizer',
    description: 'Advanced text summarization using LLM technology to condense long documents into key points.',
    tags: ['AI', 'NLP', 'Groq', 'Express'],
  },
  {
    icon: Mic,
    title: 'Voice Assistant (Coming Soon)',
    description: 'Voice-enabled AI assistant with speech recognition and synthesis capabilities.',
    tags: ['Web Speech API', 'AI', 'Real-time'],
  },
  {
    icon: Database,
    title: 'Chat History (Coming Soon)',
    description: 'Persistent chat storage with MongoDB for conversation history and context retention.',
    tags: ['MongoDB', 'Mongoose', 'Session Management'],
  },
  {
    icon: Shield,
    title: 'Authentication System (Coming Soon)',
    description: 'Secure user authentication with JWT and role-based access control.',
    tags: ['JWT', 'BCrypt', 'Security'],
  },
  {
    icon: Cloud,
    title: 'Cloud Deployment',
    description: 'Fully deployable solution with frontend on Vercel and backend on Railway/Render.',
    tags: ['Vercel', 'Railway', 'CI/CD'],
  },
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Our Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore the capabilities of our AI Assistant through these innovative features and upcoming enhancements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;