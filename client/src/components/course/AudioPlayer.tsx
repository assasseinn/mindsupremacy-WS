import React from 'react';
import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AudioPlayerProps {
  currentChapter: number;
  onChapterChange: (chapter: number) => void;
  onProgressUpdate: (progress: number) => void;
  isPlaying: boolean;
  onPlayPause: (playing: boolean) => void;
  chapters?: Array<{
    id: number;
    title: string;
    duration: string;
    timestamp: number;
  }>;
}

const AudioPlayer = ({ currentChapter, onChapterChange, onProgressUpdate, isPlaying, onPlayPause }: AudioPlayerProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Now Playing</h3>
        <div className="flex gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => onPlayPause(!isPlaying)}
          >
            {isPlaying ? 
              <Pause className="h-5 w-5" /> : 
              <Play className="h-5 w-5" />
            }
          </Button>
          
          <Button variant="ghost" size="icon" onClick={() => onChapterChange(currentChapter - 1)}>
            <SkipBack className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" onClick={() => onChapterChange(currentChapter + 1)}>
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-[#d4af37] h-2 rounded-full" 
          style={{ width: `${onProgressUpdate}%` }}
        />
      </div>
      
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>0:00</span>
        <span>-3:45</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
