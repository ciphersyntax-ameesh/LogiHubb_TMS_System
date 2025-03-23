import { useLocation, Link } from "wouter";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const [location] = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#1E3A5F] shadow-xl"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((navLink) => (
              <motion.div key={navLink.href} variants={itemVariants}>
                <Link href={navLink.href}>
                  <a
                    className={cn(
                      "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300",
                      navLink.isPrimary
                        ? "bg-[#E67E22] hover:bg-[#F39C12] text-white"
                        : "text-white hover:bg-[#2980B9]",
                      location === navLink.href && !navLink.isPrimary && "bg-[#2980B9]"
                    )}
                    onClick={onClose}
                  >
                    {navLink.label}
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
