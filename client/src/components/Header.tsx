import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-95 shadow-sm' : 'bg-opacity-90'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center" 
          variants={fadeIn('right', 'spring', 0.1, 0.75)}
          initial="hidden"
          animate="show"
        >
          <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6,2C2.5,3,2,7.5,3,11c1,4,4,8,9,10s8-4,9-8c1-3.5-0.5-8-4-9C8,2,6,2,6,2z M11,6c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S1,1,11,6z"/>
            <path d="M11,8c-1.7,0-3,1.3-3,3s1.3,3,2,3s3-1.3,4-3S12.7,8,11,8z"/>
          </svg>
          <span className="ml-2 text-xl font-semibold text-primary">Leafix</span>
        </motion.div>
        
        {/* Navigation - Desktop */}
        <motion.nav 
          className="hidden md:flex items-center space-x-8"
          variants={fadeIn('down', 'spring', 0.2, 0.75)}
          initial="hidden"
          animate="show"
        >
          <a href="#how-it-works" className="text-neutral-dark hover:text-primary transition duration-300">How It Works</a>
          <a href="#features" className="text-neutral-dark hover:text-primary transition duration-300">Features</a>
          <a href="#why-us" className="text-neutral-dark hover:text-primary transition duration-300">Why Choose Us</a>
          <a href="#testimonials" className="text-neutral-dark hover:text-primary transition duration-300">Testimonials</a>
        </motion.nav>
        
        {/* Download Button - Desktop */}
        <motion.a 
          href="#download" 
          className="hidden md:block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-5 rounded-full transition duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          variants={fadeIn('left', 'spring', 0.3, 0.75)}
          initial="hidden"
          animate="show"
        >
          Download Now
        </motion.a>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-neutral-dark focus:outline-none"
          onClick={toggleMobileMenu}
          variants={fadeIn('left', 'spring', 0.3, 0.75)}
          initial="hidden"
          animate="show"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </motion.button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white pb-4 px-4 shadow-md transition-all duration-300 overflow-hidden ${showMobileMenu ? 'max-h-60' : 'max-h-0'}`}
      >
        <a href="#how-it-works" className="block py-2 text-neutral-dark hover:text-primary" onClick={toggleMobileMenu}>How It Works</a>
        <a href="#features" className="block py-2 text-neutral-dark hover:text-primary" onClick={toggleMobileMenu}>Features</a>
        <a href="#why-us" className="block py-2 text-neutral-dark hover:text-primary" onClick={toggleMobileMenu}>Why Choose Us</a>
        <a href="#testimonials" className="block py-2 text-neutral-dark hover:text-primary" onClick={toggleMobileMenu}>Testimonials</a>
        <a href="#download" className="block mt-2 bg-primary text-white font-medium py-2 px-4 rounded-full text-center" onClick={toggleMobileMenu}>Download Now</a>
      </div>
    </header>
  );
}
