import React from 'react';

interface ChapterListProps {
  chapters: Array<{
    id: number;
    title: string;
    duration: string;
    completed: boolean;
  }>;
  currentChapter: number;
  onChapterSelect: (chapter: number) => void;
}

const ChapterList = ({ chapters, currentChapter, onChapterSelect }: ChapterListProps) => {
  return (
    <div>
      <h2>Chapter List</h2>
      <p>Current Chapter: {currentChapter}</p>
    </div>
  );
};

export default ChapterList;
