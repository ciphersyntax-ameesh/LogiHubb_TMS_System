import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import { pulseAnimation } from "@/styles/animations";
import React from "react";

const FeaturesCta = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#2980B9] opacity-5 rounded-full"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#E67E22] opacity-5 rounded-full"></div>
          <div className="absolute top-40 right-10 w-20 h-20 bg-[#2980B9] opacity-5 rounded-full"></div>
          <div className="absolute bottom-40 left-10 w-20 h-20 bg-[#E67E22] opacity-5 rounded-full"></div>
          
          <div className="relative z-10 text-center">
            <AnimatedContainer animation="fadeUp">
              <div className="inline-block rounded-full bg-[#2980B9] bg-opacity-10 px-4 py-1 mb-4">
                <span className="text-sm font-medium text-[#2980B9]">Interactive Demo</span>
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
                Experience <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span> <span className="text-[#0F2A47]">in Action</span>
              </h2>
            </AnimatedContainer>
            
            <AnimatedContainer animation="fadeUp" delay={0.2}>
              <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
                Schedule a personalized demo and see how our platform can transform your logistics operations with our comprehensive suite of features.
              </p>
            </AnimatedContainer>
          </div>
          
          {/* Demo Request Animation */}
          <AnimatedContainer animation="fadeUp" delay={0.4} className="mb-16">
            <div className="relative max-w-4xl mx-auto bg-gradient-to-r from-[#0F2A47] to-[#1E3A5F] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute w-40 h-40 bg-[#2980B9] rounded-full blur-3xl -top-10 -left-10"></div>
                <div className="absolute w-40 h-40 bg-[#E67E22] rounded-full blur-3xl -bottom-10 -right-10"></div>
              </div>
              
              <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    See the Complete <span className="text-[#E67E22]">Feature Set</span> in Action
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Our product specialists will walk you through a personalized demo tailored to your specific logistics challenges and requirements.
                  </p>
                  
                  <div className="flex flex-wrap gap-6 text-left">
                    {[
                      "Live platform demonstration",
                      "Q&A with logistics experts",
                      "Custom implementation roadmap",
                      "ROI analysis for your business"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center flex-shrink-0 mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-200 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                  <motion.div
                    className="relative"
                    variants={pulseAnimation}
                    initial="initial"
                    animate="animate"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className="absolute -inset-1 bg-gradient-to-r from-[#2980B9] to-[#E67E22] rounded-lg blur-sm opacity-75"
                      animate={{ 
                        opacity: [0.5, 0.75, 0.5],
                        scale: [0.98, 1, 0.98]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div 
                      onClick={() => window.location.href = '/register'}
                      className="relative bg-white text-[#0F2A47] font-bold py-4 px-8 rounded-lg shadow-lg cursor-pointer flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#E67E22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Request a Demo
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedContainer>
        </div>
        
        {/* Implementation Process */}
        <AnimatedContainer animation="fadeUp" delay={0.6} className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0F2A47] mb-4">
              Quick <span className="text-[#E67E22]">Implementation</span> Process
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've streamlined our onboarding process to get you up and running with minimal disruption to your operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your current logistics processes and identify optimization opportunities",
                icon: "search",
                color: "#2980B9"
              },
              {
                step: "02",
                title: "Configuration",
                description: "Our team configures the platform to meet your specific business requirements",
                icon: "cogs",
                color: "#E67E22"
              },
              {
                step: "03",
                title: "Training",
                description: "Comprehensive training for your team to ensure smooth adoption",
                icon: "user-graduate",
                color: "#2980B9"
              },
              {
                step: "04",
                title: "Go Live",
                description: "We provide hands-on support during launch and continuous assistance after",
                icon: "rocket",
                color: "#E67E22"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
              >
                {/* Connecting line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gray-200 z-0">
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>
                )}
                
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#0F2A47] flex items-center justify-center text-white text-sm font-bold shadow-lg">
                  {item.step}
                </div>
                
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-100 border border-gray-100 flex items-center justify-center mx-auto mb-4 shadow-md" style={{ color: item.color }}>
                  <i className={`fas fa-${item.icon} text-2xl`}></i>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-[#0F2A47] text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">
                  {item.description}
                </p>
                
                <motion.div
                  className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5"
                  style={{ backgroundColor: item.color }}
                  animate={{
                    width: ["0%", "80%", "0%"],
                    left: ["50%", "50%", "50%"],
                    translateX: ["-50%", "-50%", "-50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                />
              </motion.div>
            ))}
          </div>
        </AnimatedContainer>

        {/* Testimonial */}
        <AnimatedContainer animation="fadeUp" delay={0.8} className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#0F2A47] to-[#1E3A5F] p-10 rounded-2xl shadow-xl relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2980B9] opacity-10 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E67E22] opacity-10 rounded-full"></div>
            
            {/* Large quote mark */}
            <div className="absolute top-6 left-8 text-[#E67E22] opacity-20 text-8xl font-serif">
              "
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#E67E22]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl italic text-white mb-8 text-center max-w-2xl mx-auto leading-relaxed">
                "<span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span>'s platform has revolutionized how we manage our global supply chain. The visibility and control we now have is remarkable, and the ROI was evident within the first quarter of implementation."
              </p>
              
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white p-1 mr-4 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2980B9] to-[#E67E22]">
                    <div className="flex items-center justify-center h-full text-white text-xl font-bold">
                      SR
                    </div>
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">Sophia Rodriguez</p>
                  <p className="text-gray-300">Director of Logistics, Global Imports Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default FeaturesCta;
