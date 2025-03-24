import { motion } from "framer-motion";
import { AI_ML_FEATURES } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import React from "react";
import { AiIcon } from "@/components/ui/ai-icons";

const AiFeatures = () => {
  return (
    <div className="py-20 relative overflow-hidden bg-[#0F2A47]">
      {/* Neural network background animation */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full opacity-10">
          {/* Animated grid pattern */}
          <motion.div 
            className="absolute inset-0" 
            style={{
              backgroundImage: "radial-gradient(circle, rgba(41, 128, 185, 0.2) 1px, transparent 1px)",
              backgroundSize: "30px 30px"
            }}
            animate={{ 
              backgroundPosition: ["0px 0px", "30px 30px"] 
            }}
            transition={{ 
              duration: 10, 
              ease: "linear", 
              repeat: Infinity 
            }}
          />
          
          {/* Animated connection lines */}
          {[...Array(15)].map((_, i) => {
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const endX = startX + (Math.random() * 20 - 10);
            const endY = startY + (Math.random() * 20 - 10);
            
            return (
              <motion.div
                key={i}
                className="absolute bg-[#2980B9]"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  width: '1px',
                  transformOrigin: 'left center',
                  height: '1px'
                }}
                animate={{
                  width: [0, `${Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2))}%`],
                  rotate: `${Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)}deg`,
                  opacity: [0, 0.3, 0]
                }}
                transition={{
                  duration: 3 + (Math.random() * 2),
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
              />
            );
          })}
          
          {/* Neural nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#E67E22]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: '4px',
                height: '4px'
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 2 + (Math.random() * 3),
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <div className="inline-block rounded-full bg-[#E67E22] bg-opacity-20 px-4 py-1 mb-4">
            <span className="text-sm font-medium text-[#E67E22]">AI/ML Powered</span>
          </div>
          <h2 className="text-4xl font-display font-bold mb-4 text-white">
            <span className="text-[#2980B9]">Artificial Intelligence</span> &{" "}
            <span className="text-[#E67E22]">Machine Learning</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Advanced artificial intelligence and machine learning algorithms optimize routes, costs, and resources throughout your logistics operations.
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_ML_FEATURES.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-[#1E3A5F] rounded-lg overflow-hidden shadow-lg border border-[#2980B9]/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(15, 42, 71, 0.6), 0 8px 10px -6px rgba(15, 42, 71, 0.6)"
              }}
            >
              <div className="relative">
                {/* Feature number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#E67E22] text-white font-bold flex items-center justify-center text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Feature header with gradient */}
                <div className="h-8 bg-gradient-to-r from-[#2980B9]/30 to-[#E67E22]/30"></div>
                
                {/* Icon section with background glow */}
                <div className="relative px-6 pt-6 pb-4">
                  <div className="w-16 h-16 relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-[#0F2A47] flex items-center justify-center p-3 border border-[#2980B9]/30">
                      <AiIcon type={feature.icon} className="text-white" />
                    </div>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-[#2980B9] opacity-20 blur-md"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
                
                {/* Bottom action */}
                <div className="px-6 pb-6 pt-4 flex items-center border-t border-[#2980B9]/20">
                  <motion.div 
                    className="flex items-center text-[#E67E22] text-sm font-medium cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiFeatures;