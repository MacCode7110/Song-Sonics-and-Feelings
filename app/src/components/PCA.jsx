import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import pcaData from '../data/json_files/pca_matrix.json'
import Heading from '../components/Heading'

const PCA = () => {
     const svgRef = useRef(null)
     const [tooltip, setTooltip] = useState({
          visible: false,
          x: 0,
          y: 0,
          data: null,
     })

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
               tooltipTransition = 100

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
               .style('font-family', 'Segoe UI')
               .style('font-size', '12px')
               .style('fill', 'rgb(0,0,0)')
               .text('Principal Component 1 (PC1: Valence →)')

          svg.append('text')
               .attr('transform', 'rotate(-90)')
               .attr('x', -pcaHeight / 2)
               .attr('y', -45)
               .attr('text-anchor', 'middle')
               .style('font-family', 'Segoe UI')
               .style('font-size', '12px')
               .style('fill', 'rgb(0,0,0)')
               .text('Principal Component 2 (PC2: Arousal ↑)')

          svg.append('text')
               .attr('x', pcaWidth / 2)
               .attr('y', -45)
               .attr('text-anchor', 'middle')
               .style('font-family', 'Segoe UI')
               .style('font-size', '14px')
               .style('fill', 'rgb(0,0,0)')
               .text(
                    'Exploratory PCA: Musical Qualities and Construction of Feelings'
               )

          dots.on('mouseover', function (event, d) {
               d3.select(this)
                    .transition()
                    .duration(tooltipTransition)
                    .attr('r', dotRadius)
                    .attr('fill', '#000000')

               setTooltip({
                    visible: true,
                    x: event.layerX + 25,
                    y: event.layerY - 25,
                    data: d,
               })
          })
               .on('mousemove', function (event) {
                    setTooltip((t) => ({
                         ...t,
                         x: event.layerX + 25,
                         y: event.layerY - 25,
                    }))
               })
               .on('mouseleave', function () {
                    d3.select(this)
                         .transition()
                         .duration(tooltipTransition)
                         .attr('r', dotRadius)
                         .attr('fill', (d) =>
                              colorScale(d.core_affect_quadrant)
                         )

                    setTooltip((t) => ({ ...t, visible: false }))
               })
     }, [])

     return (
          <div
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
               {tooltip.visible && tooltip.data && (
                    <div
                         className="box has-background-success-light p-5"
                         style={{
                              position: 'absolute',
                              left: `${tooltip.x}px`,
                              top: `${tooltip.y}px`,
                              pointerEvents: 'none',
                              zIndex: 100,
                              minWidth: '250px',
                              maxWidth: '500px',
                              borderRadius: '5px',
                         }}
                    >
                         <p
                              className="is-family-secondary has-text-grey-dark has-text-weight-bold is-size-5 mb-3"
                         >
                              {tooltip.data.song_name} by{' '}
                              {tooltip.data.artist_name}
                         </p>
                         <div className="columns is-gapless is-size-7">
                              <div className="column">
                                   <ul>
                                        {[
                                             {
                                                  key: 'pca_x',
                                                  label: 'PC1',
                                                  isFloat: true,
                                                  digitCount: 4,
                                             },
                                             {
                                                  key: 'pca_y',
                                                  label: 'PC2',
                                                  isFloat: true,
                                                  digitCount: 4,
                                             },
                                             {
                                                  key: 'primary_feeling',
                                                  label: 'Primary Feeling',
                                                  isFloat: true,
                                                  digitCount: 0,
                                             },
                                             {
                                                  key: 'core_affect_quadrant',
                                                  label: 'Core Affect Quadrant',
                                                  isFloat: false,
                                                  digitCount: 0,
                                             },
                                             {
                                                  key: 'scaled_bpm',
                                                  label: 'Scaled BPM',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                             {
                                                  key: 'scaled_danceability',
                                                  label: 'Scaled Danceability',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                             {
                                                  key: 'scaled_onset_rate',
                                                  label: 'Scaled Onset Rate',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                             {
                                                  key: 'scaled_average_loudness',
                                                  label: 'Scaled Average Loudness',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                        ].map((item) => {
                                             const rawValue =
                                                  tooltip.data[item.key]
                                             const formattedValue =
                                                  item.isFloat &&
                                                  typeof rawValue ===
                                                       'number'
                                                       ? rawValue.toFixed(
                                                              item.digitCount
                                                         )
                                                       : rawValue || 'NA'

                                             return (
                                                  <li
                                                       key={item.key}
                                                       className="mb-1"
                                                  >
                                                       <span className="has-text-grey-dark">
                                                            {item.label}:
                                                       </span>{' '}
                                                       <strong className="has-text-black-ter">
                                                            {
                                                                 formattedValue
                                                            }
                                                       </strong>
                                                  </li>
                                             )
                                        })}
                                   </ul>
                              </div>
                              <div className="column">
                                   <ul>
                                        {[
                                            {
                                                  key: 'scaled_dynamic_complexity',
                                                  label: 'Scaled Dynamic Complexity',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                             {
                                                  key: 'scaled_spectral_energy',
                                                  label: 'Scaled Spectral Energy',
                                                  isFloat: true,
                                                  digitCount: 3,
                                             },
                                             {
                                                  key: 'scaled_chords_changes_rate',
                                                  label: 'Scaled Chords Changes Rate',
                                                  isFloat: true,
                                                  digitCount: 3,
                                             },
                                             {
                                                  key: 'scaled_pitch_salience',
                                                  label: 'Scaled Pitch Salience',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                             {
                                                  key: 'scaled_spectral_complexity',
                                                  label: 'Scaled Spectral Complexity',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                             {
                                                  key: 'scaled_spectral_centroid',
                                                  label: 'Scaled Spectral Centroid',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                             {
                                                  key: 'scaled_barkbands_flatness_db',
                                                  label: 'Scaled Barkbands Flatness DB',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                             {
                                                  key: 'scaled_zerocrossingrate',
                                                  label: 'Scaled Zero Crossing Rate',
                                                  isFloat: true,
                                                  digitCount: 2,
                                             },
                                        ].map((item) => {
                                             const rawValue =
                                                  tooltip.data[item.key]
                                             const formattedValue =
                                                  item.isFloat &&
                                                  typeof rawValue ===
                                                       'number'
                                                       ? rawValue.toFixed(
                                                              item.digitCount
                                                         )
                                                       : rawValue || 'NA'
                                             return (
                                                  <li
                                                       key={item.key}
                                                       className="mb-1"
                                                  >
                                                       <span className="has-text-grey-dark">
                                                            {item.label}:
                                                       </span>{' '}
                                                       <strong className="has-text-black-ter">
                                                            {
                                                                 formattedValue
                                                            }
                                                       </strong>
                                                  </li>
                                             )
                                        })}
                                   </ul>
                              </div>
                         </div>
                    </div>
               )}
          </div>
     )
}

export default PCA
