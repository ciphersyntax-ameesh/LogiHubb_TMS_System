import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const OurMission = () => {
  return (
    <div className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 md:pl-10 mb-10 md:mb-0">
            <AnimatedContainer animation="slideInRight">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Our <span className="text-[#E67E22]">Mission</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Our mission is to transform global logistics through intelligent technology, making transport management more efficient, transparent, and sustainable.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                      <i className="fas fa-check text-xs text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Efficiency</h3>
                    <p className="text-gray-300 text-sm">Eliminate waste and optimize resources across the supply chain</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                      <i className="fas fa-check text-xs text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Transparency</h3>
                    <p className="text-gray-300 text-sm">Provide complete visibility into transportation processes and costs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                      <i className="fas fa-check text-xs text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Sustainability</h3>
                    <p className="text-gray-300 text-sm">Reduce the environmental impact of logistics operations</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-[#0F2A47] rounded-lg border-l-4 border-[#E67E22]">
                <p className="text-sm italic text-gray-300">
                  "Our vision is to create a world where logistics is no longer a constraint but an enabler of global commerce, powered by intelligent technology and data-driven decisions."
                </p>
                <p className="text-sm mt-2 font-semibold">— Michael Johnson, CEO & Co-Founder</p>
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
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our Mission" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-[#0F2A47] p-5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center mr-3">
                      <i className="fas fa-leaf text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">30%</h4>
                      <p className="text-xs text-gray-400">Carbon Reduction</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0F2A47] p-5 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center mr-3">
                      <i className="fas fa-dollar-sign text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">25%</h4>
                      <p className="text-xs text-gray-400">Cost Savings</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
