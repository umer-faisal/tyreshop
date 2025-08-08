import React from 'react'

const Footer = () => (
  <footer className="bg-gradient-to-r from-black via-gray-900 to-black p-4 text-center text-white">
    <div>Tyre Shop</div>
    <p className="text-sm mt-2">&copy; {new Date().getFullYear()} Tyre Shop. All rights reserved.</p>
  </footer>
);

export default Footer;
