import { TMS_SOLUTION } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const TmsSolution = () => {
  return (
    <div className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            LogiHubb <span className="text-[#E67E22]">TMS Solution</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Comprehensive transport management modules to optimize your entire logistics operation
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TMS_SOLUTION.map((module, index) => (
            <AnimatedContainer 
              key={index}
              animation="fadeUp" 
              delay={index * 0.1}
            >
              <motion.div 
                className="bg-[#1E3A5F] rounded-lg overflow-hidden shadow-lg h-full"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#2980B9] py-3 px-4">
                  <h3 className="font-semibold">{module.title}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2 text-sm">
                    {module.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <i className="fas fa-check-circle text-[#E67E22] mt-1 mr-2"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TmsSolution;
