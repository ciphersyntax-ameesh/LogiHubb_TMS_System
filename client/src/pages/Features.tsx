import { motion } from "framer-motion";
import FeaturesHero from "@/components/features/FeaturesHero";
import CoreFeatures from "@/components/features/CoreFeatures";
import ApiIntegrations from "@/components/features/ApiIntegrations";
import Analytics from "@/components/features/Analytics";
import MobileApp from "@/components/features/MobileApp";
import Sustainability from "@/components/features/Sustainability";
import Security from "@/components/features/Security";
import FeaturesCta from "@/components/features/FeaturesCta";
import AiFeatures from "@/components/features/AiFeatures";
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
      <AiFeatures />
      <Analytics />
      <Sustainability />
      <Security />
      <MobileApp />
      <FeaturesCta />
    </motion.div>
  );
};

export default Features;
