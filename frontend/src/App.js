import React from 'react';
import Title from './containers/Title'
import Gender from './containers/Gender'
import SearchBar from './containers/SearchBar'
import Viz from './containers/Viz'

function App() {
  return (
    <div>
      <div className="row">
        <Title />
      </div>
      <div className="row-two">
        <Gender />
      </div>
      <div className="row">
        <SearchBar />
      </div>
      <div className="row">
        <Viz />
      </div>
    </div>
  );
}

export default App;
