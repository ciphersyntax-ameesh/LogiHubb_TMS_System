import { API_INTEGRATIONS } from "@/lib/constants";
import { LogisticsIcon } from "@/components/ui/logistics-icons";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import { featureCardAnimation } from "@/styles/animations";

const ApiIntegrations = () => {
  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            API <span className="text-[#E67E22]">Integrations</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Seamlessly connect LogiHubb with your existing business systems
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {API_INTEGRATIONS.map((integration, index) => (
            <motion.div
              key={index}
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg"
              variants={featureCardAnimation}
              initial="initial"
              whileHover="hover"
            >
              <AnimatedContainer 
                animation="fadeUp" 
                delay={index * 0.2}
                className="h-full flex flex-col items-center"
              >
                <div className="text-[#2980B9] text-4xl mb-4 text-center">
                  <LogisticsIcon name={integration.icon} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-center">
                  {integration.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {integration.description}
                </p>
                
                <motion.div 
                  className="mt-6 relative w-full h-1 bg-[#1E293B] rounded-full overflow-hidden"
                  initial={{ opacity: 0.6 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="absolute left-0 top-0 h-full bg-[#E67E22]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </AnimatedContainer>
            </motion.div>
          ))}
        </div>
        
        <AnimatedContainer animation="fadeUp" delay={0.6} className="mt-12 p-6 bg-[#1E3A5F] rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 text-center md:text-left mb-4 md:mb-0">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0 rounded-full bg-[#2980B9] flex items-center justify-center">
                <i className="fas fa-plug text-white text-2xl md:text-3xl"></i>
              </div>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <h3 className="text-xl font-semibold mb-2">Open API Platform</h3>
              <p className="text-gray-300">
                LogiHubb provides a comprehensive set of REST APIs that allow for seamless integration 
                with your existing systems. Our developer-friendly documentation and support team will 
                help you connect LogiHubb to your enterprise applications with minimal effort.
              </p>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default ApiIntegrations;
