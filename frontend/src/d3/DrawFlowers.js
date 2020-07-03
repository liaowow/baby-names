import _ from 'lodash'
import * as d3 from 'd3'


export default function DrawFlowers(data) {
  // draw petal
  const petalPath = 'M21.06,23.63s-4.67,4.2-11.39.16a12.58,12.58,0,0,1-5.47-7l3.41-1.18L7.05,12a12.19,12.19,0,0,1,8.39,1.27C19.4,15.64,21.59,20.06,21.06,23.63Z'
  const petalSize = 100

  // set up svg and connect data
  const svg = d3.select('.viz')
                  .append('svg')
                    .attr('width', '100%')
                    .attr('height', petalSize * 5)
  const countMinMax = d3.extent(data, d => d.count)
  const numPetalScale = d3.scaleQuantize().domain(countMinMax).range([6, 8, 10, 12])

  // convert each dataset into flower scale
  const flowersData = _.map(data, d => {
    const numPetals = numPetalScale(d.count)
    const name = d.name
    return {
      name,
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
    .attr('transform', (d, i) => `translate(${(i % 5) * petalSize + 150}, ${Math.floor(i / 5) * petalSize + 50})`)

  flowers.selectAll('path')
    .data(d => d.petals).enter().append('path')
    .attr('d', d => d.petalPath)
    .attr('transform', d => `rotate(${d.angle})`)
    .attr('fill', 'salmon')

  flowers.append('text')
    .text(d => d.name)
    .attr('x', -20)
    .attr('y', petalSize - 50)

  return svg

}