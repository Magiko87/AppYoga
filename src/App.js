//---> Import delle librerie React e componenti React Router
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import YogaPage from './Components/YogaPage';
import Loader from './Components/Loader';

//---> Componente principale dell'app
function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home setIsLoading={setIsLoading} />}
          />
          <Route path="/yogapage/:optionId" element={<YogaPage />} />
        </Routes>
      </Router>
      {isLoading && <Loader />} 
    </div>
  );
}

export default App;
