"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ButtonWrapper } from "../../components/SpotlightButton/SpotlightButton";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_30e7vg9",
        "template_nazrz0q",
        {
          name,
          surName,
          email,
          phoneNumber,
          message,
        },
        ""
      );

      console.log("EmailJS result:", result.text);
      setStatusMessage("Your message was sent successfully!");
    } catch (error: any) {
      console.error("EmailJS error:", error);
      setStatusMessage("Oops! Something went wrong. Please try again.");
    }

    setName("");
    setSurName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <>
      <div className="md:pt-40 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="text-3xl md:text-6xl font-bold text-center mb-8 
                    bg-gradient-to-br from-gray-300 to-gray-500 bg-clip-text text-primary-800"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="text-sm md:text-sm font-bold text-center mb-8 
                    bg-gradient-to-br from-gray-300 to-gray-500 bg-clip-text text-primary-800"
        >
          Coming soon (Searching for better server hosting)
        </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
            className="max-w-lg mx-auto dark:border-white/50 shadow-xl/30 backdrop-blur-4xl rounded-lg p-8"
          >
            <form
              onSubmit={handleSubmit}
            >
              <div className="mb-4 flex">
                <div className="mb-2 p-2">
                  <div className="relative flex w-full max-w-md items-center gap-2 
                                  rounded-full border dark:border-white/20 bg-gradient-to-br 
                                  from-white/20 to-white/5 py-1.5 pl-6 pr-1.5"
                  >
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-transparent text-sm text-primary-800 font-bold focus:outline-0"
                      required
                    />
                  </div>
                </div>
                <div className="mb-2 p-2">
                  <div className="relative flex w-full max-w-md items-center gap-2 
                                  rounded-full border dark:border-white/20 bg-gradient-to-br 
                                  from-white/20 to-white/5 py-1.5 pl-6 pr-1.5"
                  >
                    <input
                      type="text"
                      id="surname"
                      disabled
                      value={surName}
                      onChange={(e) => setSurName(e.target.value)}
                      placeholder="Your surname"
                      className="w-full bg-transparent text-sm text-primary-800 font-bold focus:outline-0"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 flex">
                <div className="mb-4 p-2">
                  <div className="relative flex w-full max-w-md items-center gap-2 
                                  rounded-full border dark:border-white/20 bg-gradient-to-br 
                                  from-white/20 to-white/5 py-1.5 pl-6 pr-1.5"
                  >
                    <input
                      type="email"
                      id="email"
                      disabled
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full bg-transparent text-sm font-bold text-primary-800 focus:outline-0"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4 p-2">
                  <div className="relative flex w-full max-w-md items-center gap-2 
                                  rounded-full border dark:border-white/20 bg-gradient-to-br 
                                  from-white/20 to-white/5 py-1.5 pl-6 pr-1.5"
                  >
                    <input
                      type="tel"
                      id="phone"
                      disabled
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Your phone number"
                      className="w-full bg-transparent text-sm text-primary-800 font-bold focus:outline-0"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4 p-2">
                <div className="relative flex w-full max-w-md items-center gap-2 
                                border dark:border-white/20 bg-gradient-to-br 
                                from-white/20 to-white/5 py-1.5 pl-6 pr-1.5"
                >
                  <textarea
                    id="message"
                    disabled
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="w-full bg-transparent text-sm text-primary-800 font-bold focus:outline-0"
                    rows={5}
                    required
                  />
                </div>
              </div>

              <div className="text-center px-6 py-2 transition-colors">
                <ButtonWrapper buttonText="Send Message" disabled={true} />
              </div>

              {statusMessage && (
                <p className="text-center mt-4 text-sm font-semibold">
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </>

  );
}
