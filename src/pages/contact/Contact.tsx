import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // TODO backend impl

    setName('');
    setSurName('');
    setEmail('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="text-xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-br from-gray-300 to-gray-500 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-8"
      >
        <form onSubmit={handleSubmit} className="text-base">
          <div className="mb-4 flex">
            <div className="mb-2">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Surname</label>
              <input
                type="text"
                id="surName"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Your Phone Number</label>
              <input
                type="phone"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Your Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 opacity-50 cursor-not-allowed"
            >
              Coming soon
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
