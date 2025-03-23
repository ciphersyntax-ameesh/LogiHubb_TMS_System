import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";

const Ecosystem = () => {
  return (
    <div className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            LogisEye <span className="text-[#E67E22]">Ecosystem</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A comprehensive network connecting all stakeholders in the logistics value chain
          </p>
        </AnimatedContainer>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Customers Section */}
            <AnimatedContainer animation="slideInLeft" className="md:w-1/4 mb-8 md:mb-0">
              <div className="bg-[#0F2A47] rounded-lg p-6 shadow-lg">
                <h3 className="text-[#E67E22] text-xl font-semibold mb-4">Customers</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-globe text-[#2980B9] mr-2"></i>
                    <span>Global Importers</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-map text-[#2980B9] mr-2"></i>
                    <span>Regional Exporters</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-flag text-[#2980B9] mr-2"></i>
                    <span>Country Operations</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-city text-[#2980B9] mr-2"></i>
                    <span>State Distributors</span>
                  </li>
                </ul>
              </div>
            </AnimatedContainer>
            
            {/* Central LogiHubb TMS */}
            <AnimatedContainer animation="float" className="md:w-1/3 mb-8 md:mb-0">
              <div className="bg-[#1E3A5F] rounded-full p-8 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-[#2980B9] mx-auto flex items-center justify-center mb-4">
                  <i className="fas fa-network-wired text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">LogiHubb (TMS)</h3>
                <p className="text-sm">Transport Management System</p>
                <div className="mt-4 flex justify-center">
                  <span className="px-2 py-1 bg-[#E67E22] text-xs rounded-full mr-2">Cloud-based</span>
                  <span className="px-2 py-1 bg-[#E67E22] text-xs rounded-full">AI/ML powered</span>
                </div>
              </div>
            </AnimatedContainer>
            
            {/* Suppliers Section */}
            <AnimatedContainer animation="slideInRight" className="md:w-1/4">
              <div className="bg-[#0F2A47] rounded-lg p-6 shadow-lg">
                <h3 className="text-[#E67E22] text-xl font-semibold mb-4">Suppliers</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="fas fa-truck text-[#2980B9] mr-2"></i>
                    <span>Logistics Carriers</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-clipboard-check text-[#2980B9] mr-2"></i>
                    <span>Customs Brokers</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-truck-loading text-[#2980B9] mr-2"></i>
                    <span>Local Transporters</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-industry text-[#2980B9] mr-2"></i>
                    <span>Shippers</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-shield-alt text-[#2980B9] mr-2"></i>
                    <span>Marine Insurers</span>
                  </li>
                </ul>
              </div>
            </AnimatedContainer>
          </div>
          
          {/* Connecting Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-[#E67E22]">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-[#2980B9]" 
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
        </div>
        
        <AnimatedContainer animation="fadeUp" delay={0.4} className="text-center mt-10">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-3 py-1 rounded-full bg-[#1E3A5F] text-sm">Scalable</span>
            <span className="px-3 py-1 rounded-full bg-[#1E3A5F] text-sm">Modular</span>
            <span className="px-3 py-1 rounded-full bg-[#1E3A5F] text-sm">Cloud-based</span>
            <span className="px-3 py-1 rounded-full bg-[#1E3A5F] text-sm">Neutral</span>
            <span className="px-3 py-1 rounded-full bg-[#1E3A5F] text-sm">Transparent</span>
            <span className="px-3 py-1 rounded-full bg-[#1E3A5F] text-sm">Compliant</span>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Ecosystem;
