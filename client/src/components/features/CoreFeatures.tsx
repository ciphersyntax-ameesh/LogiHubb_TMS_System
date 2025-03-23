import { LogisticsIcon } from "@/components/ui/logistics-icons";
import AnimatedContainer from "@/components/ui/animated-container";
import { motion } from "framer-motion";

const CoreFeatures = () => {
  const coreFeatures = [
    {
      title: "End-to-End Transport Management",
      description: "LogiHubb provides a complete solution for managing your entire transportation process, from initial order to final delivery and payment.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        { title: "Single Platform Solution", description: "Manage all transport activities in one integrated system" },
        { title: "Multi-modal Support", description: "Handles all transportation modes: ocean, air, rail, and road" },
        { title: "Cross-border Capabilities", description: "Manage international shipping with customs compliance features" }
      ],
      reverse: false
    },
    {
      title: "Rate Management & Procurement",
      description: "Optimize freight costs with comprehensive rate management tools and automated procurement processes.",
      image: "https://images.unsplash.com/photo-1535398274517-822b2c48f792?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        { title: "Contract Rate Repository", description: "Centralized storage for all carrier agreements and negotiated rates" },
        { title: "Spot Market Bidding", description: "Electronic bidding platform for securing competitive spot rates" },
        { title: "Rate Comparison", description: "AI-powered tools to compare and select optimal carrier rates" }
      ],
      reverse: true
    },
    {
      title: "Visibility & Real-time Tracking",
      description: "Gain complete visibility into your shipments with real-time tracking and monitoring capabilities.",
      image: "https://images.unsplash.com/photo-1521737711867-f3b3ee390962?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        { title: "GPS Tracking Integration", description: "Real-time location tracking for carriers and vehicles" },
        { title: "Exception Management", description: "Automated alerts for delays and other shipment exceptions" },
        { title: "ETA Predictions", description: "AI-powered estimated time of arrival predictions" }
      ],
      reverse: false
    },
    {
      title: "Document Management",
      description: "Digitize and automate all transportation documentation for efficient and paperless operations.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      features: [
        { title: "Digital Document Repository", description: "Centralized storage for all shipping documents" },
        { title: "Automated Document Generation", description: "Create BOLs, commercial invoices, and customs forms automatically" },
        { title: "Electronic Signatures", description: "Secure e-signature capabilities for document approval" }
      ],
      reverse: true
    }
  ];

  return (
    <>
      {coreFeatures.map((feature, index) => (
        <div 
          key={index} 
          className={`py-16 ${index % 2 === 0 ? 'bg-[#0F2A47]' : 'bg-[#1E293B]'}`}
        >
          <div className="container mx-auto px-4 md:px-8">
            <div className={`flex flex-col ${feature.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
              <div className="md:w-1/2 md:px-10 mb-10 md:mb-0">
                <AnimatedContainer 
                  animation={feature.reverse ? "slideInRight" : "slideInLeft"}
                >
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">{feature.title}</h2>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <div className="space-y-4">
                    {feature.features.map((subFeature, subIndex) => (
                      <div key={subIndex} className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-[#E67E22] flex items-center justify-center">
                            <i className="fas fa-check text-xs text-white"></i>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold">{subFeature.title}</h3>
                          <p className="text-gray-300 text-sm">{subFeature.description}</p>
                        </div>
                      </div>
                    ))}
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
                      src={feature.image} 
                      alt={feature.title} 
                      className="rounded-lg shadow-2xl w-full"
                    />
                  </motion.div>
                </AnimatedContainer>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CoreFeatures;
