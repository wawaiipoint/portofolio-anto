import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id='contact' className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark dark:text-white mb-6">
          Let's Build Great <span className="text-brand-primary">Systems</span>.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10">
          I am always open to discussing new opportunities, collaborative projects, or positions in Web Development, Quality Assurance, and System Maintenance.
        </p>
        
        <a href="mailto:wawaiipont@gmail.com" className="inline-block bg-brand-dark dark:bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all mb-16">
          Get In Touch
        </a>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} Anto. Junior Web Developer.
          </p>
          
          <div className="flex gap-6">
            <a href="https://github.com/wawaiipoint" className="text-gray-400 hover:text-brand-primary transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:wawaiipoint@gmail.com" className="text-gray-400 hover:text-brand-primary transition-colors">
              <FiMail size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;