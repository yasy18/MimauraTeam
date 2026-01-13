import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";

import WaveIcon from "@/assets/wave.png";
import LeafIcon from "@/assets/leaf.png";
import GlobalIcon from "@/assets/Global.png";
import WaveMimi from "@/assets/waveMimi.png";

type ThemeMode = "light" | "dark" | "low-stim";

const FEATURES = [
  {
    id: "hormone",
    title: "Mode & Hormone Rhythm",
    description: "Understand how your emotions and energy shift daily",
    icon: WaveIcon,
  },
  {
    id: "pattern",
    title: "Pattern Nudge",
    description: "Gentle suggestions tailored to your rhythm",
    icon: LeafIcon,
  },
  {
    id: "food",
    title: "Cultural Food Engine",
    description: "Discover comforting foods based on mood & culture",
    icon: "🧠",
  },
  {
    id: "impact",
    title: "Global Impact",
    description: "1,307 logs = 1.3 trees planted",
    icon: GlobalIcon,
  },
];

interface ExploreScreenProps {
  userName: string;
}

const ExploreRhythm = ({ userName }: ExploreScreenProps) => {
  const navigate = useNavigate();
  const [themeMode, setThemeMode] = useState<ThemeMode>("low-stim");
  const [cycleMode, setCycleMode] = useState(true);

  return (
    <main className="min-h-screen pb-28 px-4 bg-[#F5F6FF]">
      {/* Header */}
      <header className="flex items-center pt-12 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full bg-white shadow-soft"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </header>

      {/* Greeting Card */}
      <section className="relative max-w-md mx-auto mb-8">
        <div className="relative rounded-3xl p-6 bg-white shadow-soft overflow-hidden">
          {/* Mimi mascot */}
          <img
            src={WaveMimi}
            alt="Mimi waving"
            className="absolute top-0 right-4 h-28 object-contain pointer-events-none"
            draggable={false}
          />

          <h1 className="text-xl font-bold text-foreground pr-20">
            Hey {userName}, how are you feeling today?
          </h1>

          {/* Theme Pills */}
          <div className="flex gap-2 mt-5 bg-[#F0F1FF] p-1 rounded-full w-fit">
            {(["light", "dark", "low-stim"] as ThemeMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setThemeMode(mode)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition",
                  themeMode === mode
                    ? "bg-primary text-white"
                    : "text-muted-foreground"
                )}
              >
                {mode === "low-stim"
                  ? "Low-Stim"
                  : mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cycle Mode */}
      <section className="mb-8 flex justify-center">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Cycle mode</span>
          <Switch checked={cycleMode} onCheckedChange={setCycleMode} />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {FEATURES.map((feature) => (
          <button
            key={feature.id}
            className="rounded-3xl p-5 bg-white shadow-soft text-left flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              {typeof feature.icon === "string" ? (
                <span className="text-xl">{feature.icon}</span>
              ) : (
                <img
                  src={feature.icon}
                  alt=""
                  className="w-7 h-7 object-contain"
                />
              )}
              <h3 className="text-sm font-bold leading-snug">
                {feature.title}
              </h3>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </button>
        ))}
      </section>
    </main>
  );
};

export default ExploreRhythm;
