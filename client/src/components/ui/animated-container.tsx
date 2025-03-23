import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animation?: "fadeUp" | "fadeIn" | "scaleUp" | "slideInLeft" | "slideInRight" | "float";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
}

export function AnimatedContainer({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  threshold = 0.1,
  ...props
}: AnimatedContainerProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold,
  });

  const getAnimation = () => {
    switch (animation) {
      case "fadeUp":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "scaleUp":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "slideInLeft":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "slideInRight":
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
      case "float":
        return {
          hidden: { y: 0 },
          visible: { 
            y: [0, -10, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: {
              duration,
              delay,
              ease: "easeOut",
            },
          },
        };
    }
  };

  const { hidden, visible } = getAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden,
        visible,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedContainer;
