import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import React from "react";

const Sustainability = () => {
  const features = [
    {
      title: "Carbon Footprint Tracking",
      description: "Monitor and reduce your logistics carbon emissions with real-time tracking and analytics",
      icon: "leaf"
    },
    {
      title: "Eco-friendly Route Optimization",
      description: "Automatically select routes that minimize environmental impact while maintaining efficiency",
      icon: "route"
    },
    {
      title: "Alternative Fuel Support",
      description: "Integrate with carriers using electric, hydrogen, and other alternative fuel vehicles",
      icon: "charging-station"
    },
    {
      title: "Packaging Optimization",
      description: "Reduce waste by optimizing packaging based on shipment contents and transport mode",
      icon: "box"
    },
    {
      title: "Sustainability Reporting",
      description: "Generate detailed environmental impact reports for regulatory compliance and sustainability goals",
      icon: "file-chart-line"
    },
    {
      title: "Green Partner Network",
      description: "Connect with eco-certified carriers and logistics partners through our green partner network",
      icon: "handshake"
    }
  ];

  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Sustainability <span className="text-[#E67E22]">Features</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span> helps you reduce your environmental impact while optimizing your logistics operations
          </p>
        </AnimatedContainer>

        {/* Animated Earth Visualization */}
        <AnimatedContainer animation="fadeUp" className="mb-16">
          <div className="relative h-64 md:h-80 bg-[#1E3A5F] rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Earth Circle */}
              <motion.div
                className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#1a3264] to-[#1a4d4c]"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {/* Continents */}
                <div className="absolute top-[15%] left-[25%] w-[15%] h-[10%] bg-[#2e8b57] rounded-sm"></div>
                <div className="absolute top-[20%] left-[45%] w-[25%] h-[15%] bg-[#2e8b57] rounded-sm"></div>
                <div className="absolute top-[40%] left-[15%] w-[20%] h-[20%] bg-[#2e8b57] rounded-sm"></div>
                <div className="absolute top-[65%] left-[40%] w-[15%] h-[15%] bg-[#2e8b57] rounded-sm"></div>
                <div className="absolute top-[30%] left-[70%] w-[10%] h-[20%] bg-[#2e8b57] rounded-sm"></div>
              </motion.div>

              {/* Orbit paths */}
              <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-[#2980B9] opacity-20"></div>
              <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-[#2980B9] opacity-10"></div>
              
              {/* Eco vehicles orbiting */}
              <motion.div
                className="absolute w-10 h-10 bg-[#2980B9] rounded-full flex items-center justify-center"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: "center",
                  left: "calc(50% - 5px)",
                  top: "calc(50% - 140px)"
                }}
              >
                <i className="fas fa-truck text-white"></i>
              </motion.div>
              
              <motion.div
                className="absolute w-10 h-10 bg-[#E67E22] rounded-full flex items-center justify-center"
                animate={{
                  rotate: -360
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: "center",
                  left: "calc(50% - 160px)",
                  top: "calc(50% - 5px)"
                }}
              >
                <i className="fas fa-ship text-white"></i>
              </motion.div>
              
              <motion.div
                className="absolute w-10 h-10 bg-[#2ecc71] rounded-full flex items-center justify-center"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: "center",
                  left: "calc(50% - 5px)",
                  top: "calc(50% + 130px)"
                }}
              >
                <i className="fas fa-train text-white"></i>
              </motion.div>
              
              {/* Floating leaf particles */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                const distance = 80 + Math.random() * 100;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                return (
                  <motion.div
                    key={i}
                    className="absolute text-[#2ecc71] text-xs"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.4, 1, 0.4],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                  >
                    <i className="fas fa-leaf"></i>
                  </motion.div>
                );
              })}
              
              {/* CO2 reduction indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-[#0F2A47] bg-opacity-80 rounded-lg px-4 py-2 border border-[#2ecc71]"
                animate={{
                  y: [0, -5, 0],
                  boxShadow: [
                    "0 0 0 rgba(46, 204, 113, 0)",
                    "0 0 15px rgba(46, 204, 113, 0.5)",
                    "0 0 0 rgba(46, 204, 113, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              >
                <div className="flex items-center text-[#2ecc71] font-semibold">
                  <i className="fas fa-arrow-down mr-2"></i>
                  <span>CO<sub>2</sub> Reduction: 24%</span>
                </div>
              </motion.div>
            </div>
            
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center bg-[#0F2A47] bg-opacity-80 rounded-lg px-5 py-3 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-1">
                <span className="text-[#2ecc71]">Green</span> Logistics Solutions
              </h3>
              <p className="text-sm text-gray-300">
                Reduce emissions while improving efficiency
              </p>
            </div>
          </div>
        </AnimatedContainer>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedContainer
              key={index}
              animation="fadeUp"
              delay={0.1 * index}
            >
              <motion.div
                className="bg-[#1E3A5F] rounded-lg p-6 h-full"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2980B9] to-[#2ecc71] flex items-center justify-center mb-4">
                  <i className={`fas fa-${feature.icon} text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
                
                <motion.div
                  className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2ecc71] to-transparent mt-4"
                  animate={{
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1
                  }}
                />
              </motion.div>
            </AnimatedContainer>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16">
          <AnimatedContainer animation="fadeUp" className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-2">
              Sustainability <span className="text-[#E67E22]">Impact</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our customers have achieved significant environmental improvements while optimizing their operations
            </p>
          </AnimatedContainer>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { value: "24%", label: "Average CO2 Reduction", icon: "leaf" },
              { value: "30%", label: "Improved Fuel Efficiency", icon: "gas-pump" },
              { value: "18%", label: "Less Packaging Waste", icon: "box" },
              { value: "46%", label: "More Sustainable Routes", icon: "route" }
            ].map((stat, index) => (
              <AnimatedContainer
                key={index}
                animation="fadeUp"
                delay={0.1 * index}
              >
                <motion.div
                  className="bg-[#1E3A5F] rounded-lg p-6 text-center"
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-full bg-[#0F2A47] border-2 border-[#2ecc71] flex items-center justify-center mb-4"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(46, 204, 113, 0)",
                        "0 0 15px rgba(46, 204, 113, 0.5)",
                        "0 0 0 rgba(46, 204, 113, 0)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <i className={`fas fa-${stat.icon} text-[#2ecc71] text-xl`}></i>
                  </motion.div>
                  <div className="text-3xl font-bold text-[#E67E22] mb-2">{stat.value}</div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </motion.div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;