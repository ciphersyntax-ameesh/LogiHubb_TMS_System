import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import ProcessFlow from "@/components/home/ProcessFlow";
import Ecosystem from "@/components/home/Ecosystem";
import AiFeatures from "@/components/home/AiFeatures";
import TmsSolution from "@/components/home/TmsSolution";
import Cta from "@/components/home/Cta";
import { pageTransition } from "@/styles/animations";

const Home = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <Hero />
      <AboutSection />
      <ProcessFlow />
      <Ecosystem />
      <AiFeatures />
      <TmsSolution />
      <Cta />
    </motion.div>
  );
};

export default Home;
