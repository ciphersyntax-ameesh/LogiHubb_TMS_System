import { CONTACT_INFO } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Contact <span className="text-[#E67E22]">Information</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have questions? Reach out to our team directly.
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONTACT_INFO.map((info, index) => (
            <AnimatedContainer 
              key={index}
              animation="fadeUp" 
              delay={index * 0.2}
            >
              <motion.div 
                className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg text-center h-full"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-[#2980B9] text-4xl mb-4">
                  <i className={`fas fa-${info.icon}`}></i>
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{info.title}</h3>
                {info.lines.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-gray-300">{line}</p>
                ))}
              </motion.div>
            </AnimatedContainer>
          ))}
        </div>
        
        <AnimatedContainer animation="fadeUp" delay={0.6} className="mt-12">
          <div className="bg-[#1E3A5F] p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 text-center md:text-left mb-6 md:mb-0">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0 rounded-full bg-[#2980B9] flex items-center justify-center">
                  <i className="fas fa-headset text-white text-2xl md:text-3xl"></i>
                </div>
              </div>
              <div className="md:w-3/4 md:pl-6 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">24/7 Support Available</h3>
                <p className="text-gray-300">
                  Our dedicated customer success team is available around the clock to answer your questions 
                  and provide assistance with your LogiHubb implementation. Whether you're experiencing a technical issue 
                  or need guidance on optimizing your logistics operations, we're here to help.
                </p>
                <div className="mt-4">
                  <motion.a
                    href="#"
                    className="inline-block bg-transparent border-2 border-[#2980B9] hover:bg-[#2980B9] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Support Center
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default ContactInfo;
