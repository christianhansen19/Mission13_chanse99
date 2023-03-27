import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './Home';
import MovieList from './Movies';
import Podcast from './Podcast';

function App() {
  return (
    <div className="App">
      <TopBanner saying="Joel Hilton's Movie Collection" />
      <Podcast />
      <MovieList />
    </div>
  );
}

export default App;
