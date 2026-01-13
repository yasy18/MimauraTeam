import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, ChevronUp, Check } from 'lucide-react';
import Mimi from '../Mimi';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface OnboardingTrackingProps {
  onNext: (selectedItems: Record<string, string[]>) => void;
  onBack: () => void;
}

interface TrackingCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  items: string[];
}

const trackingCategories: TrackingCategory[] = [
  {
    id: 'physical',
    title: 'Physical Symptoms',
    description: 'Track how your body feels throughout your cycle',
    icon: '❤️',
    color: 'text-rose-500',
    items: ['Cramps', 'Headaches', 'Bloating', 'Skin Changes', 'Breast Tenderness'],
  },
  {
    id: 'emotional',
    title: 'Emotional Wellbeing',
    description: 'Monitor your mental and emotional patterns',
    icon: '💜',
    color: 'text-purple-500',
    items: ['Mood Swings', 'Anxiety', 'Irritability', 'Sadness', 'Joy'],
  },
  {
    id: 'energy',
    title: 'Energy & Activity',
    description: 'Track your vitality and daily rhythms',
    icon: '🌙',
    color: 'text-indigo-500',
    items: ['Energy Level', 'Exercise', 'Fatigue', 'Motivation', 'Focus'],
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Factors',
    description: 'Track habits and environmental influences',
    icon: '🌊',
    color: 'text-cyan-500',
    items: ['Sleep Quality', 'Stress', 'Diet', 'Hydration', 'Social Activity'],
  },
];

const OnboardingTracking: React.FC<OnboardingTrackingProps> = ({ onNext, onBack }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const toggleItem = (categoryId: string, item: string) => {
    setSelectedItems(prev => {
      const categoryItems = prev[categoryId] || [];
      if (categoryItems.includes(item)) {
        return {
          ...prev,
          [categoryId]: categoryItems.filter(i => i !== item),
        };
      } else {
        return {
          ...prev,
          [categoryId]: [...categoryItems, item],
        };
      }
    });
  };

  const getTotalSelected = () => {
    return Object.values(selectedItems).reduce((acc, items) => acc + items.length, 0);
  };

  const getCategorySelectedCount = (categoryId: string) => {
    return (selectedItems[categoryId] || []).length;
  };

  return (
    <div className="min-h-screen mimaura-gradient-bg flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <button onClick={onBack} className="p-2 -ml-2">
          <ChevronLeft className="w-6 h-6 text-foreground/70" />
        </button>
        <button className="text-primary font-medium">Skip</button>
      </div>

      {/* Progress indicator */}
      <div className="px-6 mb-4">
        <div className="h-1 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-5/6 bg-primary rounded-full transition-all duration-300" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-32 overflow-y-auto">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground mb-1">
              Choose what to track
            </h1>
            <p className="text-sm text-muted-foreground mb-3">
              Select the symptoms and patterns you'd like to monitor. You can always adjust these later.
            </p>
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-accent rounded-full">
              <span className="text-sm text-accent-foreground">
                ✓ {getTotalSelected()} chosen items
              </span>
            </div>
          </div>
          <Mimi variant="thinking" size="sm" className="ml-2" />
        </div>

        {/* Categories */}
        <div className="space-y-3">
          {trackingCategories.map((category) => (
            <div key={category.id} className="bg-card rounded-2xl overflow-hidden shadow-soft">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between p-4"
              >
                <div className="flex items-start gap-3">
                  <span className={cn("text-lg", category.color)}>{category.icon}</span>
                  <div className="text-left">
                    <h3 className="font-semibold text-foreground">{category.title}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {getCategorySelectedCount(category.id)}/5
                  </span>
                  {expandedCategory === category.id ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {expandedCategory === category.id && (
                <div className="px-4 pb-4 space-y-2">
                  {category.items.map((item) => {
                    const isSelected = (selectedItems[category.id] || []).includes(item);
                    return (
                      <button
                        key={item}
                        onClick={() => toggleItem(category.id, item)}
                        className={cn(
                          "w-full py-3 px-4 rounded-xl text-sm font-medium transition-all",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        )}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mt-4 space-y-2">
          <Button
            variant="outline"
            className="w-full py-4 rounded-xl border-primary text-primary"
          >
            Select Recommended
          </Button>
          <Button
            variant="ghost"
            className="w-full py-4 rounded-xl text-muted-foreground"
          >
            Clear All
          </Button>
        </div>
      </div>

      {/* Continue Button */}
      <div className="fixed bottom-0 left-0 right-0 p-6 pb-8 bg-gradient-to-t from-background/80 to-transparent">
        <Button
          onClick={() => onNext(selectedItems)}
          className="w-full py-6 rounded-full text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default OnboardingTracking;
