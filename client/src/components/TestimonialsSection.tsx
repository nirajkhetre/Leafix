import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/lib/motion";

// App features for future showcase
const upcomingFeatures = [
  {
    id: 1,
    title: "Plant Disease Detection",
    icon: "fas fa-shield-virus",
    description: "Early detection of plant diseases with AI-powered analysis"
  },
  {
    id: 2,
    title: "Advanced Care Calendar",
    icon: "fas fa-calendar-check",
    description: "Smart scheduling for waterings, fertilization, and repotting needs"
  },
  {
    id: 3,
    title: "Community Plant Exchange",
    icon: "fas fa-users",
    description: "Connect with other plant lovers to trade cuttings and plants"
  }
];

export default function UpcomingFeaturesSection() {
  return (
    <motion.section 
      id="testimonials" 
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
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">Coming Soon to Leafix</h2>
          <p className="mt-4 text-neutral-dark opacity-80">We're constantly working to improve your plant care experience</p>
        </motion.div>
        
        {/* Upcoming Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {upcomingFeatures.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-md text-center transform transition-all hover:shadow-lg"
              variants={fadeIn('up', 'spring', 0.2 + index * 0.1, 0.75)}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-5"
                variants={zoomIn(0.2 + index * 0.1, 0.6)}
              >
                <i className={`${feature.icon} text-2xl`}></i>
              </motion.div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-3">{feature.title}</h3>
              <p className="text-neutral-dark opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Beta Access Section */}
        <motion.div
          className="mt-16 bg-primary/10 p-8 md:p-12 rounded-2xl text-center max-w-3xl mx-auto"
          variants={fadeIn('up', 'tween', 0.5, 1)}
        >
          <motion.h3 
            className="text-xl md:text-2xl font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join Our Beta Testing Program
          </motion.h3>
          <motion.p 
            className="text-neutral-dark mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Be the first to try these exciting new features as they're developed. Subscribe to our newsletter to get early access!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
          >
            <a href="#download" className="bg-primary text-white font-medium py-3 px-8 rounded-lg inline-block hover:bg-primary-dark transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Subscribe for Updates
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
