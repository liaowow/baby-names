import React from 'react';
import Title from './containers/Title'
import Viz from './containers/Viz'

function App() {
  return (
    <div>
      <div className="row">
        <Title />
      </div>
      <div className="row">
        <Viz />
      </div>
    </div>
  );
}

export default App;
