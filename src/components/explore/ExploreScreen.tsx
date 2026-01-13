import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Mimi from '../Mimi';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';

interface ExploreScreenProps {
  userName: string;
  onBack: () => void;
}

type ThemeMode = 'light' | 'dark' | 'low-stim';

const ExploreScreen: React.FC<ExploreScreenProps> = ({ userName, onBack }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>('low-stim');
  const [cycleMode, setCycleMode] = useState(true);

  const features = [
    {
      id: 'hormone',
      title: 'Mode & Hormone Rhythm',
      description: 'Understand how your emotions and energy shift daily',
      icon: '〰️',
    },
    {
      id: 'pattern',
      title: 'Pattern Nudge',
      description: 'Gentle suggestions tailored to your rhythm',
      icon: '🌸',
    },
    {
      id: 'food',
      title: 'Cultural Food Engine',
      description: 'Discover comforting foods based on mood & culture',
      icon: '🧠',
    },
    {
      id: 'impact',
      title: 'Global Impact',
      description: '1,307 logs = 1.3 trees planted - your rhythm helps the world',
      icon: '🌍',
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
        <h1 className="text-2xl font-bold text-foreground">
          Hey {userName}, how are you feeling today?
        </h1>
      </div>

      {/* Theme Toggle */}
      <div className="px-6 mb-4">
        <div className="flex items-center justify-center gap-2 p-1 bg-card rounded-full shadow-soft">
          {(['light', 'dark', 'low-stim'] as ThemeMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setThemeMode(mode)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all capitalize",
                themeMode === mode
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {mode === 'low-stim' ? 'Low-Stim' : mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Cycle Mode Toggle */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-center gap-3">
          <span className="text-foreground font-medium">Cycle mode:</span>
          <Switch checked={cycleMode} onCheckedChange={setCycleMode} />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="px-4 grid grid-cols-2 gap-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-card rounded-3xl p-5 shadow-card hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-bold text-foreground leading-tight">
                {feature.title}
              </h3>
              <span className="text-2xl">{feature.icon}</span>
            </div>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreScreen;
