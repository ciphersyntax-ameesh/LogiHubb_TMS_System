import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import { pulseAnimation } from "@/styles/animations";

const Cta = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-[#2980B9] to-[#3498DB] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute right-0 top-0 w-96 h-96 rounded-full bg-white opacity-5"
          animate={{ 
            rotate: 360,
            x: [50, 100, 50],
            y: [-50, 0, -50],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear" 
          }}
        />
        <motion.div 
          className="absolute left-20 bottom-10 w-56 h-56 rounded-full bg-[#E67E22] opacity-10"
          animate={{ 
            rotate: -360,
            x: [-30, 0, -30],
            y: [20, 0, 20],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear" 
          }}
        />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0 opacity-5">
            <pattern id="diagonal-lines" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="100%" height="1" fill="#FFFFFF" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <AnimatedContainer animation="fadeUp">
          <div className="bg-white/10 backdrop-blur-sm inline-block py-2 px-6 rounded-full text-white/80 text-sm font-medium mb-6">
            Take Action Now
          </div>
          <h2 className="text-4xl font-display font-bold mb-6 text-white">
            Ready to Transform Your <span className="text-[#FFDD00]">Logistics Operations?</span>
          </h2>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">
            Join thousands of businesses that have optimized their transport management with LogiHubb's AI-powered TMS solution.
          </p>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.4} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.div
            className="inline-block"
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              onClick={() => window.location.href = '/register'}
              className="inline-block bg-[#E67E22] hover:bg-[#F39C12] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors duration-300 cursor-pointer"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Get Started Today
              </span>
            </div>
          </motion.div>
          
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              onClick={() => window.location.href = '/features'}
              className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-lg shadow-lg transition-colors duration-300 border border-white/20 cursor-pointer"
            >
              View All Features
            </div>
          </motion.div>
        </AnimatedContainer>
        
        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { text: "Free 15-day Trial" },
            { text: "Unlimited Support" },
            { text: "No Credit Card Required" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + (index * 0.1) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FFDD00] mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cta;
