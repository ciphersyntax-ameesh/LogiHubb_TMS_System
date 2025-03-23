import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const ClientsPartners = () => {
  const clients = [
    "GLOBAL RETAIL",
    "MANUFACTURING",
    "TECH COMPANY",
    "GLOBAL SHIPPING",
    "AUTOMOTIVE",
    "PHARMA",
    "E-COMMERCE",
    "FOOD & BEVERAGE"
  ];

  return (
    <div className="py-16 bg-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Clients & <span className="text-[#E67E22]">Partners</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We work with leading organizations across industries to transform their logistics operations.
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <AnimatedContainer 
              key={index}
              animation="fadeUp" 
              delay={index * 0.1}
            >
              <motion.div 
                className="bg-[#1E3A5F] rounded-lg p-6 h-24 flex items-center justify-center"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-gray-300 opacity-70 font-semibold">{client}</div>
              </motion.div>
            </AnimatedContainer>
          ))}
        </div>
        
        <AnimatedContainer animation="fadeUp" delay={0.8} className="mt-12">
          <div className="bg-[#0F2A47] p-6 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">Partner Network</h3>
              <p className="text-gray-300 text-sm">
                Our extensive network of logistics partners helps us deliver end-to-end solutions globally
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['Carriers', 'Freight Forwarders', 'Customs Brokers', 'Technology Providers', '3PL Partners'].map((partner, index) => (
                <motion.div 
                  key={index}
                  className="bg-[#1E3A5F] p-3 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm font-medium">{partner}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <motion.a
                href="#"
                className="text-[#2980B9] hover:text-[#E67E22] transition-colors duration-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Become a Partner <i className="fas fa-arrow-right ml-1"></i>
              </motion.a>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default ClientsPartners;
