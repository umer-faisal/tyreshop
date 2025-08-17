import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../sections/Home';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Testimonal from '../sections/Testimonal';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="">
        {/* Sections already have container and paddings; ensure scroll margin for sticky header */}
        <div className="scroll-mt-20" id="home-wrapper">
          <Home />
        </div>
        <div className="scroll-mt-20" id="about-wrapper">
          <About />
        </div>
        <div className="scroll-mt-20" id="contact-wrapper">
          <Contact />
        </div>
        <div className="scroll-mt-20" id="contact-wrapper">
          <Testimonal />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
