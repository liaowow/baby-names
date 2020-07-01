import React from 'react';
import Title from './containers/Title'
import Gender from './containers/Gender'
import SearchBar from './containers/SearchBar'
import Viz from './containers/Viz'

function App() {
  return (
    <div>
      <div className="flex-grid">
        <Title />
      </div>
      <div className="flex-grid">
        <Gender />
      </div>
      <div className="flex-grid">
        <SearchBar />
      </div>
      <div className="flex-grid">
        <Viz />
      </div>
    </div>
  );
}

export default App;
