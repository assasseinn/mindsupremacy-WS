import React from 'react';

interface CourseProgressProps {
  progress: number;
  totalDuration?: string;
  currentChapter?: number;
  chapterCount?: number;
}

const CourseProgress = ({ progress, totalDuration }: CourseProgressProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-[#d4af37] h-2.5 rounded-full" 
        style={{ width: `${progress}%` }}
      />
      {totalDuration && (
        <div className="text-sm text-gray-500 mt-2">
          Total Duration: {totalDuration}
        </div>
      )}
    </div>
  );
};

export default CourseProgress;
