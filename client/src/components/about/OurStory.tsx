import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <AnimatedContainer animation="slideInLeft">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                Our <span className="text-[#E67E22]">Story</span>
              </h2>
              <p className="text-gray-300 mb-4">
                <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span> was founded in 2018 by a team of logistics professionals and technology experts who saw the need for a more intelligent, data-driven approach to transport management.
              </p>
              <p className="text-gray-300 mb-4">
                Having experienced the inefficiencies of traditional logistics operations firsthand, our founding team set out to build a solution that would leverage artificial intelligence and machine learning to optimize the entire transportation process.
              </p>
              <p className="text-gray-300">
                Today, <span className="text-[#2980B9]">Logi</span><span className="text-[#E67E22]">Hubb</span> serves hundreds of global enterprises, helping them reduce costs, improve visibility, and streamline their logistics operations through our innovative TMS platform.
              </p>
              
              <div className="mt-8 flex flex-col md:flex-row gap-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center mr-3">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">200+</h4>
                    <p className="text-sm text-gray-400">Team Members</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center mr-3">
                    <i className="fas fa-globe text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">12</h4>
                    <p className="text-sm text-gray-400">Countries</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center mr-3">
                    <i className="fas fa-building text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">500+</h4>
                    <p className="text-sm text-gray-400">Clients</p>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </div>
          
          <div className="md:w-1/2">
            <AnimatedContainer animation="float">
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="LogiHubb Company Story" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </motion.div>
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                <motion.div 
                  className="bg-[#1E3A5F] p-4 rounded-lg" 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-[#E67E22]">2018</h4>
                  <p className="text-sm text-gray-300">Founded</p>
                </motion.div>
                
                <motion.div 
                  className="bg-[#1E3A5F] p-4 rounded-lg" 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-[#E67E22]">2020</h4>
                  <p className="text-sm text-gray-300">Global Expansion</p>
                </motion.div>
                
                <motion.div 
                  className="bg-[#1E3A5F] p-4 rounded-lg" 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-[#E67E22]">2022</h4>
                  <p className="text-sm text-gray-300">AI Innovation</p>
                </motion.div>
              </div>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
