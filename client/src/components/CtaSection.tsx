import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import ComingSoonDialog from "./ComingSoonDialog";

export default function CtaSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ 
    title: "", 
    description: "" 
  });

  const handleAppStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDialogContent({
      title: "Coming to App Store Soon!",
      description: "Leafix is not yet listed on the App Store. We're working hard to make it available soon. We'll notify you when it's ready for download!"
    });
    setDialogOpen(true);
  };

  const handlePlayStoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDialogContent({
      title: "Coming to Google Play Soon!",
      description: "Leafix is not yet listed on Google Play. We're working hard to make it available soon. We'll notify you when it's ready for download!"
    });
    setDialogOpen(true);
  };

  const handleDirectDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDialogContent({
      title: "App Under Development",
      description: "We're currently working on making Leafix even better! The direct APK download will be available once development is complete. Thank you for your patience and interest!"
    });
    setDialogOpen(true);
  };

  return (
    <>
      <motion.section 
        id="download" 
        className="py-16 md:py-24 bg-primary relative overflow-hidden"
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-10"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-10"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            variants={fadeIn('up', 'tween', 0.1, 1)}
          >
            <h2 className="text-2xl md:text-4xl font-bold">Ready to Become a Plant Expert?</h2>
            <p className="mt-4 text-lg md:text-xl opacity-90">Download Leafix today and transform your plant care routine</p>
            
            {/* Download Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <motion.a 
                href="#" 
                onClick={handlePlayStoreClick}
                className="download-btn bg-white text-primary hover:bg-neutral-light px-6 py-4 rounded-lg flex items-center transition duration-300 shadow-md hover:shadow-lg"
                variants={fadeIn('up', 'spring', 0.2, 0.75)}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-google-play text-2xl mr-3"></i>
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </motion.a>
              <motion.a 
                href="#" 
                onClick={handleAppStoreClick}
                className="download-btn bg-white text-primary hover:bg-neutral-light px-6 py-4 rounded-lg flex items-center transition duration-300 shadow-md hover:shadow-lg"
                variants={fadeIn('up', 'spring', 0.3, 0.75)}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-apple text-2xl mr-3"></i>
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </motion.a>
              <motion.a 
                href="#" 
                onClick={handleDirectDownloadClick}
                className="download-btn bg-neutral-dark hover:bg-black text-white px-6 py-4 rounded-lg flex items-center transition duration-300 shadow-md hover:shadow-lg"
                variants={fadeIn('up', 'spring', 0.4, 0.75)}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download text-xl mr-3"></i>
                <div className="text-sm font-medium">Direct APK Download</div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Coming Soon Dialog */}
      <ComingSoonDialog
        title={dialogContent.title}
        description={dialogContent.description}
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
