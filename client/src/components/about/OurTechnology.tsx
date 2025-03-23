import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const OurTechnology = () => {
  return (
    <div className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <AnimatedContainer animation="slideInLeft">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Our <span className="text-[#E67E22]">Technology</span>
              </h2>
              <p className="text-gray-300 mb-6">
                LogiHubb is built on a foundation of cutting-edge technology that enables intelligent, scalable logistics management.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center">
                      <i className="fas fa-cloud text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Cloud-Native Architecture</h3>
                    <p className="text-gray-300 text-sm">Built on AWS infrastructure for maximum reliability, security, and scalability</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center">
                      <i className="fas fa-brain text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">AI/ML Algorithms</h3>
                    <p className="text-gray-300 text-sm">Proprietary machine learning models for optimization and prediction</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center">
                      <i className="fas fa-plug text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">API-First Design</h3>
                    <p className="text-gray-300 text-sm">RESTful APIs enable seamless integration with existing systems</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center">
                      <i className="fas fa-shield-alt text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Enterprise-Grade Security</h3>
                    <p className="text-gray-300 text-sm">SOC 2 compliant with end-to-end encryption and robust access controls</p>
                  </div>
                </div>
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
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Our Technology" 
                    className="w-full shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47] via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-[#0F2A47] rounded-full text-xs">Machine Learning</span>
                      <span className="px-2 py-1 bg-[#0F2A47] rounded-full text-xs">Big Data</span>
                      <span className="px-2 py-1 bg-[#0F2A47] rounded-full text-xs">Cloud Computing</span>
                      <span className="px-2 py-1 bg-[#0F2A47] rounded-full text-xs">Microservices</span>
                      <span className="px-2 py-1 bg-[#0F2A47] rounded-full text-xs">Real-time Analytics</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="mt-6 bg-[#0F2A47] p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Our Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-white flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fab fa-aws text-[#232F3E] text-xl"></i>
                  </motion.div>
                  
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-white flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fab fa-python text-[#366B98] text-xl"></i>
                  </motion.div>
                  
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-white flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fab fa-react text-[#61DAFB] text-xl"></i>
                  </motion.div>
                  
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-white flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fab fa-node-js text-[#68A063] text-xl"></i>
                  </motion.div>
                  
                  <motion.div 
                    className="w-10 h-10 rounded-lg bg-white flex items-center justify-center"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <i className="fab fa-docker text-[#2496ED] text-xl"></i>
                  </motion.div>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTechnology;
