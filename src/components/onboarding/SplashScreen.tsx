import React, { useEffect } from 'react';
import Mimi from '../Mimi';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen mimaura-gradient-bg flex flex-col items-center justify-center">
      {/* Logo and Mimi */}
      <div className="flex flex-col items-center animate-fade-in">
        <Mimi variant="waving" size="xl" className="mb-6 animate-float" />
        
        <h1 className="text-4xl font-bold text-primary mb-2">Mimaura</h1>
        <p className="text-muted-foreground text-lg">Your gentle companion</p>
      </div>

      {/* Soft glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default SplashScreen;
