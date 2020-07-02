import React, { useEffect } from 'react'
import DrawFlowers from '../d3/DrawFlowers'

export default function Viz() {

	const data = require('../data/y2018.json')

	useEffect(() => {
		DrawFlowers(data)
	})

	return (
		<div className="viz">
		</div>
	)
}