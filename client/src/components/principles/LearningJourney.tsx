import { useState } from "react";
import { principles } from "@/lib/data";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface LearningJourneyProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const LearningJourney: React.FC<LearningJourneyProps> = ({ activeIndex, setActiveIndex }) => {
  const totalPrinciples = principles.length;
  const progress = ((activeIndex + 1) / totalPrinciples) * 100;
  
  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (activeIndex < totalPrinciples - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto mb-12">
      <div className="mb-4">
        <h3 className="text-[#1a2642] font-semibold mb-2">Your Principles Journey</h3>
        <Progress value={progress} className="h-2" />
      </div>
      
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          className="flex items-center gap-1"
          onClick={handlePrevious}
          disabled={activeIndex === 0}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>
        
        <div className="hidden md:flex justify-center space-x-2">
          {principles.map((_, index) => (
            <button
              key={index}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index === activeIndex
                  ? "bg-[#d4af37] text-[#1a2642] font-semibold"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
        <Button
          variant="outline"
          className="flex items-center gap-1"
          onClick={handleNext}
          disabled={activeIndex === totalPrinciples - 1}
        >
          <span>Next</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default LearningJourney;
