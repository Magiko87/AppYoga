// Componente YogaPage

import React, { useState, useRef, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import Timer from './Timer';
import ControlButtons from './ControlButtons';
import YogaContent from './YogaContent';
import LakeImage from "../Assets/Img/lake.jpeg";
import SeaImage from "../Assets/Img/sea.jpeg";
import ForestImage from "../Assets/Img/forest.jpeg";
import RainImage from "../Assets/Img/rain.jpeg";
import FireImage from "../Assets/Img/fire.jpeg";
import LakeSong from "../Assets/Songs/lake.mp3";
import SeaSong from "../Assets/Songs/sea.mp3";
import ForestSong from "../Assets/Songs/forest.mp3";
import RainSong from "../Assets/Songs/rain.mp3";
import FireSong from "../Assets/Songs/fire.mp3";
import Loader from './Loader';

//---> Elenco delle opzioni yoga
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

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${isNaN(minutes) ? '00' : (minutes < 10 ? '0' : '') + minutes}:${isNaN(seconds) ? '00' : (seconds < 10 ? '0' : '') + seconds}`;
  
//---> Play/Pause
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

//---> Aggiustamento Time

  const handleAdjustTime = (amount) => {
    if (!isPlaying) {
      setRemainingTime(prevTime => {
        const newTime = Math.max(prevTime + amount, 0);
        audioRef.current.currentTime = 0;
        return newTime;
      });
    }
  };
//---> Intervallo

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

//---> Style Page

  const pageStyle = {
    background: `url('${selectedOption.image}') no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };
  //--->Inserimento Componenti
  return (
    <div style={pageStyle} className="yoga-page">
       {remainingTime === null ? (
        <Loader />
      ) : (
        <>
      <Timer remainingTime={remainingTime} />
      <ControlButtons
        isPlaying={isPlaying}
        handlePlayPauseClick={handlePlayPauseClick}
        handleAdjustTime={handleAdjustTime}
      />
      <YogaContent
        pageStyle={pageStyle}
        formattedTime={formattedTime}
        isPlaying={isPlaying}
        handlePlayPauseClick={handlePlayPauseClick}
        audioRef={audioRef}
        selectedOption={selectedOption}
      />
     </>
      )}
    </div>
  );
}
export default YogaPage;