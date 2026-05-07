import React from 'react';
import ChatBox from '../components/ChatBox';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            AI Chat Assistant
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Intelligent conversations powered by advanced language models.
          </p>
        </div>
        <ChatBox />
      </div>
    </div>
  );
};

export default Home;