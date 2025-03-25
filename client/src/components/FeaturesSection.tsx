import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function FeaturesSection() {
  return (
    <motion.section 
      id="features" 
      className="py-16 md:py-24 bg-neutral-light"
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
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">Features that Make Plant Care Effortless</h2>
          <p className="mt-4 text-neutral-dark opacity-80">Everything you need to keep your plants thriving</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            variants={fadeIn('up', 'spring', 0.2, 0.75)}
          >
            <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-search text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Plant ID</h3>
            <p className="text-neutral-dark opacity-80">AI-powered identification that recognizes thousands of plant species with remarkable accuracy</p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            variants={fadeIn('up', 'spring', 0.3, 0.75)}
          >
            <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-tint text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Care Tips</h3>
            <p className="text-neutral-dark opacity-80">Personalized recommendations for watering, sunlight, soil, and fertilizer for each plant</p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            variants={fadeIn('up', 'spring', 0.4, 0.75)}
          >
            <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-clock text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Care Reminders</h3>
            <p className="text-neutral-dark opacity-80">Custom notifications so you never forget to water, fertilize, or repot your plants</p>
          </motion.div>
          
          {/* Feature 4 */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            variants={fadeIn('up', 'spring', 0.5, 0.75)}
          >
            <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-4">
              <i className="fas fa-book text-primary text-xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Plant Library</h3>
            <p className="text-neutral-dark opacity-80">Comprehensive database with detailed information on thousands of plant species</p>
          </motion.div>
        </div>
        
        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Feature 5 */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            variants={fadeIn('up', 'spring', 0.6, 0.75)}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-bug text-primary text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Pest & Disease Detection</h3>
                <p className="text-neutral-dark opacity-80 text-sm">Identify and treat common plant problems</p>
              </div>
            </div>
          </motion.div>
          
          {/* Feature 6 */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            variants={fadeIn('up', 'spring', 0.7, 0.75)}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-cloud-sun-rain text-primary text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Weather Integration</h3>
                <p className="text-neutral-dark opacity-80 text-sm">Adapts care tips based on local weather</p>
              </div>
            </div>
          </motion.div>
          
          {/* Feature 7 */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            variants={fadeIn('up', 'spring', 0.8, 0.75)}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-users text-primary text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Plant Community</h3>
                <p className="text-neutral-dark opacity-80 text-sm">Connect with other plant enthusiasts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
