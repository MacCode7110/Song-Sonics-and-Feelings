import * as d3 from 'd3'
import pcaData from '../data/json_files/pca_matrix.json'

const PCA = () => {
     const svgRef = useRef(null)
     const tooltipRef = useRef(null)

     useEffect(() => {
          if (!pcaData || pcaData.length === 0) return

          const margin = { top: 30, right: 30, bottom: 50, left: 50 }
          const width = 800 - margin.left - margin.right
          const height = 600 - margin.top - margin.bottom

          const svgElement = d3.select(svgRef.current)
          svgElement.selectAll('*').remove()

          const svg = svgElement
               .attr(
                    'viewBox',
                    `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`
               )
               .append('g')
               .attr(
                    'transform',
                    `translate(${margin.left}, ${margin.top})`
               )

          const xMax = d3.max(pcaData, (d) => Math.abs(d.pc1)) * 1.25 || 10
          const yMax = d3.max(pcaData, (d) => Math.abs(d.pc2)) * 1.25 || 10

          const xScale = d3
               .scaleLinear()
               .domain([-xMax, xMax])
               .range([0, width])
          const yScale = d3
               .scaleLinear()
               .domain([-yMax, yMax])
               .range([height, 0])

          const xAxis = d3.axisBottom(xScale).ticks(6)
          const yAxis = d3.axisLeft(yScale).ticks(6)

          const gridLines = svg.append('g').attr('class', 'grid-lines')
          gridLines
               .append('line')
               .attr('x1', xScale(0))
               .attr('x2', xScale(0))
               .attr('y1', 0)
               .attr('y2', height)
               .attr('stroke', '#000000')
               .attr('stroke-width', 2)
          gridLines
               .append('line')
               .attr('x1', 0)
               .attr('x2', width)
               .attr('y1', yScale(0))
               .attr('y2', yScale(0))
               .attr('stroke', '#000000')
               .attr('stroke-width', 2)

          const gX = svg
               .append('g')
               .attr('transform', `translate(0,${height})`)
               .call(xAxis)
          const gY = svg.append('g').call(yAxis)

          svg.append('text')
               .attr('x', width / 2)
               .attr('y', height + 50)
               .attr('text-anchor', 'middle')
               .attr('class', 'has-text-black font-size-7')
               .text('Principal Component 1 (PC1)')
          svg.append('text')
               .attr('transform', 'rotate(-90)')
               .attr('x', -height / 2)
               .attr('y', -50)
               .attr('text-anchor', 'middle')
               .attr('class', 'has-text-black font-size-7')
               .text('Principal Component 2 (PC2)')

          svg.append('defs')
               .append('clipPath')
               .attr('id', 'clip')
               .append('rect')
               .attr('width', width)
               .attr('height', height)

          const gPoints = svg.append('g').attr('clip-path', 'url(#clip)')
          const tooltip = d3.select(tooltipRef.current)

          const dots = gPoints
               .selectAll('circle')
               .data(pcaData)
               .enter()
               .append('circle')
               .attr('cx', (d) => xScale(d.pca_x))
               .attr('cy', (d) => yScale(d.pca_y))
               .attr('r', 7)
               .attr('fill', '#005e40')
               .attr('opacity', 0.8)
               .attr('stroke', '#ffffff')
               .attr('stroke-width', 2)
               .style('cursor', 'pointer')

          dots.on('mouseover', function (event, d) {
               d3.select(this)
                    .transition()
                    .duration(100)
                    .attr('r', 9)
                    .attr('fill', '#3273dc')

               tooltip.style('opacity', 1).html(`
      <div class="p-4" style="min-width: 320px max-width: 400px font-family: sans-serif">
        <div class="mb-3">
          <p class="title is-size-5 has-text-white mb-1" style="line-height: 1.2">
            Song: ${d.song_name}
          </p>
          <p class="subtitle is-size-6 has-text-grey-light mb-2">
            by Artist: ${d.artist_name}
          </p>
          <div class="tags mb-0">
            <span class="tag is-info has-text-weight-bold">Principle Component 1 (PC1): ${d.pca_x}</span>
            <span class="tag is-info has-text-weight-bold">Principle Component 2 (PC2): ${d.pca_y}</span>
            <span class="tag is-info has-text-weight-bold">Primary Feeling: ${d.primary_feeling}</span>
            <span class="tag is-dark border-grey">Russell's Core Affect Quadrant: ${d.core_affect_quadrant}</span>
          </div>
        </div>

        <hr class="has-background-grey" style="margin: 0.75rem 0 height: 1px" />
        <div class="mb-3">
          <p class="has-text-weight-semibold has-text-grey-light is-size-7 is-uppercase tracking-wide mb-2">
            Sonic Features
          </p>
          <div style="display: grid grid-template-columns: 1fr 1fr gap: 6px 16px" class="is-size-7">
            <div><span class="has-text-grey">Scaled BPM:</span> <strong class="has-text-white float-right">${d.scaled_bpm.toFixed(1)}</strong></div>
            <div><span class="has-text-grey">Scaled Danceability:</span> <strong class="has-text-white float-right">${d.scaled_danceability.toFixed(2)}</strong></div>
            <div><span class="has-text-grey">Scaled Onset Rate:</span> <strong class="has-text-white float-right">${d.scaled_onset_rate.toFixed(2)}</strong></div>
            <div><span class="has-text-grey">Scaled Average Loudness:</span> <strong class="has-text-white float-right">${d.scaled_average_loudness.toFixed(2)}</strong></div>
            <div><span class="has-text-grey">Scaled Dynamic Complexity:</span> <strong class="has-text-white float-right">${d.scaled_dynamic_complexity.toFixed(2)}</strong></div>
            <div><span class="has-text-grey">Scaled Spectral Energy:</span> <strong class="has-text-white float-right">${d.scaled_spectral_energy.toFixed(3)}</strong></div>
            <div><span class="has-text-grey">Scaled Chords Changes Rate:</span> <strong class="has-text-white float-right">${d.scaled_chords_changes_rate.toFixed(3)}</strong></div>
            <div><span class="has-text-grey">Scaled Pitch Salience:</span> <strong class="has-text-white float-right">${d.scaled_pitch_salience.toFixed(2)}</strong></div>
            <div><span class="has-text-grey">Scaled Spectral Complexity:</span> <strong class="has-text-white float-right">${d.scaled_spectral_complexity.toFixed(2)}</strong></div>
            <div><span class="has-text-grey">Scaled Spectral Centroid:</span> <strong class="has-text-white float-right">${d.scaled_spectral_centroid.toFixed(2)}</strong></div>
            <div><span class="has-text-grey">Scaled Barkbands Flatness DB:</span> <strong class="has-text-white float-right">${d.scaled_barkbands_flatness_db.toFixed(2)}</strong></div>
            <div><span class="has-text-grey">Scaled Zero Crossing Rate:</span> <strong class="has-text-white float-right">${d.scaled_zero_crossing_rate.toFixed(2)}</strong></div>
          </div>
        </div>
      </div>
    `)
          })

          const zoomBehavior = d3
               .zoom()
               .scaleExtent([0.5, 20])
               .extent([
                    [0, 0],
                    [width, height],
               ])
               .on('zoom', (event) => {
                    const newTransform = event.transform
                    const newXScale = newTransform.rescaleX(xScale)
                    const newYScale = newTransform.rescaleY(yScale)

                    gX.call(xAxis.scale(newXScale))
                    gY.call(yAxis.scale(newYScale))

                    dots.attr('cx', (d) => newXScale(d.pc1)).attr(
                         'cy',
                         (d) => newYScale(d.pc2)
                    )
               })

          svgElement.call(zoomBehavior)
     }, [])

     return (
          <div style={{ position: 'relative', width: '100%' }}>
               <svg
                    ref={svgRef}
                    className="has-background-white"
                    style={{
                         width: '100%',
                         height: 'auto',
                         borderRadius: '4px',
                    }}
               ></svg>
               <div
                    ref={tooltipRef}
                    className="box p-0 has-background-black-ter"
                    style={{
                         position: 'absolute',
                         pointerEvents: 'none',
                         opacity: 0,
                         transition: 'opacity 0.15s ease',
                         zIndex: 100,
                         borderRadius: '6px',
                         boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
                         border: '1px solid #4a4a4a',
                    }}
               />
          </div>
     )
}

export default PCA
