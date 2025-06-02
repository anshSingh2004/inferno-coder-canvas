
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <div className="terminal-window max-w-2xl">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-green-500"></div>
                    <span className="text-xs text-gray-400 ml-4">priyanshu@coder:~$</span>
                  </div>
                  <div className="p-6 text-left">
                    <div className="text-blood-400 font-mono text-sm mb-2">
                      $ whoami
                    </div>
                    <div className="text-white text-4xl md:text-6xl font-bold mb-4">
                      PRIYANSHU SINGH
                    </div>
                    <div className="text-blood-400 font-mono text-sm mb-2">
                      $ cat role.txt
                    </div>
                    <div className="text-2xl md:text-3xl text-blood-300 h-12">
                      {displayText}
                      <span className="animate-blink">|</span>
                    </div>
                    <div className="text-blood-400 font-mono text-sm mt-4 mb-2">
                      $ cat education.txt
                    </div>
                    <div className="text-lg text-gray-300">
                      RNS Institute of Technology | CGPA: 8.3
                    </div>
                    <div className="text-sm text-gray-400">
                      Bachelor of Engineering - Information Science
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              Crafting digital experiences with bleeding-edge technology. 
              Passionate about creating scalable, performant applications that push boundaries.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
              <button className="group px-8 py-4 bg-blood-600 hover:bg-blood-700 text-white rounded-lg transition-all duration-300 flex items-center space-x-2 neon-border hover:animate-pulse-red">
                <Download className="w-5 h-5" />
                <span className="font-mono">Download Resume</span>
              </button>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/priyanshu-coder" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border border-blood-600 rounded-lg hover:bg-blood-600/20 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-blood-400 group-hover:text-white" />
                </a>
                <a 
                  href="mailto:s.priyanshu.coder@gmail.com"
                  className="p-4 border border-blood-600 rounded-lg hover:bg-blood-600/20 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 text-blood-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Profile Picture */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blood-600 via-blood-500 to-blood-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-red"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blood-600 neon-border">
                <img 
                  src="/lovable-uploads/2c752925-8f0c-40fd-b2d1-f668187b6012.png" 
                  alt="Priyanshu Singh"
                  className="w-full h-full object-cover filter contrast-125 brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blood-900/20 to-transparent"></div>
              </div>
              {/* Floating particles around profile */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blood-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blood-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/2 -left-4 w-2 h-2 bg-blood-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/4 -right-4 w-3 h-3 bg-blood-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
