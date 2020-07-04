import _ from 'lodash'
import * as d3 from 'd3'

export default function DrawFlowers(data) {
  // draw petal
  const petalPath = 'M21.06,23.63s-4.67,4.2-11.39.16a12.58,12.58,0,0,1-5.47-7l3.41-1.18L7.05,12a12.19,12.19,0,0,1,8.39,1.27C19.4,15.64,21.59,20.06,21.06,23.63Z'
  const petalSize = 100
  // set up color scale
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  const petalColors = d3.scaleOrdinal().range(['#E44F5D', '#F6B06E', '#EFCB64', '#F8765C', '#E5D35F', '#1DDCCA'])
  petalColors.domain(vowels)

  // set up svg and connect data
  const svg = d3.select('.viz')
                  .append('svg')
                    .attr('width', 800)
                    .attr('height', petalSize * 5)
  const countMinMax = d3.extent(data, d => d.count)
  const numPetalScale = d3.scaleQuantize().domain(countMinMax).range([7, 10, 12, 15, 20])

  // convert each dataset into flower scale
  const flowersData = _.map(data, d => {
    const numPetals = numPetalScale(d.count)
    const name = d.name
    const vowelGenres = name.split('').filter(char => vowels.includes(char.toLowerCase()))
    return {
      name,
      vowelGenres,
      petals: _.times(numPetals, i => {
        return {
          angle: 360 * i / numPetals,
          petalPath
        }
      })
    }
  })

  // sprinkle petals on the DOM!
  const flowers = d3.select('svg')
    .selectAll('g')
    .data(flowersData).enter().append('g')
    .attr('transform', (d, i) => `translate(${(i % 5) * petalSize + 200}, ${Math.floor(i / 5) * petalSize + 80})`)

  flowers.selectAll('path')
    .data(d => d.petals).enter().append('path')
    .attr('d', d => d.petalPath)
    .attr('transform', d => `rotate(${d.angle})`)
    .attr('fill', 'none')
    .attr('stroke', 'salmon')

  flowers.selectAll('circle')
    .data(function(d) {
      // if there's only one vowel, center the circle
      const cy = d.vowelGenres.length === 1 ? 0 : petalSize / 20
      return _.map(d.vowelGenres, function(genre, i) {
        return {
          cy: cy,
          angle: (360 / d.vowelGenres.length) * i,
          fill: petalColors(genre)
        }
      })
    }).enter().append('circle')
    .attr('cy', function(d) { return d.cy })
    .attr('r', petalSize / 5)
    .attr('fill', function(d) { return d.fill })
    .attr('opacity', '50%')
    .attr('transform', function(d, i) {
      return `translate(${petalSize / 2 - 50}, ${Math.floor(i / 5) * petalSize})rotate(${d.angle})`
    })

  flowers.append('text')
    .text(d => d.name)
    .attr('text-anchor', 'middle')
    .attr('y', petalSize - 50)

  return svg
}