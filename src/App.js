import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import YogaPage from './Components/YogaPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yogapage/:optionId" element={<YogaPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
