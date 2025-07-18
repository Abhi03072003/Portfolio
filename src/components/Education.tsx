import { motion } from "framer-motion";

export default function Education() {
  // Variants for animation
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 14,
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="education" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background lights */}
      <motion.div
        className="absolute top-32 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-24 right-16 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
            Education
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Card */}
        <motion.div
          className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-2xl shadow-lg border border-blue-500/30 backdrop-blur-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 0 20px rgba(96,165,250,0.2)",
          }}
        >
          {/* Header row */}
          <motion.div
            className="flex items-center mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.i
              className="fas fa-graduation-cap text-blue-400 text-3xl mr-4"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            />
            <div>
              <h3 className="text-2xl font-semibold text-blue-400">
                Bachelor of Technology - Computer Science and Engineering
              </h3>
              <p className="text-slate-300">LIET, Greater Noida</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Duration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                <i className="fas fa-calendar-alt mr-2"></i>
                Duration
              </h4>
              <p className="text-slate-300">2022 - 2026</p>
            </motion.div>

            {/* Coursework List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-blue-400 mb-3">
                <i className="fas fa-book mr-2"></i>
                Relevant Coursework
              </h4>
              <ul className="text-slate-300 space-y-2">
                {[
                  "Web Development",
                  "Cloud Computing",
                  "Data Structures & Algorithms",
                  "Database Management Systems",
                  "Software Engineering",
                ].map((course, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={listItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start space-x-2 group"
                  >
                    <span className="text-blue-400">
                      <i className="fas fa-check-circle text-sm mt-1"></i>
                    </span>
                    <span className="group-hover:text-blue-100 transition-colors duration-200">
                      {course}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
