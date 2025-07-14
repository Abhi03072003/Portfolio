import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const controls = useAnimation();

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'Deepak Maurya New.pdf';
    link.download = 'Deepak_Maurya_Resume.pdf';
    link.click();
  };

  const handleViewProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const slideUpVariant = {
    hidden: { 
      y: 60, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 12,
        mass: 1
      }
    }
  };

  const letterVariant = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    })
  };

  const socialVariant = {
    hidden: { 
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        delay: 1.5 + i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    })
  };

  const buttonVariant = {
    hidden: { 
      scale: 0,
      y: 20,
      opacity: 0
    },
    visible: (i) => ({
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.2 + i * 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    })
  };

  // Background floating animation
  const floatingVariant = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Pulsing effect for accent elements
  const pulseVariant = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Start animation sequence
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Split name for letter animation
  const name = "Deepak Maurya";
  const nameLetters = name.split("");

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 overflow-hidden relative"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        variants={floatingVariant}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        variants={floatingVariant}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10"
        variants={container}
      >
        {/* Animated greeting */}
        <motion.div
          variants={slideUpVariant}
          className="mb-4"
        >
          <motion.span 
            className="text-blue-400 text-lg md:text-xl font-medium"
            variants={pulseVariant}
            animate="animate"
          >
            Welcome to My Portfolio
          </motion.span>
        </motion.div>

        {/* Animated Name with enhanced letter animation */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          variants={slideUpVariant}
        >
          <span className="text-slate-100">Hi, I'm </span>
          <span className="text-blue-400 inline-block">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariant}
                custom={index}
                className="inline-block"
                whileHover={{ 
                  scale: 1.2, 
                  color: "#60A5FA",
                  transition: { duration: 0.2 }
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Tagline with typewriter effect */}
        <motion.p 
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          variants={slideUpVariant}
          whileInView={{
            opacity: [0, 1],
            transition: { duration: 1.5 }
          }}
        >
          Full Stack Developer | Cloud Enthusiast | DSA Learner
        </motion.p>

        {/* Description */}
        <motion.p 
          className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
          variants={slideUpVariant}
        >
          I build modern, scalable web applications using React, Node.js, and cloud technologies. 
          Currently pursuing BTech in IT and passionate about creating innovative solutions.
        </motion.p>

        {/* Enhanced Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          variants={container}
        >
          <motion.button
            onClick={handleViewProjects}
            variants={buttonVariant}
            custom={0}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />
            View Projects
          </motion.button>
          <motion.button
            onClick={handleDownloadResume}
            variants={buttonVariant}
            custom={1}
            whileHover={{ 
              scale: 1.05,
              borderColor: "#60A5FA",
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-2xl font-medium transition-all duration-300 relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ zIndex: -1 }}
            />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div 
          className="flex justify-center space-x-8"
          variants={container}
        >
          {[
            { icon: "github", url: "https://github.com/dkm4339", color: "#333" },
            { icon: "linkedin", url: "https://linkedin.com/in/dkm4339", color: "#0077B5" },
            { icon: "envelope", url: "mailto:deepakm124578@gmail.com", color: "#EA4335" }
          ].map((social, index) => (
            <motion.a
              key={social.icon}
              variants={socialVariant}
              custom={index}
              whileHover={{ 
                y: -8, 
                scale: 1.2,
                color: social.color,
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 text-2xl p-3 rounded-full hover:bg-slate-800/50 transition-all duration-300"
            >
              <i className={`fab fa-${social.icon}`}></i>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 2.5, duration: 0.5 }
          }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
            animate={{
              y: [0, 8, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{
                opacity: [0, 1, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}