import React from 'react';
import Mimi from '../Mimi';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen mimaura-gradient-bg flex flex-col">
      {/* Mimi centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <Mimi variant="waving" size="xl" className="mb-8 animate-float" />
        
        <h1 className="text-3xl font-bold text-foreground text-center mb-4">
          Welcome to Mimaura
        </h1>
        
        <p className="text-lg text-muted-foreground text-center leading-relaxed">
          A gentle companion for understanding your cycle, mood, and wellbeing—without pressure or judgement.
        </p>
      </div>

      {/* CTA */}
      <div className="p-6 pb-12">
        <Button
          onClick={onNext}
          className="w-full py-6 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
