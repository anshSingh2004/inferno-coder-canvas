
import { useState, useEffect } from 'react';

export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  
  const loadingTexts = [
    'Initializing quantum compiler...',
    'Loading neural networks...',
    'Decrypting source code...',
    'Establishing secure connection...',
    'Finalizing portfolio matrix...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const textIndex = Math.floor((progress / 100) * loadingTexts.length);
    if (textIndex < loadingTexts.length) {
      setCurrentText(loadingTexts[textIndex]);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-cyber-black flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="relative">
          <h1 className="text-6xl font-bold text-blood-500 animate-pulse neon-text">
            INFERNO_CODER
          </h1>
          <div className="absolute inset-0 text-6xl font-bold text-blood-300 animate-glitch opacity-50">
            INFERNO_CODER
          </div>
        </div>
        
        <div className="w-80 h-2 bg-cyber-dark rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blood-600 to-blood-400 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="font-mono text-blood-400 h-6">
          <span className="animate-typewriter">{currentText}</span>
          <span className="animate-blink">|</span>
        </div>
        
        <div className="text-blood-500 font-mono">
          {progress}% COMPLETE
        </div>
      </div>
    </div>
  );
};
