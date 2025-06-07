
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Award, Eye, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experienceItems = [
    {
      type: 'certificate',
      title: 'Software Development Engineer',
      company: 'Bluestock Fintech',
      location: 'Remote',
      duration: 'February 2025',
      description: 'Completed intensive internship program in financial technology, focusing on backend development and secure financial solutions.',
      achievements: [
        'Engineered scalable and secure financial solutions using modern tech stack',
        'Built robust RESTful APIs for financial transactions and account management',
        'Ensured data consistency and security in financial operations',
        'Collaborated with frontend team to integrate backend services and enhance user experience'
      ],
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'RESTful API', 'Financial Systems'],
      certificateImage: '/lovable-uploads/14795388-0ad5-4149-bedd-8edc821d71ec.png'
    },
    {
      type: 'experience',
      title: 'Software Development Engineer Intern',
      company: 'Bluestock Fintech',
      location: 'Remote',
      duration: 'January 2025 - February 2025',
      description: 'Engineered scalable and secure financial solutions, focusing on backend development and API integration for financial transactions and account management systems.',
      achievements: [
        'Engineered scalable and secure financial solutions using modern tech stack',
        'Built robust RESTful APIs for financial transactions and account management',
        'Ensured data consistency and security in financial operations',
        'Collaborated with frontend team to integrate backend services and enhance user experience'
      ],
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'RESTful API', 'Financial Systems']
    },
    {
      type: 'certificate',
      title: 'Full-Stack Web Development',
      company: 'Prodigy Infotech',
      location: 'Remote',
      duration: 'January 2025',
      description: 'Successfully completed internship program with outstanding performance in full-stack web development using React.js, Node.js, and MongoDB.',
      achievements: [
        'Developed and maintained full-stack web applications using React.js, Node.js, and MongoDB',
        'Implemented secure authentication and authorization systems using JWT and OAuth',
        'Optimized API performance and database queries for improved scalability and efficiency',
        'Delivered high-quality, maintainable code following industry best practices'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'OAuth', 'Full Stack Development'],
      certificateImage: '/lovable-uploads/51b5cf25-2c4b-4d92-98ea-07b71bb97d05.png'
    },
    {
      type: 'experience',
      title: 'Full Stack Developer',
      company: 'Prodigy Infotech',
      location: 'Remote',
      duration: 'December 2024 - January 2025',
      description: 'Developed and maintained comprehensive full-stack web applications with focus on modern JavaScript frameworks and secure authentication systems.',
      achievements: [
        'Developed and maintained full-stack web applications using React.js, Node.js, and MongoDB',
        'Implemented secure authentication and authorization systems using JWT and OAuth',
        'Optimized API performance and database queries for improved scalability and efficiency',
        'Delivered high-quality, maintainable code following industry best practices'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'OAuth', 'Full Stack Development']
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
    <section id="experience" ref={sectionRef} className="py-20 bg-cyber-dark/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Professional <span className="text-blood-500">Journey</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blood-600 to-blood-400"></div>

            {experienceItems.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 transition-all duration-700 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-cyber-dark z-10 ${
                  item.type === 'certificate' ? 'bg-yellow-500' : 'bg-blood-500'
                }`}></div>

                {/* Content */}
                <div className="ml-20">
                  <div className="terminal-window p-6 group hover:bg-blood-600/5 transition-all duration-300">
                    <div className="terminal-header mb-4">
                      <div className="terminal-dot bg-red-500"></div>
                      <div className="terminal-dot bg-yellow-500"></div>
                      <div className="terminal-dot bg-green-500"></div>
                      <div className="flex items-center space-x-2 ml-4">
                        {item.type === 'certificate' ? (
                          <Award className="w-4 h-4 text-yellow-400" />
                        ) : (
                          <Briefcase className="w-4 h-4 text-blood-400" />
                        )}
                        <span className="text-xs text-gray-400">
                          {item.type}_{index + 1}.{item.type === 'certificate' ? 'cert' : 'log'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          {item.type === 'certificate' && (
                            <span className="px-2 py-1 bg-yellow-600 text-yellow-100 rounded text-xs font-mono">
                              CERTIFICATE
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-blood-300 mb-2">
                          <div className="flex items-center space-x-2">
                            <ChevronRight className="w-4 h-4" />
                            <span className="font-mono">{item.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-mono text-sm">{item.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono text-sm">{item.duration}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-mono text-blood-400 mb-3">
                          {item.type === 'certificate' ? 'Program Highlights:' : 'Key Achievements:'}
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-3">
                              <span className="w-2 h-2 bg-blood-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-mono text-blood-400 mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-cyber-black text-blood-300 rounded-lg text-sm font-mono border border-blood-600/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {item.type === 'certificate' && item.certificateImage && (
                        <div className="flex justify-center">
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="flex items-center space-x-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-all duration-300 group-hover:scale-105">
                                <Eye className="w-4 h-4" />
                                <span>View Certificate</span>
                                <ExternalLink className="w-4 h-4" />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl bg-cyber-dark border border-blood-600/30">
                              <div className="p-4">
                                <h3 className="text-xl font-bold text-white mb-4">{item.title} - {item.company}</h3>
                                <div className="bg-white rounded-lg p-2">
                                  <img
                                    src={item.certificateImage}
                                    alt={`${item.title} Certificate`}
                                    className="w-full h-auto rounded"
                                  />
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
