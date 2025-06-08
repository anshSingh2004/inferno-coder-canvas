
import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Certificates } from '@/components/Certificates';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { MatrixBackground } from '@/components/MatrixBackground';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-cyber-black text-white relative">
      <MatrixBackground />
      <Navigation />
      <div className="space-y-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
