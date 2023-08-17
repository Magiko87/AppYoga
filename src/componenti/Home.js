//---> Import di stili CSS e risorse come immagini
import "../style.css"
import logo from "../asset/img/g1Y8.gif";
import img from "../asset/img/img.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Loader from "./Loader";

//---> Componente App ...
function App() {
  //---> Stato per il caricamento
  const [isLoading, setIsLoading] = useState(false); // Stato per il caricamento

  return (
    <div className="App">
      {/* --->Intestazione dell'app con logo e pulsanti */}
      <header className="App-header">
        <div className="logo-container">
          {/* --->Immagine logo */}
          <img src={img} className="App-img" alt="img" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="button-container">
          {/*---> Pulsanti per le diverse opzioni di stress */}
          <Link to={`/yogapage/1`} onClick={() => setIsLoading(true)}>
            <button className="very-soft-button">Very Soft Stress</button>
          </Link>

          <Link to={`/yogapage/2`} onClick={() => setIsLoading(true)}>
            <button className="soft-button">Soft Stress</button>
          </Link>
          <Link to={`/yogapage/3`} onClick={() => setIsLoading(true)}>
            <button className="normal-button">Normal Stress</button>
          </Link>
          <Link to={`/yogapage/4`} onClick={() => setIsLoading(true)}>
            <button className="hard-button">Hard Stress</button>
          </Link>
          <Link to={`/yogapage/5`} onClick={() => setIsLoading(true)}>
            <button className="very-hard-button ">Very Hard Stress</button>
          </Link>
        </div>
      </header>
      {isLoading && <Loader />}
      <footer className="footer">
        <p> &copy; Daniele Camodeca-®Copyright </p>
      </footer>
    </div>
  );
}
export default App;
