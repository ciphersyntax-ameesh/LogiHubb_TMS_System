import { Link } from "wouter";
import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import { pulseAnimation } from "@/styles/animations";

const AboutCta = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#0F2A47] to-[#1E3A5F]">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedContainer animation="fadeUp">
          <h2 className="text-3xl font-display font-bold mb-6">
            Join the LogiHubb <span className="text-[#E67E22]">Community</span>
          </h2>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Become part of a growing network of forward-thinking logistics professionals revolutionizing transport management.
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
                Get Started Now
              </a>
            </Link>
          </motion.div>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.6} className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="bg-[#1E3A5F] p-5 rounded-lg shadow-lg max-w-xs">
            <div className="text-3xl text-[#E67E22] mb-3">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Quick Implementation</h3>
            <p className="text-gray-300 text-sm">
              Get up and running with LogiHubb in as little as 2 weeks with our streamlined onboarding process.
            </p>
          </div>
          
          <div className="bg-[#1E3A5F] p-5 rounded-lg shadow-lg max-w-xs">
            <div className="text-3xl text-[#E67E22] mb-3">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-300 text-sm">
              Our dedicated customer success team ensures you get the most out of your LogiHubb implementation.
            </p>
          </div>
          
          <div className="bg-[#1E3A5F] p-5 rounded-lg shadow-lg max-w-xs">
            <div className="text-3xl text-[#E67E22] mb-3">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="text-lg font-semibold mb-2">Measurable Results</h3>
            <p className="text-gray-300 text-sm">
              Track your ROI with detailed analytics and reporting on cost savings and efficiency gains.
            </p>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default AboutCta;
