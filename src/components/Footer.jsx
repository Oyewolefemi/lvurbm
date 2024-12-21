import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="space-x-4">
        <a href="/privacy" className="text-blue-400 hover:underline">
          Privacy Policy
        </a>
        <a href="/terms" className="text-blue-400 hover:underline">
          Terms of Service
        </a>
        <a href="/contact" className="text-blue-400 hover:underline">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
