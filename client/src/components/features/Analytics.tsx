import { ANALYTICS_REPORTING } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <div className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Analytics & <span className="text-[#E67E22]">Reporting</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Data-driven insights to optimize your logistics operations
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedContainer animation="slideInLeft">
            <motion.div 
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4">Interactive Dashboards</h3>
              <div className="space-y-3">
                {ANALYTICS_REPORTING.dashboards.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-chart-bar text-[#2980B9] mt-1 mr-3"></i>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <motion.div 
                  className="relative w-full max-w-xs h-48 bg-[#0F2A47] rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl text-[#2980B9] opacity-20 absolute">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="relative z-10 text-sm">Interactive Dashboard Preview</div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="slideInRight">
            <motion.div 
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4">Performance Analytics</h3>
              <div className="space-y-3">
                {ANALYTICS_REPORTING.performance.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-truck text-[#2980B9] mt-1 mr-3"></i>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <motion.div 
                  className="relative w-full max-w-xs h-48 bg-[#0F2A47] rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl text-[#2980B9] opacity-20 absolute">
                    <i className="fas fa-chart-pie"></i>
                  </div>
                  <div className="relative z-10 text-sm">Performance Metrics Preview</div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="slideInLeft" delay={0.2}>
            <motion.div 
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4">Automated Reports</h3>
              <div className="space-y-3">
                {ANALYTICS_REPORTING.reports.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-file-export text-[#2980B9] mt-1 mr-3"></i>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <motion.div 
                  className="relative w-full max-w-xs h-48 bg-[#0F2A47] rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl text-[#2980B9] opacity-20 absolute">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <div className="relative z-10 text-sm">Automated Reports Preview</div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="slideInRight" delay={0.2}>
            <motion.div 
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg h-full"
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-display font-semibold mb-4">Predictive Analytics</h3>
              <div className="space-y-3">
                {ANALYTICS_REPORTING.predictive.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-brain text-[#2980B9] mt-1 mr-3"></i>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-center">
                <motion.div 
                  className="relative w-full max-w-xs h-48 bg-[#0F2A47] rounded-lg flex items-center justify-center"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl text-[#2980B9] opacity-20 absolute">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <div className="relative z-10 text-sm">Predictive Analytics Preview</div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
