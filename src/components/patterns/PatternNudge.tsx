import React from 'react';
import Mimi from '../Mimi';
import { Button } from '@/components/ui/button';

interface PatternNudgeProps {
  onExpandHistory: () => void;
}

interface TimelinePoint {
  date: string;
  label: string;
  active: boolean;
}

const PatternNudge: React.FC<PatternNudgeProps> = ({ onExpandHistory }) => {
  const timelinePoints: TimelinePoint[] = [
    { date: 'Today', label: 'Energy', active: true },
    { date: 'Apr 22', label: 'Period pain', active: false },
    { date: 'Apr 20', label: 'Stress', active: false },
    { date: 'Apr 18', label: 'Emotions', active: false },
  ];

  return (
    <div className="min-h-screen mimaura-gradient-bg px-6 pt-12 pb-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Pattern Nudge</h1>
      </div>

      {/* Timeline */}
      <div className="bg-card rounded-3xl p-6 shadow-card mb-6">
        <div className="flex items-center justify-between mb-6">
          {timelinePoints.map((point, index) => (
            <div key={point.date} className="flex flex-col items-center">
              <span className="text-xs text-muted-foreground mb-2">{point.date}</span>
              <div className="relative">
                <div
                  className={`w-4 h-4 rounded-full ${
                    point.active
                      ? 'bg-primary'
                      : index === 1
                      ? 'bg-rose-300'
                      : 'bg-secondary border-2 border-muted'
                  }`}
                />
                {index < timelinePoints.length - 1 && (
                  <div className="absolute top-1/2 left-full w-12 h-0.5 bg-muted -translate-y-1/2" />
                )}
              </div>
              <span className="text-xs text-muted-foreground mt-2 text-center max-w-16">
                {point.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Nudge Card */}
      <div className="bg-card rounded-3xl p-6 shadow-card">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <p className="text-lg text-foreground leading-relaxed">
              Try iron-rich foods and take time to rest today
              <span className="text-primary ml-1">🌿</span>
            </p>
          </div>
          <Mimi variant="calm" size="md" />
        </div>
      </div>

      {/* Expand History Button */}
      <div className="mt-6">
        <Button
          variant="outline"
          onClick={onExpandHistory}
          className="w-full py-4 rounded-xl border-border text-foreground hover:bg-secondary"
        >
          Expand history
        </Button>
      </div>

      {/* Branding */}
      <div className="mt-8 text-center">
        <span className="text-xl font-light text-muted-foreground italic">Mimaura</span>
      </div>
    </div>
  );
};

export default PatternNudge;
