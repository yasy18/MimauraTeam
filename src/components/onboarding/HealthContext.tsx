import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Mimi from '../Mimi';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HealthContextProps {
  onNext: (conditions: string[]) => void;
  onBack: () => void;
}

const healthConditions = [
  { id: 'pcos', label: 'PCOS', icon: '🌸' },
  { id: 'endo', label: 'Endometriosis', icon: '💜' },
  { id: 'ibs', label: 'IBS / Digestive issues', icon: '🌿' },
  { id: 'thyroid', label: 'Thyroid condition', icon: '🦋' },
  { id: 'anxiety', label: 'Anxiety / Stress', icon: '🫂' },
  { id: 'adhd', label: 'ADHD / Neurodivergence', icon: '🧠' },
  { id: 'chronic', label: 'Chronic fatigue', icon: '😴' },
  { id: 'none', label: 'None of these', icon: '✨' },
];

const HealthContext: React.FC<HealthContextProps> = ({ onNext, onBack }) => {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const toggleCondition = (id: string) => {
    if (id === 'none') {
      setSelectedConditions(['none']);
      return;
    }
    setSelectedConditions(prev => {
      const withoutNone = prev.filter(c => c !== 'none');
      if (withoutNone.includes(id)) {
        return withoutNone.filter(c => c !== id);
      }
      return [...withoutNone, id];
    });
  };

  return (
    <div className="min-h-screen mimaura-gradient-bg flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <button onClick={onBack} className="p-2 -ml-2">
          <ChevronLeft className="w-6 h-6 text-foreground/70" />
        </button>
        <button onClick={() => onNext([])} className="text-primary font-medium">
          Skip
        </button>
      </div>

      {/* Progress indicator */}
      <div className="px-6 mb-4">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-primary rounded-full transition-all duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-32">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Is there anything we should know about?
            </h1>
            <p className="text-sm text-muted-foreground">
              This helps us tailor insights to your body. Completely optional.
            </p>
          </div>
          <Mimi variant="thinking" size="sm" className="ml-2" />
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-2 gap-3">
          {healthConditions.map((condition) => {
            const isSelected = selectedConditions.includes(condition.id);
            return (
              <button
                key={condition.id}
                onClick={() => toggleCondition(condition.id)}
                className={cn(
                  "p-4 rounded-2xl text-left transition-all",
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-button"
                    : "bg-card shadow-soft hover:shadow-card"
                )}
              >
                <span className="text-2xl mb-2 block">{condition.icon}</span>
                <span className={cn(
                  "font-medium text-sm",
                  isSelected ? "text-primary-foreground" : "text-foreground"
                )}>
                  {condition.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 pb-8 bg-gradient-to-t from-background/80 to-transparent">
        <Button
          onClick={() => onNext(selectedConditions)}
          className="w-full py-6 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default HealthContext;
