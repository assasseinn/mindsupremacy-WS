import React from 'react';

interface ChapterListProps {
  currentChapter: number;
  onChapterSelect: (chapter: number) => void;
}

const ChapterList = ({ currentChapter, onChapterSelect }: ChapterListProps) => {
  return (
    <div>
      <h2>Chapter List</h2>
      <p>Current Chapter: {currentChapter}</p>
    </div>
  );
};

export default ChapterList;
