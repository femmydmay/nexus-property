"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

/* =======================
   WhatsApp Widget
======================= */
const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  // Auto-open after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* WhatsApp Logo Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center transition"
          aria-label="Open WhatsApp chat"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 .01 5.37.01 12c0 2.12.55 4.19 1.6 6.03L0 24l6.15-1.61A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12Z" />
          </svg>
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 animate-fade-in">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                N
              </div>
              <div>
                <p className="font-semibold text-gray-800">Nexus MollyB</p>
                <p className="text-sm text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Online Now
                </p>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Message */}
          <p className="text-sm text-gray-600 mb-4">
            Hi there 👋 <br />
            Looking for a perfect house? I am here to help.
          </p>

          {/* CTA */}
          <a
            href="https://wa.me/2348185696269?text=Hi%20there!%20I%20am%20interested%20in%20finding%20a%20house."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 .01 5.37.01 12c0 2.12.55 4.19 1.6 6.03L0 24l6.15-1.61A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12Z" />
            </svg>
            Start Chat on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

/* =======================
   Footer
======================= */
const Footer = () => {
  return (
    <div className="bg-gray-900 mt-auto relative">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            {/* Links */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Links</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/2348185696269"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-500"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Help / Guide
                  </Link>
                </li>
              </ul>
            </div>

            {/* Website */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Website</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Agents
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Our Goals
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Ads
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Tools</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Post A Listing
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Create Account
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Search for Listing
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-white">
                    Find Agents
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          <div className="md:max-w-md lg:col-span-2">
            <span className="text-base font-medium tracking-wide text-gray-300">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="email"
                className="flex-grow h-12 px-4 mb-3 bg-white border rounded md:mr-2"
              />
              <button className="h-12 px-6 text-white bg-primary rounded">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              For each step of your home selling journey.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between pt-5 pb-10 border-t border-gray-800">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Website By: S.C.S.L. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Notifier */}
      <div className="absolute bottom-6 right-6 z-40">
        <WhatsAppWidget />
      </div>
    </div>
  );
};

export default Footer;
