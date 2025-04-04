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

  return (
    <div className="pt-24 pb-16 sacred-bg">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-[#1a2642]">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-[#1a2642] mb-4">
            <span>The 7 Forbidden Principles</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Ancient wisdom rediscovered for modern transformation. This comprehensive audio program will guide you through the principles of success mastery.
          </p>

          <CourseProgress progress={progress} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AudioPlayer
              currentChapter={currentChapter}
              onChapterChange={setCurrentChapter}
              onProgressUpdate={setProgress}
            />
          </div>
          
          <div className="lg:col-span-1">
            <ChapterList 
              currentChapter={currentChapter}
              onChapterSelect={setCurrentChapter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;