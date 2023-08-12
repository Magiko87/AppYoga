import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause,faPlus,faWindowMinimize } from '@fortawesome/free-solid-svg-icons';

import LakeImage from "../Assest/Img/lake.jpeg";
import SeaImage from "../Assest/Img/sea.jpeg";
import ForestImage from "../Assest/Img/forest.jpeg";
import RainImage from "../Assest/Img/rain.jpeg";
import FireImage from "../Assest/Img/fire.jpeg";
import LakeSong from "../Assest/Songs/lake.mp3";
import SeaSong from "../Assest/Songs/sea.mp3";
import ForestSong from "../Assest/Songs/forest.mp3";
import RainSong from "../Assest/Songs/rain.mp3";
import FireSong from "../Assest/Songs/fire.mp3";

const yogaOptions = [
  { id: 1, image: LakeImage, music: LakeSong, duration: 600 },
  { id: 2, image: SeaImage, music: SeaSong, duration: 1200 },
  { id: 3, image: ForestImage, music: ForestSong, duration: 1800 },
  { id: 4, image: RainImage, music: RainSong, duration: 2400 },
  { id: 5, image: FireImage, music: FireSong, duration: 3000 },
];

function YogaPage() {
  const { optionId } = useParams();
  const selectedOption = yogaOptions.find(option => option.id === parseInt(optionId));
 
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(selectedOption.duration);
  const audioRef = useRef(null);

  const handlePlayPauseClick = () => {
    if (!isPlaying) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };


  const handleAdjustTime = (amount) => {
    if (!isPlaying) {
      setRemainingTime(prevTime => {
        const newTime = Math.max(prevTime + amount, 0);
        audioRef.current.currentTime = 0;
        return newTime;
      });
    }
  };
  

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 1) {
            audioRef.current.pause();
            setIsPlaying(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  const formattedTime = `${Math.floor(remainingTime / 60)}:${remainingTime % 60 < 10 ? '0' : ''}${remainingTime % 60}`;

  const pageStyle = {
    background: `url('${selectedOption.image}') no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={pageStyle} className="yoga-page">
      <h1 className='big-counter'>{formattedTime}</h1>
      <div className='control'>
        <button className='btn-rem' onClick={() => handleAdjustTime(-60)} disabled={isPlaying}> - </button>
        <button className='btn-add' onClick={() => handleAdjustTime(60)} disabled={isPlaying}> + </button>
      </div>
      <button className="btn-play-pause" onClick={handlePlayPauseClick}>
        {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
      </button>
      <audio ref={audioRef} src={selectedOption.music} loop></audio>
      <Link to="/" className="home-button">Home</Link>
    </div>
  );
}
export default YogaPage;
