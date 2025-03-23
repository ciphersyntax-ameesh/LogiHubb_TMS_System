import { motion } from "framer-motion";
import FeaturesHero from "@/components/features/FeaturesHero";
import CoreFeatures from "@/components/features/CoreFeatures";
import ApiIntegrations from "@/components/features/ApiIntegrations";
import Analytics from "@/components/features/Analytics";
import MobileApp from "@/components/features/MobileApp";
import FeaturesCta from "@/components/features/FeaturesCta";
import { pageTransition } from "@/styles/animations";

const Features = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <FeaturesHero />
      <CoreFeatures />
      <ApiIntegrations />
      <Analytics />
      <MobileApp />
      <FeaturesCta />
    </motion.div>
  );
};

export default Features;
