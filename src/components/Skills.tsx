import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const skillItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
  hover: {
    scale: 1.05,
    transition: { type: "spring", bounce: 0.4 }
  }
};

const pulseDot = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.3, 1],
    transition: { duration: 1.5, repeat: Infinity }
  }
};

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      skills: [
        { name: "React", color: "bg-blue-400" },
        { name: "JavaScript", color: "bg-blue-400" },
        { name: "HTML5 & CSS3", color: "bg-blue-400" },
        { name: "Tailwind CSS", color: "bg-blue-400" },
      ],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", color: "bg-green-500" },
        { name: "Express.js", color: "bg-green-500" },
        { name: "REST APIs", color: "bg-green-500" },
        { name: "Java", color: "bg-green-500" },
      ],
    },
    {
      title: "Database",
      icon: "fas fa-database",
      skills: [
        { name: "PostgreSQL", color: "bg-yellow-500" },
        { name: "MongoDB", color: "bg-yellow-500" },
        { name: "MySql", color: "bg-yellow-500"},
      ],
    },
    {
      title: "Tools",
      icon: "fas fa-tools",
      skills: [
        { name: "Git & GitHub", color: "bg-purple-500" },
        { name: "VS Code", color: "bg-purple-500" },
        { name: "Postman", color: "bg-purple-500" },
      ],
    },
  ];

  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Skills & Technologies</h2>
          <motion.div 
            className="w-24 h-1 bg-blue-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={skillItem}
              whileHover="hover"
              className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-blue-400/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <i className={`${category.icon} text-2xl mr-3`}></i>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillItem}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <motion.div
                      variants={pulseDot}
                      initial="initial"
                      animate="animate"
                      className={`w-3 h-3 ${skill.color} rounded-full`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}