import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed w-full z-50 top-0 transition-colors duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo Replikasi */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-8 h-8 rounded-full border-2 border-brand-primary flex items-center justify-center font-bold text-brand-primary">
            A
          </div>
          <span className="font-serif font-bold text-xl dark:text-white">
            nto<span className="text-brand-primary text-2xl leading-none">.</span>
          </span>
        </div>

        {/* Menu & Dark Mode Toggle */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 font-medium text-gray-600 dark:text-gray-300">
            {/* Link yang sudah diperbaiki menyesuaikan ID Section */}
            <a href="#home" className="hover:text-brand-primary transition-colors">Home</a>
            <a href="#experience" className="hover:text-brand-primary transition-colors">Overview</a>
            <a href="#projects" className="hover:text-brand-primary transition-colors">Projects</a>
          </div>
          
          <button 
            onClick={handleThemeSwitch}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-brand-gold shadow-sm hover:scale-110 transition-transform"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <a href="#contact" className="hidden md:block bg-brand-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;