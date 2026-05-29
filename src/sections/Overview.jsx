import { FiTarget, FiShield, FiStar } from 'react-icons/fi';
import ScrollReveal from '../components/ScrollReveal';

const Overview = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* VS Code Mockup - REACT JS EDITION */}
          <ScrollReveal direction="left">
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              
              <div className="w-full max-w-lg rounded-xl overflow-hidden bg-[#1E1E1E] shadow-2xl border border-gray-700/50 hover:scale-105 transition-transform duration-700">
                
                <div className="bg-[#2D2D2D] px-4 py-3 flex items-center gap-2 border-b border-gray-700/50">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  <p className="ml-4 text-xs text-gray-400 font-mono">TryoutDashboard.jsx</p>
                </div>

                <div className="p-6 text-sm font-mono leading-relaxed overflow-x-auto whitespace-nowrap">
                  <p><span className="text-pink-400">import</span> <span className="text-white">{`{ useState, useEffect }`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'react'</span><span className="text-white">;</span></p>
                  <p><span className="text-pink-400">import</span> <span className="text-white">{`{ fetchMetrics }`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'../services/api'</span><span className="text-white">;</span></p>
                  <br />
                  <p><span className="text-pink-400">const</span> <span className="text-blue-400">TryoutDashboard</span> <span className="text-pink-400">=</span> <span className="text-white">()</span> <span className="text-pink-400">{`=>`}</span> <span className="text-white">{`{`}</span></p>
                  <p className="pl-4"><span className="text-pink-400">const</span> <span className="text-white">[metrics, setMetrics]</span> <span className="text-pink-400">=</span> <span className="text-yellow-300">useState</span><span className="text-white">(</span><span className="text-blue-300">null</span><span className="text-white">);</span></p>
                  <p className="pl-4"><span className="text-pink-400">const</span> <span className="text-white">[isLoading, setIsLoading]</span> <span className="text-pink-400">=</span> <span className="text-yellow-300">useState</span><span className="text-white">(</span><span className="text-blue-300">true</span><span className="text-white">);</span></p>
                  <br />
                  <p className="pl-4"><span className="text-yellow-300">useEffect</span><span className="text-white">(()</span> <span className="text-pink-400">{`=>`}</span> <span className="text-white">{`{`}</span></p>
                  <p className="pl-8 text-gray-500">{"// Fetching CPNS Tryout metrics data"}</p>
                  <p className="pl-8"><span className="text-pink-400">const</span> <span className="text-yellow-300">loadData</span> <span className="text-pink-400">=</span> <span className="text-pink-400">async</span> <span className="text-white">()</span> <span className="text-pink-400">{`=>`}</span> <span className="text-white">{`{`}</span></p>
                  <p className="pl-12"><span className="text-pink-400">try</span> <span className="text-white">{`{`}</span></p>
                  <p className="pl-16"><span className="text-pink-400">const</span> <span className="text-white">data =</span> <span className="text-pink-400">await</span> <span className="text-yellow-300">fetchMetrics</span><span className="text-white">();</span></p>
                  <p className="pl-16"><span className="text-yellow-300">setMetrics</span><span className="text-white">(data);</span></p>
                  <p className="pl-12"><span className="text-white">{`} `}</span><span className="text-pink-400">catch</span><span className="text-white"> (error) {`{`}</span></p>
                  <p className="pl-16"><span className="text-blue-300">console</span><span className="text-white">.</span><span className="text-yellow-300">error</span><span className="text-white">(</span><span className="text-green-300">'Failed to load data'</span><span className="text-white">);</span></p>
                  <p className="pl-12"><span className="text-white">{`} `}</span><span className="text-pink-400">finally</span><span className="text-white"> {`{`}</span></p>
                  <p className="pl-16"><span className="text-yellow-300">setIsLoading</span><span className="text-white">(</span><span className="text-blue-300">false</span><span className="text-white">);</span></p>
                  <p className="pl-12"><span className="text-white">{`}`}</span></p>
                  <p className="pl-8"><span className="text-white">{`};`}</span></p>
                  <p className="pl-8"><span className="text-yellow-300">loadData</span><span className="text-white">();</span></p>
                  <p className="pl-4"><span className="text-white">{`}, []);`}</span></p>
                  <br />
                  <p className="pl-4"><span className="text-pink-400">if</span> <span className="text-white">(isLoading)</span> <span className="text-pink-400">return</span> <span className="text-white">{"<"}</span><span className="text-teal-400">Loader</span> <span className="text-white">{"/>;"}</span></p>
                  <p className="pl-4"><span className="text-pink-400">return</span> <span className="text-white">{"<"}</span><span className="text-teal-400">MetricsGrid</span> <span className="text-blue-300">data</span><span className="text-white">={"{metrics} />;"}</span></p>
                  <p><span className="text-white">{`};`}</span></p>
                </div>
              </div>

            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark dark:text-white mb-6">
                Developer <span className="text-brand-dark dark:text-white">Overview</span><span className="text-brand-primary">.</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                With a solid academic foundation in Information Systems, I bridge the gap between complex system workflows and technical execution. My primary focus lies in Web Maintenance to ensure continuous stability, alongside rigorous Quality Assurance (QA) to guarantee bug-free deployments to production.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-brand-lightBg dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="bg-brand-primary/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                    <FiTarget className="text-brand-primary" />
                  </div>
                  <h4 className="font-bold text-brand-dark dark:text-white mb-2">Web Maintenance</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Ensuring optimal performance, security, and stability of web applications at all times.</p>
                </div>
                <div className="bg-brand-lightBg dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="bg-brand-gold/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                    <FiShield className="text-brand-gold" />
                  </div>
                  <h4 className="font-bold text-brand-dark dark:text-white mb-2">Quality Assurance</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Comprehensive testing procedures to deliver a flawless and seamless user experience.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="bg-brand-lightBg dark:bg-gray-800/50 rounded-[3rem] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-sm border border-gray-100 dark:border-gray-700">
             
             <div className="flex-1 space-y-10">
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <FiStar className="text-brand-primary text-3xl" />
                    <h3 className="text-2xl font-bold text-brand-dark dark:text-white">Excellence Guaranteed</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 pl-11">
                    Implementing best practices in every line of React and Laravel code, ensuring responsive interfaces and highly scalable backend architectures prepared for future growth.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <FiShield className="text-slate-500 dark:text-slate-400 text-3xl" />
                    <h3 className="text-2xl font-bold text-brand-dark dark:text-white">Trust & Reliability</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 pl-11">
                    Highly dependable in completing development cycles, from logic implementation to precision debugging, ensuring accurate and timely project delivery.
                  </p>
                </div>
             </div>
             
             <div className="w-full lg:w-[450px] h-[320px] bg-gradient-to-br from-gradient-start to-gradient-end rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-8 right-8 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <FiStar size={28} />
                </div>
                
                <div className="mt-10 z-10 relative">
                  <h3 className="text-7xl font-black mb-2 tracking-tight">100%</h3>
                  <p className="text-2xl font-bold opacity-95">Project Dedication</p>
                  <p className="text-base mt-4 opacity-80 leading-relaxed max-w-[250px]">
                    Fully committed to high execution standards and professional task completion.
                  </p>
                </div>

                <div className="absolute -bottom-16 -right-16 w-64 h-64 border-[32px] border-white/10 rounded-full z-0 pointer-events-none"></div>
             </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Overview;