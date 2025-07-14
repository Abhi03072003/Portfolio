import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="about"
      className="py-20 bg-slate-800 transition-all duration-500 hover:bg-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4 inline-block relative group">
            About Me
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div className="w-80 h-80 mx-auto lg:mx-0 mb-8 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-blue-400/30">
              <img
                src="Deeeqqq..jpg"
                alt="Deepak Maurya"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text & Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <motion.p
              className="text-lg text-slate-300 mb-8 leading-relaxed transition-colors duration-300 hover:text-white"
              variants={fadeUp}
              custom={2}
            >
              I'm a passionate Full Stack Developer currently pursuing BTech in IT at NIET, Greater Noida.
              I've completed multiple projects using React, Node.js, PostgreSQL, and cloud services like AWS.
              I love building smart, scalable web apps and learning new technologies. My goal is to create
              innovative solutions that make a positive impact on users' lives.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: "fas fa-laptop-code",
                  text: "Building responsive web apps",
                },
                {
                  icon: "fas fa-cloud",
                  text: "Experience with AWS cloud",
                },
                {
                  icon: "fas fa-brain",
                  text: "Learning DSA and Algorithms",
                },
                {
                  icon: "fas fa-graduation-cap",
                  text: "BTech IT @ NIET Greater Noida",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 hover:shadow-md group"
                  variants={fadeUp}
                  custom={3 + index}
                >
                  <i className={`${item.icon} text-blue-400 text-xl transition-all duration-300 group-hover:text-blue-300 group-hover:translate-x-1`}></i>
                  <span className="text-slate-300 transition-all duration-300 group-hover:text-white">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
