import React from 'react';
import ChatBox from '../components/ChatBox';
import Summarizer from '../components/Summarizer';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chat Assistant */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            AI Chat Assistant
          </h1>
          <ChatBox />
        </div>

        {/* Text Summarizer */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Text Processing
          </h1>
          <Summarizer />
        </div>
      </div>
    </div>
  );
};

export default Home;