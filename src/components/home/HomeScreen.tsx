import React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Assets */
import MimiCalm from "@/assets/moodMimi.png";
import MimiMagic from "@/assets/magicMimi.png";
import BatteryMed from "@/assets/batteryMed.png";
import SleepIcon from "@/assets/sleep.png";

interface HomeScreenProps {
  userName: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ userName }) => {
  return (
    <main className="min-h-screen bg-[#F4F2FF] pb-28">
      {/* Header */}
      <section className="pt-14 px-6 text-center">
        <h1 className="text-xl font-semibold text-[#2B2B2B]">
          Hello, <span className="font-bold">{userName}!</span>
        </h1>
        <p className="text-sm text-[#6B6B6B] mt-1">
          Here is your body today.
        </p>
      </section>

      {/* Cards */}
      <section className="mt-6 px-4 max-w-md mx-auto space-y-4">
        {/* Rhythm + Mood */}
        <div className="grid grid-cols-2 gap-3">
          {/* Rhythm */}
          <div className="bg-white rounded-3xl p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-[#2B2B2B]">Rhythm</h3>
            <p className="text-xs text-[#7B6EF6]">in sync</p>

            <div className="mt-4 flex justify-center">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    stroke="#E8E6FF"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    stroke="#7B6EF6"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${0.84 * 264} 264`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#2B2B2B]">
                    84%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mood */}
          <div className="bg-white rounded-3xl p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-[#2B2B2B]">Mood</h3>
            <p className="text-xs text-[#7B6EF6]">Calm + Tender</p>

            <div className="mt-3 flex justify-center">
              <img
                src={MimiCalm}
                alt="Calm Mimi"
                className="h-20 object-contain"
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Sleep */}
        <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-[#2B2B2B]">Sleep</h3>
            <p className="text-xs text-[#7B6EF6]">Good</p>
            <p className="text-xl font-bold text-[#2B2B2B] mt-1">
              5h 40min
            </p>
          </div>
          <img
            src={SleepIcon}
            alt="Sleep"
            className="h-10 w-10"
            draggable={false}
          />
        </div>

        {/* Energy + Magic Maybe */}
        <div className="grid grid-cols-2 gap-3">
          {/* Energy */}
          <div className="bg-white rounded-3xl p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-[#2B2B2B]">Energy</h3>
            <p className="text-xs text-[#6B6B6B]">Medium</p>

            <div className="mt-4 flex justify-center">
              <img
                src={BatteryMed}
                alt="Energy"
                className="h-14 object-contain"
                draggable={false}
              />
            </div>
          </div>

          {/* Magic Maybe */}
          <div className="bg-white rounded-3xl p-4 shadow-sm flex flex-col">
            <h3 className="text-sm font-semibold text-[#2B2B2B]">
              Magic Maybe
            </h3>
            <p className="text-xs text-[#6B6B6B] mt-1">
              A tiny step is a real step.
            </p>

            <div className="flex-1 flex flex-col items-center justify-center">
              <img
                src={MimiMagic}
                alt="Magic Mimi"
                className="h-16 mb-3"
                draggable={false}
              />

              <Button className="rounded-full bg-[#7B6EF6] hover:bg-[#6A5CE7] px-5 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />
                Generate
              </Button>
            </div>
          </div>
        </div>

        {/* Today's Support */}
        <div className="bg-white rounded-3xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-[#2B2B2B]">
            Today’s support
          </h3>
          <p className="text-xs text-[#6B6B6B] mb-3">
            Slow pace and helpful comforts
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-sm text-[#2B2B2B]">
            <div>🌬 Slow breath</div>
            <div>☕ Warm food</div>
            <div>💜 Self-comfort</div>
            <div>🚶 Gentle move</div>
          </div>
        </div>

        {/* CTA */}
        <Button className="w-full rounded-full bg-[#9B7EF8] hover:bg-[#8A6FF0] py-5 text-base font-semibold">
          Explore Your Rhythm
        </Button>
      </section>
    </main>
  );
};

export default HomeScreen;
