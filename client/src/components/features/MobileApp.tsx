import { MOBILE_APP_FEATURES } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const MobileApp = () => {
  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <AnimatedContainer animation="slideInLeft">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Mobile <span className="text-[#E67E22]">Application</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Manage your logistics operations on the go with our comprehensive mobile application.
              </p>
              
              <div className="space-y-4">
                {MOBILE_APP_FEATURES.map((feature, index) => (
                  <AnimatedContainer key={index} animation="fadeUp" delay={index * 0.2}>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
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
              
              <div className="mt-8 flex space-x-4">
                <motion.button 
                  onClick={() => window.open('#', '_blank')}
                  className="flex items-center bg-black text-white px-4 py-2 rounded-lg"
                  whileHover={{ scale: 1.05 }}
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
                  whileHover={{ scale: 1.05 }}
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
                  <div className="bg-[#1E3A5F] p-2 rounded-3xl shadow-2xl">
                    <div className="rounded-2xl overflow-hidden border-4 border-[#2980B9]">
                      <img 
                        src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                        alt="Mobile Application" 
                        className="w-full"
                      />
                    </div>
                    
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-[#0F2A47] bg-opacity-80 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-[#E67E22] flex items-center justify-center">
                          <i className="fas fa-truck text-white"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
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
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
