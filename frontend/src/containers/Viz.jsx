import React, { useEffect } from 'react'
import DrawFlowers from '../d3/DrawFlowers'

export default function Viz() {

  let data = require(`../data/d1990.json`)

	useEffect(() => {
		DrawFlowers(data)
	}, [])

  const handleYear = (e) => {
    let year = e.target.value
		data = require(`../data/d${year}.json`)
		console.log(data)
  }

	return (
		<div className="col">
			<h3>Select Decade</h3>
			<button onClick={handleYear} value="1990">1990s</button>
			<button onClick={handleYear} value="2000">2000s</button>
			<button onClick={handleYear} value="2010">2010~2018</button>
			<div className="viz"></div>
		</div>
	)
}