import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function WhyChooseUsSection() {
  return (
    <motion.section 
      id="why-us" 
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
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">Why Choose PlantEase?</h2>
          <p className="mt-4 text-neutral-dark opacity-80">See how we compare to traditional plant care methods</p>
        </motion.div>
        
        {/* Comparison Table */}
        <motion.div 
          className="overflow-x-auto"
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <table className="w-full max-w-4xl mx-auto border-collapse bg-white rounded-xl shadow-md">
            <thead>
              <tr>
                <th className="p-4 text-left border-b border-gray-200"></th>
                <th className="p-4 text-center border-b border-gray-200 text-primary font-bold">
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,16c-2.2,0-4-1.8-4-4
                      c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z"/>
                    </svg>
                    PlantEase
                  </div>
                </th>
                <th className="p-4 text-center border-b border-gray-200 text-neutral-dark">Web Searches</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium">Plant Identification</td>
                <td className="p-4 text-center border-b border-gray-200">
                  <span className="text-primary"><i className="fas fa-check-circle"></i> Instant AI recognition</span>
                </td>
                <td className="p-4 text-center border-b border-gray-200">
                  <span className="text-neutral-dark opacity-70"><i className="fas fa-times-circle"></i> Manual research</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium">Care Instructions</td>
                <td className="p-4 text-center border-b border-gray-200">
                  <span className="text-primary"><i className="fas fa-check-circle"></i> Personalized to your plant</span>
                </td>
                <td className="p-4 text-center border-b border-gray-200">
                  <span className="text-neutral-dark opacity-70"><i className="fas fa-times-circle"></i> Generic advice</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium">Reminders</td>
                <td className="p-4 text-center border-b border-gray-200">
                  <span className="text-primary"><i className="fas fa-check-circle"></i> Smart scheduling</span>
                </td>
                <td className="p-4 text-center border-b border-gray-200">
                  <span className="text-neutral-dark opacity-70"><i className="fas fa-times-circle"></i> None</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 border-b border-gray-200 font-medium">Problem Diagnosis</td>
                <td className="p-4 text-center border-b border-gray-200">
                  <span className="text-primary"><i className="fas fa-check-circle"></i> Visual AI analysis</span>
                </td>
                <td className="p-4 text-center border-b border-gray-200">
                  <span className="text-neutral-dark opacity-70"><i className="fas fa-times-circle"></i> Difficult to diagnose</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Ease of Use</td>
                <td className="p-4 text-center">
                  <span className="text-primary"><i className="fas fa-check-circle"></i> One-tap solution</span>
                </td>
                <td className="p-4 text-center">
                  <span className="text-neutral-dark opacity-70"><i className="fas fa-times-circle"></i> Time-consuming</span>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.section>
  );
}
