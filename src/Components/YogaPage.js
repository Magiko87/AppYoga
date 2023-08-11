import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
  const [showTimer, setShowTimer] = useState(false);
  const audioRef = useRef(null);

  const [seconds, setSeconds] = useState(selectedOption.duration);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleAudioTimeUpdate);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", handleAudioTimeUpdate);
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
        setShowTimer(true);

        const timer = setInterval(() => {
          setSeconds(prevSeconds => Math.max(prevSeconds - 1, 0));
        }, 1000);

        return () => {
          clearInterval(timer);
        };
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        setShowTimer(false);
      }
    }
  }, [isPlaying]);

  const handleAudioTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setSeconds(Math.max(selectedOption.duration - Math.floor(currentTime), 0));
    }
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUp = () => {
    setShowTimer(false);
  };

  const handleAddMinute = () => {
    if (!isPlaying) {
      setSeconds(seconds + 60);
    }
  };

  const handleRemoveMinute = () => {
    if (!isPlaying && seconds >= 60) {
      setSeconds(seconds - 60);
    }
  };

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
      <div className="big-counter">
        {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
      </div>

      <div className="counter">
        <button className="btn-rem" onClick={handleRemoveMinute} disabled={isPlaying}>-</button>
        <button className="btn-add" onClick={handleAddMinute} disabled={isPlaying}>+</button>
      </div>

      <div className="play-pause-button">
        <button className='btn-play-pause' onClick={handlePlayPauseClick}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      
      <div className="audio-player">
        <audio ref={audioRef} src={selectedOption.music}></audio>
      </div>
     
      <div className="home">
        <Link to={`/`}>
          <button className="home-button">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default YogaPage;
