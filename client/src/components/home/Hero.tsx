import { Link } from "wouter";
import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import { pulseAnimation } from "@/styles/animations";

const Hero = () => {
  return (
    <div className="gradient-bg py-16 md:py-24 pt-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <AnimatedContainer animation="fadeUp" delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                <span className="text-white">Transforming Transport</span><br />
                <span className="text-[#E67E22]">Management with AI/ML</span>
              </h1>
            </AnimatedContainer>
            
            <AnimatedContainer animation="fadeUp" delay={0.4}>
              <p className="text-gray-300 text-lg mb-8">
                LogiHubb delivers end-to-end transport management solutions powered by artificial intelligence and machine learning, optimizing your entire logistics operation.
              </p>
            </AnimatedContainer>
            
            <AnimatedContainer animation="fadeUp" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <motion.a
                    className="inline-block bg-[#E67E22] hover:bg-[#F39C12] text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300"
                    variants={pulseAnimation}
                    initial="initial"
                    animate="animate"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.a>
                </Link>
                <Link href="/features">
                  <motion.a
                    className="inline-block bg-transparent border-2 border-[#2980B9] hover:bg-[#2980B9] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Features
                  </motion.a>
                </Link>
              </div>
            </AnimatedContainer>
          </div>
          
          <div className="md:w-1/2">
            <AnimatedContainer animation="float">
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Logistics Management" 
                className="rounded-lg shadow-2xl w-full"
              />
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
