import { AI_ML_FEATURES } from "@/lib/constants";
import { LogisticsIcon } from "@/components/ui/logistics-icons";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import { featureCardAnimation } from "@/styles/animations";

const AiFeatures = () => {
  // Add neural net animation background
  const neuralNetAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const circleAnimation = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0.2, 0.4, 0.2],
      scale: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Dark blue background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A47] to-[#1E3A5F] z-0"></div>
      
      {/* Abstract neural network background animation */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        variants={neuralNetAnimation}
        initial="hidden"
        animate="visible"
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#E67E22]"
            variants={circleAnimation}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
            }}
          />
        ))}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          <pattern id="ai-grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#2980B9" strokeWidth="0.5" strokeOpacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#ai-grid)" />
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <AnimatedContainer animation="fadeUp" className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-[#E67E22]/20 backdrop-blur-sm text-[#E67E22] text-sm font-medium mb-4">
            Intelligent Solutions
          </div>
          <h2 className="text-4xl font-display font-bold mb-6 text-white">
            AI/ML <span className="text-[#E67E22]">Features</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Leveraging artificial intelligence and machine learning to optimize your logistics operations
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_ML_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0F2A47]/80 to-[#1E3A5F]/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-[#2980B9]/20"
              variants={featureCardAnimation}
              initial="initial"
              whileHover={{ 
                y: -10, 
                boxShadow: '0 25px 50px -12px rgba(15, 42, 71, 0.35)',
                scale: 1.03
              }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedContainer 
                animation="fadeUp" 
                delay={index * 0.1}
                className="h-full"
              >
                <div className="relative mb-8">
                  {/* Icon with glowing effect */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2980B9] to-[#1E3A5F] flex items-center justify-center">
                      <LogisticsIcon name={feature.icon} className="text-white text-2xl" />
                    </div>
                  </div>
                  
                  {/* Glow effect below icon */}
                  <div className="absolute -inset-1 rounded-full blur-lg bg-[#E67E22]/30 z-0"></div>
                  
                  {/* Feature number indicator */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#E67E22] text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                
                {/* Interactive element */}
                <div className="mt-auto">
                  <motion.div 
                    className="flex items-center text-[#E67E22] text-sm font-medium cursor-pointer mt-4"
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </AnimatedContainer>
            </motion.div>
          ))}
        </div>
        
        {/* AI integration banner */}
        <div className="mt-16 relative">
          <div className="bg-gradient-to-r from-[#2980B9]/20 to-[#E67E22]/20 rounded-xl p-8 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to integrate AI into your logistics?</h3>
                <p className="text-gray-300">
                  Our team of experts will help you implement and customize the right AI solutions for your business needs.
                </p>
              </div>
              <div className="md:w-1/3 text-center">
                <motion.div
                  className="inline-block bg-[#E67E22] hover:bg-[#F39C12] text-white font-bold py-3 px-8 rounded-lg shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/register'}
                >
                  Schedule a Demo
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiFeatures;
