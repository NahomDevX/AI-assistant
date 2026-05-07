import React from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nahombekele24@gmail.com',
    href: 'mailto:[EMAIL_ADDRESS]',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/NahomDevX',
    href: 'https://github.com/NahomDevX',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/nahombekele116',
    href: 'https://www.linkedin.com/in/nahombekele116',
  },
];

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Contact
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Reach out with questions, project ideas, or feedback about the AI Assistant.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Send a Message
            </h2>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white min-h-[160px]"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="button"
              className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg hover:bg-primary-dark transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          {contactMethods.map((method) => {
            const Icon = method.icon;

            return (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary-dark rounded-lg">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {method.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {method.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
