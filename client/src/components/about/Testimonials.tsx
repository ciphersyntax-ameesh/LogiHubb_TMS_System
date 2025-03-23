import { TESTIMONIALS } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import { useState } from "react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Client <span className="text-[#E67E22]">Testimonials</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear what our customers say about their experience with LogiHubb.
          </p>
        </AnimatedContainer>
        
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <AnimatedContainer animation="slideInLeft">
              <div className="space-y-4">
                {TESTIMONIALS.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
                      activeIndex === index 
                        ? 'bg-[#1E3A5F] shadow-lg' 
                        : 'bg-transparent hover:bg-[#1E3A5F] hover:bg-opacity-50'
                    }`}
                    onClick={() => setActiveIndex(index)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedContainer>
          </div>
          
          <div className="w-full md:w-2/3 lg:w-3/4">
            <AnimatedContainer animation="fadeIn" key={activeIndex}>
              <motion.div 
                className="bg-[#1E3A5F] rounded-lg p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-[#2980B9] text-4xl mb-6">
                  <i className="fas fa-quote-left"></i>
                </div>
                
                <p className="text-gray-300 italic text-lg mb-8">
                  "{TESTIMONIALS[activeIndex].quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0F2A47] flex items-center justify-center mr-4">
                    <i className="fas fa-user text-[#2980B9]"></i>
                  </div>
                  <div>
                    <p className="font-semibold">{TESTIMONIALS[activeIndex].name}</p>
                    <p className="text-gray-400 text-sm">{TESTIMONIALS[activeIndex].title}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-center space-x-2">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        index === activeIndex ? 'bg-[#E67E22]' : 'bg-[#0F2A47]'
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatedContainer>
          </div>
        </div>
        
        <AnimatedContainer animation="fadeUp" delay={0.6} className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Read more success stories from our clients around the world
          </p>
          <motion.a
            href="#"
            className="inline-block bg-transparent border-2 border-[#2980B9] hover:bg-[#2980B9] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Case Studies
          </motion.a>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Testimonials;
