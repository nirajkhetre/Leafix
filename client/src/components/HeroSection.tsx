import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function HeroSection() {
  return (
    <motion.section 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[rgba(205,236,205,0.4)] to-[rgba(76,175,80,0.2)] overflow-hidden"
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0"
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-dark leading-tight">
              Smart AI for Plant Care – <span className="text-primary">Just Snap & Learn</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-neutral-dark opacity-90 max-w-xl mx-auto md:mx-0">
              Identify plants and get personalized care tips instantly with our AI-powered app.
            </p>
            
            {/* Download Buttons */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              <motion.a 
                href="#" 
                className="download-btn bg-neutral-dark hover:bg-black text-white px-5 py-3 rounded-lg flex items-center transition duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg"
                variants={fadeIn('up', 'spring', 0.3, 0.75)}
              >
                <i className="fab fa-google-play text-2xl mr-3"></i>
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </motion.a>
              <motion.a 
                href="#" 
                className="download-btn bg-neutral-dark hover:bg-black text-white px-5 py-3 rounded-lg flex items-center transition duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg"
                variants={fadeIn('up', 'spring', 0.4, 0.75)}
              >
                <i className="fab fa-apple text-2xl mr-3"></i>
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </motion.a>
              <motion.a 
                href="#" 
                className="download-btn mt-3 md:mt-0 bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg flex items-center transition duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg"
                variants={fadeIn('up', 'spring', 0.5, 0.75)}
              >
                <i className="fas fa-download text-xl mr-3"></i>
                <div className="text-sm font-medium">Direct APK Download</div>
              </motion.a>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            variants={fadeIn('left', 'tween', 0.2, 1)}
          >
            <div className="relative mx-auto md:ml-auto md:mr-0 max-w-sm">
              <img 
                src="https://images.unsplash.com/photo-1564727564693-568b3e5ed044?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="User identifying plant with PlantEase app" 
                className="rounded-3xl mx-auto z-10 relative shadow-xl"
                width="320"
                height="640"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-primary-light opacity-70 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-secondary opacity-20 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Curved Divider */}
      <div className="w-full h-[120px] mt-[-60px] overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
        </svg>
      </div>
    </motion.section>
  );
}
