import { Variants } from "framer-motion";

// Float animation variant
export const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Staggered children animation
export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Fade up animation for use with staggerContainer
export const fadeUpItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Fade in animation for use with staggerContainer
export const fadeInItem: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Scale up animation for use with staggerContainer
export const scaleUpItem: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slide in from left animation
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Slide in from right animation
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Process flow item animation
export const flowAnimation: Variants = {
  initial: { y: 0, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" },
  hover: {
    y: -5,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Feature card animation
export const featureCardAnimation: Variants = {
  initial: { y: 0, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" },
  hover: {
    y: -10,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Pulse animation for CTA buttons
export const pulseAnimation: Variants = {
  initial: { 
    boxShadow: "0px 0px 0px 0px rgba(230, 126, 34, 0)" 
  },
  animate: {
    boxShadow: [
      "0px 0px 0px 0px rgba(230, 126, 34, 0.4)",
      "0px 0px 0px 15px rgba(230, 126, 34, 0)",
      "0px 0px 0px 0px rgba(230, 126, 34, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Page transition animation
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Scale in animation
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
