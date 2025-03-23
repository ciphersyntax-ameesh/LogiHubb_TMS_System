import { Link } from "wouter";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-[#2980B9] flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">LH</span>
              </div>
              <span className="text-white font-display font-bold text-xl">
                Logi<span className="text-[#E67E22]">Hubb</span>
              </span>
            </div>
            <p className="text-gray-300 max-w-xs">
              Transforming transport management with artificial intelligence and machine learning solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span className="text-gray-300 hover:text-[#E67E22] transition-colors duration-300 cursor-pointer inline-block">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.solutions.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span className="text-gray-300 hover:text-[#E67E22] transition-colors duration-300 cursor-pointer inline-block">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.support.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span className="text-gray-300 hover:text-[#E67E22] transition-colors duration-300 cursor-pointer inline-block">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} LogiHubb. All rights reserved.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            {SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label={social.label}
              >
                <i className={`fab fa-${social.icon} text-xl`}></i>
              </motion.a>
            ))}
          </div>
          
          <div className="flex mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#E67E22] transition-colors duration-300 text-sm mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#E67E22] transition-colors duration-300 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
