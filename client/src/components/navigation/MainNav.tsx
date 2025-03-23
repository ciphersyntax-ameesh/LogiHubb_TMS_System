import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { NAV_LINKS } from "@/lib/constants";
import MobileNav from "./MobileNav";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-[#0F2A47] shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center mr-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-white font-bold text-lg">LH</span>
                </motion.div>
                <span className="text-white font-display font-bold text-xl">
                  Logi<span className="text-[#E67E22]">Hubb</span>
                </span>
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {NAV_LINKS.map((navLink) => (
              <Link key={navLink.href} href={navLink.href}>
                <a
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                    navLink.isPrimary
                      ? "bg-[#E67E22] hover:bg-[#F39C12] text-white" 
                      : "text-white hover:bg-[#1E3A5F]",
                    location === navLink.href && !navLink.isPrimary && "bg-[#1E3A5F]"
                  )}
                >
                  {navLink.label}
                </a>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  );
};

export default MainNav;
