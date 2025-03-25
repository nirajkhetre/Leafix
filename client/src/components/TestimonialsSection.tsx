import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "PlantEase saved my fiddle leaf fig! I was overwatering it until the app identified my plant and gave me proper care instructions. Now it's thriving!"
  },
  {
    id: 2,
    name: "Michael T.",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 4.5,
    text: "As a beginner plant parent, this app is exactly what I needed. The reminders are super helpful and the plant ID feature is surprisingly accurate!"
  },
  {
    id: 3,
    name: "Priya M.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "I've tried several plant apps, and PlantEase is by far the most accurate and user-friendly. It helped me diagnose a fungal issue on my monstera and saved it!"
  },
  {
    id: 4,
    name: "James R.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "This app has completely changed how I care for my indoor garden. The specific watering schedules for each plant type are spot on!"
  },
  {
    id: 5,
    name: "Elena K.",
    photo: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 4.5,
    text: "I love how the app sends me reminders to care for my plants. The disease detection feature helped me save my peace lily just in time."
  },
  {
    id: 6,
    name: "David L.",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    text: "As someone who always killed plants before, PlantEase has given me the confidence to build a thriving indoor jungle. Incredible app!"
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Number of slides (each slide has 3 testimonials in desktop view)
  const slideCount = Math.ceil(testimonials.length / 3);
  
  // Change slide
  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

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
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-dark">What Our Users Say</h2>
          <p className="mt-4 text-neutral-dark opacity-80">Join thousands of happy plant parents</p>
        </motion.div>
        
        {/* Testimonials Slider */}
        <div className="testimonials-container relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${slideCount * 100}%` 
              }}
            >
              {Array.from({ length: slideCount }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.slice(slideIndex * 3, slideIndex * 3 + 3).map((testimonial, index) => (
                      <motion.div 
                        key={testimonial.id}
                        className="bg-white p-6 rounded-xl shadow-md"
                        variants={fadeIn('up', 'spring', 0.2 + index * 0.1, 0.75)}
                      >
                        <div className="flex items-center mb-4">
                          <img 
                            src={testimonial.photo} 
                            alt={testimonial.name} 
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="ml-4">
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <div className="flex text-yellow-400">
                              {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                                <i key={i} className="fas fa-star"></i>
                              ))}
                              {testimonial.rating % 1 !== 0 && (
                                <i className="fas fa-star-half-alt"></i>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-neutral-dark opacity-90">{testimonial.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation Dots */}
          <motion.div 
            className="flex justify-center mt-10"
            variants={fadeIn('up', 'spring', 0.5, 0.75)}
          >
            {Array.from({ length: slideCount }).map((_, i) => (
              <button 
                key={i} 
                className={`w-3 h-3 rounded-full mx-1 transition-colors duration-300 ${currentSlide === i ? 'bg-primary' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goToSlide(i)}
              ></button>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
