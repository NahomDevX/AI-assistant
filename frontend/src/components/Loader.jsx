import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300">AI is thinking...</span>
    </div>
  );
};

export default Loader;