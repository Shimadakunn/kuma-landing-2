import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
  width?: number;
  height?: number;
}

export const Youtube: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="rounded-xl mx-auto aspect-video w-[95%] sm:w-[80%]"
    ></iframe>
  );
};