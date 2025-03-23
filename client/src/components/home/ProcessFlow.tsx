import { useState } from "react";
import { motion } from "framer-motion";
import { LogisticsIcon } from "@/components/ui/logistics-icons";
import AnimatedContainer from "@/components/ui/animated-container";
import { PROCESS_FLOW_STEPS, KEY_MODULES } from "@/lib/constants";
import { flowAnimation } from "@/styles/animations";

const ProcessFlow = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            LogiHubb <span className="text-[#E67E22]">Process Flow</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A seamless end-to-end logistics process that connects all stakeholders in the supply chain
          </p>
        </AnimatedContainer>
        
        <div className="relative overflow-x-auto pb-8">
          <div className="min-w-max overflow-auto">
            {/* Process Flow Diagram */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              {PROCESS_FLOW_STEPS.map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    className="bg-[#1E3A5F] p-4 rounded-lg shadow-lg text-center w-24"
                    variants={flowAnimation}
                    initial="initial"
                    whileHover="hover"
                    onHoverStart={() => setActiveStep(index)}
                    onHoverEnd={() => setActiveStep(null)}
                  >
                    <div className={`text-[#2980B9] text-xl mb-2 ${activeStep === index ? 'text-[#E67E22]' : ''}`}>
                      <LogisticsIcon name={step.icon} />
                    </div>
                    <p className="text-sm font-medium">{step.label}</p>
                  </motion.div>
                  
                  {index < PROCESS_FLOW_STEPS.length - 1 && (
                    <motion.div 
                      className="text-[#E67E22]"
                      initial={{ opacity: 0.7 }}
                      animate={{ 
                        opacity: [0.7, 1, 0.7],
                        x: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Key Modules */}
        <AnimatedContainer animation="fadeUp" delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-8">
            {KEY_MODULES.map((module, index) => (
              <motion.div
                key={index}
                className="bg-[#1E3A5F] rounded-full p-4 text-center"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(41, 128, 185, 0.5)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-semibold">{module}</h3>
              </motion.div>
            ))}
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default ProcessFlow;
