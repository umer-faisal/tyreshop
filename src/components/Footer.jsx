import React from 'react'

const Footer = () => (
  <footer className="bg-[#0175B2] py-6 px-4 text-center text-white">
    <div className="container mx-auto px-0 sm:px-6 lg:px-8">
      <div className="text-base sm:text-lg">Tyre Shop</div>
      <p className="text-xs sm:text-sm mt-2">&copy; {new Date().getFullYear()} Tyre Shop. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
