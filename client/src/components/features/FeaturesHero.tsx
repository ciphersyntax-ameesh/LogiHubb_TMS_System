import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import React from "react";

const FeaturesHero = () => {
  return (
    <div className="bg-[#0F2A47] py-16 pt-32">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span>
            <span className="text-white"> Features</span>
          </h1>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.4}>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            Discover the comprehensive set of features that make <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span> the leading transport management solution in the industry.
          </p>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.6}>
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden mt-8 bg-[#1E3A5F] shadow-2xl">
            {/* Animated Dashboard Visual */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* Dashboard Grid Animation */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-6 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <motion.div 
                    key={i}
                    className="bg-white rounded-lg"
                    initial={{ opacity: 0.3, height: "70%" }}
                    animate={{ 
                      opacity: [0.3, 0.7, 0.3],
                      height: ["70%", "90%", "70%"]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Lines representing data flow */}
              <motion.div className="absolute inset-x-0 top-1/4 h-0.5 bg-[#E67E22]"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
              />
              
              <motion.div className="absolute inset-y-0 left-1/3 w-0.5 bg-[#2980B9]"
                initial={{ scaleY: 0, originY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.5,
                  repeatDelay: 1
                }}
              />
              
              <motion.div className="absolute inset-x-0 bottom-1/3 h-0.5 bg-[#E67E22]"
                initial={{ scaleX: 0, originX: 1 }}
                animate={{ scaleX: 1 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 1,
                  repeatDelay: 1
                }}
              />
              
              {/* Central Hub Icon */}
              <motion.div 
                className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-[#0F2A47] rounded-full flex items-center justify-center border-4 border-[#2980B9]"
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: [0.8, 1, 0.8],
                  boxShadow: [
                    "0 0 0 rgba(41, 128, 185, 0.4)",
                    "0 0 20px rgba(41, 128, 185, 0.7)",
                    "0 0 0 rgba(41, 128, 185, 0.4)"
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span>
                  </h3>
                  <p className="text-sm text-gray-300">TMS Platform</p>
                </div>
              </motion.div>
              
              {/* Data Node Labels */}
              {[
                { angle: 0, label: "Shipment Tracking", icon: "truck" },
                { angle: 60, label: "Route Optimization", icon: "route" },
                { angle: 120, label: "Inventory Control", icon: "box" },
                { angle: 180, label: "Vendor Management", icon: "handshake" },
                { angle: 240, label: "Analytics & Reports", icon: "chart-line" },
                { angle: 300, label: "Documentation", icon: "file-alt" }
              ].map((item, i) => {
                const angle = (item.angle) * (Math.PI / 180);
                const x = Math.cos(angle) * 130;
                const y = Math.sin(angle) * 130;
                
                // Calculate position for label (a bit farther out than the dot)
                const labelX = Math.cos(angle) * 160;
                const labelY = Math.sin(angle) * 160;
                
                return (
                  <React.Fragment key={i}>
                    {/* Pulsing dot */}
                    <motion.div
                      className="absolute w-3 h-3 rounded-full bg-[#E67E22]"
                      style={{ 
                        left: `calc(50% + ${x}px)`, 
                        top: `calc(50% + ${y}px)` 
                      }}
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Label */}
                    <motion.div
                      className="absolute text-xs md:text-sm font-medium text-white px-2 py-1 rounded-full bg-[#0F2A47] bg-opacity-70 border border-[#2980B9] flex items-center"
                      style={{ 
                        left: `calc(50% + ${labelX}px)`, 
                        top: `calc(50% + ${labelY}px)`,
                        transform: "translate(-50%, -50%)"
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 1 + (i * 0.2)
                      }}
                    >
                      <i className={`fas fa-${item.icon} mr-1 text-[#E67E22]`}></i>
                      <span className="hidden md:inline">{item.label}</span>
                    </motion.div>
                  </React.Fragment>
                );
              })}
            </motion.div>
            
            {/* Text overlay with improved visibility */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 bg-gradient-to-t from-[#0F2A47] to-transparent">
              <div className="text-center px-4 relative z-20 max-w-2xl mx-auto bg-[#0F2A47] bg-opacity-80 p-4 rounded-xl shadow-lg border border-[#2980B9]/30">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  Transport Management <span className="text-[#E67E22]">Command Center</span>
                </h3>
                <p className="text-base md:text-lg text-gray-200">
                  Complete visibility and real-time control across your entire logistics network with our integrated dashboard
                </p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default FeaturesHero;
