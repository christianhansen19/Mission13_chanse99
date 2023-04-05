// import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TopBanner from './Home';
import MovieList from './movies/Movies';
import Podcast from './Podcast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path=""
            element={<TopBanner saying="Joel Hilton's Movie Collection" />}
          />
          <Route path="podcast" element={<Podcast />} />
          <Route path="movies" element={<MovieList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
