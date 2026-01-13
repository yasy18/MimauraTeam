import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Mimi from '../Mimi';
import { cn } from '@/lib/utils';

interface HormoneRhythmProps {
  onBack: () => void;
  onSelectPhase: (phase: 'follicular' | 'ovulation' | 'luteal' | 'menstrual') => void;
}

const phases = [
  {
    id: 'follicular' as const,
    title: 'Follicular Phase',
    description: 'Fresh energy, rising motivation',
    bgClass: 'bg-gradient-to-br from-blue-400 to-blue-500',
    emoji: '💙',
  },
  {
    id: 'ovulation' as const,
    title: 'Ovulation Phase',
    description: 'Peak energy, social & vibrant',
    bgClass: 'bg-gradient-to-br from-amber-400 to-orange-400',
    emoji: '🧡',
  },
  {
    id: 'luteal' as const,
    title: 'Luteal Phase',
    description: 'Winding down, turning inward',
    bgClass: 'bg-gradient-to-br from-pink-400 to-rose-400',
    emoji: '💗',
  },
  {
    id: 'menstrual' as const,
    title: 'Menstrual Phase',
    description: 'Rest, reflect, restore',
    bgClass: 'bg-gradient-to-br from-rose-300 to-pink-300',
    emoji: '🌸',
  },
];

const HormoneRhythm: React.FC<HormoneRhythmProps> = ({ onBack, onSelectPhase }) => {
  return (
    <div className="min-h-screen mimaura-gradient-bg pb-24">
      {/* Header */}
      <div className="flex items-center p-4 pt-12">
        <button onClick={onBack} className="p-2 bg-card rounded-full shadow-soft">
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="flex-1 text-center font-semibold text-foreground pr-10">
          Mood & Hormone Rhythm
        </h1>
      </div>

      {/* Intro */}
      <div className="px-6 py-4 flex items-center gap-4">
        <Mimi variant="calm" size="md" />
        <p className="text-muted-foreground text-sm flex-1">
          Your cycle has four phases. Tap to explore how each one affects your mood and energy.
        </p>
      </div>

      {/* Phase Cards */}
      <div className="px-4 space-y-3">
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => onSelectPhase(phase.id)}
            className={cn(
              "w-full rounded-3xl p-5 text-left transition-all hover:scale-[1.01] active:scale-[0.99]",
              phase.bgClass
            )}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {phase.title}
                </h3>
                <p className="text-white/80 text-sm">{phase.description}</p>
              </div>
              <span className="text-3xl">{phase.emoji}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HormoneRhythm;
