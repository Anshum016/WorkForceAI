import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen text-amber-50 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-3 sm:mb-4">Get in Touch</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Ready to transform your business with AI? Our team is here to help you find the perfect solution for your needs.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-300 text-sm sm:text-base">contact@workforceai.com</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-300 text-sm sm:text-base">+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-300 text-sm sm:text-base">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-red-600 text-sm sm:text-base"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-800 text-white font-semibold py-2 sm:py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
