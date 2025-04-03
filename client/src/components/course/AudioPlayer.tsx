import React from 'react';

interface AudioPlayerProps {
  currentChapter: number;
  onChapterChange: (chapter: number) => void;
  onProgressUpdate: (progress: number) => void;
}

const AudioPlayer = ({ currentChapter, onChapterChange, onProgressUpdate }: AudioPlayerProps) => {
  return (
    <div>
      <h2>Audio Player</h2>
      <p>Current Chapter: {currentChapter}</p>
    </div>
  );
};

export default AudioPlayer;
