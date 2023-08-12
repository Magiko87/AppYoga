//---> Componente YogaContent
import React from 'react';
import { Link } from 'react-router-dom';

import Timer from './Timer'; 
import ControlButtons from './ControlButtons';  

function YogaContent({ pageStyle, formattedTime, isPlaying, handlePlayPauseClick, handleAdjustTime, audioRef, selectedOption }) {
  return (
    <div style={pageStyle} className="yoga-page">
     
      
      <audio ref={audioRef} src={selectedOption.music} loop></audio>
      <Link to="/" className="home-button">Home</Link>
    </div>
  );
}

export default YogaContent;
