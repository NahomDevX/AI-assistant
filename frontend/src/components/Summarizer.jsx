import React, { useState } from 'react';
import { FileText, Loader2, CheckCircle } from 'lucide-react';
import { summarizeText } from '../services/api';

const Summarizer = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to summarize.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSummary('');

    try {
      const result = await summarizeText(inputText);
      setSummary(result);
    } catch (err) {
      setError('Failed to summarize text. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setInputText('');
    setSummary('');
    setError(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
      <div className="flex items-center space-x-2 mb-4">
        <FileText className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Text Summarizer
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Text to Summarize
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste or type your long text here for AI-powered summarization..."
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white min-h-[200px]"
            disabled={isLoading}
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {inputText.length} characters
            </span>
            <div className="space-x-2">
              <button
                onClick={handleClear}
                className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Clear
              </button>
              <button
                onClick={handleSummarize}
                disabled={!inputText.trim() || isLoading}
                className="px-4 py-2 text-sm bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg hover:bg-primary-dark transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 inline animate-spin mr-2" />
                    Summarizing...
                  </>
                ) : (
                  'Summarize'
                )}
              </button>
            </div>
          </div>
        </div>

        {(summary || error) && (
          <div className={`p-4 rounded-lg ${error ? 'bg-red-50 dark:bg-red-900/20' : 'bg-gray-50 dark:bg-gray-700/50'}`}>
            <div className="flex items-center space-x-2 mb-3">
              {error ? (
                <span className="text-red-600 dark:text-red-400 font-medium">Error</span>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-gray-700 dark:text-gray-300">Summary</span>
                </>
              )}
            </div>
            {error ? (
              <p className="text-red-600 dark:text-red-400">{error}</p>
            ) : (
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
                {summary}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Summarizer;