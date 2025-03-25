import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import FeatureDialog, { FeatureDetails } from "./FeatureDialog";

// Define feature details
const featureDetails: FeatureDetails[] = [
  {
    title: "Instant Plant ID",
    description: "AI-powered identification that recognizes thousands of plant species with remarkable accuracy",
    icon: <i className="fas fa-search text-primary text-xl"></i>,
    detailedDescription: "Our advanced AI technology can identify over 10,000 plant species with just a single photo. The image recognition algorithm has been trained on millions of plant images to ensure high accuracy in various lighting conditions and growth stages.",
    imageUrl: "https://images.unsplash.com/photo-1617173944883-6a8b196b98e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Identify plants in seconds with just a photo",
      "Works offline for identification in areas without internet",
      "Recognizes plants at various growth stages",
      "Provides scientific name and common names for each plant"
    ]
  },
  {
    title: "Smart Care Tips",
    description: "Personalized recommendations for watering, sunlight, soil, and fertilizer for each plant",
    icon: <i className="fas fa-tint text-primary text-xl"></i>,
    detailedDescription: "Our plant care engine creates customized care routines based on your specific plant, its environment, and your local climate. No more generic advice - get recommendations tailored to your plant's specific needs.",
    imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Tailored watering schedules based on plant type and season",
      "Precise light requirements with window direction suggestions",
      "Soil mixture recommendations for optimal growth",
      "Fertilization timing and product suggestions"
    ]
  },
  {
    title: "Care Reminders",
    description: "Custom notifications so you never forget to water, fertilize, or repot your plants",
    icon: <i className="fas fa-clock text-primary text-xl"></i>,
    detailedDescription: "Stay on top of your plant care routine with smart, customizable reminders. The app learns from your care patterns and adjusts notifications to help you maintain the perfect schedule for each of your plants.",
    imageUrl: "https://images.unsplash.com/photo-1604762411432-7ac28721efdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Customizable notification types (push, email, calendar)",
      "Smart scheduling based on previous care patterns",
      "Batch reminders to streamline plant care sessions",
      "Seasonal adjustments for changing care needs"
    ]
  },
  {
    title: "Plant Library",
    description: "Comprehensive database with detailed information on thousands of plant species",
    icon: <i className="fas fa-book text-primary text-xl"></i>,
    detailedDescription: "Access our extensive knowledge base featuring detailed care guides, growth patterns, propagation methods, and troubleshooting tips for thousands of plant species. Perfect for both beginners and experienced plant enthusiasts.",
    imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "In-depth care guides for each plant species",
      "Step-by-step propagation instructions",
      "Common problems and solutions",
      "Seasonal care adjustments and special considerations"
    ]
  },
  {
    title: "Pest & Disease Detection",
    description: "Identify and treat common plant problems",
    icon: <i className="fas fa-bug text-primary text-lg"></i>,
    detailedDescription: "Our AI can recognize over 50 common plant diseases and pest infestations. Simply take a photo of the affected area, and the app will provide a diagnosis along with organic and chemical treatment options.",
    imageUrl: "https://images.unsplash.com/photo-1624517452946-df415334a457?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Early detection of pests and diseases",
      "Organic and conventional treatment options",
      "Preventative care recommendations",
      "Severity assessment and urgency indicators"
    ]
  },
  {
    title: "Weather Integration",
    description: "Adapts care tips based on local weather",
    icon: <i className="fas fa-cloud-sun-rain text-primary text-lg"></i>,
    detailedDescription: "Leafix connects to local weather data to automatically adjust your plant care recommendations. During heat waves, cold snaps, or extended cloudy periods, the app will modify watering schedules and provide protective measures.",
    imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Automated adjustments based on local forecasts",
      "Extreme weather alerts and protection tips",
      "Seasonal care transitions",
      "Humidity and temperature monitoring guidance"
    ]
  },
  {
    title: "Plant Community",
    description: "Connect with other plant enthusiasts",
    icon: <i className="fas fa-users text-primary text-lg"></i>,
    detailedDescription: "Join a thriving community of plant lovers from around the world. Share your plant collection, get advice from experienced growers, participate in challenges, and learn from other plant enthusiasts.",
    imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Connect with plant enthusiasts worldwide",
      "Share your plant collection and progress",
      "Get advice from experienced growers",
      "Participate in seasonal plant challenges"
    ]
  }
];

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openFeatureDialog = (feature: FeatureDetails) => {
    setSelectedFeature(feature);
    setIsDialogOpen(true);
  };

  const closeFeatureDialog = () => {
    setIsDialogOpen(false);
  };

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
          {/* Main Features */}
          {featureDetails.slice(0, 4).map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              variants={fadeIn('up', 'spring', 0.2 + (index * 0.1), 0.75)}
              onClick={() => openFeatureDialog(feature)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-dark opacity-80">{feature.description}</p>
              <div className="mt-4 text-primary text-sm font-medium flex items-center">
                Learn more
                <i className="fas fa-chevron-right ml-1 text-xs"></i>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {featureDetails.slice(4).map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              variants={fadeIn('up', 'spring', 0.6 + (index * 0.1), 0.75)}
              onClick={() => openFeatureDialog(feature)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-neutral-dark opacity-80 text-sm">{feature.description}</p>
                </div>
              </div>
              <div className="mt-3 ml-14 text-primary text-sm font-medium flex items-center">
                Learn more
                <i className="fas fa-chevron-right ml-1 text-xs"></i>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Dialog */}
      <FeatureDialog 
        feature={selectedFeature} 
        isOpen={isDialogOpen} 
        onClose={closeFeatureDialog} 
      />
    </motion.section>
  );
}
