import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import pcaData from '../data/json_files/pca_matrix.json'

const PCA = () => {
     const svgRef = useRef(null)
     const tooltipRef = useRef(null)

     useEffect(() => {
          if (!pcaData || pcaData.length === 0) return
          const margin = { top: 70, right: 80, bottom: 70, left: 80 }

          const boxWidth = 1000
          const boxHeight = 500

          const pcaWidth = boxWidth - margin.left - margin.right
          const pcaHeight = boxHeight - margin.top - margin.bottom

          const svgElement = d3.select(svgRef.current)
          svgElement.selectAll('*').remove()

          const svg = svgElement
               .attr('viewBox', `0 0 ${boxWidth} ${boxHeight}`)
               .append('g')
               .attr(
                    'transform',
                    `translate(${margin.left},${margin.top})`
               )

          const xMax =
               d3.max(pcaData, (d) => Math.abs(d.pca_x)) * 1.25 || 5
          const yMax =
               d3.max(pcaData, (d) => Math.abs(d.pca_y)) * 1.25 || 5

          const xScale = d3
               .scaleLinear()
               .domain([-xMax, xMax])
               .range([0, pcaWidth])
          const yScale = d3
               .scaleLinear()
               .domain([-yMax, yMax])
               .range([pcaHeight, 0])

          const xAxis = d3.axisBottom(xScale).ticks(6)
          const yAxis = d3.axisLeft(yScale).ticks(6)

          const gridLines = svg.append('g').attr('class', 'grid-lines')

          const coreAffectBins = [
               'Quadrant 1',
               'Quadrant 2',
               'Quadrant 3',
               'Quadrant 4',
          ]

          const colors = [
               'rgb(200, 180, 0)',
               'rgb(255, 0, 0)',
               'rgb(0, 0, 255)',
               'rgb(0, 180, 0)',
          ]

          const colorScale = d3
               .scaleOrdinal()
               .domain(coreAffectBins)
               .range(colors)

          const dotRadius = 8,
               dotOpacity = 0.8,
               dotStroke = '#fff',
               dotStrokeWid = 2,
               gridLineStroke = '#dddddd',
               gridLineStrokeWid = 1,
               tooltipDisplayTime = 100

          const dots = svg
               .append('g')
               .selectAll('circle')
               .data(pcaData)
               .enter()
               .append('circle')
               .attr('cx', (d) => xScale(d.pca_x))
               .attr('cy', (d) => yScale(d.pca_y))
               .attr('r', dotRadius)
               .attr('fill', (d) => colorScale(d.core_affect_quadrant))
               .attr('opacity', dotOpacity)
               .attr('stroke', dotStroke)
               .attr('stroke-width', dotStrokeWid)
               .style('cursor', 'pointer')

          const tooltip = d3.select(tooltipRef.current)

          gridLines
               .append('line')
               .attr('x1', xScale(0))
               .attr('x2', xScale(0))
               .attr('y1', 0)
               .attr('y2', pcaHeight)
               .attr('stroke', gridLineStroke)
               .attr('stroke-width', gridLineStrokeWid)
          gridLines
               .append('line')
               .attr('x1', 0)
               .attr('x2', pcaWidth)
               .attr('y1', yScale(0))
               .attr('y2', yScale(0))
               .attr('stroke', gridLineStroke)
               .attr('stroke-width', gridLineStrokeWid)

          svg.append('g')
               .attr('transform', `translate(0,${pcaHeight})`)
               .call(xAxis)
          svg.append('g').call(yAxis)

          svg.append('text')
               .attr('x', pcaWidth / 2)
               .attr('y', pcaHeight + 45)
               .attr('text-anchor', 'middle')
               .style('font-family', 'Apple Gothic')
               .style('font-size', '12px')
               .style('fill', 'rgb(0,0,0)')
               .text('Principal Component 1 (PC1: Valence →)')

          svg.append('text')
               .attr('transform', 'rotate(-90)')
               .attr('x', -pcaHeight / 2)
               .attr('y', -45)
               .attr('text-anchor', 'middle')
               .style('font-family', 'Apple Gothic')
               .style('font-size', '12px')
               .style('fill', 'rgb(0,0,0)')
               .text('Principal Component 2 (PC2: Arousal ↑)')

          svg.append('text')
               .attr('x', pcaWidth / 2)
               .attr('y', -45)
               .attr('text-anchor', 'middle')
               .style('font-family', 'Apple Gothic')
               .style('font-size', '14px')
               .style('fill', 'rgb(0,0,0)')
               .text(
                    'Exploratory PCA: Musical and Emotional Qualities of Songs'
               )

          dots.on('mouseover', function (event, d) {
               d3.select(this)
                    .transition()
                    .duration(tooltipDisplayTime)
                    .attr('r', dotRadius)
                    .attr('fill', '#000000')

               const songName = d.song_name || 'Unknown Track'
               const artistName = d.artist_name || 'Unknown Artist'
               const pc1 =
                    typeof d.pca_x === 'number'
                         ? d.pca_x.toFixed(4)
                         : 'N/A'
               const pc2 =
                    typeof d.pca_y === 'number'
                         ? d.pca_y.toFixed(4)
                         : 'N/A'

               tooltip.style('opacity', 1).html(`
            <div class="p-4" style="min-width: 320px; max-width: 400px; font-family: sans-serif;">
              <div class="mb-3">
                <p class="title is-size-5 has-text-white mb-1" style="line-height: 1.2;">
                  Song: ${songName}
                </p>
                <p class="subtitle is-size-6 has-text-grey-light mb-2">
                  by Artist: ${artistName}
                </p>
                <div class="tags mb-0">
                  <span class="tag is-info has-text-weight-bold">PC1: ${pc1}</span>
                  <span class="tag is-info has-text-weight-bold">PC2: ${pc2}</span>
                  <span class="tag is-success has-text-weight-bold">${d.primary_feeling || 'N/A'}</span>
                  <span class="tag is-dark border-grey">${d.core_affect_quadrant || 'N/A'}</span>
                </div>
              </div>

              <hr class="has-background-grey" style="margin: 0.75rem 0; height: 1px;" />

              <div>
                <p class="has-text-weight-semibold has-text-grey-light is-size-7 is-uppercase tracking-wide mb-2">
                  Sonic Features
                </p>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px 16px;" class="is-size-7">
                  <div><span class="has-text-grey">Scaled BPM:</span> <strong class="has-text-white float-right">${(d.scaled_bpm || 0).toFixed(2)}</strong></div>
                  <div><span class="has-text-grey">Scaled Danceability:</span> <strong class="has-text-white float-right">${(d.scaled_danceability || 0).toFixed(2)}</strong></div>
                  <div><span class="has-text-grey">Scaled Onset Rate:</span> <strong class="has-text-white float-right">${(d.scaled_onset_rate || 0).toFixed(2)}</strong></div>
                  <div><span class="has-text-grey">Scaled Loudness:</span> <strong class="has-text-white float-right">${(d.scaled_average_loudness || 0).toFixed(2)}</strong></div>
                  <div><span class="has-text-grey">Scaled Dynamics:</span> <strong class="has-text-white float-right">${(d.scaled_dynamic_complexity || 0).toFixed(2)}</strong></div>
                  <div><span class="has-text-grey">Scaled Energy:</span> <strong class="has-text-white float-right">${(d.scaled_spectral_energy || 0).toFixed(3)}</strong></div>
                  <div><span class="has-text-grey">Scaled Chords Rate:</span> <strong class="has-text-white float-right">${(d.scaled_chords_changes_rate || 0).toFixed(3)}</strong></div>
                  <div><span class="has-text-grey">Scaled Pitch Salience:</span> <strong class="has-text-white float-right">${(d.scaled_pitch_salience || 0).toFixed(2)}</strong></div>
                  <div><span class="has-text-grey">Scaled Complexity:</span> <strong class="has-text-white float-right">${(d.scaled_spectral_complexity || 0).toFixed(2)}</strong></div>
                  <div><span class="has-text-grey">Scaled Centroid:</span> <strong class="has-text-white float-right">${(d.scaled_spectral_centroid || 0).toFixed(2)}</strong></div>
                  <div><span class="has-text-grey">Scaled Flatness:</span> <strong class="has-text-white float-right">${(d.scaled_barkbands_flatness_db || 0).toFixed(2)}</strong></div>
                  <div><span class="has-text-grey">Scaled Zero Cross:</span> <strong class="has-text-white float-right">${(d.scaled_zerocrossingrate || d.scaled_zero_crossing_rate || 0).toFixed(2)}</strong></div>
                </div>
              </div>
            </div>
          `)
          })
               .on('mousemove', function (event) {
                    tooltip
                         .style('left', event.layerX + 15 + 'px')
                         .style('top', event.layerY - 15 + 'px')
               })
               .on('mouseleave', function () {
                    d3.select(this)
                         .transition()
                         .duration(tooltipDisplayTime)
                         .attr('r', dotRadius)
                         .attr('fill', (d) =>
                              colorScale(d.core_affect_quadrant)
                         )
                    tooltip.style('opacity', 0)
               })
     }, [])

     return (
          <div
               className="has-background-white-bis"
               style={{
                    position: 'relative',
                    width: '100%',
                    margin: '0 auto',
                    padding: '1.25rem',
               }}
          >
               <svg
                    ref={svgRef}
                    style={{
                         width: '100%',
                         height: 'auto',
                         display: 'block',
                    }}
               ></svg>
               <div
                    ref={tooltipRef}
                    className="box p-0 has-background-black"
                    style={{
                         position: 'absolute',
                         pointerEvents: 'none',
                         opacity: 0,
                         transition: 'opacity 0.15s ease',
                         zIndex: 100,
                         borderRadius: '5px',
                         boxShadow: '0 5px 25px rgb(0, 0, 0)',
                         border: '1px solid rgb(0,0,0)',
                    }}
               />
          </div>
     )
}

export default PCA
