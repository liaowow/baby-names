import React from 'react';
import Title from './containers/Title'
import Legend from './containers/Legend'
import Viz from './containers/Viz'

function App() {
  return (
    <div>
      <div className="row">
        <Title />
      </div>
      <div className="row">
        <Legend />
      </div>
      <div className="row">
        <Viz />
      </div>
    </div>
  );
}

export default App;
