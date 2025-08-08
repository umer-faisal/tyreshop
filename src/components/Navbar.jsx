import React from 'react'

const Navbar = () => (
  <nav className="bg-gradient-to-r from-black via-gray-900 to-black p-4 sticky top-0 z-50 flex justify-between items-center">
    <div className="text-white font-bold text-xl">Tyre Shop</div>
    <div className="space-x-6 text-white">
      <a href="#home" className="hover:text-yellow-400">Home</a>
      <a href="#about" className="hover:text-yellow-400">About Us</a>
      <a href="#contact" className="hover:text-yellow-400">Contact</a>
    </div>
  </nav>
);

export default Navbar;

