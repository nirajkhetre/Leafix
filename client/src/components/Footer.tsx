import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would handle the newsletter subscription here
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <motion.footer 
      className="bg-neutral-dark text-white pt-16 pb-8"
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-1"
            variants={fadeIn('right', 'tween', 0.1, 1)}
          >
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,16c-2.2,0-4-1.8-4-4
                c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"/>
              </svg>
              <span className="ml-2 text-xl font-semibold text-white">PlantEase</span>
            </div>
            <p className="text-gray-400 mb-4">Your AI plant care companion that makes caring for plants simple and enjoyable.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="md:col-span-1"
            variants={fadeIn('up', 'tween', 0.2, 1)}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-primary transition duration-300">How It Works</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-primary transition duration-300">Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-primary transition duration-300">Testimonials</a></li>
            </ul>
          </motion.div>
          
          {/* Resources */}
          <motion.div 
            className="md:col-span-1"
            variants={fadeIn('up', 'tween', 0.3, 1)}
          >
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Plant Care Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition duration-300">Support</a></li>
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div 
            className="md:col-span-1"
            variants={fadeIn('left', 'tween', 0.4, 1)}
          >
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest plant care tips and app updates</p>
            <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded transition duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8"
          variants={fadeIn('up', 'tween', 0.5, 1)}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} PlantEase. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary text-sm transition duration-300">Contact Us</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
