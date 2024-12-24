import React from 'react';
import { Mp4 } from './styles';
// import { video } from '/public/video.mp4';

interface VideoProps {
  src: string;
  loop?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
}

const Video: React.FC<VideoProps> = ({
  src,
  loop,
  controls,
  autoPlay,
}) => {
  const props = {
    loop: loop,
    autoPlay: autoPlay,
    muted: autoPlay,
    preload: 'auto',
    playsInline: loop,
    controls: controls,
  };
  return (
    <Mp4 {...props}>
      <source src={src} type="video/mp4" />
    </Mp4>
  );
};

export default Video;
