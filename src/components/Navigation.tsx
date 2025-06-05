
import { useState, useEffect } from 'react';
import { Code, User, Briefcase, Mail, Settings } from 'lucide-react';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Code },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Settings },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-black/90 backdrop-blur-md border-b border-blood-600' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blood-500 neon-text">
            &lt;DEV-PRIYANSHU15/&gt;
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blood-600/20 hover:text-blood-400 ${
                    activeSection === item.id 
                      ? 'text-blood-400 bg-blood-600/10 neon-border' 
                      : 'text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-mono">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="md:hidden">
            <button className="text-blood-500 hover:text-blood-400 transition-colors">
              <Code className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
