import React, { useState } from 'react';
import SplashScreen from '@/components/onboarding/SplashScreen';
import WelcomeScreen from '@/components/onboarding/WelcomeScreen';
import IntroContext from '@/components/onboarding/IntroContext';
import OnboardingGoals from '@/components/onboarding/OnboardingGoals';
import HealthContext from '@/components/onboarding/HealthContext';
import OnboardingTracking from '@/components/onboarding/OnboardingTracking';
import OnboardingComplete from '@/components/onboarding/OnboardingComplete';
import HomeScreen from '@/components/home/HomeScreen';
import MoodSelector from '@/components/mood/MoodSelector';
import PatternNudge from '@/components/patterns/PatternNudge';
import FoodEngine from '@/components/food/FoodEngine';
import ExploreRhythm from '@/components/explore/ExploreRhythm';
import HormoneRhythm from '@/components/rhythm/HormoneRhythm';
import PhaseCalendar from '@/components/calendar/PhaseCalendar';
import BottomNav from '@/components/BottomNav';

type Screen = 
  | 'splash'
  | 'welcome'
  | 'intro'
  | 'onboarding-goals'
  | 'health-context'
  | 'onboarding-tracking'
  | 'onboarding-complete'
  | 'home'
  | 'mood'
  | 'food'
  | 'pattern'
  | 'explore'
  | 'hormone-rhythm'
  | 'calendar'
  | 'history';

const Index: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [userName] = useState('Anna');
  const [calendarPhase, setCalendarPhase] = useState<'follicular' | 'ovulation' | 'luteal' | 'menstrual'>('follicular');

  // Handle navigation
  const handleTabChange = (tab: string) => {
    switch (tab) {
      case 'home':
        setCurrentScreen('home');
        break;
      case 'mood':
        setCurrentScreen('mood');
        break;
      case 'food':
        setCurrentScreen('food');
        break;
      case 'history':
        setCurrentScreen('pattern');
        break;
      case 'more':
        setCurrentScreen('explore');
        break;
    }
  };

  // Handle explore feature selection
  const handleExploreFeature = (feature: string) => {
    switch (feature) {
      case 'hormone':
        setCurrentScreen('hormone-rhythm');
        break;
      case 'pattern':
        setCurrentScreen('pattern');
        break;
      case 'food':
        setCurrentScreen('food');
        break;
      case 'history':
        setCurrentScreen('pattern');
        break;
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={() => setCurrentScreen('welcome')} />;
      
      case 'welcome':
        return <WelcomeScreen onNext={() => setCurrentScreen('intro')} />;
      
      case 'intro':
        return (
          <IntroContext
            onNext={() => setCurrentScreen('onboarding-goals')}
            onBack={() => setCurrentScreen('welcome')}
          />
        );
      
      case 'onboarding-goals':
        return (
          <OnboardingGoals
            onNext={(goals) => {
              console.log('Selected goals:', goals);
              setCurrentScreen('health-context');
            }}
            onBack={() => setCurrentScreen('intro')}
          />
        );
      
      case 'health-context':
        return (
          <HealthContext
            onNext={(conditions) => {
              console.log('Health conditions:', conditions);
              setCurrentScreen('onboarding-tracking');
            }}
            onBack={() => setCurrentScreen('onboarding-goals')}
          />
        );
      
      case 'onboarding-tracking':
        return (
          <OnboardingTracking
            onNext={(items) => {
              console.log('Selected items:', items);
              setCurrentScreen('onboarding-complete');
            }}
            onBack={() => setCurrentScreen('health-context')}
          />
        );
      
      case 'onboarding-complete':
        return <OnboardingComplete onComplete={() => setCurrentScreen('home')} />;
      
      case 'home':
        return (
          <>
            <HomeScreen userName={userName} />
            <BottomNav activeTab="home" onTabChange={handleTabChange} />
          </>
        );
      
      case 'mood':
        return (
          <>
            <MoodSelector
              onSelect={(mood, subMoods) => {
                console.log('Selected mood:', mood, subMoods);
                setCurrentScreen('home');
              }}
            />
            <BottomNav activeTab="mood" onTabChange={handleTabChange} />
          </>
        );
      
      case 'food':
        return (
          <>
            <FoodEngine />
            <BottomNav activeTab="food" onTabChange={handleTabChange} />
          </>
        );
      
      case 'pattern':
        return (
          <>
            <PatternNudge onExpandHistory={() => setCurrentScreen('explore')} />
            <BottomNav activeTab="history" onTabChange={handleTabChange} />
          </>
        );
      
      case 'explore':
        return (
          <>
            <ExploreRhythm
              userName={userName}
              onBack={() => setCurrentScreen('home')}
              onSelectFeature={handleExploreFeature}
            />
            <BottomNav activeTab="more" onTabChange={handleTabChange} />
          </>
        );
      
      case 'hormone-rhythm':
        return (
          <>
            <HormoneRhythm
              onBack={() => setCurrentScreen('explore')}
              onSelectPhase={(phase) => {
                setCalendarPhase(phase);
                setCurrentScreen('calendar');
              }}
            />
            <BottomNav activeTab="more" onTabChange={handleTabChange} />
          </>
        );
      
      case 'calendar':
        return (
          <>
            <PhaseCalendar
              phase={calendarPhase}
              onBack={() => setCurrentScreen('hormone-rhythm')}
            />
            <BottomNav activeTab="more" onTabChange={handleTabChange} />
          </>
        );
      
      default:
        return <HomeScreen userName={userName} />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto bg-background overflow-x-hidden">
      {renderScreen()}
    </div>
  );
};

export default Index;
