import { FiArrowRight, FiCode, FiDatabase, FiShield } from 'react-icons/fi';
import { personalData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center transition-colors duration-300">
      
      {/* Background Effect: Subtle Blue Glow (Memberi kesan High-Tech murni) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-primary/5 blur-[120px] dark:bg-brand-primary/10"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/5 blur-[120px] dark:bg-brand-primary/10"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-semibold text-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            Available for New Projects
        </div>

        {/* Massive Typography: Fokus Utama */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight mb-8 text-brand-dark dark:text-white max-w-5xl mx-auto">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-600">Stable</span> & <br className="hidden md:block" /> Scalable Systems.
        </h1>

        {/* Deskripsi */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {personalData.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a href="#projects" className="bg-brand-dark dark:bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
              View My Work <FiArrowRight />
            </a>
            <a href="#experience" className="bg-white dark:bg-gray-800 text-brand-dark dark:text-white px-8 py-4 rounded-full font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
              My Expertise
            </a>
        </div>

        {/* Tech Stack Pills (Menggantikan Cards agar lebih minimalis) */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            <div className="flex items-center gap-3 px-6 py-3 bg-brand-lightBg dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <FiCode className="text-brand-primary text-xl"/> 
              <span className="font-semibold text-brand-dark dark:text-gray-200">React & Tailwind</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-brand-lightBg dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <FiDatabase className="text-brand-gold text-xl"/> 
              <span className="font-semibold text-brand-dark dark:text-gray-200">Laravel & MySQL</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-brand-lightBg dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm">
              <FiShield className="text-slate-500 text-xl"/> 
              <span className="font-semibold text-brand-dark dark:text-gray-200">QA & Maintenance</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;