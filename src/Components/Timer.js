//====> Componente Timer

import React from 'react';

function Timer({ remainingTime }) {

   //---> Calcolo dei minuti rimanenti
  const minutes = Math.floor(remainingTime / 60);

  //---> Calcolo dei secondi rimanenti (ottenuti dal resto della divisione)
  const seconds = remainingTime % 60;

    //---> Formattazione del tempo rimanente in formato MM:SS (aggiungendo uno zero se i secondi sono < 10)

  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

   //---> Restituzione dell'elemento HTML con il tempo formattato
  return <h1 className='big-counter'>{formattedTime}</h1>;
}

export default Timer;
