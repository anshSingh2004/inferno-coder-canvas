
import { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const Certificates = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const certificates = [
    {
      title: 'Advanced Software Engineering Job Simulation',
      issuer: 'Walmart Global Tech',
      date: 'November 2024',
      duration: 'Virtual Program on Forage',
      description: 'Completed advanced software engineering simulation solving complex technical challenges for various teams at Walmart, demonstrating expertise in data structures, system design, and database architecture.',
      achievements: [
        'Solved challenging technical projects for multiple Walmart teams through advanced problem-solving techniques',
        'Developed a novel heap data structure implementation in Java for Walmart\'s shipping department optimization',
        'Designed comprehensive UML class diagrams for data processors with multiple operating modes and database connections',
        'Created detailed entity relationship diagrams for new database systems meeting Walmart\'s pet department requirements'
      ],
      skills: ['Java', 'Data Structures', 'UML Design', 'Database Design', 'System Architecture'],
      image: '/lovable-uploads/798d11c0-26b9-4eed-87bf-ffc5c3c4d43e.png'
    },
    {
      title: 'Software Development Engineer',
      issuer: 'Bluestock Fintech',
      date: 'February 2025',
      duration: 'SDE Internship',
      description: 'Completed intensive internship program in financial technology, focusing on backend development and secure financial solutions.',
      achievements: [
        'Engineered scalable and secure financial solutions using modern tech stack',
        'Built robust RESTful APIs for financial transactions and account management',
        'Ensured data consistency and security in financial operations',
        'Collaborated with frontend team to integrate backend services and enhance user experience'
      ],
      skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Financial Systems'],
      image: '/lovable-uploads/14795388-0ad5-4149-bedd-8edc821d71ec.png'
    },
    {
      title: 'Full-Stack Web Development',
      issuer: 'Prodigy Infotech',
      date: 'January 2025',
      duration: '1 Month Internship',
      description: 'Successfully completed internship program with outstanding performance in full-stack web development using React.js, Node.js, and MongoDB.',
      achievements: [
        'Developed and maintained full-stack web applications using React.js, Node.js, and MongoDB',
        'Implemented secure authentication and authorization systems using JWT and OAuth',
        'Optimized API performance and database queries for improved scalability and efficiency',
        'Delivered high-quality, maintainable code following industry best practices'
      ],
      skills: ['React.js', 'Node.js', 'MongoDB', 'Full Stack Development'],
      image: '/lovable-uploads/51b5cf25-2c4b-4d92-98ea-07b71bb97d05.png'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <div className="text-blood-300 mb-2">
                    <p className="font-mono text-lg">{cert.issuer}</p>
                    <p className="text-sm text-gray-400">{cert.duration} • {cert.date}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">{cert.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-blood-400 mb-3">Program Highlights:</h4>
                  <ul className="space-y-1 mb-4">
                    {cert.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-blood-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300 text-xs">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-mono text-blood-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-cyber-black text-blood-300 rounded text-xs font-mono border border-blood-600/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-blood-600 hover:bg-blood-700 text-white rounded-lg transition-all duration-300 group-hover:scale-105">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">View Certificate</span>
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
