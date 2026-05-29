import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Overview from './sections/Overview';
import Projects from './sections/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;