import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/* Mascots */
import FolliCool from "@/assets/follicool.png";
import OvuLovin from "@/assets/ovul.png";
import Luetally from "@/assets/luetally.png";
import Menstrual from "@/assets/menstrual.png";

type PhaseKey = "follicular" | "ovulation" | "luteal" | "menstrual";

const PHASES: Record<PhaseKey, any> = {
  follicular: {
    title: "Follicular Phase",
    slogan: "I’m folli-cool!",
    accent: "text-blue-600",
    softBg: "bg-blue-50",
    button: "bg-blue-500",
    phaseBg: "bg-blue-400",
    mascot: FolliCool,
    insights: ["Cool as a cucumber", "Feeling pumped"],
  },
  ovulation: {
    title: "Ovulation Phase",
    slogan: "Ovu-lovin’ it",
    accent: "text-red-500",
    softBg: "bg-red-50",
    button: "bg-red-400",
    phaseBg: "bg-red-400",
    mascot: OvuLovin,
    insights: ["Bright and cherry", "You glow, girl"],
  },
  luteal: {
    title: "Luteal Phase",
    slogan: "You luteally got this",
    accent: "text-yellow-600",
    softBg: "bg-yellow-50",
    button: "bg-yellow-400",
    phaseBg: "bg-yellow-400",
    mascot: Luetally,
    insights: ["Bright and cherry", "You glow, girl"],
  },
  menstrual: {
    title: "Menstrual Phase",
    slogan: "Menstrual-ly chillin",
    accent: "text-pink-500",
    softBg: "bg-pink-50",
    button: "bg-pink-400",
    phaseBg: "bg-pink-400",
    mascot: Menstrual,
    insights: ["Rest is productive", "Be gentle with yourself"],
  },
};

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const DAYS_IN_MONTH = Array.from({ length: 30 }, (_, i) => i + 1);

const PhaseCalendar = () => {
  const [phase, setPhase] = useState<PhaseKey>("follicular");
  const data = PHASES[phase];

  return (
    <main className={cn("min-h-screen pb-28", data.softBg)}>
      {/* Header */}
      <header className="flex items-center px-4 pt-12 pb-4">
        <button className="p-2 rounded-full bg-white shadow">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="flex-1 text-center font-semibold pr-10">
          {data.title}
        </h1>
      </header>

      {/* Phase pills */}
      <section className="flex gap-2 px-4 mb-4">
        {(Object.keys(PHASES) as PhaseKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setPhase(key)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-semibold transition",
              phase === key
                ? cn("text-white", PHASES[key].phaseBg)
                : "bg-white text-muted-foreground shadow"
            )}
          >
            {PHASES[key].title.split(" ")[0]}
          </button>
        ))}
      </section>

      {/* Phase banner */}
      <section className="px-4 mb-6">
        <div className="relative h-[117px] rounded-3xl px-6 flex items-center bg-white shadow overflow-hidden">
          <h2 className={cn("text-2xl font-bold", data.accent)}>
            {data.slogan}
          </h2>
          <img
            src={data.mascot}
            alt={data.title}
            className="absolute right-4 bottom-0 h-[130px]"
          />
        </div>
      </section>

      {/* Insights */}
      <section className="px-4 mb-4">
        <h3 className="font-bold mb-3">Today’s insights</h3>
        {data.insights.map((text: string, i: number) => (
          <div key={i} className="flex gap-2 text-sm mb-1">
            {i === 0 ? "😊" : "✨"} {text}
          </div>
        ))}
      </section>

      {/* Quick Log */}
      <section className="px-4 mb-6">
        <Button className={cn("w-full py-5 rounded-2xl text-white", data.button)}>
          Quick Log
        </Button>
      </section>

      {/* Calendar */}
      <section className="px-4">
        <div className="bg-white rounded-3xl p-5 shadow">
          <h3 className="font-bold mb-1">{data.title} Calendar</h3>
          <h2 className={cn("text-2xl font-bold mb-4", data.accent)}>
            November 2025
          </h2>

          <div className="grid grid-cols-7 text-xs mb-2">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-muted-foreground">
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {DAYS_IN_MONTH.map((day) => (
              <div
                key={day}
                className={cn(
                  "h-9 rounded-xl flex items-center justify-center text-sm font-semibold text-white",
                  data.phaseBg
                )}
              >
                {day}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <span
              className={cn(
                "px-4 py-1 rounded-full text-xs font-semibold text-white",
                data.phaseBg
              )}
            >
              {data.title}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhaseCalendar;
