import React from 'react';
import Viz from './Viz'


export default function SearchBar() {
  
  let data = require(`../data/y2018.json`)

  const handleYear = (e) => {
    let year = e.target.value
    data = require(`../data/y${year}.json`)
  }

  return (
    <div className="col">
      <h3>Select Year</h3>
      <button onClick={handleYear} value="2016">2016</button>
      <button onClick={handleYear} value="2017">2017</button>
      <button onClick={handleYear} value="2018">2018</button>
    </div>
  )
}