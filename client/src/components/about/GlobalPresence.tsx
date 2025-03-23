import { GLOBAL_LOCATIONS } from "@/lib/constants";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const GlobalPresence = () => {
  return (
    <div className="py-16 bg-[#0F2A47]">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Global <span className="text-[#E67E22]">Presence</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            LogiHubb serves customers around the world with strategic offices in key logistics hubs.
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GLOBAL_LOCATIONS.map((location, index) => (
            <AnimatedContainer 
              key={index}
              animation="fadeUp" 
              delay={index * 0.2}
            >
              <motion.div 
                className="bg-[#1E3A5F] rounded-lg p-6 shadow-lg h-full"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <i className="fas fa-map-marker-alt text-[#E67E22] text-xl mr-3"></i>
                  <h3 className="text-lg font-semibold">{location.region}</h3>
                </div>
                <ul className="space-y-2">
                  {location.locations.map((city, cityIndex) => (
                    <li key={cityIndex} className="flex items-center">
                      <i className="fas fa-circle text-[#2980B9] text-xs mr-2"></i>
                      <span className="text-gray-300">{city}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedContainer>
          ))}
        </div>
        
        <AnimatedContainer animation="fadeUp" delay={0.6} className="mt-12">
          <div className="bg-[#1E3A5F] p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold mb-4">International Support Network</h3>
                <p className="text-gray-300 mb-4">
                  Our global presence allows us to provide 24/7 support and localized expertise to clients around the world.
                  With offices strategically located in major logistics hubs, we can offer hands-on assistance wherever your 
                  business operates.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0F2A47] rounded-full text-xs">Local Teams</span>
                  <span className="px-2 py-1 bg-[#0F2A47] rounded-full text-xs">Multilingual Support</span>
                  <span className="px-2 py-1 bg-[#0F2A47] rounded-full text-xs">Regional Expertise</span>
                  <span className="px-2 py-1 bg-[#0F2A47] rounded-full text-xs">Global Standards</span>
                </div>
              </div>
              <div className="md:w-1/3">
                <motion.div 
                  className="relative h-48 rounded-lg overflow-hidden"
                  initial={{ opacity: 0.8 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-[#0F2A47] opacity-60"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-[#2980B9] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-bold">24/7</div>
                        <div className="text-sm">Global Support</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </div>
  );
};

export default GlobalPresence;
