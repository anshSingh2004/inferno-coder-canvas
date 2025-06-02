
import { useState } from 'react';
import { Code, Zap, Shield, Users } from 'lucide-react';

export const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const stats = [
    { label: 'Years of Experience', value: '5+', icon: Zap },
    { label: 'Projects Completed', value: '100+', icon: Code },
    { label: 'Security Audits', value: '50+', icon: Shield },
    { label: 'Teams Led', value: '10+', icon: Users },
  ];

  const tabs = [
    { id: 'story', label: 'My Story' },
    { id: 'philosophy', label: 'Code Philosophy' },
    { id: 'achievements', label: 'Achievements' },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'story':
        return (
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Started my journey in the digital underworld at age 16, breaking systems to understand them better. 
              What began as curiosity evolved into a passion for creating bulletproof applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From reverse engineering complex algorithms to architecting enterprise-level solutions, 
              I've never stopped pushing the boundaries of what's possible with code.
            </p>
          </div>
        );
      case 'philosophy':
        return (
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              "Code is poetry written in logic." Every line must serve a purpose, every function optimized for performance,
              every system designed for scalability.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in clean architecture, defensive programming, and the power of automation. 
              Security isn't an afterthought—it's the foundation.
            </p>
          </div>
        );
      case 'achievements':
        return (
          <div className="space-y-4">
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blood-500 rounded-full"></span>
                <span>Led migration of legacy system serving 1M+ users</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blood-500 rounded-full"></span>
                <span>Optimized database queries reducing load time by 75%</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blood-500 rounded-full"></span>
                <span>Built real-time trading platform handling $10M+ daily volume</span>
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
