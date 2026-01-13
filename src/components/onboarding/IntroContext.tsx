import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Mimi from '../Mimi';
import { Button } from '@/components/ui/button';

interface IntroContextProps {
  onNext: () => void;
  onBack: () => void;
}

const IntroContext: React.FC<IntroContextProps> = ({ onNext, onBack }) => {
  return (
    <div className="min-h-screen mimaura-gradient-bg flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <button onClick={onBack} className="p-2 -ml-2">
          <ChevronLeft className="w-6 h-6 text-foreground/70" />
        </button>
        <div className="w-6" />
      </div>

      {/* Progress indicator */}
      <div className="px-6 mb-8">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-1/6 bg-primary rounded-full transition-all duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <Mimi variant="calm" size="xl" className="mb-8 animate-float" />
        
        <h1 className="text-2xl font-bold text-foreground text-center mb-4">
          Mimaura adapts to you
        </h1>
        
        <p className="text-lg text-muted-foreground text-center leading-relaxed mb-4">
          We'll ask a few gentle questions to personalise your experience. There are no wrong answers, and you can always change things later.
        </p>

        <p className="text-base text-primary text-center">
          Take your time—we're here for you. 💜
        </p>
      </div>

      {/* CTA */}
      <div className="p-6 pb-12">
        <Button
          onClick={onNext}
          className="w-full py-6 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default IntroContext;
