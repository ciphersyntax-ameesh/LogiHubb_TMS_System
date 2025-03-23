import { NEXT_STEPS } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const NextSteps = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#0F2A47] to-[#1E3A5F]">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedContainer animation="fadeUp">
          <h2 className="text-3xl font-display font-bold mb-6">
            Next <span className="text-[#E67E22]">Steps</span>
          </h2>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            After submitting your information, here's what you can expect:
          </p>
        </AnimatedContainer>
        
        <div className="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-12">
          {NEXT_STEPS.map((step, index) => (
            <AnimatedContainer
              key={index}
              animation="fadeUp"
              delay={0.3 + index * 0.2}
              className="flex flex-col items-center max-w-xs"
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-[#2980B9] flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, backgroundColor: "#3498DB" }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-2xl">{step.step}</span>
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-center">{step.description}</p>
            </AnimatedContainer>
          ))}
        </div>
        
        <AnimatedContainer animation="fadeUp" delay={0.9} className="mt-16 max-w-3xl mx-auto">
          <div className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E67E22] flex items-center justify-center mr-4">
                <i className="fas fa-lightbulb text-white"></i>
              </div>
              <h3 className="text-xl font-semibold">Pro Tip</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Before your demo, consider preparing a list of your current logistics challenges and goals. 
              This will help our team tailor the presentation to address your specific needs and demonstrate 
              how LogiHubb can provide the most value for your organization.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <p>
                <i className="fas fa-check-circle text-[#E67E22] mr-2"></i>
                Identify your key logistics pain points
              </p>
              <p>
                <i className="fas fa-check-circle text-[#E67E22] mr-2"></i>
                Outline your current transportation management processes
              </p>
              <p>
                <i className="fas fa-check-circle text-[#E67E22] mr-2"></i>
                Determine which stakeholders should attend the demo
              </p>
            </div>
          </div>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={1.1} className="mt-10">
          <div className="flex justify-center">
            <motion.a
              href="#"
              className="inline-flex items-center text-[#2980B9] hover:text-[#E67E22] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span>Learn more about our implementation process</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </motion.a>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default NextSteps;
