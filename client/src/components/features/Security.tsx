import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import React from "react";

const Security = () => {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All data transmitted between clients, servers, and third-party systems is fully encrypted",
      icon: "lock"
    },
    {
      title: "Role-Based Access Control",
      description: "Granular permission settings to ensure users only access authorized information",
      icon: "user-shield"
    },
    {
      title: "Audit Logging",
      description: "Comprehensive audit trails for all system activities and data modifications",
      icon: "history"
    },
    {
      title: "Fraud Detection",
      description: "AI-powered monitoring to identify suspicious activities and potential threats",
      icon: "shield-alt"
    }
  ];

  return (
    <div className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Advanced <span className="text-[#E67E22]">Security</span> Features
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span> employs enterprise-grade security to protect your data and operations
          </p>
        </AnimatedContainer>

        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <AnimatedContainer animation="slideInLeft">
              <div className="space-y-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#0F2A47] rounded-lg p-5 border-l-4 border-[#2980B9]"
                    whileHover={{ 
                      x: 5,
                      boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center flex-shrink-0 mr-4">
                        <i className={`fas fa-${feature.icon} text-white`}></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedContainer>
          </div>

          <div className="md:w-1/2">
            <AnimatedContainer animation="slideInRight">
              <div className="relative h-96 bg-[#0F2A47] rounded-xl overflow-hidden shadow-2xl">
                {/* Security visualization */}
                <div className="absolute inset-0">
                  {/* Digital grid background */}
                  <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
                    {[...Array(144)].map((_, i) => (
                      <div key={i} className="border border-[#2980B9]"></div>
                    ))}
                  </div>
                  
                  {/* Central shield */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(41, 128, 185, 0)",
                        "0 0 30px rgba(41, 128, 185, 0.5)",
                        "0 0 0 rgba(41, 128, 185, 0)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Shield base */}
                      <motion.path
                        d="M 50,5 L 95,25 L 95,60 C 95,75 75,90 50,95 C 25,90 5,75 5,60 L 5,25 L 50,5 Z"
                        fill="#0F2A47"
                        stroke="#2980B9"
                        strokeWidth="2"
                        initial={{ strokeDasharray: 300, strokeDashoffset: 300 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                          duration: 3,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Shield inner */}
                      <motion.path
                        d="M 50,15 L 85,30 L 85,60 C 85,70 70,80 50,85 C 30,80 15,70 15,60 L 15,30 L 50,15 Z"
                        fill="#1E3A5F"
                        stroke="#E67E22"
                        strokeWidth="1"
                        initial={{ strokeDasharray: 250, strokeDashoffset: 250 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{
                          duration: 3,
                          delay: 0.5,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Checkmark */}
                      <motion.path
                        d="M 30,50 L 45,65 L 70,35"
                        fill="none"
                        stroke="#E67E22"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          duration: 1.5,
                          delay: 2,
                          ease: "easeInOut"
                        }}
                      />
                    </svg>
                  </motion.div>
                  
                  {/* Orbiting data points */}
                  {[...Array(4)].map((_, i) => {
                    const angle = (i * 90) * (Math.PI / 180);
                    const distanceMultiplier = 1 + (i % 2) * 0.5; // Alternating distance
                    const distance = 130 * distanceMultiplier;
                    return (
                      <motion.div
                        key={i}
                        className="absolute flex items-center justify-center"
                        style={{
                          width: '20px',
                          height: '20px',
                          left: `calc(50% - 10px)`,
                          top: `calc(50% - 10px)`,
                          transformOrigin: "center"
                        }}
                        animate={{
                          x: [
                            Math.cos(angle) * distance,
                            Math.cos(angle + Math.PI/2) * distance,
                            Math.cos(angle + Math.PI) * distance,
                            Math.cos(angle + Math.PI*3/2) * distance,
                            Math.cos(angle + Math.PI*2) * distance
                          ],
                          y: [
                            Math.sin(angle) * distance,
                            Math.sin(angle + Math.PI/2) * distance,
                            Math.sin(angle + Math.PI) * distance,
                            Math.sin(angle + Math.PI*3/2) * distance,
                            Math.sin(angle + Math.PI*2) * distance
                          ]
                        }}
                        transition={{
                          duration: 15 + i * 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <div className="w-5 h-5 bg-[#2980B9] rounded-full flex items-center justify-center">
                          <motion.div
                            className="w-full h-full rounded-full bg-[#2980B9]"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5
                            }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {/* Security scan effect */}
                  <motion.div
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2980B9] to-transparent opacity-70"
                    initial={{ top: 0 }}
                    animate={{ top: '100%' }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                  
                  {/* Data packets */}
                  {[...Array(5)].map((_, i) => {
                    const startSide = i % 2 === 0 ? 'left' : 'right';
                    const startY = 20 + (i * 30);
                    return (
                      <motion.div
                        key={i}
                        className="absolute h-2 w-2 bg-[#E67E22] rounded-full"
                        style={{
                          [startSide]: '-10px',
                          top: `${startY}%`
                        }}
                        animate={{
                          x: startSide === 'left' ? ['0%', '2000%'] : ['0%', '-2000%'],
                          opacity: [0, 1, 1, 0],
                          scale: [0.5, 1, 1, 0.5]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatDelay: i * 0.7,
                          times: [0, 0.1, 0.9, 1]
                        }}
                      />
                    );
                  })}
                  
                  {/* Digital code particles */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => {
                      const x = Math.random() * 100;
                      const y = Math.random() * 100;
                      const size = 10 + Math.random() * 20;
                      return (
                        <motion.div
                          key={i}
                          className="absolute text-[#2980B9] opacity-20 font-mono text-xs"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`
                          }}
                          animate={{
                            opacity: [0, 0.2, 0],
                            y: [0, 10, 0]
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        >
                          {Math.random() > 0.5 ? '0' : '1'}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4 py-2 bg-[#0F2A47] bg-opacity-90 rounded-lg border border-[#2980B9]">
                  <h3 className="text-lg font-semibold">Enterprise-Grade Security</h3>
                  <p className="text-sm text-gray-300">Protecting your supply chain data at every level</p>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </div>
        
        {/* Compliance Section */}
        <AnimatedContainer animation="fadeUp" delay={0.3}>
          <div className="bg-[#0F2A47] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-display font-bold mb-6 text-center">
              Compliance & <span className="text-[#E67E22]">Certifications</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "ISO 27001", description: "Information Security Management", icon: "certificate" },
                { name: "GDPR", description: "Data Protection Compliance", icon: "shield-alt" },
                { name: "SOC 2", description: "Service Organization Control", icon: "user-shield" },
                { name: "HIPAA", description: "Health Information Privacy", icon: "hospital" }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#1E3A5F] border-2 border-[#2980B9] flex items-center justify-center mb-3"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(41, 128, 185, 0)",
                        "0 0 15px rgba(41, 128, 185, 0.4)",
                        "0 0 0 rgba(41, 128, 185, 0)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                  >
                    <i className={`fas fa-${cert.icon} text-[#2980B9] text-xl`}></i>
                  </motion.div>
                  <h4 className="font-semibold mb-1">{cert.name}</h4>
                  <p className="text-gray-400 text-xs">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Security;