import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import { pulseAnimation } from "@/styles/animations";

const AboutCta = () => {
  return (
    <div className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <AnimatedContainer animation="fadeUp">
                <div className="inline-block px-4 py-1 rounded-full bg-[#2980B9]/10 text-[#2980B9] text-sm font-medium mb-4">
                  Join Our Community
                </div>
                <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
                  Be Part of the LogiHubb <span className="text-[#E67E22]">Revolution</span>
                </h2>
              </AnimatedContainer>
              
              <AnimatedContainer animation="fadeUp" delay={0.2}>
                <p className="text-gray-600 text-lg mb-8">
                  Join a growing network of forward-thinking logistics professionals revolutionizing transport management across the globe.
                </p>
              </AnimatedContainer>
              
              <AnimatedContainer animation="fadeUp" delay={0.3}>
                <ul className="space-y-4 mb-8">
                  {[
                    "Access to cutting-edge logistics technology",
                    "Connect with industry leaders and innovators",
                    "Stay ahead of market trends and disruptions",
                    "Continuous platform updates and improvements"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      <div className="mt-1 mr-3 text-[#E67E22]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
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
                  <div 
                    onClick={() => window.location.href = '/register'}
                    className="inline-block bg-[#E67E22] hover:bg-[#F39C12] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors duration-300 cursor-pointer"
                  >
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Get Started Now
                    </span>
                  </div>
                </motion.div>
              </AnimatedContainer>
            </div>
            
            {/* Right Content - Stats and Features */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    title: "Quick Implementation",
                    description: "Get up and running with LogiHubb in as little as 2 weeks with our streamlined onboarding process.",
                    color: "#2980B9",
                    delay: 0.4
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Expert Support",
                    description: "Our dedicated customer success team ensures you get the most out of your LogiHubb implementation.",
                    color: "#E67E22",
                    delay: 0.5
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                    title: "Measurable Results",
                    description: "Track your ROI with detailed analytics and reporting on cost savings and efficiency gains.",
                    color: "#2980B9",
                    delay: 0.6
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    ),
                    title: "Continuous Innovation",
                    description: "Access regular platform updates with new features driven by customer feedback and industry trends.",
                    color: "#E67E22",
                    delay: 0.7
                  }
                ].map((item, index) => (
                  <AnimatedContainer key={index} animation="fadeUp" delay={item.delay}>
                    <motion.div 
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-full"
                      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                    >
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}15` }}>
                        <div className="text-[#E67E22]">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </motion.div>
                  </AnimatedContainer>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCta;
