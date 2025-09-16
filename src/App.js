import React from 'react';
import './App.css';

import NavigationMenu from './components/NavigationMenu';
import PopularSuggestions from './components/PopularSuggestions';
import FeaturedArticles from './components/FeaturedArticles';
import GoodReads from './components/GoodReads';

function App() {
  return (
    <div className="app-container">
      <NavigationMenu />
      <PopularSuggestions />
      <FeaturedArticles />
      <GoodReads />
    </div>
  );
}

export default App;