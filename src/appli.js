//====>Componente App

//---> Import delle librerie React e componenti React Router.
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import YogaPage from "./componenti/YogaPage";
import Loader from "./componenti/Loader";
import Home from './componenti/Home';
import classNames from 'classnames';

//---> Componente principale dell'app.
function App() {
  //---> Stato per gestire il caricamento
  const [isLoading, setIsLoading] = useState(false);

  const appClasses = classNames('App', { 'loading': isLoading });

  return (
    <div className={appClasses}>

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
