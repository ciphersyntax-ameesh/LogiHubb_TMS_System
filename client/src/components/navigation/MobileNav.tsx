import { useLocation } from "wouter";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [location] = useLocation();

  // Simplified animations
  const backdropVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const menuVariants = {
    closed: { x: "-100%" },
    open: { x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90]"
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={onClose}
          />
          
          {/* Mobile menu panel */}
          <motion.div
            className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-gradient-to-br from-[#0F2A47] to-[#1E3A5F] shadow-2xl z-[100] overflow-y-auto flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* Menu header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-[#2980B9]/30">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2980B9] to-[#3498DB] flex items-center justify-center mr-3 shadow-md">
                  <span className="text-white font-bold text-lg">LH</span>
                </div>
                <div className="text-white font-bold text-xl">
                  Logi<span className="text-[#E67E22]">Hubb</span>
                </div>
              </div>
              
              <button 
                className="text-gray-300 hover:text-white focus:outline-none"
                onClick={onClose}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation links */}
            <div className="flex-1 px-4 py-5">
              <div className="space-y-2.5">
                {NAV_LINKS.map((navLink) => (
                  <div key={navLink.href}>
                    <div
                      className={cn(
                        "flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 cursor-pointer",
                        navLink.isPrimary
                          ? "bg-gradient-to-r from-[#E67E22] to-[#F39C12] text-white shadow-md"
                          : "text-white hover:bg-[#1E3A5F] hover:shadow-md",
                        location === navLink.href && !navLink.isPrimary && "bg-[#1E3A5F] border-l-4 border-[#3498DB]"
                      )}
                      onClick={() => {
                        window.location.href = navLink.href;
                        onClose();
                      }}
                    >
                      {/* Icon based on link type */}
                      <div className="w-8 h-8 flex items-center justify-center mr-3 rounded-md bg-white/10">
                        {navLink.href === "/" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        )}
                        {navLink.href === "/features" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        )}
                        {navLink.href === "/about" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {navLink.href === "/register" && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        )}
                      </div>
                      
                      {navLink.label}
                      
                      {/* Subtle arrow for non-primary links */}
                      {!navLink.isPrimary && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 py-4 bg-[#0F2A47]/80 border-t border-[#2980B9]/30">
              <div className="text-center text-sm text-gray-400">
                <div className="mb-2">Need support?</div>
                <div 
                  onClick={() => window.location.href = 'mailto:support@logihubb.com'}
                  className="inline-block text-white bg-[#2980B9] hover:bg-[#3498DB] py-2 px-4 rounded-lg transition-colors cursor-pointer"
                >
                  Contact Us
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;