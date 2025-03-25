import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function HowItWorksSection() {
  return (
    <motion.section 
      id="how-it-works" 
      className="py-16 md:py-24"
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={fadeIn('up', 'tween', 0.1, 1)}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">How Leafix Works</h2>
          <p className="mt-4 text-neutral-dark opacity-80">Getting plant care has never been this simple</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {/* Step 1 */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={fadeIn('right', 'spring', 0.2, 0.75)}
          >
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-camera text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Take a Photo</h3>
            <p className="text-neutral-dark opacity-80">Simply take or upload a photo of any plant you want to identify</p>
          </motion.div>
          
          {/* Step 2 */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={fadeIn('right', 'spring', 0.3, 0.75)}
          >
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-robot text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Identifies</h3>
            <p className="text-neutral-dark opacity-80">Our AI instantly recognizes the plant species with high accuracy</p>
          </motion.div>
          
          {/* Step 3 */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={fadeIn('right', 'spring', 0.4, 0.75)}
          >
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-leaf text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Care Tips</h3>
            <p className="text-neutral-dark opacity-80">Receive personalized care instructions for your specific plant</p>
          </motion.div>
          
          {/* Step 4 */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={fadeIn('right', 'spring', 0.5, 0.75)}
          >
            <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-bell text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3">Set Reminders</h3>
            <p className="text-neutral-dark opacity-80">Never forget to water or care for your plants with timely reminders</p>
          </motion.div>
        </div>
        
        {/* App Showcase */}
        <motion.div 
          className="mt-20 flex justify-center"
          variants={fadeIn('up', 'tween', 0.6, 1)}
        >
          <div className="relative max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Leafix app interface showcase" 
              className="rounded-xl shadow-xl mx-auto"
              width="1000"
              height="500"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button 
                className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-play text-primary text-2xl"></i>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
