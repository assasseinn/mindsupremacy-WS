import React from 'react';

interface CourseProgressProps {
  progress: number;
}

const CourseProgress = ({ progress }: CourseProgressProps) => {
  return (
    <div>
      <h2>Course Progress</h2>
      <p>{progress}% completed</p>
    </div>
  );
};

export default CourseProgress;
