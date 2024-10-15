import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import TvShows from './pages/TvShows';

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
         <Route path="/tv" element={<TvShows/>} />
        {/* <Route path="/movies" element={} />
        <Route path="/gentres" element={} />
        <Route path="/watchLater" element={} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
