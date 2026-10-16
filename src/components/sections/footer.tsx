"use client";

import React from 'react';

/**
 * Footer Component for Lowe's
 * 
 * Minimalist compliance footer featuring standard legal links, 
 * affiliate disclaimer, and copyright information styled for Lowe's.
 */
const Footer = () => {
  return (
    <footer className="relative z-10 w-full max-w-[512px] mx-auto px-4 pt-0 pb-16 mt-6 text-center">
      {/* Standard Legal & Compliance Links */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 text-[11px] font-medium text-gray-500 mb-3">
        <a 
          href="#privacy" 
          className="hover:text-[#012169] transition-colors underline-offset-2 hover:underline"
        >
          Privacy Policy
        </a>
        <span className="text-[#012169]/40">•</span>
        <a 
          href="#terms" 
          className="hover:text-[#012169] transition-colors underline-offset-2 hover:underline"
        >
          Terms & Conditions
        </a>
        <span className="text-[#012169]/40">•</span>
        <a 
          href="#contact" 
          className="hover:text-[#012169] transition-colors underline-offset-2 hover:underline"
        >
          Contact Us
        </a>
      </div>

      {/* Compliance Disclaimer */}
      <p className="text-gray-400 text-[9.5px] font-normal leading-relaxed mb-2 max-w-sm mx-auto">
        This site is an independent reward promotion and is not affiliated with or endorsed by Lowe's. Trademarks belong to their respective owners.
      </p>

      {/* Copyright Statement */}
      <p className="text-gray-400 text-[10px] font-medium tracking-tight">
        © 2026 All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
