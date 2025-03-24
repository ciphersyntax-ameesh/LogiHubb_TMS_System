import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

type AiIconProps = {
  type: string;
  className?: string;
  animated?: boolean;
};

export function AiIcon({ type, className = "", animated = true }: AiIconProps) {
  const baseClass = "w-full h-full";
  
  // Shared animations for icons
  const pulseAnimation = animated ? {
    animate: { 
      scale: [1, 1.05, 1],
      opacity: [1, 0.9, 1] 
    },
    transition: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" 
    }
  } : {};
  
  const glowAnimation = animated ? {
    animate: { 
      boxShadow: [
        "0 0 0px rgba(230, 126, 34, 0)",
        "0 0 8px rgba(230, 126, 34, 0.3)",
        "0 0 0px rgba(230, 126, 34, 0)"
      ]
    },
    transition: { 
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut" 
    }
  } : {};

  switch (type) {
    case "predictive-analytics":
    case "chart-line":
      return (
        <motion.div 
          className={cn("relative", className)}
          {...pulseAnimation}
          {...glowAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <line x1="2" y1="20" x2="22" y2="20"></line>
            <polyline points="2 10 7 5 12 10 17 5 22 10"></polyline>
            <polyline points="16 14 17 17 20 15 22 18"></polyline>
            <circle cx="10" cy="14" r="2"></circle>
          </svg>
          {animated && (
            <motion.div 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2980B9]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
            />
          )}
        </motion.div>
      );
      
    case "route-optimization":
    case "route":
      return (
        <motion.div 
          className={cn("relative", className)}
          {...pulseAnimation}
          {...glowAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <circle cx="4" cy="7" r="2"></circle>
            <circle cx="12" cy="17" r="2"></circle>
            <circle cx="20" cy="7" r="2"></circle>
            <path d="M4 9l8 5.43L20 9"></path>
            {animated && (
              <motion.path
                d="M4 9l8 5.43L20 9"
                initial={{ pathLength: 0, opacity: 0.5 }}
                animate={{ pathLength: 1, opacity: 1 }}
                stroke="#E67E22"
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
              />
            )}
          </svg>
        </motion.div>
      );
      
    case "dynamic-pricing":
    case "coins":
      return (
        <motion.div 
          className={cn("relative", className)}
          {...pulseAnimation}
          {...glowAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <circle cx="9" cy="9" r="6"></circle>
            <path d="M9 3v12"></path>
            <path d="M3 9h12"></path>
            <circle cx="9" cy="9" r="6"></circle>
            {animated && (
              <>
                <motion.circle 
                  cx="16" 
                  cy="16" 
                  r="6" 
                  initial={{ scale: 0.8, opacity: 0 }} 
                  animate={{ scale: 1, opacity: 1 }} 
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path 
                  d="M16 13v6" 
                  initial={{ pathLength: 0 }} 
                  animate={{ pathLength: 1 }} 
                  transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
                />
                <motion.path 
                  d="M13 16h6" 
                  initial={{ pathLength: 0 }} 
                  animate={{ pathLength: 1 }} 
                  transition={{ duration: 1, delay: 0.7, repeat: Infinity, repeatDelay: 1 }}
                />
              </>
            )}
          </svg>
          {animated && (
            <motion.div 
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#E67E22] opacity-70" 
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      );
      
    case "load-optimization":
    case "boxes":
      return (
        <motion.div 
          className={cn("relative", className)}
          {...pulseAnimation}
          {...glowAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <rect x="2" y="10" width="8" height="10" rx="1"></rect>
            <rect x="14" y="10" width="8" height="10" rx="1"></rect>
            <rect x="8" y="4" width="8" height="16" rx="1"></rect>
            {animated && (
              <>
                <motion.rect 
                  x="2" 
                  y="10" 
                  width="8" 
                  height="10" 
                  rx="1" 
                  fill="#2980B9" 
                  fillOpacity="0.3"
                  animate={{ fillOpacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
                />
                <motion.rect 
                  x="14" 
                  y="10" 
                  width="8" 
                  height="10" 
                  rx="1" 
                  fill="#2980B9"
                  fillOpacity="0.3"
                  animate={{ fillOpacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
                />
                <motion.rect 
                  x="8" 
                  y="4" 
                  width="8" 
                  height="16" 
                  rx="1" 
                  fill="#E67E22" 
                  fillOpacity="0.3"
                  animate={{ fillOpacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.4 }}
                />
              </>
            )}
          </svg>
        </motion.div>
      );
      
    case "risk-assessment":
    case "exclamation-triangle":
      return (
        <motion.div 
          className={cn("relative", className)}
          {...pulseAnimation}
          {...glowAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
            {animated && (
              <motion.path 
                d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                fill="#E67E22"
                fillOpacity="0.2"
                animate={{ fillOpacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </svg>
          {animated && (
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-[#E67E22] opacity-20"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
        </motion.div>
      );
      
    case "automated-documentation":
    case "robot":
      return (
        <motion.div 
          className={cn("relative", className)}
          {...pulseAnimation}
          {...glowAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <rect x="3" y="4" width="18" height="12" rx="2" ry="2"></rect>
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <path d="M10 16v6"></path>
            <path d="M14 16v6"></path>
            <path d="M3 12h18"></path>
            {animated && (
              <>
                <motion.rect 
                  x="7" 
                  y="8" 
                  width="2" 
                  height="2" 
                  fill="#2980B9"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                />
                <motion.rect 
                  x="15" 
                  y="8" 
                  width="2" 
                  height="2" 
                  fill="#2980B9"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                />
                <motion.path 
                  d="M9 20h6" 
                  stroke="#E67E22"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                />
              </>
            )}
          </svg>
          {animated && (
            <motion.div 
              className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#E67E22]"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      );
      
    case "brain":
      return (
        <motion.div 
          className={cn("relative", className)}
          {...pulseAnimation}
          {...glowAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"></path>
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z"></path>
            {animated && (
              <>
                <motion.path 
                  d="M12 4.5V10" 
                  stroke="#2980B9"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, 10] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path 
                  d="M12 14V19.5" 
                  stroke="#E67E22"
                  strokeDasharray="5,5"
                  animate={{ strokeDashoffset: [0, -10] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                />
              </>
            )}
          </svg>
        </motion.div>
      );
      
    case "ai-ml":
      return (
        <motion.div 
          className={cn("relative", className)}
          {...pulseAnimation}
          {...glowAnimation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M5 7 3 5 5 3"></path>
            <path d="M7 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"></path>
            <rect x="9" y="7" width="6" height="6" rx="2"></rect>
            <path d="M9 17h6"></path>
            {animated && (
              <>
                <motion.path 
                  d="M5 13V5" 
                  stroke="#2980B9"
                  strokeDasharray="6,6"
                  animate={{ strokeDashoffset: [0, 12] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.rect 
                  x="9" 
                  y="7" 
                  width="6" 
                  height="6" 
                  rx="2"
                  fill="#E67E22"
                  fillOpacity="0.2"
                  animate={{ fillOpacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </>
            )}
          </svg>
        </motion.div>
      );

    default:
      return (
        <div className={cn("flex items-center justify-center text-4xl", className)}>
          <i className={`fas fa-${type}`}></i>
        </div>
      );
  }
}