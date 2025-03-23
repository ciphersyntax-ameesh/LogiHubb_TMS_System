import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { NAV_LINKS } from "@/lib/constants";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navbarVariants = {
    transparent: { 
      backgroundColor: "rgba(15, 42, 71, 0)",
      height: "5rem"
    },
    solid: { 
      backgroundColor: "rgba(15, 42, 71, 0.95)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(52, 152, 219, 0.2)",
      height: "4rem",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
    }
  };

  const logoVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.05, rotate: 5 }
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const linkItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50"
      initial="transparent"
      animate={isScrolled ? "solid" : "transparent"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-40 bg-[#2980B9]/5 rounded-bl-full transform -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-32 h-32 bg-[#E67E22]/5 rounded-tr-full"></div>
        
        {isScrolled && (
          <motion.div 
            className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#3498DB]/30 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        )}
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            {/* Logo with enhanced animation */}
            <Link href="/">
              <motion.div 
                className="flex items-center cursor-pointer"
                onHoverStart={() => setIsHoveringLogo(true)}
                onHoverEnd={() => setIsHoveringLogo(false)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className="relative"
                  variants={logoVariants}
                  animate={isHoveringLogo ? "hover" : "normal"}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2980B9] to-[#3498DB] flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">LH</span>
                  </div>
                  
                  {/* Animated glow effect on hover */}
                  <AnimatePresence>
                    {isHoveringLogo && (
                      <motion.div 
                        className="absolute inset-0 rounded-lg bg-[#3498DB]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        exit={{ opacity: 0 }}
                        style={{ filter: "blur(8px)" }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <div className="ml-3">
                  <motion.div
                    className="text-white font-display font-bold text-2xl flex items-baseline"
                    animate={isHoveringLogo ? { y: -2 } : { y: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="relative">
                      Logi<span className="text-[#E67E22]">Hubb</span>
                      
                      {/* Animated underline on hover */}
                      <AnimatePresence>
                        {isHoveringLogo && (
                          <motion.div 
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#E67E22] to-[#F39C12] w-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            exit={{ width: 0 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </AnimatePresence>
                    </span>
                  </motion.div>
                  
                  {isScrolled && (
                    <motion.div 
                      className="text-[#3498DB]/80 text-xs font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      Intelligent Transport Management
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop Navigation with animations */}
          <motion.div 
            className="hidden md:flex items-center space-x-1"
            variants={linkContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {NAV_LINKS.map((navLink, index) => (
              <motion.div key={navLink.href} variants={linkItemVariants}>
                {navLink.isPrimary ? (
                  <motion.div
                    className="inline-block"
                    whileHover={{ 
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={navLink.href}>
                      <a className={cn(
                        "inline-block px-5 py-2.5 rounded-lg font-medium transition-all duration-300 cursor-pointer",
                        "bg-gradient-to-r from-[#E67E22] to-[#F39C12] text-white shadow-md hover:shadow-[0_5px_15px_rgba(243,156,18,0.3)]",
                        "border border-[#F39C12]/20"
                      )}>
                        <span className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                          {navLink.label}
                        </span>
                      </a>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    className="inline-block"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link href={navLink.href}>
                      <a className={cn(
                        "inline-block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer relative overflow-hidden group",
                        "text-white hover:text-white",
                        location === navLink.href ? "bg-[#1E3A5F]/80" : "hover:bg-[#1E3A5F]/60"
                      )}>
                        <span className="relative z-10">{navLink.label}</span>
                        
                        {/* Background fill animation on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F] to-[#2980B9]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Bottom border for active state */}
                        {location === navLink.href && (
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3498DB]"
                            layoutId="activeNavIndicator"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </a>
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Mobile Menu Button with animation */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 text-gray-200 hover:text-white focus:outline-none bg-[#1E3A5F]/50 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="absolute w-6 h-0.5 bg-current"
              />
              <motion.div
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute w-6 h-0.5 bg-current"
              />
              <motion.div
                animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="absolute w-6 h-0.5 bg-current"
              />
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </motion.nav>
  );
};

export default MainNav;
