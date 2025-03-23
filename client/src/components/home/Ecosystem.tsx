import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";

const Ecosystem = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 rounded-full py-1 px-4">Connected Network</span>
          </div>
          
          <h2 className="text-4xl font-display font-bold mb-6 relative inline-block">
            LogiHubb <span className="text-[#E67E22]">Ecosystem</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#2980B9] to-[#E67E22] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A comprehensive network connecting all stakeholders in the logistics value chain
          </p>
        </AnimatedContainer>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Lines - positioned UNDER the cards with lower z-index */}
          <div className="hidden md:block absolute top-1/2 left-1/4 w-1/2 h-1 bg-gray-200 -z-10">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#2980B9] to-[#E67E22]" 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="hidden md:block absolute top-[calc(50%+6px)] left-1/4 w-1/2 h-1 bg-gray-100 -z-10">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#2980B9]/50 to-[#E67E22]/50 opacity-50" 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch relative z-10">
            {/* Customers Section */}
            <AnimatedContainer animation="slideInLeft" className="md:w-1/4 mb-10 md:mb-0">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full"
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-[#2980B9]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-users text-[#2980B9] text-xl"></i>
                </div>
                <h3 className="text-[#2980B9] text-xl font-bold mb-4">Customers</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-[#E67E22]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span>Global Importers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-[#E67E22]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span>Regional Exporters</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-[#E67E22]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span>Country Operations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-[#E67E22]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span>State Distributors</span>
                  </li>
                </ul>
              </motion.div>
            </AnimatedContainer>
            
            {/* Central LogiHubb TMS */}
            <AnimatedContainer animation="float" className="md:w-2/5 mb-10 md:mb-0 z-20">
              <motion.div 
                className="bg-gradient-to-br from-[#0F2A47] to-[#1E3A5F] rounded-2xl p-8 shadow-xl text-center text-white"
                whileHover={{ y: -5, boxShadow: '0 25px 30px -12px rgba(15, 42, 71, 0.4)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mx-auto flex items-center justify-center mb-6 border-4 border-[#2980B9]/30">
                  <i className="fas fa-network-wired text-[#E67E22] text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">LogiHubb TMS</h3>
                <p className="text-white/80 mb-6">Intelligent Transport Management System</p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-[#E67E22]">Cloud-based</div>
                    <div className="text-xs text-white/70">Auto-scaling</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-[#E67E22]">AI-Powered</div>
                    <div className="text-xs text-white/70">Self-learning</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-[#E67E22]">Real-time</div>
                    <div className="text-xs text-white/70">Live updates</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium text-[#E67E22]">Secure</div>
                    <div className="text-xs text-white/70">End-to-end</div>
                  </div>
                </div>
                
                {/* Pulse effect around the center */}
                <div className="absolute inset-0 z-0">
                  <motion.div 
                    className="absolute inset-0 rounded-2xl bg-[#2980B9]/20"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            </AnimatedContainer>
            
            {/* Suppliers Section */}
            <AnimatedContainer animation="slideInRight" className="md:w-1/4">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full"
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-[#E67E22]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-truck text-[#E67E22] text-xl"></i>
                </div>
                <h3 className="text-[#E67E22] text-xl font-bold mb-4">Suppliers</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-[#2980B9]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span>Logistics Carriers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-[#2980B9]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span>Customs Brokers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-[#2980B9]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span>Local Transporters</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-3 text-[#2980B9]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <span>Shippers</span>
                  </li>
                </ul>
              </motion.div>
            </AnimatedContainer>
          </div>
        </div>
        
        <AnimatedContainer animation="fadeUp" delay={0.4} className="text-center mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Scalable", "Modular", "Cloud-native", "Transparent", "Compliant", "Secure"
            ].map((tag, index) => (
              <motion.span 
                key={index}
                className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 hover:border-[#2980B9] hover:text-[#2980B9] transition-colors duration-300 cursor-default"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Ecosystem;
