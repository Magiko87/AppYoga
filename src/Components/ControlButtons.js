import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


function ControlButtons({ isPlaying, handleAdjustTime, handlePlayPauseClick }) {
  return (
      <>
        <div className='control'>
          <button className='btn-rem' onClick={() => handleAdjustTime(-60)} disabled={isPlaying}> -</button>
          <button className='btn-add' onClick={() => handleAdjustTime(60)} disabled={isPlaying}> + </button>
        </div>
        <div>
          <button className="btn-play-pause" onClick={handlePlayPauseClick}>
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
        </div>
      </>
    );
    
}

export default ControlButtons;