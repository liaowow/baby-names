import React, { useEffect } from 'react'
import DrawFlowers from '../d3/DrawFlowers'

export default function Viz() {

	const data = require('../data/yob2018.json')

	useEffect(() => {
		data.forEach(d => {
			DrawFlowers(d.name, d.gender, d.count)
		})
	})

	return (
		<div className="col">
			<h3>This is Viz! Where magic happens</h3>
		</div>
	)
}