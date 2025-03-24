import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

type IconProps = {
  name: string;
  className?: string;
};

export function LogisticsIcon({ name, className }: IconProps) {
  const baseClass = "w-full h-full";
  
  switch (name) {
    case "truck":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M5 17h2"></path>
            <path d="M15 17h2"></path>
            <path d="M3 9h4V5h4"></path>
            <path d="M7 5h8V3H7Z"></path>
            <path d="M15 9h4l2 3v5h-6"></path>
            <path d="M3 17V9h14v8"></path>
          </svg>
          <motion.div
            className="absolute w-2 h-2 bg-[#E67E22] rounded-full bottom-1/4 left-1/3"
            animate={{ 
              rotate: [0, 360],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-[#E67E22] rounded-full bottom-1/4 right-1/3"
            animate={{ 
              rotate: [0, 360],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          />
        </div>
      );
      
    case "warehouse":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M22 19V7l-9-4-9 4v12"></path>
            <path d="M2 7h20"></path>
            <path d="M12 3v16"></path>
            <path d="M9 19h6"></path>
            <path d="M9 15h6"></path>
            <path d="M9 11h6"></path>
          </svg>
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2980B9]/10"
            animate={{ 
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity
            }}
          />
        </div>
      );
      
    case "shipping":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M2 21c.6.5 1.2 1 2.5 1 2.2 0 3.7-1.5 5.5-1.5 1.7 0 3.2 1.5 5.5 1.5 1.3 0 1.9-.5 2.5-1"></path>
            <path d="M2 16c.6.5 1.2 1 2.5 1 2.2 0 3.7-1.5 5.5-1.5 1.7 0 3.2 1.5 5.5 1.5 1.3 0 1.9-.5 2.5-1"></path>
            <path d="M2 11c.6.5 1.2 1 2.5 1 2.2 0 3.7-1.5 5.5-1.5 1.7 0 3.2 1.5 5.5 1.5 1.3 0 1.9-.5 2.5-1"></path>
            <path d="M17.7 2c-.5.9-1.4 1.7-2.7 2.1-.7.2-2.5.5-4-.8-2.8-2.3-5.7-.1-5.7-.1-2.9 1.6-3.7 4.3-3.2 8.2"></path>
            <path d="M20 9V3l-3 2"></path>
          </svg>
          <motion.div
            className="absolute left-1/2 top-1/2 w-3/4 h-1 bg-[#2980B9]/20"
            animate={{ 
              y: ["-50%", "-40%", "-50%"],
              x: ["-50%", "-50%", "-50%"]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute left-1/4 bottom-1/4 w-2 h-2 bg-[#E67E22] rounded-full"
            animate={{ 
              y: [0, -5, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          />
        </div>
      );
      
    case "route-planner":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"></path>
            <path d="M9 17h8.4a2 2 0 0 1 1.4.6l.6.6a2 2 0 0 0 2.8 0l.6-.6a2 2 0 0 1 1.4-.6H22v-2h-2.1a2 2 0 0 1-1.4-.6l-.6-.6a2 2 0 0 0-2.8 0l-.6.6a2 2 0 0 1-1.4.6H5"></path>
            <path d="M7 17v-7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7"></path>
            <path d="M8 10v7"></path>
            <path d="M16 10v7"></path>
            <path d="M8 13h8"></path>
          </svg>
          <motion.path
            d="M8 10v7"
            stroke="#E67E22"
            strokeWidth={1}
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );
      
    case "tracking":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          <motion.div
            className="absolute inset-0"
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute top-1 left-1/2 w-1 h-1 bg-[#E67E22] rounded-full"></div>
            <div className="absolute top-1/4 right-1 w-1 h-1 bg-[#2980B9] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1 w-1 h-1 bg-[#E67E22] rounded-full"></div>
            <div className="absolute bottom-1 left-1/2 w-1 h-1 bg-[#2980B9] rounded-full"></div>
            <div className="absolute top-1/2 left-1 w-1 h-1 bg-[#E67E22] rounded-full"></div>
          </motion.div>
        </div>
      );
      
    case "inventory":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M4 19V5c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v14H4Z"></path>
            <path d="M4 19h16"></path>
            <path d="M9 3v16"></path>
            <path d="M14 8h3"></path>
            <path d="M14 12h3"></path>
            <path d="M14 16h3"></path>
          </svg>
          <motion.div
            className="absolute top-8 left-11 w-3 h-1 bg-[#2980B9]"
            animate={{ width: 3, opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          />
          <motion.div
            className="absolute top-12 left-11 w-3 h-1 bg-[#2980B9]"
            animate={{ width: 3, opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", delay: 0.3 }}
          />
          <motion.div
            className="absolute top-16 left-11 w-3 h-1 bg-[#2980B9]"
            animate={{ width: 3, opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", delay: 0.6 }}
          />
        </div>
      );
      
    case "dashboard":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <motion.div
            className="absolute top-12 left-4 w-2 h-6 rounded bg-[#2980B9]/30"
            animate={{ height: [4, 6, 4], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-12 left-7 w-2 h-4 rounded bg-[#E67E22]/30"
            animate={{ height: [3, 5, 3], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute top-12 left-12 w-2 h-7 rounded bg-[#2980B9]/30"
            animate={{ height: [5, 7, 5], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.div
            className="absolute top-12 left-15 w-2 h-3 rounded bg-[#E67E22]/30"
            animate={{ height: [2, 3, 2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
          />
          <motion.div
            className="absolute top-12 left-18 w-2 h-5 rounded bg-[#2980B9]/30"
            animate={{ height: [3, 5, 3], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
          />
        </div>
      );
      
    case "chart-line":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <line x1="4" y1="19" x2="20" y2="19"></line>
            <polyline points="4 15 8 9 12 11 16 7 20 11"></polyline>
          </svg>
          <motion.circle
            cx="8" cy="9" r="2"
            fill="#2980B9"
            stroke="none"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="16" cy="7" r="2"
            fill="#E67E22"
            stroke="none"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      );
      
    case "route":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <circle cx="19" cy="6" r="3"></circle>
            <circle cx="5" cy="18" r="3"></circle>
            <path d="M19 9v5a2 2 0 0 1-2 2H7"></path>
            <line x1="5" y1="15" x2="5" y2="9"></line>
            <line x1="9" y1="9" x2="5" y2="9"></line>
          </svg>
          <motion.div
            className="absolute"
            animate={{ 
              pathLength: [0, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      );
      
    case "coins":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <circle cx="9" cy="6" r="5"></circle>
            <path d="M9 11v4"></path>
            <line x1="6" y1="9" x2="12" y2="9"></line>
            <circle cx="16" cy="17" r="5"></circle>
            <path d="M16 12v4"></path>
            <line x1="13" y1="17" x2="19" y2="17"></line>
          </svg>
          <motion.circle
            cx="9" cy="6" r="5"
            fill="#2980B9"
            fillOpacity="0.1"
            stroke="currentColor"
            animate={{ fillOpacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="16" cy="17" r="5"
            fill="#E67E22"
            fillOpacity="0.1"
            stroke="currentColor"
            animate={{ fillOpacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      );
      
    case "boxes":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
            <path d="m7 16.5-4.74-2.85"></path>
            <path d="m7 16.5 5-3"></path>
            <path d="M7 16.5v5.17"></path>
            <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
            <path d="m17 16.5-5-3"></path>
            <path d="m17 16.5 4.74-2.85"></path>
            <path d="M17 16.5v5.17"></path>
            <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
            <path d="M12 8 7.26 5.15"></path>
            <path d="m12 8 4.74-2.85"></path>
            <path d="M12 13.5V8"></path>
          </svg>
          <motion.rect
            x="7" y="10"
            width="10" height="4"
            rx="1"
            fill="#2980B9"
            fillOpacity="0.2"
            animate={{ y: [10, 11, 10], fillOpacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );
      
    case "exclamation-triangle":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line
            x1="12" y1="9" x2="12" y2="13"
            stroke="#E67E22"
            strokeWidth="3"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      );
      
    case "robot":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M12 8V4H8"></path>
            <rect width="16" height="12" x="4" y="8" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
          </svg>
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-[#2980B9] top-9 left-9"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-[#2980B9] top-9 right-9"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
          />
        </div>
      );
      
    case "chart-bar":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <line x1="12" y1="20" x2="12" y2="10"></line>
            <line x1="18" y1="20" x2="18" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="16"></line>
          </svg>
          <motion.line
            x1="6" y1="20" x2="6" y2="16"
            stroke="#E67E22"
            strokeWidth="2"
            animate={{ y2: [16, 14, 16] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.line
            x1="12" y1="20" x2="12" y2="10"
            stroke="#2980B9"
            strokeWidth="2"
            animate={{ y2: [10, 8, 10] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.line
            x1="18" y1="20" x2="18" y2="4"
            stroke="#E67E22"
            strokeWidth="2"
            animate={{ y2: [4, 2, 4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
        </div>
      );
      
    case "api":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M10 20.5v-6.5a2.5 2.5 0 0 1 5 0v6.5"></path>
            <path d="M4 9h2.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h-1"></path>
            <path d="M4 14h1a2.5 2.5 0 0 0 2.5-2.5v0a2.5 2.5 0 0 0-2.5-2.5h-1"></path>
            <path d="M14 15v-3.5a2.5 2.5 0 0 1 5 0v.5"></path>
            <path d="M19 12h-4"></path>
          </svg>
          <motion.path
            d="M4 9h2.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5h-1"
            stroke="#2980B9"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.path
            d="M19 12h-4"
            stroke="#E67E22"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
          />
        </div>
      );
      
    case "mobile":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
          <motion.div
            className="absolute inset-x-7 top-5 bottom-8 rounded-md opacity-20 bg-gradient-to-b from-[#2980B9] to-[#E67E22]"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle
            cx="12" cy="18" r="1"
            fill="#E67E22"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );
      
    case "wms":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <rect width="16" height="16" x="4" y="4" rx="2"></rect>
            <rect width="6" height="6" x="9" y="9" rx="1"></rect>
            <path d="M15 4v16"></path>
            <path d="M4 15h16"></path>
          </svg>
          <motion.rect
            width="6" height="6" x="9" y="9" rx="1"
            fill="#2980B9"
            fillOpacity="0.2"
            animate={{ fillOpacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-8 left-6 w-2 h-2 rounded-full bg-[#E67E22]"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      );
      
    case "erp":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
            <path d="M12 17.5v-11"></path>
          </svg>
          <motion.path
            d="M12 17.5v-11"
            stroke="#E67E22"
            strokeWidth="2"
            strokeDasharray="2 2"
            animate={{ strokeDashoffset: [0, 8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-x-9 inset-y-7 opacity-20 bg-gradient-to-b from-[#2980B9] to-[#E67E22]"
            animate={{ opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );
      
    case "tms":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.29 7 12 12 20.71 7"></polyline>
            <line x1="12" y1="22" x2="12" y2="12"></line>
          </svg>
          <motion.polyline
            points="3.29 7 12 12 20.71 7"
            stroke="#2980B9"
            strokeWidth="2"
            strokeDasharray="2 2"
            animate={{ strokeDashoffset: [0, 8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="12" y1="22" x2="12" y2="12"
            stroke="#E67E22"
            strokeWidth="2"
            strokeDasharray="2 2"
            animate={{ strokeDashoffset: [0, 8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
        </div>
      );
      
    case "freight":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <rect width="16" height="10" x="4" y="10" rx="2"></rect>
            <path d="M10 3h4"></path>
            <path d="M12 3v7"></path>
            <path d="M4 15h16"></path>
            <path d="M6 18h2"></path>
            <path d="M16 18h2"></path>
          </svg>
          <motion.rect
            width="16" height="10" x="4" y="10" rx="2"
            fill="#2980B9"
            fillOpacity="0.1"
            animate={{ fillOpacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="7" cy="18" r="1"
            fill="#E67E22"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="17" cy="18" r="1"
            fill="#E67E22"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      );
      
    case "customs":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
            <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
            <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
            <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
            <rect width="10" height="10" x="7" y="7" rx="2"></rect>
          </svg>
          <motion.rect
            width="10" height="10" x="7" y="7" rx="2"
            fill="#2980B9"
            fillOpacity="0.1"
            animate={{ fillOpacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M9 12h6"
            stroke="#E67E22"
            strokeWidth="2"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.path
            d="M12 9v6"
            stroke="#E67E22"
            strokeWidth="2"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
          />
        </div>
      );
      
    case "docs":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
            <path d="M14 3v5h5M8 13h8M8 17h8M8 9h1"></path>
          </svg>
          <motion.path
            d="M8 13h8"
            stroke="#2980B9"
            strokeWidth="2"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.path
            d="M8 17h8"
            stroke="#2980B9" 
            strokeWidth="2"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.3 }}
          />
          <motion.path
            d="M8 9h1"
            stroke="#E67E22"
            strokeWidth="2"
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1, delay: 0.6 }}
          />
        </div>
      );
      
    case "security":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            <circle cx="12" cy="11" r="1"></circle>
            <path d="m12 12 2 2"></path>
          </svg>
          <motion.path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"
            fill="#2980B9"
            fillOpacity="0.1"
            animate={{ fillOpacity: [0.05, 0.2, 0.05] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="12" cy="11" r="1"
            fill="#E67E22"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      );
      
    case "analytics":
      return (
        <div className={cn("relative", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <path d="M3 3v18h18"></path>
            <path d="m8 17 4-8 4 2 4-10"></path>
          </svg>
          <motion.path
            d="m8 17 4-8 4 2 4-10"
            stroke="#E67E22"
            strokeWidth="2"
            strokeDasharray="20"
            animate={{ strokeDashoffset: [0, 20] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="8" cy="17" r="1.5"
            fill="#2980B9"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="12" cy="9" r="1.5"
            fill="#2980B9" 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle
            cx="16" cy="11" r="1.5"
            fill="#2980B9"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          />
          <motion.circle
            cx="20" cy="1" r="1.5"
            fill="#2980B9"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
          />
        </div>
      );

    // Default fallback
    default:
      return (
        <div className={cn("flex items-center justify-center text-4xl", className)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={baseClass}>
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
        </div>
      );
  }
}