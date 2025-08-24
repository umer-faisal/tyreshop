import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-[#01639A] py-6 px-4 text-center text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">

          {/* <!-- Left Section: Logo + Description --> */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="/">
            <img src="./images/logo-f.png" alt="Logo" className="h-34 md:h-[8rem] w-auto " />
          </a>
            <p className="text-white text-sm font-[montserrat] ">
              New Wheels was established in 1989.
              With international expertise from ALLEN Group, USA, we provide reliable tyres and wheel solutions to keep you moving safely and smoothly.
            </p>
          </div>

          {/* <!-- Middle Section: Company Links --> */}
          <div className="flex flex-col items-center w-full">
            <h3 className="text-lg font-semibold text-white mb-3 font-[montserrat]">Company</h3>
            <ul className="space-y-1 text-white text-sm">
              <li><a href="#home" className="hover:text-[#FFC107] font-[montserrat]">Home</a></li>
              <li><a href="#services" className="hover:text-[#FFC107] font-[montserrat]">Services</a></li>
              <li><a href="#about" className="hover:text-[#FFC107] font-[montserrat]">About us</a></li>
              <li><a href="#testimonal" className="hover:text-[#FFC107] font-[montserrat]">Testimonal</a></li>
              <li><a href="#contact" className="hover:text-[#FFC107] font-[montserrat]">Contact us</a></li>
            </ul>
          </div>

          {/* <!-- Right Section: Location Map --> */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h3 className="text-lg text-white font-semibold mb-3 font-[montserrat]">Our location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115797.13318395632!2d66.91211694335936!3d24.909562499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f0564686eab%3A0xbcebc5f9977467a1!2sNew%20Wheels!5e0!3m2!1sen!2s!4v1754725261822!5m2!1sen!2s"
              height="140"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="rounded-md shadow max-w-[250]"
            ></iframe>
          </div>

        </div>




        <div className="border-t border-white/30 mt-6"></div>
        <div className="container mx-auto px-0 sm:px-6 lg:px-8">
          <div className="text-base sm:text-lg font-[montserrat]">New Wheels</div>
          <p className="text-xs sm:text-sm mt-2 font-[montserrat]">&copy; {new Date().getFullYear()} New Wheels. All rights reserved.</p>
        </div>
      </footer>

    </>
  );
}

export default Footer;
