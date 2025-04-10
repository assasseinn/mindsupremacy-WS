import { useState } from 'react';
import { Link } from 'wouter';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AudioPlayer from '@/components/course/AudioPlayer';
import CourseProgress from '@/components/course/CourseProgress';
import ChapterList from '@/components/course/ChapterList';

const CoursePage = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Sample chapter data
  const chapters = [
    { id: 1, title: "Introduction", duration: "12:45", completed: true },
    { id: 2, title: "The 7 Forbidden Principles", duration: "24:30", completed: false },
    // ... more chapters
  ];

  return (
    <div className="pt-24 pb-16 sacred-bg">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Course Header */}
        <div className="mb-12 text-center">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-[#1a2642]">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-[#1a2642] mb-4">
            Success Mastery: The Complete Audio Program
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ancient wisdom rediscovered for modern transformation
          </p>
          
          <CourseProgress progress={progress} totalDuration="3h 30m" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Audio Player Section */}
          <div className="lg:col-span-2 space-y-8">
            <AudioPlayer
              currentChapter={currentChapter}
              onChapterChange={setCurrentChapter}
              onProgressUpdate={setProgress}
              isPlaying={isPlaying}
              onPlayPause={setIsPlaying}
            />
            
            {/* Transcript Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Chapter Transcript</h3>
              {/* Transcript content would go here */}
            </div>
          </div>
          
          {/* Chapter List Section */}
          <div className="lg:col-span-1">
            <ChapterList 
              chapters={chapters}
              currentChapter={currentChapter}
              onChapterSelect={setCurrentChapter}
            />
          </div>
        </div>
      </div>
      
      {/* Floating Mini Player (would be conditionally rendered) */}
      {isPlaying && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-2">
          {/* Mini player controls */}
        </div>
      )}
    </div>
  );
};

export default CoursePage;