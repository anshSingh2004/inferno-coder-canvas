import { useState } from 'react';
import { Github, Link, Code, Database, Shield, Zap, Brain, Cloud, Star } from 'lucide-react';

export const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('featured');

  const categories = [
    { id: 'featured', name: 'Featured', icon: Star },
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'fullstack', name: 'Full Stack', icon: Database },
    { id: 'devops', name: 'DevOps', icon: Cloud },
    { id: 'ai', name: 'AI/ML', icon: Brain },
    { id: 'python', name: 'Python', icon: Code },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const projects = [
    {
      title: 'CryptoTrade Pro',
      description: 'Real-time cryptocurrency trading platform with advanced charting and portfolio management.',
      tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL'],
      features: ['Real-time data', 'Advanced charts', 'Portfolio tracking', 'Secure trading'],
      github: '#',
      live: '#',
      category: 'fullstack',
      featured: true
    },
    {
      title: 'SecureVault API',
      description: 'Enterprise-grade API gateway with advanced security, rate limiting, and monitoring.',
      tech: ['Python', 'FastAPI', 'Redis', 'Docker'],
      features: ['JWT Auth', 'Rate limiting', 'API monitoring', 'Auto scaling'],
      github: '#',
      live: '#',
      category: 'security',
      featured: true
    },
    {
      title: 'NeuralNet Dashboard',
      description: 'ML model deployment platform with real-time monitoring and performance analytics.',
      tech: ['React', 'TensorFlow', 'Python', 'AWS'],
      features: ['Model deployment', 'Real-time monitoring', 'Performance analytics', 'A/B testing'],
      github: '#',
      live: '#',
      category: 'ai',
      featured: true
    },
    {
      title: 'DevOps Pipeline',
      description: 'Automated CI/CD pipeline with containerization and infrastructure as code.',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      features: ['Auto deployment', 'Container orchestration', 'Infrastructure scaling', 'Monitoring'],
      github: '#',
      live: '#',
      category: 'devops',
      featured: true
    },
    {
      title: 'Data Analytics Engine',
      description: 'Python-based data processing and analytics engine with real-time visualization.',
      tech: ['Python', 'Pandas', 'NumPy', 'Plotly'],
      features: ['Data processing', 'Real-time analytics', 'Interactive dashboards', 'Export reports'],
      github: '#',
      live: '#',
      category: 'python'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Payment processing', 'Inventory management', 'Order tracking', 'Admin panel'],
      github: '#',
      live: '#',
      category: 'fullstack'
    },
    {
      title: 'Microservices Architecture',
      description: 'Scalable microservices platform with service mesh and monitoring.',
      tech: ['Docker', 'Kubernetes', 'Istio', 'Prometheus'],
      features: ['Service mesh', 'Load balancing', 'Health monitoring', 'Auto scaling'],
      github: '#',
      live: '#',
      category: 'devops'
    },
    {
      title: 'Computer Vision App',
      description: 'AI-powered image recognition and processing application.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask'],
      features: ['Image recognition', 'Real-time processing', 'Object detection', 'API integration'],
      github: '#',
      live: '#',
      category: 'ai'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : activeCategory === 'featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fullstack': return Database;
      case 'security': return Shield;
      case 'ai': return Brain;
      case 'devops': return Cloud;
      case 'python': return Code;
      default: return Code;
    }
  };

  return (
    <section id="projects" className="py-20 bg-cyber-dark/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Project <span className="text-blood-500">Portfolio</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 border ${
                  activeCategory === category.id
                    ? 'bg-blood-600 text-white border-blood-500 neon-border'
                    : 'bg-cyber-black text-gray-300 border-blood-600/30 hover:bg-blood-600/20 hover:text-blood-400'
                }`}
              >
                <CategoryIcon className="w-4 h-4" />
                <span className="font-mono text-sm">{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <div
                key={index}
                className={`terminal-window p-6 group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  hoveredProject === index ? 'neon-border' : ''
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="terminal-header mb-4">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <div className="flex items-center space-x-2 ml-4">
                    <CategoryIcon className="w-4 h-4 text-blood-400" />
                    <span className="text-xs text-gray-400">{project.category}.exe</span>
                    {project.featured && <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blood-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-mono text-blood-400 mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-cyber-black text-blood-300 rounded-lg text-sm font-mono border border-blood-600/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-mono text-blood-400 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <span className="w-1 h-1 bg-blood-500 rounded-full"></span>
                            <span className="text-xs text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 border border-blood-600 rounded-lg hover:bg-blood-600/20 transition-all duration-300 group"
                    >
                      <Github className="w-4 h-4 text-blood-400" />
                      <span className="text-sm font-mono text-gray-300">Source</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 px-4 py-2 bg-blood-600 rounded-lg hover:bg-blood-700 transition-all duration-300"
                    >
                      <Link className="w-4 h-4 text-white" />
                      <span className="text-sm font-mono text-white">Live Demo</span>
                    </a>
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
