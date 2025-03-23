import { LogisticsIcon } from "@/components/ui/logistics-icons";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import React from "react";

type AnimationType = "transportAnimation" | "rateAnimation" | "trackingAnimation" | "documentAnimation";

interface CoreFeature {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  animation: AnimationType;
  features: {
    title: string;
    description: string;
  }[];
  reverse: boolean;
}

const CoreFeatures = () => {
  const coreFeatures: CoreFeature[] = [
    {
      title: "End-to-End Transport Management",
      description: "<span className='text-[#2980B9]'>Logi</span><span className='text-[#E67E22]'>Hubb</span> provides a complete solution for managing your entire transportation process, from initial order to final delivery and payment.",
      icon: "truck-moving",
      iconColor: "#2980B9",
      animation: "transportAnimation",
      features: [
        { title: "Single Platform Solution", description: "Manage all transport activities in one integrated system" },
        { title: "Multi-modal Support", description: "Handles all transportation modes: ocean, air, rail, and road" },
        { title: "Cross-border Capabilities", description: "Manage international shipping with customs compliance features" }
      ],
      reverse: false
    },
    {
      title: "Rate Management & Procurement",
      description: "Optimize freight costs with comprehensive rate management tools and automated procurement processes.",
      icon: "dollar-sign",
      iconColor: "#E67E22",
      animation: "rateAnimation",
      features: [
        { title: "Contract Rate Repository", description: "Centralized storage for all carrier agreements and negotiated rates" },
        { title: "Spot Market Bidding", description: "Electronic bidding platform for securing competitive spot rates" },
        { title: "Rate Comparison", description: "AI-powered tools to compare and select optimal carrier rates" }
      ],
      reverse: true
    },
    {
      title: "Visibility & Real-time Tracking",
      description: "Gain complete visibility into your shipments with real-time tracking and monitoring capabilities.",
      icon: "map-marker-alt",
      iconColor: "#2980B9",
      animation: "trackingAnimation",
      features: [
        { title: "GPS Tracking Integration", description: "Real-time location tracking for carriers and vehicles" },
        { title: "Exception Management", description: "Automated alerts for delays and other shipment exceptions" },
        { title: "ETA Predictions", description: "AI-powered estimated time of arrival predictions" }
      ],
      reverse: false
    },
    {
      title: "Document Management",
      description: "Digitize and automate all transportation documentation for efficient and paperless operations.",
      icon: "file-alt",
      iconColor: "#E67E22",
      animation: "documentAnimation",
      features: [
        { title: "Digital Document Repository", description: "Centralized storage for all shipping documents" },
        { title: "Automated Document Generation", description: "Create BOLs, commercial invoices, and customs forms automatically" },
        { title: "Electronic Signatures", description: "Secure e-signature capabilities for document approval" }
      ],
      reverse: true
    }
  ];

  // Animation for each feature type
  const animations = {
    transportAnimation: (reverse: boolean) => (
      <div className="relative w-full h-64 md:h-80 bg-[#1E3A5F] rounded-lg overflow-hidden shadow-xl">
        {/* Circular track */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-8 border-dashed border-gray-700 opacity-20"></div>
        </div>
        
        {/* Animated truck */}
        <motion.div
          className="absolute flex items-center justify-center"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            width: "56px", 
            height: "56px",
            top: "calc(50% - 28px)", 
            left: "calc(50% - 28px)",
            transformOrigin: "calc(50% + 100px) calc(50%)"
          }}
        >
          <div className="bg-[#2980B9] p-3 rounded-lg shadow-lg">
            <i className="fas fa-truck-moving text-white text-xl"></i>
          </div>
        </motion.div>
        
        {/* Connected nodes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const radian = (angle * Math.PI) / 180;
          const x = Math.cos(radian) * 130;
          const y = Math.sin(radian) * 130;
          
          return (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-[#E67E22] rounded-full"
              style={{ 
                left: `calc(50% + ${x}px)`, 
                top: `calc(50% + ${y}px)` 
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5
              }}
            />
          );
        })}
        
        {/* Center hub */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0F2A47] rounded-full border-4 border-[#2980B9] flex items-center justify-center z-10"
          animate={{
            boxShadow: [
              "0 0 0 rgba(41, 128, 185, 0)",
              "0 0 20px rgba(41, 128, 185, 0.6)",
              "0 0 0 rgba(41, 128, 185, 0)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        >
          <div className="text-center">
            <div className="text-lg font-bold">
              <span className="text-[#2980B9]">Logi</span>
              <span className="text-[#E67E22]">Hubb</span>
            </div>
            <div className="text-xs text-gray-400">TMS</div>
          </div>
        </motion.div>
      </div>
    ),
    
    rateAnimation: (reverse: boolean) => (
      <div className="relative w-full h-64 md:h-80 bg-[#1E3A5F] rounded-lg overflow-hidden shadow-xl">
        {/* Grid background */}
        <div className="absolute inset-0 grid grid-cols-5 grid-rows-5 gap-0.5 opacity-10">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="bg-gray-400 w-full h-full"></div>
          ))}
        </div>
        
        {/* Animated bars chart */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-end justify-center space-x-4 w-4/5">
          {[75, 45, 95, 60, 80].map((height, i) => (
            <motion.div
              key={i}
              className="w-10 md:w-12 bg-gradient-to-t from-[#2980B9] to-[#E67E22] rounded-t-md"
              initial={{ height: 0 }}
              animate={{ height: `${height}px` }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          ))}
        </div>
        
        {/* Dollar symbols */}
        {[...Array(5)].map((_, i) => {
          const x = (i - 2) * 25;
          return (
            <motion.div
              key={i}
              className="absolute text-[#E67E22] font-bold text-lg md:text-xl"
              style={{
                left: `calc(50% + ${x}%)`,
                top: '20%'
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity
              }}
            >
              $
            </motion.div>
          );
        })}
        
        {/* Pulsing circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-[#E67E22] opacity-50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.2, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full border-2 border-[#2980B9] opacity-30"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0.5
          }}
        />
        
        {/* Center display */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0F2A47] rounded-full flex items-center justify-center z-10 border-4 border-[#E67E22]">
          <motion.div
            className="text-center"
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            <div className="text-2xl font-bold text-[#E67E22]">
              <i className="fas fa-dollar-sign"></i>
            </div>
            <div className="text-xs text-gray-300 mt-1">Best Rates</div>
          </motion.div>
        </div>
      </div>
    ),
    
    trackingAnimation: (reverse: boolean) => (
      <div className="relative w-full h-64 md:h-80 bg-[#1E3A5F] rounded-lg overflow-hidden shadow-xl">
        {/* Map background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full grid grid-cols-8 grid-rows-5">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="border border-gray-600"></div>
            ))}
          </div>
        </div>
        
        {/* Route path */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <motion.path
            d="M 50,150 C 100,50 150,250 200,100 S 300,150 350,120"
            fill="none"
            stroke="#2980B9"
            strokeWidth="4"
            strokeDasharray="520"
            strokeDashoffset="520"
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.5
            }}
          />
        </svg>
        
        {/* Moving vehicle along the path */}
        <motion.div
          className="absolute w-8 h-8 bg-[#E67E22] rounded-lg flex items-center justify-center"
          style={{ 
            top: '150px', 
            left: '50px',
          }}
          animate={{
            offsetPath: "path('M 50,150 C 100,50 150,250 200,100 S 300,150 350,120')",
            offsetDistance: ['0%', '100%']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <i className="fas fa-truck text-white text-sm"></i>
        </motion.div>
        
        {/* Location markers */}
        {[[60, 150], [200, 100], [340, 120]].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#2980B9] rounded-full flex items-center justify-center"
            style={{ 
              width: '24px', 
              height: '24px',
              top: `${pos[1]}px`, 
              left: `${pos[0]}px`,
              marginTop: '-12px',
              marginLeft: '-12px'
            }}
            animate={{
              scale: [1, 1.3, 1],
              boxShadow: [
                "0 0 0 rgba(41, 128, 185, 0)",
                "0 0 10px rgba(41, 128, 185, 0.8)",
                "0 0 0 rgba(41, 128, 185, 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <i className="fas fa-map-marker-alt text-white text-sm"></i>
          </motion.div>
        ))}
        
        {/* GPS signal waves */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          <div className="relative">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-[#2980B9]"
                style={{
                  width: `${(i + 1) * 30}px`,
                  height: `${(i + 1) * 30}px`,
                  top: `${-(i + 1) * 15}px`,
                  left: `${-(i + 1) * 15}px`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.2, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
            
            <div className="w-10 h-10 bg-[#0F2A47] rounded-full flex items-center justify-center border-2 border-[#2980B9]">
              <i className="fas fa-satellite text-[#E67E22]"></i>
            </div>
          </div>
        </motion.div>
      </div>
    ),
    
    documentAnimation: (reverse: boolean) => (
      <div className="relative w-full h-64 md:h-80 bg-[#1E3A5F] rounded-lg overflow-hidden shadow-xl">
        {/* Document stack */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-lg shadow-lg"
              style={{
                width: '120px',
                height: '150px',
                top: `${-i * 5}px`,
                left: `${-i * 5}px`,
              }}
              animate={{
                rotateZ: [-3 + i, 3 + i, -3 + i],
                y: [-2 + i, 2 + i, -2 + i]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              {/* Document content lines */}
              <div className="p-3">
                <div className="w-full h-3 bg-gray-300 rounded-full mb-2"></div>
                <div className="w-2/3 h-3 bg-gray-300 rounded-full mb-4"></div>
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="w-full h-2 bg-gray-200 rounded-full mb-2"></div>
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Digital signature animation */}
          <motion.div
            className="absolute top-16 left-8 transform rotate-12 opacity-0"
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.8],
              y: [0, -30, -30, -60]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <div className="text-[#E67E22] font-bold">
              <svg width="60" height="40" viewBox="0 0 60 40">
                <motion.path
                  d="M5,20 C12,10 18,30 25,15 S 40,25 55,15"
                  fill="none"
                  stroke="#E67E22"
                  strokeWidth="2"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2.5
                  }}
                />
              </svg>
            </div>
          </motion.div>
          
          {/* Document scan effect */}
          <motion.div
            className="absolute top-0 left-0 w-120 h-150 bg-gradient-to-b from-transparent via-[#2980B9] to-transparent opacity-30"
            style={{ width: '120px', height: '150px' }}
            animate={{
              y: [-150, 150]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </div>
        
        {/* Floating icons */}
        {['file-pdf', 'file-contract', 'file-invoice', 'file-signature'].map((icon, i) => {
          const angle = (i * 90) * (Math.PI / 180);
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={i}
              className="absolute w-10 h-10 rounded-full bg-[#0F2A47] flex items-center justify-center"
              style={{ 
                top: `calc(50% + ${y}px)`, 
                left: `calc(50% + ${x}px)`,
                marginTop: '-20px',
                marginLeft: '-20px'
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              <i className={`fas fa-${icon} text-[#E67E22]`}></i>
            </motion.div>
          );
        })}
      </div>
    )
  };

  return (
    <>
      {coreFeatures.map((feature, index) => (
        <div 
          key={index} 
          className={`py-16 ${index % 2 === 0 ? 'bg-[#0F2A47]' : 'bg-[#1E293B]'}`}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
              <div className="md:w-1/2 md:px-10 mb-10 md:mb-0">
                <AnimatedContainer 
                  animation={feature.reverse ? "slideInRight" : "slideInLeft"}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: feature.description }} />
                  
                  <div className="space-y-4">
                    {feature.features.map((subFeature, subIndex) => (
                      <div key={subIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                            <i className="fas fa-check text-xs text-white"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold">{subFeature.title}</h3>
                          <p className="text-gray-300 text-sm">{subFeature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedContainer>
              </div>
              
              <div className="md:w-1/2">
                <AnimatedContainer animation="float">
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {animations[feature.animation](feature.reverse)}
                  </motion.div>
                </AnimatedContainer>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CoreFeatures;
