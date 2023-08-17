//====>Component YogaPage.

//--->Import!
import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Timer from './Timer';
import ControlButtons from './ControlButtons';
import YogaContent from './YogaContent';
import Loader from './Loader';

import LakeImage from "../asset/img/lake.jpeg";
import SeaImage from "../asset/img/sea.jpeg";
import ForestImage from "../asset/img/forest.jpeg";
import RainImage from "../asset/img/rain.jpeg";
import FireImage from "../asset/img/fire.jpeg";

import LakeSong from "../asset/songs/lake.mp3";
import SeaSong from "../asset/songs/sea.mp3";
import ForestSong from "../asset/songs/forest.mp3";
import RainSong from "../asset/songs/rain.mp3";
import FireSong from "../asset/songs/fire.mp3";

//---> Definizione delle opzioni di Yoga
const yogaOptions = [
  { id: 1, image: LakeImage, music: LakeSong, duration: 600 },
  { id: 2, image: SeaImage, music: SeaSong, duration: 1200 },
  { id: 3, image: ForestImage, music: ForestSong, duration: 1800 },
  { id: 4, image: RainImage, music: RainSong, duration: 2400 },
  { id: 5, image: FireImage, music: FireSong, duration: 3000 },
];


function YogaPage() {

    //---> Stati per il controllo del contatore e della riproduzione
  const [restartCounter, setRestartCounter] = useState(false);
  const [counterFinished, setCounterFinished] = useState(false);

   //---> Ottiene l'ID dell'opzione dalla route
  const { optionId } = useParams();

  //---> Trova l'opzione selezionata dall'array di opzioni di yoga
  const selectedOption = yogaOptions.find(option => option.id === parseInt(optionId));

   //---> Stati per la gestione della riproduzione e del tempo rimanente
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(selectedOption.duration);
  const audioRef = useRef(null);

  //---> Stati per il caricamento delle immagini e la durata iniziale
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [initialDuration, ] = useState(selectedOption.duration);

    //---> Effetto per il caricamento delle immagini

  useEffect(() => {
    const imagePromises = yogaOptions.map(option => {
      const image = new Image();
      image.src = option.image;
      return new Promise(resolve => {
        image.onload = () => resolve();
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setIsLoading(false);
        setImagesLoaded(true);
      })
      .catch(error => {
        console.error("Error loading images:", error);
      });
  }, []);

    //---> Calcolo dei minuti e dei secondi per il display del timer
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${isNaN(minutes) ? '00' : (minutes < 10 ? '0' : '') + minutes}:${isNaN(seconds) ? '00' : (seconds < 10 ? '0' : '') + seconds}`;

  //---> Effetto per il conteggio del tempo e la gestione della riproduzione
  useEffect(() => {
    if (isPlaying && remainingTime > 0) {
      const timerInterval = setInterval(() => {
        setRemainingTime(prevTime => Math.max(prevTime - 1, 0));
      }, 1000);
  
      return () => {
        clearInterval(timerInterval);
      };
    } else if (remainingTime === 0) {
      audioRef.current.pause();
      setIsPlaying(false);
      if (restartCounter) {
        setCounterFinished(false);
        setRemainingTime(initialDuration);
        setRestartCounter(false);
      } else {
        setCounterFinished(true);
      }
    }
  }, [isPlaying, remainingTime, initialDuration,restartCounter]);
 
 //--->Gestore del clic su Play/Pausa
  const handlePlayPauseClick = () => {
    if (!isPlaying) {
      if (counterFinished) {
        setRestartCounter(true);
      } else {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
    setIsPlaying(!isPlaying);
  };
  
    //---> Gestore dell'aggiustamento del tempo
  const handleAdjustTime = (amount) => {
    if (!isPlaying) {
      setRemainingTime(prevTime => {
        const newTime = Math.max(prevTime + amount, 0);
        return newTime;
      });
    }
  };

    //---> Stile della pagina
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
      {isLoading || !imagesLoaded ? (
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
            handleAdjustTime={handleAdjustTime}
            audioRef={audioRef} 
            selectedOption={selectedOption}
            counterFinished={counterFinished}
            setCounterFinished={setCounterFinished}
            setRemainingTime={setRemainingTime}
/>
        </>
      )}
    </div>
  );
}

export default YogaPage;