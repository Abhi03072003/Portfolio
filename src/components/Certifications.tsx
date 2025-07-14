import { motion } from "framer-motion";
import { useState } from "react";

export default function Certifications() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const certificationData = [
    {
      id: 1,
      type: "internship",
      title: "Web Development Intern",
      organization: "Quantum Musing",
      icon: "fas fa-briefcase",
      iconColor: "text-blue-400",
      duration: "January 2025 - March 2025",
      status: "Current",
      achievements: [
        "Developed responsive web applications using React and Node.js",
        "Designed and implemented a React-based website offering interactive workshops and quizzes",
        "Developed QuantumMusing.com, a platform dedicated to quantum computing education",
        "Optimized application performance and user experience"
      ],
      gradient: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/20"
    },
    {
      id: 2,
      type: "certification",
      title: "React JS",
      organization: "Infosys SpringBoard",
      icon: "fas fa-react",
      iconColor: "text-cyan-400",
      duration: "2024",
      status: "Completed",
      technologies: [
        { name: "React Components", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "React Hooks", color: "bg-blue-500/20 text-blue-400" },
        { name: "React Router", color: "bg-purple-500/20 text-purple-400" },
        { name: "REST APIs", color: "bg-green-500/20 text-green-400" }
      ],
      achievements: [
        "Completed comprehensive React JS course on Infosys Springboard",
        "Built dynamic UI using components, props, and hooks",
        "Integrated REST APIs and handled routing with React Router",
        "Followed best practices for scalable front-end development"
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      glowColor: "shadow-cyan-500/20"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <section id="certifications" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-blue-400 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Certifications & Experience
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Professional experience and continuous learning journey
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {certificationData.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(cert.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={`bg-slate-900 p-8 rounded-2xl shadow-lg border ${cert.borderColor} 
                         backdrop-blur-sm relative overflow-hidden group
                         ${hoveredCard === cert.id ? `shadow-xl ${cert.glowColor}` : 'shadow-lg'}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="mr-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <i className={`${cert.icon} ${cert.iconColor} text-3xl`}></i>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-slate-300">{cert.organization}</p>
                    <motion.span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                        cert.status === 'Current' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {cert.status}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Duration */}
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">
                    <i className="fas fa-calendar-alt mr-2"></i>
                    Duration
                  </h4>
                  <p className="text-slate-300">{cert.duration}</p>
                </motion.div>

                {/* Technologies (if applicable) */}
                {cert.technologies && (
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">
                      <i className="fas fa-cogs mr-2"></i>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className={`${tech.color} px-3 py-1 rounded-full text-sm font-medium`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {tech.name}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Achievements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">
                    <i className="fas fa-trophy mr-2"></i>
                    {cert.type === 'internship' ? 'Key Achievements' : 'Learning Outcomes'}
                  </h4>
                  <ul className="text-slate-300 space-y-3">
                    {cert.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={achievementVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 group"
                      >
                        <motion.span
                          className="text-blue-400 mt-1 min-w-0"
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <i className="fas fa-check-circle text-sm"></i>
                        </motion.span>
                        <span className="group-hover:text-blue-100 transition-colors duration-200">
                          {achievement}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Hover effect overlay */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                animate={{
                  borderColor: hoveredCard === cert.id ? cert.borderColor.replace('/30', '/50') : 'transparent'
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional stats or call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-6 text-slate-400"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">2+</div>
              <div className="text-sm">Certifications</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">1</div>
              <div className="text-sm">Internship</div>
            </div>
            <div className="w-px h-12 bg-slate-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">Ongoing</div>
              <div className="text-sm">Learning</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}