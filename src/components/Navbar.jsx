import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#01639A] sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <div className="text-[#ffff] font-bold text-xl font-[montserrat]"></div> */}
          <a href="/">
          <div className="flex-shrink-0">
            <img
              src="/images/logo-f.png"   // ya import path
              alt="logo"
              className="h-20 sm:h-24 md:h-28 lg:h-30few w-auto object-contain"
            />
          </div>
          </a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-[#ffff]">
            <a href="#home" className="hover:text-[#FFC107] font-[montserrat]">Home</a>
            <a href="#services" className="hover:text-[#FFC107] font-[montserrat]">Services</a>
            <a href="#about" className="hover:text-[#FFC107] font-[montserrat]">About Us</a>
            <a href="#testimonal" className="hover:text-[#FFC107] font-[montserrat]">Testimonal</a>
            <a href="#contact" className="hover:text-[#FFC107] font-[montserrat]">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black/90`}>
        <div className="px-4 pt-2 pb-4 space-y-1 text-white">
          <a href="#home" className="block px-3 py-2 font-[montserrat] rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" className="block px-3 py-2 font-[montserrat] rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" className="block px-3 py-2 font-[montserrat] rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#testimonal" className="block px-3 py-2 font-[montserrat] rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>Testimonal</a>
          <a href="#contact" className="block px-3 py-2 font-[montserrat] rounded-md hover:bg-gray-800" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

