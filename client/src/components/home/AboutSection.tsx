import { LogisticsIcon } from "@/components/ui/logistics-icons";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";
import { featureCardAnimation } from "@/styles/animations";

const AboutSection = () => {
  const features = [
    {
      icon: "truck-moving",
      title: "E2E Transport Management",
      description: "End-to-end visibility and control over your entire transportation process from ordering to delivery.",
      color: "#2980B9",
      accentColor: "rgba(41, 128, 185, 0.1)",
    },
    {
      icon: "brain",
      title: "AI/ML Powered",
      description: "Advanced artificial intelligence and machine learning algorithms optimize routes, costs, and resources.",
      color: "#E67E22",
      accentColor: "rgba(230, 126, 34, 0.1)",
    },
    {
      icon: "cloud",
      title: "Cloud-Based Platform",
      description: "Access your logistics data anytime, anywhere with our secure cloud-based infrastructure.",
      color: "#2980B9",
      accentColor: "rgba(41, 128, 185, 0.1)",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <span className="text-sm font-medium text-gray-500 bg-gray-100 rounded-full py-1 px-4">About Us</span>
            <motion.div
              className="absolute -z-10 inset-0 rounded-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <h2 className="text-4xl font-display font-bold mb-6 relative inline-block text-gray-900">
            About <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#2980B9] to-[#E67E22] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A comprehensive Transport Management System revolutionizing how businesses handle logistics operations across the supply chain.
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Decorative elements */}
          <motion.div 
            className="absolute -left-10 top-1/2 w-40 h-40 rounded-full bg-[#2980B9]/5 -z-10"
            animate={{ 
              x: [0, -20, 0],
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut" 
            }}
          />
          
          <motion.div 
            className="absolute -right-10 bottom-10 w-60 h-60 rounded-full bg-[#E67E22]/5 -z-10"
            animate={{ 
              x: [0, 20, 0],
              y: [0, 20, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut" 
            }}
          />
          
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              variants={featureCardAnimation}
              initial="initial"
              whileHover="hover"
            >
              <AnimatedContainer 
                animation="fadeUp" 
                delay={index * 0.2}
                className="h-full"
              >
                <div className="relative mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: feature.accentColor }}
                  >
                    <div className="text-4xl" style={{ color: feature.color }}>
                      <LogisticsIcon name={feature.icon} />
                    </div>
                  </div>
                  <motion.div 
                    className="absolute -z-10 top-3 left-3 w-16 h-16 rounded-2xl"
                    style={{ backgroundColor: feature.accentColor }}
                    animate={{ 
                      rotate: [0, 5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-display font-bold mb-4" style={{ color: feature.color }}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
                
                <motion.div 
                  className="mt-6 text-sm font-medium flex items-center cursor-pointer"
                  whileHover={{ x: 5 }}
                  style={{ color: feature.color }}
                >
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </AnimatedContainer>
            </motion.div>
          ))}
        </div>
        
        {/* Added a company stat section */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Global Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "32%", label: "Efficiency Increase" },
              { value: "24/7", label: "Support & Monitoring" }
            ].map((stat, index) => (
              <AnimatedContainer 
                key={index}
                animation="fadeUp" 
                delay={index * 0.1}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#2980B9] to-[#E67E22] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 mt-2">{stat.label}</div>
                </motion.div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
