import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ButtonWrapper } from "../../components/SpotlightButton/SpotlightButton";
import { WavyBackground } from "../../components/WavyBackground/WavyBackground";

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
      <WavyBackground className="max-w-4xl mx-auto pb-40 overflow-hidden shadow-md">
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="text-xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-br from-gray-300 to-gray-500 bg-clip-text text-transparent"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="text-xs md:text-sm font-bold text-center mb-8 bg-gradient-to-br from-gray-300 to-gray-500 bg-clip-text text-transparent"
      >
        * Coming soon
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="max-w-lg mx-auto bg-transparent rounded-lg shadow-md p-8"
      >
        <form onSubmit={handleSubmit} className="text-base text-white">
          <div className="mb-4 flex">
            <div className="mb-2 p-2">
              <div className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pl-6 pr-1.5">
                <input
                  type="text"
                  disabled
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
                />
              </div>
            </div>
            <div className="mb-2 p-2">
              <div className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pl-6 pr-1.5">
                <input
                  type="text"
                  disabled
                  id="surname"
                  value={surName}
                  onChange={(e) => setSurName(e.target.value)}
                  placeholder="Your surname"
                  className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 flex">
            <div className="mb-4 p-2">
              <div className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pl-6 pr-1.5">
                <input
                  type="email"
                  disabled
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
                />
              </div>
            </div>
            <div className="mb-4 p-2">
              <div className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pl-6 pr-1.5">
                <input
                  type="phone"
                  disabled
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Your phone number"
                  className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 p-2">
            <div className="relative flex w-full max-w-md items-center gap-2 rounded-half border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pl-6 pr-1.5">
              <textarea
                disabled
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
                rows={10}
                required
              />
            </div>
          </div>
          <div className="text-center">
            <ButtonWrapper buttonText="Coming soon" />
          </div>
        </form>
      </motion.div>
      </WavyBackground>

    </div>
  );
}

export default Contact;
