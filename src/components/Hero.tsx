
import { useState, useEffect } from 'react';
import { Code, Download, Github, Mail } from 'lucide-react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Full Stack Developer',
    'React Specialist',
    'Node.js Expert',
    'Database Architect',
    'API Designer'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentTitle.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block">
              <div className="terminal-window max-w-2xl mx-auto">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="text-xs text-gray-400 ml-4">inferno@coder:~$</span>
                </div>
                <div className="p-6 text-left">
                  <div className="text-blood-400 font-mono text-sm mb-2">
                    $ whoami
                  </div>
                  <div className="text-white text-4xl md:text-6xl font-bold mb-4">
                    INFERNO CODER
                  </div>
                  <div className="text-blood-400 font-mono text-sm mb-2">
                    $ cat role.txt
                  </div>
                  <div className="text-2xl md:text-3xl text-blood-300 h-12">
                    {displayText}
                    <span className="animate-blink">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with bleeding-edge technology. 
            Passionate about creating scalable, performant applications that push boundaries.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-blood-600 hover:bg-blood-700 text-white rounded-lg transition-all duration-300 flex items-center space-x-2 neon-border hover:animate-pulse-red">
              <Download className="w-5 h-5" />
              <span className="font-mono">Download Resume</span>
            </button>
            
            <div className="flex space-x-4">
              <button className="p-4 border border-blood-600 rounded-lg hover:bg-blood-600/20 transition-all duration-300 group">
                <Github className="w-6 h-6 text-blood-400 group-hover:text-white" />
              </button>
              <button className="p-4 border border-blood-600 rounded-lg hover:bg-blood-600/20 transition-all duration-300 group">
                <Mail className="w-6 h-6 text-blood-400 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating 3D elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 border border-blood-500 transform rotate-45 animate-rotate-3d opacity-30"></div>
        </div>
        <div className="absolute bottom-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-blood-600/20 rounded-full animate-pulse-red"></div>
        </div>
        <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Code className="w-12 h-12 text-blood-400 animate-rotate-3d" />
        </div>
      </div>
    </section>
  );
};
