
import { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const certificates = [
    {
      title: 'Full-Stack Web Development',
      issuer: 'Prodigy Infotech',
      date: 'January 2025',
      duration: '1 Month Internship',
      description: 'Successfully completed internship program with outstanding performance in full-stack web development using React.js, Node.js, and MongoDB.',
      image: '/lovable-uploads/51b5cf25-2c4b-4d92-98ea-07b71bb97d05.png',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Full Stack Development']
    },
    {
      title: 'Software Development Engineer',
      issuer: 'Bluestock Fintech',
      date: 'February 2025',
      duration: 'SDE Internship',
      description: 'Completed intensive internship program in financial technology, focusing on backend development and secure financial solutions.',
      image: '/lovable-uploads/14795388-0ad5-4149-bedd-8edc821d71ec.png',
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Financial Systems']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certificates" ref={sectionRef} className="py-20 bg-cyber-dark/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Professional <span className="text-blood-500">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`terminal-window p-6 group hover:bg-blood-600/5 transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="terminal-header mb-4">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <div className="flex items-center space-x-2 ml-4">
                  <Award className="w-4 h-4 text-blood-400" />
                  <span className="text-xs text-gray-400">certificate_{index + 1}.cert</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="text-blood-300 mb-2">
                    <p className="font-mono text-lg">{cert.issuer}</p>
                    <p className="text-sm text-gray-400">{cert.duration} • {cert.date}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{cert.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-blood-400 mb-3">Technologies Covered:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-cyber-black text-blood-300 rounded-lg text-sm font-mono border border-blood-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center space-x-2 px-6 py-3 bg-blood-600 hover:bg-blood-700 text-white rounded-lg transition-all duration-300 group-hover:scale-105">
                        <Eye className="w-4 h-4" />
                        <span>View Certificate</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-cyber-dark border border-blood-600/30">
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white mb-4">{cert.title} - {cert.issuer}</h3>
                        <div className="bg-white rounded-lg p-2">
                          <img
                            src={cert.image}
                            alt={`${cert.title} Certificate`}
                            className="w-full h-auto rounded"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="terminal-window inline-block p-4">
            <div className="text-sm font-mono text-blood-400">
              <span className="animate-blink">$</span> credentials_verified --status=active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
