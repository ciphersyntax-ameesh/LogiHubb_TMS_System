import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <AnimatedContainer animation="slideInLeft">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Why Choose <span className="text-[#E67E22]">LogiHubb</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Join hundreds of companies that have revolutionized their logistics operations with our AI-powered TMS solution.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                      <i className="fas fa-check text-xs text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Reduce Costs</h3>
                    <p className="text-gray-300 text-sm">Customers typically see 15-30% reduction in transportation costs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                      <i className="fas fa-check text-xs text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Improve Visibility</h3>
                    <p className="text-gray-300 text-sm">Gain complete real-time visibility across your entire supply chain</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                      <i className="fas fa-check text-xs text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Enhance Service</h3>
                    <p className="text-gray-300 text-sm">Improve on-time delivery performance and customer satisfaction</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                      <i className="fas fa-check text-xs text-white"></i>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">Quick Implementation</h3>
                    <p className="text-gray-300 text-sm">Be up and running in weeks, not months, with our cloud-based solution</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                <div className="flex items-center bg-[#1E3A5F] px-3 py-2 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[#2980B9] flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">32%</span>
                  </div>
                  <span className="text-gray-300 text-sm">Average Cost Savings</span>
                </div>
                
                <div className="flex items-center bg-[#1E3A5F] px-3 py-2 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[#2980B9] flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">45%</span>
                  </div>
                  <span className="text-gray-300 text-sm">Efficiency Improvement</span>
                </div>
                
                <div className="flex items-center bg-[#1E3A5F] px-3 py-2 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[#2980B9] flex items-center justify-center mr-2">
                    <span className="text-white font-bold text-sm">99%</span>
                  </div>
                  <span className="text-gray-300 text-sm">Customer Satisfaction</span>
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
                <img 
                  src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="LogiHubb Benefits" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
              
              <div className="mt-6 p-4 bg-[#1E3A5F] rounded-lg">
                <div className="flex items-center mb-4">
                  <i className="fas fa-quote-left text-[#E67E22] text-xl mr-3"></i>
                  <h3 className="text-lg font-semibold">Customer Success Story</h3>
                </div>
                <p className="text-gray-300 text-sm italic">
                  "After implementing LogiHubb, we reduced our transportation costs by 28% while improving our on-time delivery rate to 97%. The visibility and control we now have over our logistics operations has been transformative."
                </p>
                <p className="text-right text-gray-400 text-sm mt-2">— Operations Director, Global E-commerce Company</p>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
