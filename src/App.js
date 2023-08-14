//====>Componente App

//---> Import delle librerie React e componenti React Router
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import YogaPage from './Components/YogaPage';
import Loader from './Components/Loader';

//---> Componente principale dell'app
function App() {
   //---> Stato per gestire il caricamento
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
       {/* --->Configurazione del router */}
      <Router>
        <Routes>
             {/*---> Definizione delle rotte */}
          <Route
            path="/"

            // --->Passa la funzione setIsLoading come prop al componente Home
            element={<Home setIsLoading={setIsLoading} />}
          />
          <Route path="/yogapage/:optionId" element={<YogaPage />} />
        </Routes>
      </Router>
      
      {/*---> Mostra il componente Loader se isLoading è true */}
      {isLoading && <Loader />} 
    </div>
  );
}

export default App;