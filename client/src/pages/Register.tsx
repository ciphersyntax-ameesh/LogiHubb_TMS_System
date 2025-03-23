import { motion } from "framer-motion";
import RegisterHero from "@/components/register/RegisterHero";
import Benefits from "@/components/register/Benefits";
import RegisterForm from "@/components/register/RegisterForm";
import ContactInfo from "@/components/register/ContactInfo";
import NextSteps from "@/components/register/NextSteps";
import { pageTransition } from "@/styles/animations";

const Register = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <RegisterHero />
      <Benefits />
      <RegisterForm />
      <ContactInfo />
      <NextSteps />
    </motion.div>
  );
};

export default Register;
