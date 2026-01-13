import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import GoalCard from '../GoalCard';
import Mimi from '../Mimi';
import { Button } from '@/components/ui/button';

interface OnboardingGoalsProps {
  onNext: (selectedGoals: string[]) => void;
  onBack: () => void;
}

const goals = [
  { id: 'cycle', label: 'Cycle patterns', icon: 'cycle' },
  { id: 'mood', label: 'Mood and energy', icon: 'mood' },
  { id: 'digestion', label: 'Digestion', icon: 'digestion' },
  { id: 'lifestyle', label: 'Lifestyle', icon: 'lifestyle' },
  { id: 'sleep', label: 'Sleep quality', icon: 'sleep' },
  { id: 'mental', label: 'Mental clarity', icon: 'mental' },
  { id: 'fertility', label: 'Fertility awareness', icon: 'fertility' },
  { id: 'nutrition', label: 'Nutrition and cravings', icon: 'nutrition' },
];

const OnboardingGoals: React.FC<OnboardingGoalsProps> = ({ onNext, onBack }) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev => 
      prev.includes(id) 
        ? prev.filter(g => g !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen mimaura-gradient-bg flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <button onClick={onBack} className="p-2 -ml-2">
          <ChevronLeft className="w-6 h-6 text-foreground/70" />
        </button>
        <div className="w-6" /> {/* Spacer */}
      </div>

      {/* Progress indicator */}
      <div className="px-6 mb-4">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-primary rounded-full transition-all duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-32">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              What would you like Mimaura to help you with?
            </h1>
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent rounded-full">
              <span className="text-sm text-accent-foreground">
                ✓ {selectedGoals.length}/8 chosen goals
              </span>
            </div>
          </div>
          <Mimi variant="waving" size="md" className="animate-float" />
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-2 gap-3">
          {goals.map((goal) => (
            <GoalCard
              key={goal.id}
              id={goal.id}
              label={goal.label}
              icon={goal.icon}
              selected={selectedGoals.includes(goal.id)}
              onToggle={toggleGoal}
            />
          ))}
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 pb-8 bg-gradient-to-t from-background/80 to-transparent">
        <Button
          onClick={() => onNext(selectedGoals)}
          disabled={selectedGoals.length === 0}
          className="w-full py-6 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-button disabled:opacity-50"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default OnboardingGoals;
