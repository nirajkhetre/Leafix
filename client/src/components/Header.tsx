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
            <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,16c-2.2,0-4-1.8-4-4
            c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"/>
            <path d="M12,6c-3.3,0-6,2.7-6,6c0,3.3,2.7,6,6,6s6-2.7,6-6C18,8.7,15.3,6,12,6z M12,14c-1.1,0-2-0.9-2-2
            c0-1.1,0.9-2,2-2s2,0.9,2,2C14,13.1,13.1,14,12,14z"/>
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
