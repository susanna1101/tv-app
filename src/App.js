import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import TvShows from './pages/TvShows';
import Movies from './pages/Movies';
import WatchLater from './pages/WatchLater';
import Gentres from './pages/Gentres';

function App() {

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
         <Route path="/tv" element={<TvShows/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/gentres" element={<Gentres />} />
        <Route path="/watchLater" element={<WatchLater />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
