import { AI_ML_FEATURES } from "@/lib/constants";
import { LogisticsIcon } from "@/components/ui/logistics-icons";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import { featureCardAnimation } from "@/styles/animations";

const AiFeatures = () => {
  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
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
              className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg"
              variants={featureCardAnimation}
              initial="initial"
              whileHover="hover"
            >
              <AnimatedContainer 
                animation="fadeUp" 
                delay={index * 0.1}
                className="h-full"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#2980B9] flex items-center justify-center mr-4">
                    <LogisticsIcon name={feature.icon} className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </AnimatedContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiFeatures;
