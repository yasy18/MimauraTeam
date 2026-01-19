import React, { useState } from "react";
import { Icons } from "../../constants/icon";
import { LOGO } from "../../constants/logo";

export default function Step1({ navigate }: { navigate: (step: string) => void }) {
  const [selectedGoals, setSelectedGoals] = useState<number[]>([]);

  const toggleGoal = (index: number) => {
    setSelectedGoals(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-indigo-200 flex flex-col items-center p-6">
      <h1 className="text-3xl font-medium text-black mb-6">
        What would you like Mimaura to help with
      </h1>

      <div className="flex items-center justify-between w-full max-w-md mb-6">
        <div className="px-4 py-1 rounded-full bg-white/40 text-sm">
          ✓ {selectedGoals.length}/8 chosen goals
        </div>
        <img src={LOGO} alt="logo" className="w-24 h-24" />
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-md w-full">
        {[
          "Cycle patterns",
          "Mood & energy",
          "Digestion",
          "Lifestyle",
          "Sleep quality",
          "Mental clarity",
          "Fertility awareness",
          "Nutrition & cravings",
        ].map((text, i) => {
          const selected = selectedGoals.includes(i);
          return (
            <button
              key={i}
              onClick={() => toggleGoal(i)}
              className={`rounded-2xl h-24 flex flex-col items-center justify-center backdrop-blur-md transition
                ${selected ? "bg-purple-600 text-white" : "bg-white/40 text-black"}`}
            >
              <img
                src={selected ? Icons[`selectedIcon${i + 1}`] : Icons[`icon${i + 1}`]}
                className="mb-2"
              />
              <span className="text-sm">{text}</span>
            </button>
          );
        })}
      </div>

      <button
        disabled={selectedGoals.length === 0}
        onClick={() => navigate("Step2")}
        className="mt-10 w-full max-w-md py-4 rounded-full bg-purple-600 text-white text-xl disabled:opacity-40"
      >
        Continue
      </button>
    </div>
  );
}
