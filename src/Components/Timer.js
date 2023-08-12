import React from 'react';

function Timer({ remainingTime }) {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return <h1 className='big-counter'>{formattedTime}</h1>;
}

export default Timer;
