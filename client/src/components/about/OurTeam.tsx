import { TEAM_MEMBERS } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const OurTeam = () => {
  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Our <span className="text-[#E67E22]">Team</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            LogiHubb is powered by a diverse team of logistics experts, software engineers, data scientists, and customer success professionals.
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <AnimatedContainer key={index} animation="fadeUp" delay={index * 0.2}>
              <motion.div 
                className="bg-[#1E3A5F] rounded-lg overflow-hidden shadow-lg"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-48 bg-[#1E293B] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2980B9] to-transparent opacity-20"></div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    whileHover={{ scale: 0.9, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className="fas fa-user-tie text-6xl text-[#2980B9]"></i>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#E67E22] text-sm mb-4">{member.title}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                  
                  <div className="mt-4 flex space-x-3">
                    <motion.a
                      href="#"
                      className="w-8 h-8 rounded-full bg-[#0F2A47] flex items-center justify-center text-gray-300 hover:text-white"
                      whileHover={{ scale: 1.2, backgroundColor: "#2980B9" }}
                      transition={{ duration: 0.2 }}
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </motion.a>
                    
                    <motion.a
                      href="#"
                      className="w-8 h-8 rounded-full bg-[#0F2A47] flex items-center justify-center text-gray-300 hover:text-white"
                      whileHover={{ scale: 1.2, backgroundColor: "#2980B9" }}
                      transition={{ duration: 0.2 }}
                    >
                      <i className="fab fa-twitter"></i>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatedContainer>
          ))}
        </div>
        
        <AnimatedContainer animation="fadeUp" delay={0.6} className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Join our team of passionate professionals dedicated to transforming the logistics industry
          </p>
          <motion.a
            href="#"
            className="inline-block bg-transparent border-2 border-[#2980B9] hover:bg-[#2980B9] text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Careers
          </motion.a>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default OurTeam;
