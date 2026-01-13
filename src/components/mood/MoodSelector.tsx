import React, { useState } from 'react';
import Mimi from '../Mimi';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MoodSelectorProps {
  onSelect: (mood: string, subMoods: string[]) => void;
}

interface MoodOption {
  id: string;
  label: string;
  mimiVariant: 'sad' | 'neutral' | 'happy';
  subMoods: string[];
}

const moodOptions: MoodOption[] = [
  {
    id: 'sad',
    label: 'Sad',
    mimiVariant: 'sad',
    subMoods: ['Drained', 'Overwhelmed'],
  },
  {
    id: 'neutral',
    label: 'Neutral',
    mimiVariant: 'neutral',
    subMoods: ['Grounded', 'Clear', 'Meh', 'Inspired'],
  },
  {
    id: 'happy',
    label: 'Happy',
    mimiVariant: 'happy',
    subMoods: ['Energized', 'Motivated', 'Social', 'Inspired'],
  },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ onSelect }) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedSubMoods, setSelectedSubMoods] = useState<string[]>([]);

  const toggleSubMood = (subMood: string) => {
    setSelectedSubMoods(prev =>
      prev.includes(subMood)
        ? prev.filter(m => m !== subMood)
        : [...prev, subMood]
    );
  };

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    setSelectedSubMoods([]);
  };

  return (
    <div className="min-h-screen mimaura-gradient-bg flex flex-col px-6 pt-12 pb-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground">How is your mood?</h1>
        <p className="text-muted-foreground mt-1">Choose the type of mood (optional)</p>
      </div>

      {/* Mood Options */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Sad and Neutral cards */}
        {moodOptions.slice(0, 2).map((mood) => (
          <div
            key={mood.id}
            onClick={() => handleMoodSelect(mood.id)}
            className={cn(
              "bg-card rounded-3xl p-5 shadow-card cursor-pointer transition-all",
              selectedMood === mood.id && "ring-2 ring-primary"
            )}
          >
            <div className="flex justify-center mb-3">
              <Mimi variant={mood.mimiVariant} size="lg" />
            </div>
            <h3 className="text-xl font-bold text-foreground text-center mb-3">{mood.label}</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {mood.subMoods.map((subMood) => (
                <button
                  key={subMood}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMoodSelect(mood.id);
                    toggleSubMood(subMood);
                  }}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm transition-all",
                    selectedSubMoods.includes(subMood)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {subMood}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Happy card - full width */}
      <div
        onClick={() => handleMoodSelect('happy')}
        className={cn(
          "bg-card rounded-3xl p-5 shadow-card cursor-pointer transition-all mb-6",
          selectedMood === 'happy' && "ring-2 ring-primary"
        )}
      >
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-3">Happy</h3>
            <div className="flex flex-wrap gap-2">
              {moodOptions[2].subMoods.map((subMood) => (
                <button
                  key={subMood}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMoodSelect('happy');
                    toggleSubMood(subMood);
                  }}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm transition-all",
                    selectedSubMoods.includes(subMood)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {subMood}
                </button>
              ))}
            </div>
          </div>
          <Mimi variant="happy" size="lg" />
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-auto">
        <Button
          onClick={() => selectedMood && onSelect(selectedMood, selectedSubMoods)}
          disabled={!selectedMood}
          className="w-full py-6 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-button disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default MoodSelector;
