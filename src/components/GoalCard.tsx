import React from 'react';
import { Moon, Zap, Coffee, Leaf, Bed, Brain, Heart, Apple } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GoalCardProps {
  id: string;
  label: string;
  icon: string;
  selected: boolean;
  onToggle: (id: string) => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  'cycle': Moon,
  'mood': Zap,
  'digestion': Coffee,
  'lifestyle': Leaf,
  'sleep': Bed,
  'mental': Brain,
  'fertility': Heart,
  'nutrition': Apple,
};

const GoalCard: React.FC<GoalCardProps> = ({ id, label, icon, selected, onToggle }) => {
  const Icon = iconMap[icon] || Moon;

  return (
    <button
      onClick={() => onToggle(id)}
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-4 rounded-2xl transition-all duration-300",
        "min-h-[100px] w-full",
        selected
          ? "bg-gradient-to-br from-primary via-primary to-mimi-purple-dark text-primary-foreground shadow-button"
          : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center",
        selected ? "bg-primary-foreground/20" : "bg-background/50"
      )}>
        <Icon className={cn(
          "w-5 h-5",
          selected ? "text-primary-foreground" : "text-foreground/70"
        )} />
      </div>
      <span className="text-sm font-medium text-center leading-tight">{label}</span>
    </button>
  );
};

export default GoalCard;
