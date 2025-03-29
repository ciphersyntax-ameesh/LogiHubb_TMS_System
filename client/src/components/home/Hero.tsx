import { Link } from "wouter";
import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import { pulseAnimation } from "@/styles/animations";
import LogisticsVisualization from "./LogisticsVisualization";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0F172A] via-[#0F2A47] to-[#1E3A5F] py-16 md:py-28 pt-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-10">
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2980B9" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
        
        {/* Abstract geometric shapes */}
        <motion.div 
          className="absolute -right-10 -bottom-40 w-80 h-80 rounded-full bg-[#E67E22]/5"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute -left-40 top-10 w-96 h-96 rounded-full bg-[#2980B9]/5"
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear"
          }}
        />
        
        {/* Animated logistics icons in background */}
        <div className="absolute top-20 right-[20%] opacity-10">
          <motion.svg 
            width="50" 
            height="50" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#FFFFFF"
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="4" y="6" width="16" height="12" strokeWidth="1" />
            <line x1="4" y1="12" x2="20" y2="12" strokeWidth="1" />
            <circle cx="8" cy="18" r="2" strokeWidth="1" />
            <circle cx="16" cy="18" r="2" strokeWidth="1" />
          </motion.svg>
        </div>
        <div className="absolute bottom-20 left-[15%] opacity-10">
          <motion.svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#FFFFFF"
            animate={{ y: [0, 15, 0], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="1" />
          </motion.svg>
        </div>
        <div className="absolute top-1/2 right-[10%] opacity-10">
          <motion.svg 
            width="35" 
            height="35" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#FFFFFF"
            animate={{ y: [0, 10, 0], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <circle cx="12" cy="12" r="10" strokeWidth="1" />
            <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" strokeWidth="1" />
            <path d="M2 12h20" strokeWidth="1" />
          </motion.svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            {/* Floating badge */}
            <motion.div 
              className="absolute -top-8 -left-4 bg-[#2980B9] text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg z-20"
              animate={{ 
                y: [0, -5, 0],
                rotate: [-2, 2, -2]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              AI-Powered Technology
            </motion.div>
            
            <AnimatedContainer animation="fadeUp" delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-6 relative">
                <span className="text-white drop-shadow-lg">Transforming</span><br />
                <span className="relative text-white">Transport</span><br />
                <div className="relative inline-block">
                  <span className="text-[#E67E22] drop-shadow-lg">Management</span>
                  <motion.div 
                    className="absolute -right-8 top-1/2 h-1 bg-[#E67E22] rounded-full"
                    animate={{ width: [0, 40, 0] }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut" 
                    }}
                  />
                </div>
                <span className="text-white drop-shadow-lg"> with</span>
                <motion.span 
                  className="ml-2 text-[#2980B9] drop-shadow-lg relative inline-block"
                  animate={{ 
                    color: ['#2980B9', '#3498DB', '#2980B9'] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  AI/ML
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-1 bg-[#2980B9] rounded-full"
                    animate={{ width: ['0%', '100%', '0%'] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                </motion.span>
              </h1>
            </AnimatedContainer>
            
            <AnimatedContainer animation="fadeUp" delay={0.4}>
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                <span className="text-[#2980B9] font-semibold">Logi</span><span className="text-[#E67E22] font-semibold">Hubb</span> delivers end-to-end transport management solutions powered by artificial intelligence and machine learning, optimizing your entire logistics operation for 
                <span className="text-[#E67E22] font-semibold"> maximum efficiency</span> and 
                <span className="text-[#2980B9] font-semibold"> complete visibility</span>.
              </p>
            </AnimatedContainer>
            
            <AnimatedContainer animation="fadeUp" delay={0.6}>
              <div className="space-y-4 mb-8">
                {[
                  { text: "Real-time tracking & advanced analytics", icon: "chart-bar" },
                  { text: "AI-powered route optimization & cost reduction", icon: "route" },
                  { text: "End-to-end supply chain visibility", icon: "eye" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (index * 0.2) }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#0F2A47] border border-[#2980B9]/30 flex items-center justify-center mr-4 shadow-lg">
                      {item.icon === "chart-bar" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3498DB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {item.icon === "route" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3498DB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                      )}
                      {item.icon === "eye" && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3498DB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <span className="text-white font-semibold">{item.text}</span>
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-[#2980B9] to-transparent w-0"
                        animate={{ width: "100%" }}
                        transition={{ delay: 1 + (index * 0.2), duration: 0.8 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedContainer>
            
            <AnimatedContainer animation="fadeUp" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  className="inline-block"
                  variants={pulseAnimation}
                  initial="initial"
                  animate="animate"
                  whileHover={{ 
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/register">
                    <div
                      className="inline-block bg-gradient-to-r from-[#E67E22] to-[#F39C12] text-white font-bold py-3 px-8 rounded-lg shadow-xl transition-all duration-300 cursor-pointer border border-[#F39C12]/20 hover:shadow-[0_0_15px_rgba(230,126,34,0.5)]"
                    >
                      Request Demo
                    </div>
                  </Link>
                </motion.div>
                
                <motion.div
                  className="inline-block"
                  whileHover={{ 
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/features">
                    <div
                      className="inline-block bg-transparent border-2 border-[#2980B9] hover:border-[#3498DB] hover:shadow-[0_0_10px_rgba(41,128,185,0.3)] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 cursor-pointer relative overflow-hidden group"
                    >
                      <span className="relative z-10">Explore Features</span>
                      <div className="absolute inset-0 bg-[#2980B9]/20 w-0 group-hover:w-full transition-all duration-300"></div>
                    </div>
                  </Link>
                </motion.div>
              </div>
              
              {/* Trust badges */}
              <motion.div 
                className="mt-10 flex items-center space-x-2 text-gray-400 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2ECC71]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Trusted by 500+ companies worldwide</span>
              </motion.div>
            </AnimatedContainer>
          </div>
          
          <div className="md:w-1/2 relative z-10">
            <AnimatedContainer animation="fadeIn" delay={0.3}>
              {/* Top tooltip */}
              <motion.div 
                className="absolute -top-12 md:-top-12 right-4 md:right-10 bg-white/10 backdrop-blur-sm text-white text-xs py-2 px-4 rounded-full shadow-lg border border-white/20 z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-[#2ECC71] rounded-full mr-2"></span>
                  <span>Live tracking data</span>
                </div>
              </motion.div>
              
              {/* Visualization component */}
              <LogisticsVisualization />
              
              {/* Bottom tooltip */}
              <motion.div 
                className="absolute -bottom-8 md:-bottom-8 left-4 md:left-10 bg-white/10 backdrop-blur-sm text-white text-xs py-2 px-4 rounded-full shadow-lg border border-white/20 z-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#F39C12] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>32% average efficiency increase</span>
                </div>
              </motion.div>
              
              {/* Enhanced gradient glow effects */}
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#2980B9]/20 rounded-full filter blur-3xl z-0"></div>
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-[#E67E22]/20 rounded-full filter blur-3xl z-0"></div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
