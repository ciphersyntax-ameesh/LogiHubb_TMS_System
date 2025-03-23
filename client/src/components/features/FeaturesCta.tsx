import { Link } from "wouter";
import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import { pulseAnimation } from "@/styles/animations";

const FeaturesCta = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#0F2A47] to-[#1E3A5F]">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedContainer animation="fadeUp">
          <h2 className="text-3xl font-display font-bold mb-6">
            Explore These Features <span className="text-[#E67E22]">First-Hand</span>
          </h2>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Schedule a personalized demo to see how LogiHubb can transform your logistics operations.
          </p>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.4}>
          <motion.div
            className="inline-block"
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/register">
              <a className="inline-block bg-[#E67E22] hover:bg-[#F39C12] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300">
                Request a Demo
              </a>
            </Link>
          </motion.div>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.6} className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1E3A5F] p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#2980B9] flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-300 text-sm">
                Our team of logistics experts will guide you through every step of the implementation process.
              </p>
            </div>
            
            <div className="bg-[#1E3A5F] p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#2980B9] flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bolt text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Setup</h3>
              <p className="text-gray-300 text-sm">
                Get up and running quickly with our streamlined onboarding and implementation process.
              </p>
            </div>
            
            <div className="bg-[#1E3A5F] p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#2980B9] flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-chart-line text-white text-xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">ROI Analysis</h3>
              <p className="text-gray-300 text-sm">
                We'll show you exactly how LogiHubb will deliver value and return on investment for your business.
              </p>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default FeaturesCta;
