//---> Import di stili CSS e risorse come immagini
import "../App.css"
import logo from "../Assets/Img/g1Y8.gif"
import img from "../Assets/Img/img.png";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

//---> Componente App
function App() {
  const [isLoading, setIsLoading] = useState(false); // Stato per il caricamento

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={img} className="App-img" alt="img" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="button-container">
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
      <footer className="footer">
      <p> &copy; Daniele Camodeca-®Copyright </p>
    </footer>
    {isLoading && <div className="loader">Loading...</div>} 
    </div>
  );
}
export default App;
