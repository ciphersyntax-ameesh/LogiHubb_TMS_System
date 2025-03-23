import { API_INTEGRATIONS } from "@/lib/constants";
import { LogisticsIcon } from "@/components/ui/logistics-icons";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import { featureCardAnimation } from "@/styles/animations";
import React from "react";

// More professional and creative API integration icons
const ApiIcon = ({ type, className = "" }: { type: string; className?: string }) => {
  switch (type) {
    case "wms":
      return (
        <div className={`relative ${className}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-full h-full">
            <path fill="currentColor" d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z" />
          </svg>
          <motion.div 
            className="absolute inset-0 w-full h-full opacity-50"
            animate={{ 
              background: [
                "linear-gradient(45deg, rgba(41, 128, 185, 0.2) 0%, rgba(230, 126, 34, 0.1) 100%)",
                "linear-gradient(45deg, rgba(41, 128, 185, 0.1) 0%, rgba(230, 126, 34, 0.2) 100%)",
                "linear-gradient(45deg, rgba(41, 128, 185, 0.2) 0%, rgba(230, 126, 34, 0.1) 100%)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Animated small boxes */}
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#E67E22]"
            animate={{ 
              y: [0, -5, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#2980B9]"
            animate={{ 
              y: [0, 5, 0],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      );
    case "erp":
      return (
        <div className={`relative ${className}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-full h-full">
            <path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg>
          {/* Data flow animation */}
          <motion.div 
            className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#2980B9] to-[#E67E22]" 
            style={{ y: "-50%" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          />
          {/* Node pulses */}
          <motion.div 
            className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-[#2980B9]" 
            style={{ y: "-50%", x: "-50%" }}
            animate={{ 
              scale: [1, 1.5, 1], 
              boxShadow: [
                "0 0 0 rgba(41, 128, 185, 0)",
                "0 0 10px rgba(41, 128, 185, 0.7)",
                "0 0 0 rgba(41, 128, 185, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-[#E67E22]" 
            style={{ y: "-50%", x: "50%" }}
            animate={{ 
              scale: [1, 1.5, 1], 
              boxShadow: [
                "0 0 0 rgba(230, 126, 34, 0)",
                "0 0 10px rgba(230, 126, 34, 0.7)",
                "0 0 0 rgba(230, 126, 34, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>
      );
    case "customs":
      return (
        <div className={`relative ${className}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-full h-full">
            <path fill="currentColor" d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
          {/* Stamp effect */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ opacity: [0, 0.7, 0], rotate: [-5, 0, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-12 h-12 border-2 border-[#E67E22] rounded-md transform rotate-45"></div>
          </motion.div>
          {/* Signature animation */}
          <motion.path 
            d="M10,30 Q20,10 30,30 T50,30"
            stroke="#2980B9"
            strokeWidth="1"
            fill="transparent"
            className="absolute bottom-1/4 left-1/4 w-1/2 h-1/6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </div>
      );
    case "api":
      return (
        <div className={`relative ${className}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-full h-full">
            <path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg>
          {/* Moving API data packets */}
          <motion.div 
            className="absolute top-1/3 left-0 w-3 h-1.5 bg-[#2980B9] rounded-full"
            animate={{ 
              x: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatDelay: 0.5,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-2/3 right-0 w-3 h-1.5 bg-[#E67E22] rounded-full"
            animate={{ 
              x: ["0%", "-100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatDelay: 0.7,
              ease: "easeInOut"
            }}
          />
          {/* API text animation */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-30"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="text-xs font-mono font-bold tracking-widest text-[#2980B9]">API</div>
          </motion.div>
        </div>
      );
    default:
      return <LogisticsIcon name={type} className={className} />;
  }
};

const ApiIntegrations = () => {
  // Extended integrations with improved descriptions
  const extendedIntegrations = [
    {
      id: "wms",
      icon: "wms",
      title: "WMS Integration",
      description: "Connect directly with your Warehouse Management System for seamless inventory tracking and fulfillment operations across your facilities network.",
      features: ["Real-time inventory sync", "Order status updates", "Picking & packing integration"]
    },
    {
      id: "erp",
      icon: "erp",
      title: "ERP Integration",
      description: "Synchronize logistics data with your Enterprise Resource Planning system to create a unified data flow across your entire business operations.",
      features: ["Bi-directional data sync", "Financial reconciliation", "Master data management"]
    },
    {
      id: "customs",
      icon: "customs",
      title: "Customs API",
      description: "Direct integration with customs systems for automated documentation submission, clearance processing, and compliance verification.",
      features: ["Electronic documentation", "Duty & tax calculation", "Compliance verification"]
    }
  ];

  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            <span className="text-[#2980B9]">API</span> <span className="text-[#E67E22]">Integrations</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Seamlessly connect <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span> with your existing business systems through our robust API ecosystem
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {extendedIntegrations.map((integration, index) => (
            <motion.div
              key={index}
              className="bg-[#1E3A5F] rounded-lg shadow-lg overflow-hidden"
              variants={featureCardAnimation}
              initial="initial"
              whileHover="hover"
            >
              <AnimatedContainer 
                animation="fadeUp" 
                delay={index * 0.2}
                className="h-full flex flex-col"
              >
                {/* Animated header with gradient and icon */}
                <div className="bg-gradient-to-r from-[#0F2A47] to-[#1E3A5F] p-6 flex items-center justify-center relative">
                  <div className="w-20 h-20 relative">
                    <div className="absolute inset-0 text-[#2980B9]">
                      <ApiIcon type={integration.icon} />
                    </div>
                    <motion.div 
                      className="absolute inset-0 bg-[#0F2A47] rounded-full opacity-10"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute top-3 right-3 w-3 h-3 rounded-full bg-[#E67E22] opacity-40"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-[#2980B9] opacity-40"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.7, 0.4]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-display font-semibold mb-3 text-white">
                    {integration.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-grow">
                    {integration.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="space-y-2 mb-4">
                    {integration.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (idx * 0.1) }}
                      >
                        <div className="w-4 h-4 mr-2 rounded-full bg-[#E67E22] bg-opacity-20 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[#E67E22]"></div>
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Connection status animation */}
                  <div className="mt-auto">
                    <div className="flex items-center text-xs text-gray-400">
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-green-500 mr-2"
                        animate={{ 
                          opacity: [1, 0.5, 1],
                          scale: [1, 0.8, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <span>Connected API Endpoint</span>
                    </div>
                    <motion.div 
                      className="mt-2 relative w-full h-1 bg-[#0F2A47] rounded-full overflow-hidden"
                      initial={{ opacity: 0.6 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#2980B9] to-[#E67E22]"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>
                </div>
              </AnimatedContainer>
            </motion.div>
          ))}
        </div>
        
        {/* Open API Platform section */}
        <AnimatedContainer animation="fadeUp" delay={0.6} className="mt-12 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-[#1E3A5F] to-[#0F2A47] p-8">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/3 lg:w-1/4 mb-6 md:mb-0 md:pr-8">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto md:mx-0 rounded-lg bg-[#0F2A47] border border-[#2980B9]/30 flex items-center justify-center relative shadow-lg">
                    <ApiIcon type="api" className="w-12 h-12 text-[#2980B9]" />
                    
                    {/* Animated connection lines */}
                    {[...Array(3)].map((_, i) => {
                      const delay = i * 0.7;
                      const angle = 90 + (i * 45);
                      return (
                        <motion.div 
                          key={i}
                          className="absolute w-16 h-0.5 bg-gradient-to-r from-[#2980B9] to-transparent"
                          style={{ 
                            right: 0,
                            top: `${(i+1) * 25}%`,
                            transformOrigin: "right center",
                            rotate: `${angle}deg`
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: [0, 1, 0] }}
                          transition={{ 
                            duration: 2,
                            delay: delay,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        />
                      );
                    })}
                  </div>
                  
                  {/* Code snippet overlay */}
                  <motion.div 
                    className="absolute -bottom-2 -right-2 md:right-0 w-32 h-16 bg-[#0F2A47] border border-[#2980B9]/30 rounded overflow-hidden shadow-lg flex items-center justify-center p-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="text-[0.5rem] font-mono text-left w-full overflow-hidden text-gray-400">
                      <div>{"GET /api/v1/shipments"}</div>
                      <div className="text-[#E67E22]">{"Authorization: Bearer"}</div>
                      <div>{"Content-Type: application/json"}</div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="md:w-2/3 lg:w-3/4">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-display font-bold text-white">
                    Open API <span className="text-[#E67E22]">Platform</span>
                  </h3>
                  <div className="ml-3 px-2 py-1 bg-[#2980B9] bg-opacity-20 rounded text-xs text-[#2980B9] font-semibold border border-[#2980B9]/30">
                    REST API v3.2
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span> provides a comprehensive set of RESTful APIs that enable seamless integration 
                  with your existing enterprise systems. Our developer-friendly documentation and dedicated support team will
                  help you connect our platform to your entire technology ecosystem with minimal development effort.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  {[
                    {
                      title: "Developer Resources",
                      description: "Comprehensive documentation, SDKs, and code samples for multiple languages",
                      icon: "file-code"
                    },
                    {
                      title: "Webhooks & Events",
                      description: "Real-time notifications for critical logistics events and status changes",
                      icon: "bell"
                    },
                    {
                      title: "Security & Compliance",
                      description: "OAuth 2.0 authentication, rate limiting, and data encryption for maximum security",
                      icon: "shield-alt"
                    }
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-[#0F2A47] p-4 rounded border border-[#2980B9]/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (idx * 0.2) }}
                    >
                      <div className="flex items-start">
                        <div className="mr-3 text-[#E67E22] mt-1">
                          <i className={`fas fa-${item.icon}`}></i>
                        </div>
                        <div>
                          <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-xs">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default ApiIntegrations;
