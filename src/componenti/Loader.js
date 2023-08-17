//====> Componente Loader

import React from 'react';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">

       {/*---> Animazione di caricamento composta da tre cerchi */}
      <div className="flex space-x-2 animate-spin">
        <div className="w-4 h-4 bg-yellow-500 rounded-full" style={{ background: 'linear-gradient(90deg, rgba(249, 60, 0, 1) 0%, rgba(255, 184, 45, 1) 57%, rgba(255, 239, 21, 1) 100%)' }}></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"style={{ background: 'linear-gradient(90deg, rgba(249, 60, 0, 1) 0%, rgba(255, 184, 45, 1) 57%, rgba(255, 239, 21, 1) 100%)' }}></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full"style={{ background: 'linear-gradient(90deg, rgba(249, 60, 0, 1) 0%, rgba(255, 184, 45, 1) 57%, rgba(255, 239, 21, 1) 100%)' }}></div>
      </div>
    </div>
  );
}

export default Loader;



