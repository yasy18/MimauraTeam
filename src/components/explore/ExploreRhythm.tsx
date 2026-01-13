import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Mimi from '../Mimi';
import { cn } from '@/lib/utils';

interface ExploreRhythmProps {
  userName: string;
  onBack: () => void;
  onSelectFeature: (feature: string) => void;
}

const ExploreRhythm: React.FC<ExploreRhythmProps> = ({ userName, onBack, onSelectFeature }) => {
  const features = [
    {
      id: 'hormone',
      title: 'Mood & Hormone Rhythm',
      description: 'Understand how your emotions and energy shift with your cycle',
      icon: '〰️',
      bgClass: 'bg-gradient-to-br from-primary/20 to-accent/30',
    },
    {
      id: 'pattern',
      title: 'Pattern Nudge',
      description: 'Gentle suggestions tailored to your rhythm',
      icon: '🌸',
      bgClass: 'bg-gradient-to-br from-rose-100 to-pink-100',
    },
    {
      id: 'food',
      title: 'Cultural Food Engine',
      description: 'Discover comforting foods based on mood & culture',
      icon: '🍲',
      bgClass: 'bg-gradient-to-br from-amber-100 to-orange-100',
    },
    {
      id: 'history',
      title: 'Pattern History',
      description: 'Reflect on past patterns and insights',
      icon: '📖',
      bgClass: 'bg-gradient-to-br from-indigo-100 to-purple-100',
    },
  ];

  return (
    <div className="min-h-screen mimaura-gradient-bg pb-24">
      {/* Header */}
      <div className="flex items-center p-4 pt-12">
        <button onClick={onBack} className="p-2 bg-card rounded-full shadow-soft">
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Mimi greeting */}
      <div className="flex justify-center mb-4">
        <Mimi variant="waving" size="lg" />
      </div>

      {/* Greeting */}
      <div className="px-6 text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Explore Your Rhythm
        </h1>
        <p className="text-muted-foreground">
          Discover insights about your cycle, mood, and energy
        </p>
      </div>

      {/* Feature Cards */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {features.map((feature) => (
          <button
            key={feature.id}
            onClick={() => onSelectFeature(feature.id)}
            className={cn(
              "rounded-3xl p-5 text-left transition-all hover:scale-[1.02] active:scale-[0.98]",
              feature.bgClass
            )}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{feature.icon}</span>
            </div>
            <h3 className="text-base font-bold text-foreground leading-tight mb-1">
              {feature.title}
            </h3>
            <p className="text-xs text-muted-foreground">{feature.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExploreRhythm;
