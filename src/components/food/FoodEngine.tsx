import React from 'react';
import { Search, ChevronRight, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import meal from '@/assets/meal.png';

const FoodEngine: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center bg-[#F6F3FA]">
      {/* Phone frame */}
      <div className="relative w-full max-w-md overflow-hidden">

        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3E9FF] via-[#F8F4FF] to-[#F6F3FA]" />

        {/* Content */}
        <div className="relative px-6 pt-8 pb-28">

          {/* Back */}
          <button className="p-2 mb-4 rounded-full hover:bg-white/40 transition">
            <ArrowLeft className="w-5 h-5 text-[#3F3356]" />
          </button>

          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-semibold text-[#3F3356]">
              Food support today
            </h1>
            <p className="text-sm text-[#6D5F8F] mt-2 leading-snug">
              Based on your energy, digestion,<br />
              and hormone signals
            </p>
          </div>

          {/* Mascot glow */}
          <div className="relative flex justify-center mb-4">
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-b from-purple-200/40 to-transparent blur-3xl" />
            <img
              src={meal}
              alt="Mimaura food mascot"
              className="relative w-44 z-10"
            />
          </div>

          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8E80AD]" />
            <Input
              placeholder="Search foods or meals you already eat"
              className="
                pl-12 py-6
                rounded-full
                bg-white
                border-none
                shadow-[0_8px_30px_rgba(120,80,200,0.12)]
                text-sm
              "
            />
          </div>

          <p className="text-xs text-center text-[#8E80AD] mb-6">
            We’ll adapt them to your body today
          </p>

          {/* Unified soft card */}
          <div className="bg-white/85 backdrop-blur rounded-3xl p-5 shadow-[0_12px_40px_rgba(120,80,200,0.12)] space-y-5">

            {/* Why */}
            <div>
              <h2 className="text-lg font-semibold text-[#3F3356] mb-1">
                Why these foods?
              </h2>
              <p className="text-sm text-[#6D5F8F] leading-relaxed">
                Your recent logs show lower energy and digestive sensitivity.
                Warm, slow-release meals can help today.
              </p>
            </div>

            {/* Choices */}
            <div>
              <h3 className="text-sm font-medium text-[#6D5F8F] mb-3">
                Choose a familiar food style
              </h3>

              <div className="space-y-2">
                <button className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#F7F3FF] hover:bg-[#EEE6FF] transition">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🫒</span>
                    <div className="text-left">
                      <p className="font-medium text-[#3F3356]">
                        Mediterranean
                      </p>
                      <p className="text-xs text-[#6D5F8F]">
                        Warm, balanced, hormone-supportive
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8E80AD]" />
                </button>

                <button className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#F7F3FF] hover:bg-[#EEE6FF] transition">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🥘</span>
                    <div className="text-left">
                      <p className="font-medium text-[#3F3356]">
                        Indian
                      </p>
                      <p className="text-xs text-[#6D5F8F]">
                        Spiced, grounding, digestion-friendly
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8E80AD]" />
                </button>

                <button className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#EFEAF9] hover:bg-[#E6DDF6] transition">
                  <p className="font-medium text-[#3F3356]">
                    Adapt a meal I already eat
                  </p>
                  <ChevronRight className="w-4 h-4 text-[#8E80AD]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodEngine;
