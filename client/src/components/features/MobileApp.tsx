import { MOBILE_APP_FEATURES } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import React from "react";

const MobileApp = () => {
  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <AnimatedContainer animation="slideInLeft">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span> Mobile
              </h2>
              <p className="text-gray-300 mb-6">
                Manage your logistics operations on the go with our comprehensive mobile application that syncs seamlessly with the main platform.
              </p>
              
              <div className="space-y-4">
                {MOBILE_APP_FEATURES.map((feature, index) => (
                  <AnimatedContainer key={index} animation="fadeUp" delay={index * 0.2}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2980B9] to-[#E67E22] flex items-center justify-center">
                          <i className="fas fa-check text-xs text-white"></i>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </AnimatedContainer>
                ))}
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button 
                  onClick={() => window.open('#', '_blank')}
                  className="flex items-center bg-black text-white px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-apple text-xl mr-2"></i>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </motion.button>
                
                <motion.button 
                  onClick={() => window.open('#', '_blank')}
                  className="flex items-center bg-black text-white px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-google-play text-xl mr-2"></i>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </motion.button>
              </div>
            </AnimatedContainer>
          </div>
          
          <div className="md:w-1/2">
            <AnimatedContainer animation="float">
              <div className="relative max-w-xs mx-auto">
                {/* Phone frame */}
                <motion.div
                  className="relative z-10"
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="bg-[#1E3A5F] p-3 rounded-[40px] shadow-2xl border-2 border-gray-800">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-[#0F2A47] rounded-b-xl z-20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#E67E22] rounded-full"></div>
                    </div>
                    
                    {/* Phone screen */}
                    <div className="rounded-[32px] overflow-hidden h-[500px] relative bg-[#0F2A47] border border-gray-700">
                      {/* Status bar */}
                      <div className="absolute top-0 left-0 right-0 h-8 bg-black bg-opacity-50 z-10 flex items-center justify-between px-5">
                        <div className="text-xs text-white">09:41</div>
                        <div className="flex space-x-2">
                          <i className="fas fa-signal text-white text-xs"></i>
                          <i className="fas fa-wifi text-white text-xs"></i>
                          <i className="fas fa-battery-three-quarters text-white text-xs"></i>
                        </div>
                      </div>
                      
                      {/* App header */}
                      <div className="absolute top-8 left-0 right-0 h-14 bg-[#1E3A5F] z-10 px-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-[#2980B9] font-bold text-lg">Logi</span>
                          <span className="text-[#E67E22] font-bold text-lg">Hubb</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#2980B9] bg-opacity-20 flex items-center justify-center">
                          <i className="fas fa-bell text-[#2980B9] text-xs"></i>
                        </div>
                      </div>
                      
                      {/* Dashboard UI */}
                      <div className="absolute top-24 left-0 right-0 bottom-0 p-4">
                        {/* Summary cards */}
                        <motion.div 
                          className="bg-[#2980B9] bg-opacity-10 rounded-xl p-3 mb-4"
                          animate={{
                            y: [0, -3, 0],
                            boxShadow: [
                              "0 0 0 rgba(41, 128, 185, 0)",
                              "0 0 8px rgba(41, 128, 185, 0.5)",
                              "0 0 0 rgba(41, 128, 185, 0)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-white text-sm font-semibold">Active Shipments</div>
                            <div className="text-[#E67E22] text-sm font-bold">24</div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <div className="bg-[#2980B9] bg-opacity-20 px-2 py-1 rounded text-[10px] text-[#2980B9]">Ocean: 12</div>
                            <div className="bg-[#E67E22] bg-opacity-20 px-2 py-1 rounded text-[10px] text-[#E67E22]">Road: 8</div>
                            <div className="bg-green-500 bg-opacity-20 px-2 py-1 rounded text-[10px] text-green-500">Air: 4</div>
                          </div>
                        </motion.div>
                        
                        {/* Shipments list */}
                        <div className="space-y-3">
                          {[...Array(3)].map((_, i) => (
                            <motion.div 
                              key={i}
                              className="bg-[#1E3A5F] rounded-lg p-3 flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ 
                                opacity: 1, 
                                x: 0,
                                y: [0, -2, 0]
                              }}
                              transition={{
                                delay: 0.2 * i,
                                duration: 4,
                                repeat: Infinity,
                                repeatDelay: 2
                              }}
                            >
                              <div className="w-10 h-10 rounded-full bg-[#0F2A47] flex items-center justify-center mr-3">
                                <i className={`fas fa-${i === 0 ? 'truck' : i === 1 ? 'ship' : 'plane'} text-[#2980B9]`}></i>
                              </div>
                              <div className="flex-1">
                                <div className="text-white text-xs font-semibold mb-1">
                                  SHP-{10023 + i} · {i === 0 ? 'Los Angeles' : i === 1 ? 'Shanghai' : 'Frankfurt'} to {i === 0 ? 'Chicago' : i === 1 ? 'Rotterdam' : 'New York'}
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="text-gray-400 text-[10px]">
                                    ETA: {i === 0 ? '2h 45m' : i === 1 ? '4d 8h' : '12h 30m'}
                                  </div>
                                  <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                                    <motion.div 
                                      className={`h-full ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-[#2980B9]' : 'bg-[#E67E22]'}`}
                                      initial={{ width: 0 }}
                                      animate={{ width: `${(i + 1) * 30}%` }}
                                      transition={{
                                        duration: 1.5,
                                        delay: 0.5 * i
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Bottom navigation */}
                        <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#1E3A5F] border-t border-gray-700 flex justify-around items-center px-4">
                          {['home', 'search', 'bell', 'user'].map((icon, i) => (
                            <motion.div 
                              key={i}
                              className={`w-10 h-10 rounded-full ${i === 0 ? 'bg-[#2980B9] bg-opacity-20' : ''} flex items-center justify-center`}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <i className={`fas fa-${icon} ${i === 0 ? 'text-[#2980B9]' : 'text-gray-400'}`}></i>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone button */}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/4 h-1 bg-gray-700 rounded-full"></div>
                </motion.div>
                
                {/* Background decorative elements */}
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#2980B9] rounded-lg opacity-20"
                  animate={{ 
                    rotate: [0, 10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-[#E67E22] rounded-full opacity-20"
                  animate={{ 
                    rotate: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Notification animations */}
                {[...Array(3)].map((_, i) => {
                  const angle = 30 + (i * 50);
                  const distance = 140 + (i * 20);
                  const delay = i * 2;
                  
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 rounded-lg bg-[#0F2A47] border border-[#2980B9] flex items-center justify-center"
                      style={{
                        top: '30%',
                        right: '20%',
                        zIndex: 5
                      }}
                      initial={{ 
                        opacity: 0, 
                        scale: 0.5,
                        x: 0,
                        y: 0
                      }}
                      animate={{ 
                        opacity: [0, 1, 1, 0],
                        scale: [0.5, 1, 1, 0.8],
                        x: [0, Math.cos(angle * Math.PI/180) * distance],
                        y: [0, Math.sin(angle * Math.PI/180) * distance]
                      }}
                      transition={{
                        duration: 3,
                        delay: delay,
                        repeat: Infinity,
                        repeatDelay: 6
                      }}
                    >
                      <i className={`fas fa-${i === 0 ? 'bell' : i === 1 ? 'check' : 'map-marker-alt'} text-${i === 0 ? '[#E67E22]' : i === 1 ? 'green-500' : '[#2980B9]'} text-xs`}></i>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
