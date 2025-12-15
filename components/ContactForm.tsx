"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const sendEmail = (e: { preventDefault: () => void; target: { reset: () => void; }; }) => {
    e.preventDefault();
    setStatus("loading");

    // Replace these with your actual IDs from EmailJS
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result: { text: any; }) => {
        console.log(result.text);
        setStatus("success");
        e.target.reset(); // Clear form after success
      },
      (error: { text: unknown; }) => {
        console.log(error.text);
        setStatus("error");
      }
    );
  };

  return (
    <div className="bg-[#231F20] min-h-screen w-full flex items-center justify-center p-6 text-white font-sans" id="contact">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* --- LEFT SIDE: Header & Text --- */}
        <div className="lg:col-span-2 flex items-center justify-between mb-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            Contact Me
          </h1>
          {/* Decorative line */}
          <div className="hidden md:block h-px bg-white/20 flex-grow ml-8 mt-4"></div>
        </div>

        <div className="lg:col-span-2 mb-8">
          <p className="text-gray-400 text-lg max-w-2xl">
            I would love to hear about your project and how I can help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* --- RIGHT SIDE: The Form --- */}
        <div className="lg:col-span-2">
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            {/* NAME FIELD */}
            <div className="relative">
              <input
                type="text"
                name="name" // Matches {{name}} in EmailJS template
                id="name"
                required
                placeholder=" "
                className="peer w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-[#4EE1A0] transition-colors"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3 text-xs text-gray-400 font-bold tracking-widest uppercase transition-all 
                                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                                   peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#4EE1A0]"
              >
                Name
              </label>
            </div>

            {/* EMAIL FIELD */}
            <div className="relative">
              <input
                type="email"
                name="email" // Matches {{email}} in EmailJS template
                id="email"
                required
                placeholder=" "
                className="peer w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-[#4EE1A0] transition-colors"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3 text-xs text-gray-400 font-bold tracking-widest uppercase transition-all 
                                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                                   peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#4EE1A0]"
              >
                Email
              </label>
            </div>

            {/* MESSAGE FIELD */}
            <div className="relative">
              <textarea
                name="message" // Matches {{message}} in EmailJS template
                id="message"
                required
                rows="4"
                placeholder=" "
                className="peer w-full bg-transparent border-b border-gray-500 py-3 text-white focus:outline-none focus:border-[#4EE1A0] transition-colors resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-3 text-xs text-gray-400 font-bold tracking-widest uppercase transition-all 
                                   peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
                                   peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#4EE1A0]"
              >
                Message
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative inline-block text-sm font-bold tracking-[0.15em] uppercase text-white hover:text-[#4EE1A0] transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-[#4EE1A0] transition-all group-hover:bg-[#4EE1A0]"></span>
              </button>
            </div>

            {/* SUCCESS/ERROR MESSAGE */}
            {status === "success" && (
              <p className="text-[#4EE1A0] text-right mt-2 font-bold tracking-wide">
                MESSAGE SENT!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-right mt-2 font-bold tracking-wide">
                SOMETHING WENT WRONG.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
