import "../App.css"
import logo from "../Assest/Img/g1Y8.gif"
import img from "../Assest/Img/img.png";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={img} className="App-img" alt="img" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="button-container">
          <Link to={`/yogapage/1`}>
            <button className="very-soft-button">Very Soft Stress</button>
          </Link>

           <Link to={`/yogapage/2`}>
          <button className="soft-button">Soft Stress</button>
          </Link>
          <Link to={`/yogapage/3`}>
          <button className="normal-button">Normal Stress</button>
          </Link>
          <Link to={`/yogapage/4`}>
          <button className="hard-button">Hard Stress</button>
          </Link>
          <Link to={`/yogapage/5`}>
          <button className="very-hard-button">Very Hard Stress</button>
        </Link>
          
        </div>
      </header>
      <footer className="footer">
      <p> &copy; Daniele Camodeca-®Copyright </p>
    </footer>
    </div>
  );
}

export default App;
