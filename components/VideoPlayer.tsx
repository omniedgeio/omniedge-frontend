import ReactPlayer from 'react-player';
import React from 'react';


interface SourceProps {
  src: string
  type: string
}
interface Videoinfo {
  link: string | string[] | SourceProps[] | MediaStream;
}
const VideoPlayer: React.FC<Videoinfo> = ({ link }) => {
  return (
      <ReactPlayer
        url={link}
        width="100%"
      />
  )
}

export default VideoPlayer
