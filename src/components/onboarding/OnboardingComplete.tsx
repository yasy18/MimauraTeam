import React, { useEffect } from 'react';
import Mimi from '../Mimi';

interface OnboardingCompleteProps {
  onComplete: () => void;
}

const OnboardingComplete: React.FC<OnboardingCompleteProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen mimaura-gradient-bg flex flex-col items-center justify-center px-8">
      <Mimi variant="happy" size="xl" className="mb-8 animate-float" />
      
      <h1 className="text-2xl font-bold text-foreground text-center mb-4">
        You're all set!
      </h1>
      
      <p className="text-lg text-muted-foreground text-center leading-relaxed">
        Mimaura is ready to be your gentle companion.
      </p>

      {/* Progress dots */}
      <div className="flex gap-2 mt-8">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse delay-100" />
        <div className="w-2 h-2 rounded-full bg-primary/30 animate-pulse delay-200" />
      </div>
    </div>
  );
};

export default OnboardingComplete;
