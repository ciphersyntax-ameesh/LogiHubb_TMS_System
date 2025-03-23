import { motion } from "framer-motion";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurMission from "@/components/about/OurMission";
import OurTeam from "@/components/about/OurTeam";
import OurTechnology from "@/components/about/OurTechnology";
import GlobalPresence from "@/components/about/GlobalPresence";
import ClientsPartners from "@/components/about/ClientsPartners";
import Testimonials from "@/components/about/Testimonials";
import AboutCta from "@/components/about/AboutCta";
import { pageTransition } from "@/styles/animations";

const About = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <AboutHero />
      <OurStory />
      <OurMission />
      <OurTeam />
      <OurTechnology />
      <GlobalPresence />
      <ClientsPartners />
      <Testimonials />
      <AboutCta />
    </motion.div>
  );
};

export default About;
