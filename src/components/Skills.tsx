
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Shield, Zap } from 'lucide-react';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'TailwindCSS', level: 88 },
        { name: 'Redux', level: 85 },
        { name: 'Three.js', level: 85 },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express.js', level: 90 },
        { name: 'Python', level: 87 },
        { name: 'Golang', level: 82 },
        { name: 'Java', level: 85 },
        { name: 'C++', level: 88 },
        { name: 'GraphQL', level: 86 },
        { name: 'RESTful API', level: 92 },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'Redis', level: 82 },
        { name: 'Cloudinary', level: 75 },
      ]
    },
    {
      title: 'DevOps',
      icon: Shield,
      skills: [
        { name: 'Docker', level: 88 },
        { name: 'AWS', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'CI/CD', level: 92 },
        { name: 'Jenkins', level: 85 },
        { name: 'Terraform', level: 82 },
        { name: 'GitOps', level: 80 },
        { name: 'Prometheus', level: 78 },
      ]
    },
    {
      title: 'Tools',
      icon: Zap,
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 98 },
        { name: 'Linux', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'Postman', level: 90 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Technical <span className="text-blood-500">Arsenal</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="terminal-window p-6 group hover:bg-blood-600/5 transition-all duration-300"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Icon className="w-6 h-6 text-blood-500 group-hover:animate-pulse" />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-mono text-gray-300">{skill.name}</span>
                        <span className="text-xs text-blood-400 font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-cyber-dark rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blood-600 to-blood-400 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3 bg-cyber-black rounded-lg">
                  <div className="text-xs font-mono text-blood-400">
                    <span className="animate-blink">$</span> executing {category.title.toLowerCase()}_protocols...
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
