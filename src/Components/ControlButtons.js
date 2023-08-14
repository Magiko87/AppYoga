//====>Componente ControlButtons


//---> Import delle librerie React e FontAwesome
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

//---> Componente per i pulsanti di controllo
function ControlButtons({ isPlaying, handleAdjustTime, handlePlayPauseClick }) {
  return (
      <>
      {/* --->Pulsanti per regolare il tempo */} 
        <div className='control'>
          <button className='btn-rem' onClick={() => handleAdjustTime(-60)} disabled={isPlaying}> -</button>
          <button className='btn-add' onClick={() => handleAdjustTime(60)} disabled={isPlaying}> + </button>
        </div>
        {/*  --->Pulsante Play/Pause */}
        <div>
          <button className="btn-play-pause" onClick={handlePlayPauseClick}>
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
        </div>
      </>
    );
    
}

export default ControlButtons;
