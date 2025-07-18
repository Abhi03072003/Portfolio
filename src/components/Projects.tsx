export default function Projects() {
  const projects = [
    {
      title: "Safron URL Shortener",
      description:
        "A modern URL shortening service built with React and TinyURL API. Features include custom short URLs, analytics, and user-friendly interface.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["HTML", "TinyURL API", "CSS" ,"JavaScript"],
      techColor: "bg-blue-400/20 text-blue-400",
      github: "https://github.com/Abhi03072003/Url-Safron",
      demo: "",
    },
    {
      title: "AI Career Assistant",
      description:
        "Full-stack PERN application providing personalized career guidance using AI. Features include resume analysis, skill recommendations, and career path suggestions.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["PostgreSQL", "Express.js", "React", "Node.js"],
      techColor: "bg-green-500/20 text-green-500",
      github: "https://github.com/Abhi03072003/AI-Carrer-Coach",
      demo: "",
    },
    {
      title: "Bookstore Management System",
      description:
        "A comprehensive bookstore management system built with Advanced Java. Features include inventory management, sales tracking, and customer management.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Java", "HTML", "CSS", "MySQL"],
      techColor: "bg-yellow-500/20 text-yellow-500",
      github: "https://github.com/Abhi03072003",
      demo: "",
    },
  ]; // ✅ This closing bracket was missing

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/50 hover:scale-[1.02] transition-all duration-300 transform animate-fadeIn"
            >
              <div className="w-full h-48 bg-slate-700 rounded-xl mb-6 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`${project.techColor} px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform duration-200`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                >
                  <i className="fas fa-external-link-alt text-xl"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
