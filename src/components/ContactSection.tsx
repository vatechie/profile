import React from 'react';

export const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Get In Touch</h2>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600">
            I'm open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Name</div>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-2">Email</div>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">Subject</div>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <div className="block text-sm font-medium text-gray-700 mb-2">Message</div>
              <textarea
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell me about your project or just say hi!"
              ></textarea>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
