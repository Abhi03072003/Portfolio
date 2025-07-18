import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/use-mobile";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "education", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      // Update scrolled state for navbar styling
      setScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Home", icon: "fas fa-home" },
    { href: "#about", label: "About", icon: "fas fa-user" },
    { href: "#skills", label: "Skills", icon: "fas fa-code" },
    { href: "#projects", label: "Projects", icon: "fas fa-laptop-code" },
    { href: "#certifications", label: "Experience", icon: "fas fa-briefcase" }, 
    { href: "#education", label: "Education", icon: "fas fa-graduation-cap" },
    { href: "#contact", label: "Contact", icon: "fas fa-envelope" },
  ];

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-xl" 
          : "bg-slate-900/80 backdrop-blur-sm border-b border-slate-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            variants={logoVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
              onClick={() => handleNavClick("#home")}
              whileHover={{
                backgroundImage: "linear-gradient(to right, #60A5FA, #A855F7, #EC4899)",
                transition: { duration: 0.3 }
              }}
            >
              Abhishek Pandey
            </motion.span>
          </motion.div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <motion.div 
              className="hidden md:block"
              variants={itemVariants}
            >
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                      activeSection === item.href.slice(1)
                        ? "text-blue-400"
                        : "text-slate-300 hover:text-blue-400"
                    }`}
                  >
                    {/* Active indicator */}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-blue-500/20 rounded-xl border border-blue-500/30"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-slate-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    
                    <span className="relative z-10 flex items-center space-x-2">
                      <i className={`${item.icon} text-xs`}></i>
                      <span>{item.label}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Mobile menu button */}
          {isMobile && (
            <motion.div 
              className="md:hidden"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-300 hover:text-blue-400 p-2 rounded-lg transition-colors duration-200"
              >
                <motion.i
                  className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          )}
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMobile && isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/80 backdrop-blur-md rounded-b-2xl border-t border-slate-700 mt-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    variants={mobileItemVariants}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
                      activeSection === item.href.slice(1)
                        ? "text-blue-400 bg-blue-500/20"
                        : "text-slate-300 hover:text-blue-400 hover:bg-slate-700/50"
                    }`}
                  >
                    <span className="flex items-center space-x-3">
                      <i className={`${item.icon} text-sm w-5`}></i>
                      <span>{item.label}</span>
                    </span>
                    
                    {/* Active indicator line */}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="mobileActiveSection"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
        style={{
          width: `${((window.scrollY || 0) / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
        initial={{ width: 0 }}
        animate={{
          width: `${((window.scrollY || 0) / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
        transition={{ duration: 0.1 }}
      />
    </motion.nav>
  );
}