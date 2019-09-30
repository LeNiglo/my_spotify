import { useState, useEffect, useRef } from 'react';
import '../../styles/elements/player.scss';

const Player = props => {
  const [queue, setQueue] = useState([]);
  const [currentTime, setCurrentTime] = useState(null);
  const [duration, setDuration] = useState(null);
  const [loop, setLoop] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current.addEventListener("timeupdate", e => {
      setCurrentTime(e.target.currentTime);
      setDuration(e.target.duration);
    });

    window.addTracksToQueue = tracks => {
      playerRef.current.src = tracks[0].mp3;
      playerRef.current.load();
      playerRef.current.play();
    };
  }, []);

  const handlePlay = () => {
    playerRef.current.play();
  }

  const handlePause = () => {
    playerRef.current.pause();
  }

  const handleVolumePlus = () => {
    if (playerRef.current.volume <= 0.9) {
      playerRef.current.volume += 0.1;
    }
  }

  const handleVolumeMinus = () => {
    if (playerRef.current.volume >= 0.1) {
      playerRef.current.volume -= 0.1;
    }
  }

  const handlePrev = () => {

  }

  const handleNext = () => {

  }

  // {queue.map(track => (
  //   <source src={track.mp3} type='audio/mpeg' />
  // ))}

  return (
    <div className='player'>
      <audio ref={playerRef} autoPlay id='player'></audio>
      <div className='player-controls'>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleNext}>Next</button>

        <button onClick={handleVolumeMinus}>Vol -</button>
        <button onClick={handleVolumePlus}>Vol +</button>
      </div>
      <div className='player-timeline'>
        <span>{currentTime} / {duration}</span>
      </div>
    </div>
  );
};

export default Player;
