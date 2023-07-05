import videoBg from 'assets/videoBg.mp4';
import { useRef } from 'react';

function VideoBG() {
  const videoRef = useRef<HTMLVideoElement>();

  const setPlayBack = () => {
    // @ts-ignore
    videoRef.current.playbackRate = 1.5;
  };

  return (
    <video
      // @ts-ignore
      ref={videoRef}
      onCanPlay={() => setPlayBack()}
      autoPlay
      muted
      loop
      className="fixed"
    >
      <source src={videoBg} type="video/mp4" />
    </video>
  );
}

export default VideoBG;
