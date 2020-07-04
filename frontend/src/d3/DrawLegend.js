import * as d3 from 'd3'

export default function DrawLegend() {
  // set up color scale
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  const petalColors = d3.scaleOrdinal().range(['#E5D35F', '#F6B06E', '#EFCB64', '#F8765C', '#E44F5D', '#85DA6D'])
  petalColors.domain(vowels)

  // set up svg
  const svg = d3.select('.legend')
    .append('svg')
      .attr('width', '100%')

  // draw circles on the DOM!
  svg.selectAll('circle')
     .data(vowels).enter().append('circle')
     .attr('cx', 30)
     .attr('cy', 30)
     .attr('r', 20)
     .attr('fill', function(d) { return petalColors(d) })
     .attr('opacity', '50%')

  return svg
}