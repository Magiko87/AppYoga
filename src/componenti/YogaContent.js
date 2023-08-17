//====> Componente YogaContent

//--->Import
import React from 'react';
import { Link } from 'react-router-dom';


function YogaContent({ pageStyle, handlePlayPauseClick, setCounterFinished,setRemainingTime, audioRef, selectedOption }) {
  const handleRestartClick = () => {
    handlePlayPauseClick(); // Chiama il gestore di eventi esistente per interrompere la musica se è in riproduzione
    setCounterFinished(false); // Reimposta il contatore come non terminato
    setRemainingTime(selectedOption.duration); // Reimposta il tempo rimanente al valore iniziale
  };
  return (
    <div style={pageStyle} className="yoga-page">
      
      
       <>
      <audio ref={audioRef} src={selectedOption.music} loop></audio>
      <Link to="/" className="home-button">Home</Link>
      
      </>
      
    </div>
  );
}

export default YogaContent;