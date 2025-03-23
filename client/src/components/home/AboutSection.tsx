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
    },
    {
      icon: "brain",
      title: "AI/ML Powered",
      description: "Advanced artificial intelligence and machine learning algorithms optimize routes, costs, and resources.",
    },
    {
      icon: "cloud",
      title: "Cloud-Based Platform",
      description: "Access your logistics data anytime, anywhere with our secure cloud-based infrastructure.",
    },
  ];

  return (
    <div className="bg-[#1E293B] py-16">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedContainer animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            About <span className="text-[#E67E22]">LogiHubb</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A comprehensive Transport Management System revolutionizing how businesses handle logistics operations across the supply chain.
          </p>
        </AnimatedContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#0F2A47] rounded-lg p-6 shadow-lg"
              variants={featureCardAnimation}
              initial="initial"
              whileHover="hover"
            >
              <AnimatedContainer 
                animation="fadeUp" 
                delay={index * 0.2}
                className="h-full"
              >
                <div className="text-[#2980B9] text-4xl mb-4">
                  <LogisticsIcon name={feature.icon} />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </AnimatedContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
