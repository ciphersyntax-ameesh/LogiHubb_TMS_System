import { Link } from "wouter";
import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import { pulseAnimation } from "@/styles/animations";

const Cta = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#0F2A47] to-[#1E3A5F]">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedContainer animation="fadeUp">
          <h2 className="text-3xl font-display font-bold mb-6">
            Ready to Transform Your <span className="text-[#E67E22]">Logistics Operations?</span>
          </h2>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of businesses that have optimized their transport management with LogiHubb's AI-powered TMS solution.
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
                Get Started Today
              </a>
            </Link>
          </motion.div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default Cta;
