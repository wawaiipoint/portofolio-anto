import { FiGithub, FiExternalLink, FiFolder, FiLock } from 'react-icons/fi';
import ScrollReveal from '../components/ScrollReveal';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Gudang Tryout - Online Testing Platform",
      description: "A comprehensive tryout system developed for CPNS, military/police academies, and psychological test preparation. Architected a highly responsive UI with React and Tailwind, fully integrated with a robust Laravel backend API.",
      tech: ["React", "Tailwind CSS", "Laravel", "MySQL"],
      link: "", // Kosongkan karena sedang tahap development/belum rilis
      repo: "", // Kosongkan jika private repository
      status: "In Development"
    },
    {
      id: 2,
      title: "Web-Based Administration System",
      description: "Designed and developed an administrative information system to streamline data management and operational workflows. Focused on efficient database migrations and secure data handling.",
      tech: ["Laravel", "PHP", "Bootstrap", "MySQL"],
      link: "", // Kosongkan karena sistem internal
      repo: "", 
      status: "Internal System"
    },
    {
      id: 3,
      title: "QA & Web Maintenance Dashboard",
      description: "An internal monitoring tool built to track website status, log daily errors, and ensure Quality Assurance standards are strictly met before deploying new features to production.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      link: "",
      repo: "", 
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-brand-lightBg dark:bg-gray-800/30 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-4">
            Featured <span className="text-brand-primary">Projects</span>.
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my dedication to clean code architecture, stable Front-end logic implementation, and scalable systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, index) => (
                <ScrollReveal key={project.id} direction="up" delay={index * 0.2}>
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col group h-full">
                    
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-brand-primary dark:text-brand-gold">
                          <FiFolder size={40} className="stroke-1" />
                        </div>
                        
                        {/* LOGIKA CONDITIONAL RENDERING */}
                        <div className="flex items-center gap-4">
                          
                          {/* Jika repo TIDAK kosong, tampilkan ikon GitHub */}
                          {project.repo !== "" && (
                            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-dark dark:hover:text-white transition-colors">
                                <FiGithub size={20} />
                            </a>
                          )}
                          
                          {/* Jika link TIDAK kosong, tampilkan ikon External Link */}
                          {project.link !== "" && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-brand-primary opacity-70 hover:opacity-100 transition-opacity">
                                <FiExternalLink size={20} />
                            </a>
                          )}

                          {/* Jika link kosong, tampilkan status elegan */}
                          {project.link === "" && (
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-full">
                                <FiLock size={12} className="text-gray-500 dark:text-gray-400" />
                                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                  {project.status}
                                </span>
                            </div>
                          )}

                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-3 group-hover:text-brand-primary transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                        {project.description}
                    </p>

                    <ul className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((tech, techIndex) => (
                        <li key={techIndex} className="text-[11px] font-bold text-brand-primary dark:text-brand-gold bg-brand-primary/10 dark:bg-gray-700/80 px-3 py-1.5 rounded-full uppercase tracking-wider">
                            {tech}
                        </li>
                        ))}
                    </ul>
                    
                </div>
                </ScrollReveal>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;