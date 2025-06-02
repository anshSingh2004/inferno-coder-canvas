
import { useState } from 'react';
import { Mail, Github, Phone, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text">
          Initialize <span className="text-blood-500">Connection</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="terminal-window p-6">
              <div className="terminal-header mb-4">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-4">contact_info.txt</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Let's Build Something Epic</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ready to transform your ideas into digital reality? Whether it's a complex enterprise solution 
                    or a cutting-edge startup platform, I'm here to make it happen.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-cyber-black rounded-lg hover:bg-blood-600/10 transition-all duration-300 group">
                    <Mail className="w-6 h-6 text-blood-400 group-hover:animate-pulse" />
                    <div>
                      <div className="text-sm text-gray-400 font-mono">Email Protocol</div>
                      <div className="text-white">inferno.coder@domain.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-cyber-black rounded-lg hover:bg-blood-600/10 transition-all duration-300 group">
                    <Github className="w-6 h-6 text-blood-400 group-hover:animate-pulse" />
                    <div>
                      <div className="text-sm text-gray-400 font-mono">GitHub Repository</div>
                      <div className="text-white">github.com/inferno-coder</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-cyber-black rounded-lg hover:bg-blood-600/10 transition-all duration-300 group">
                    <Phone className="w-6 h-6 text-blood-400 group-hover:animate-pulse" />
                    <div>
                      <div className="text-sm text-gray-400 font-mono">Secure Line</div>
                      <div className="text-white">+1 (555) 123-4567</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-xs text-gray-400 ml-4">message_composer.py</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-mono text-blood-400">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-cyber-black border border-blood-600/30 rounded-lg text-white focus:border-blood-500 focus:outline-none transition-colors font-mono"
                  placeholder="Enter your name..."
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-mono text-blood-400">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-cyber-black border border-blood-600/30 rounded-lg text-white focus:border-blood-500 focus:outline-none transition-colors font-mono"
                  placeholder="your.email@domain.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-mono text-blood-400">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-3 bg-cyber-black border border-blood-600/30 rounded-lg text-white focus:border-blood-500 focus:outline-none transition-colors font-mono resize-none"
                  placeholder="Describe your project or ask a question..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-blood-600 hover:bg-blood-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group neon-border hover:animate-pulse-red"
              >
                <Send className="w-5 h-5 group-hover:animate-pulse" />
                <span className="font-mono">Execute Send Protocol</span>
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 p-6 bg-cyber-dark/50 rounded-lg">
          <p className="text-gray-400 font-mono text-sm">
            © 2024 INFERNO_CODER. Crafted with 
            <span className="text-blood-500 animate-pulse"> ❤️ </span>
            and lots of caffeine.
          </p>
        </div>
      </div>
    </section>
  );
};
