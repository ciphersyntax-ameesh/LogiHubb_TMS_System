import { motion } from "framer-motion";
import AnimatedContainer from "@/components/ui/animated-container";
import { pulseAnimation } from "@/styles/animations";

const FeaturesCta = () => {
  return (
    <div className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <AnimatedContainer animation="fadeUp">
          <div className="inline-block rounded-full bg-blue-50 px-4 py-1 mb-4">
            <span className="text-sm font-medium text-[#2980B9]">Interactive Demo</span>
          </div>
          <h2 className="text-4xl font-display font-bold mb-6 text-gray-900">
            Explore These Features <span className="text-[#E67E22]">First-Hand</span>
          </h2>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.2}>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
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
            <div 
              onClick={() => window.location.href = '/register'}
              className="inline-block bg-[#E67E22] hover:bg-[#F39C12] text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-colors duration-300 cursor-pointer"
            >
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Request a Demo
              </span>
            </div>
          </motion.div>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fadeUp" delay={0.6} className="mt-16 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                ),
                title: "Expert Support",
                description: "Our team of logistics experts will guide you through every step of the implementation process.",
                color: "#2980B9"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Quick Setup",
                description: "Get up and running quickly with our streamlined onboarding and implementation process.",
                color: "#E67E22"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "ROI Analysis",
                description: "We'll show you exactly how LogiHubb will deliver value and return on investment for your business.",
                color: "#2980B9"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (index * 0.1) }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${item.color}20` }}>
                  <div className="text-[#E67E22]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedContainer>

        {/* Testimonial */}
        <AnimatedContainer animation="fadeUp" delay={0.8} className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-[#2980B9]/10 to-[#E67E22]/10 p-8 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg italic text-gray-700 mb-6">
              "LogiHubb's platform has revolutionized how we manage our global supply chain. The ROI was evident within the first quarter of implementation."
            </p>
            <div>
              <p className="font-bold text-gray-900">Sophia Rodriguez</p>
              <p className="text-sm text-gray-600">Director of Logistics, Global Imports Inc.</p>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default FeaturesCta;
