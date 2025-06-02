
import { useState } from 'react';
import { Code, Zap, Shield, Users } from 'lucide-react';

export const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { label: 'Years of Experience', value: '2+', icon: Zap },
    { label: 'Projects Completed', value: '15+', icon: Code },
    { label: 'Hackathons Won', value: '4', icon: Shield },
    { label: 'Tech Stacks', value: '10+', icon: Users },
  ];

  const tabs = [
    { id: 'story', label: 'My Story' },
    { id: 'skills', label: 'Tech Arsenal' },
    { id: 'achievements', label: 'Achievements' },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Started my journey in the digital realm as a curious student at RNS Institute of Technology. 
              What began as fascination with code evolved into mastering full-stack development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From building scalable web applications to optimizing database performance, 
              I've been pushing the boundaries of what's possible with modern technology.
            </p>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-blood-400 font-mono text-sm mb-2">Languages:</h4>
                <div className="flex flex-wrap gap-2">
                  {['C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Golang'].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-blood-600/20 border border-blood-600 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-blood-400 font-mono text-sm mb-2">Frameworks:</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'Express', 'Next.js'].map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-blood-600/20 border border-blood-600 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-blood-400 font-mono text-sm mb-2">Databases & Tools:</h4>
              <div className="flex flex-wrap gap-2">
                {['MongoDB', 'PostgreSQL', 'Redis', 'Git', 'Docker', 'AWS'].map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-blood-600/20 border border-blood-600 rounded text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      case 'achievements':
        return (
          <div className="space-y-4">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blood-500 rounded-full"></span>
                <span>🥇 1st Place - TechFest National Hackathon at RNS Institute (Nov 2023)</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blood-500 rounded-full"></span>
                <span>🥉 3rd Place - Ambition Hackathon at BIT Bangalore (Jun 2024)</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blood-500 rounded-full"></span>
                <span>🥉 3rd Place - CypherQuest Hackathon at Dayananda Sagar (Jun 2024)</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blood-500 rounded-full"></span>
                <span>🥉 3rd Place - Almatron Hackathon at Global Academy (Jun 2024)</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blood-500 rounded-full"></span>
                <span>🏆 GSoC Contributor - Full Stack Development (May-Aug 2024)</span>
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="py-20 bg-cyber-dark/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          About The <span className="text-blood-500">Developer</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-4">profile.json</span>
              </div>
              <div className="p-6">
                <div className="flex space-x-4 mb-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-blood-600 text-white'
                          : 'text-gray-400 hover:text-blood-400'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <div className="animate-slide-up">
                  {getTabContent()}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="terminal-window p-6 text-center group hover:bg-blood-600/10 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon className="w-8 h-8 text-blood-500 mx-auto mb-4 group-hover:animate-pulse" />
                  <div className="text-3xl font-bold text-white mb-2 neon-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
