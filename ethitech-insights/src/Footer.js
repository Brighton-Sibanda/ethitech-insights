// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white mt-4 py-3">
      <div className="container">
        © {new Date().getFullYear()} EthiTech Insights. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
