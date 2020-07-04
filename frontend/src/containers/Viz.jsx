import React, { useEffect, useState } from 'react'
import DrawFlowers from '../d3/DrawFlowers'
import { selectAll } from 'd3'

export default function Viz() {

	const initialData = require(`../data/d2010.json`)
	const [data, setData] = useState(initialData)

	useEffect(() => {
		DrawFlowers(data)
	}, [data])
	
	const handleDecadeChange = (e) => {
		let year = e.target.value
		let newData = require(`../data/d${year}.json`)
		setData(newData)
	}
	

	return (
		<div className="col">
			<h3>Select Decade</h3>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="1920">1920s</button>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="1930">1930s</button>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="1940">1940s</button>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="1950">1950s</button>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="1960">1960s</button>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="1970">1970s</button>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="1980">1980s</button>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="1990">1990s</button>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="2000">2000s</button>
			<button onClick={selectAll('svg').remove(), handleDecadeChange} value="2010">2010s</button>
			<div className="viz"></div>
		</div>
	)
}