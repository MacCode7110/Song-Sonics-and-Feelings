import React, { useEffect, useRef, forwardRef, useState } from 'react'
import * as d3 from 'd3'
import pcaData from '../data/json_files/pca_matrix.json'
import { leftList, rightList } from '../configurations/dataConfiguration.js'
import Heading from '../components/Heading.jsx'

const Container = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        margin: '0 auto',
        padding: '1.25rem',
      }}
    >
      {children}
    </div>
  )
}

const TooltipBox = ({ children, t }) => {
  return (
    <div
      className="box has-background-success-light p-5"
      style={{
        position: 'absolute',
        left: `${t.x}px`,
        top: `${t.y}px`,
        pointerEvents: 'none',
        zIndex: 100,
        minWidth: '250px',
        maxWidth: '500px',
        borderRadius: '5px',
      }}
    >
      {children}
    </div>
  )
}

const SVG = forwardRef((props, ref) => {
  return (
    <svg
      ref={ref}
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
      }}
    ></svg>
  )
})

const getStructuredData = (listItem, data) => {
  const rawVal = data[listItem.key]
  return listItem.isFloat && typeof rawVal === 'number' ? rawVal.toFixed(listItem.digCount) : rawVal
}

const StructuredListItem = ({ listItem, structuredVal }) => {
  return (
    <li key={listItem.key} className="mb-1">
      <span className="has-text-grey-dark">{listItem.label}:</span> <strong className="has-text-black">{structuredVal}</strong>
    </li>
  )
}

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
    const margin = {
      top: 60,
      right: 80,
      bottom: 60,
      left: 80,
    }

    const boxWid = 1000
    const boxHei = 500

    const pcaWid = boxWid - margin.left - margin.right
    const pcaHei = boxHei - margin.top - margin.bottom

    const dotRad = 8,
      primaryCol = 'rgb(64, 70, 84)'

    const svgElem = d3.select(svgRef.current)
    svgElem.selectAll('*').remove()

    const svg = svgElem.attr('viewBox', `0 0 ${boxWid} ${boxHei}`).append('g').attr('transform', `translate(${margin.left},${margin.top})`)

    const xMax = d3.max(pcaData, (d) => Math.abs(d.pca_x)) * 1.25 || 5
    const yMax = d3.max(pcaData, (d) => Math.abs(d.pca_y)) * 1.25 || 5

    const xScale = d3.scaleLinear().domain([-xMax, xMax]).range([0, pcaWid])
    const yScale = d3.scaleLinear().domain([-yMax, yMax]).range([pcaHei, 0])

    const xAxis = d3.axisBottom(xScale).ticks(6)
    const yAxis = d3.axisLeft(yScale).ticks(6)

    const gridLines = svg.append('g').attr('class', 'grid-lines')

    const coreAffectBins = ['Quadrant 1', 'Quadrant 2', 'Quadrant 3', 'Quadrant 4']

    const colors = ['rgb(200, 180, 0)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(0, 180, 0)']

    const colorScale = d3.scaleOrdinal().domain(coreAffectBins).range(colors)

    const dots = svg
      .append('g')
      .selectAll('circle')
      .data(pcaData)
      .enter()
      .append('circle')
      .attr('cx', (d) => xScale(d.pca_x))
      .attr('cy', (d) => yScale(d.pca_y))
      .attr('r', dotRad)
      .attr('fill', (d) => colorScale(d.core_affect_quadrant))
      .attr('opacity', 0.8)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2)
      .style('cursor', 'pointer')

    svg
      .append('g')
      .attr('transform', `translate(0,${pcaHei})`)
      .call(xAxis)
      .call((g) => g.select('.domain').attr('stroke', primaryCol).attr('stroke-width', 1))
      .call((g) => g.selectAll('.tick line').attr('stroke', primaryCol))
      .call((g) => g.selectAll('.tick text').attr('fill', primaryCol))
    svg
      .append('g')
      .call(yAxis)
      .call((g) => g.select('.domain').attr('stroke', primaryCol).attr('stroke-width', 1))
      .call((g) => g.selectAll('.tick line').attr('stroke', primaryCol))
      .call((g) => g.selectAll('.tick text').attr('fill', primaryCol))

    svg
      .append('text')
      .attr('x', pcaWid / 2)
      .attr('y', pcaHei + 45)
      .attr('text-anchor', 'middle')
      .style('font-family', 'Segoe UI')
      .style('font-size', '12px')
      .style('font-style', 'italic')
      .style('fill', primaryCol)
      .style('font-weight', 400)
      .text('Principal Component 1 (PC1, Valence →)')

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -pcaHei / 2)
      .attr('y', -45)
      .attr('text-anchor', 'middle')
      .style('font-family', 'Segoe UI')
      .style('font-size', '12px')
      .style('font-style', 'italic')
      .style('fill', primaryCol)
      .style('font-weight', 400)
      .text('Principal Component 2 (PC2, Arousal →)')

    gridLines.append('line').attr('x1', xScale(0)).attr('x2', xScale(0)).attr('y1', 0).attr('y2', pcaHei).attr('opacity', 0.4).attr('stroke', primaryCol).attr('stroke-width', 1)
    gridLines.append('line').attr('x1', 0).attr('x2', pcaWid).attr('y1', yScale(0)).attr('y2', yScale(0)).attr('opacity', 0.4).attr('stroke', primaryCol).attr('stroke-width', 1)

    const coreAffectAreas = [
      {
        x: pcaWid * 0.75,
        y: pcaHei * 0.25,
        descrip: 'Quadrant 1 (High Arousal + Positive Valence)',
        color: 'rgb(200, 180, 0)',
      },
      {
        x: pcaWid * 0.25,
        y: pcaHei * 0.25,
        descrip: 'Quadrant 2 (High Arousal + Negative Valence)',
        color: 'rgb(255, 0, 0)',
      },
      {
        x: pcaWid * 0.25,
        y: pcaHei * 0.75,
        descrip: 'Quadrant 3 (Low Arousal + Negative Valence)',
        color: 'rgb(0, 0, 255)',
      },
      {
        x: pcaWid * 0.75,
        y: pcaHei * 0.75,
        descrip: 'Quadrant 4 (Low Arousal + Positive Valence)',
        color: 'rgb(0, 180, 0)',
      },
    ]

    coreAffectAreas.forEach((q) => {
      svg
        .append('text')
        .attr('x', q.x)
        .attr('y', q.y)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Segoe UI')
        .style('font-size', '8px')
        .style('font-style', 'italic')
        .attr('opacity', 0.2)
        .style('fill', q.color)
        .style('pointer-events', 'none')
        .text(q.descrip)
    })

    dots
      .on('mouseover', function (event, d) {
        d3.select(this).transition().duration(100).attr('r', dotRad).attr('fill', primaryCol)

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
          .duration(100)
          .attr('r', dotRad)
          .attr('fill', (d) => colorScale(d.core_affect_quadrant))

        setTooltip((t) => ({
          ...t,
          visible: false,
        }))
      })
  }, [])

  return (
    <Container>
      <Heading size={3} className="is-family-secondary has-text-weight-normal is-italic has-text-centered mb-3">
        Exploratory PCA: Musical Qualities and Mapping of Feelings
      </Heading>
      <SVG ref={svgRef} />
      {tooltip.visible && tooltip.data && (
        <TooltipBox t={tooltip}>
          <Heading size={5} className="is-family-secondary is-italic has-text-grey-dark has-text-weight-bold mb-3">
            {tooltip.data.song_name} by {tooltip.data.artist_name}
          </Heading>
          <div className="columns is-gapless is-size-7">
            <div className="column">
              <ul>
                {leftList.map((listItem) => {
                  return <StructuredListItem key={listItem.key} listItem={listItem} structuredVal={getStructuredData(listItem, tooltip.data)}></StructuredListItem>
                })}
              </ul>
            </div>
            <div className="column">
              <ul>
                {rightList.map((listItem) => {
                  return <StructuredListItem key={listItem.key} listItem={listItem} structuredVal={getStructuredData(listItem, tooltip.data)}></StructuredListItem>
                })}
              </ul>
            </div>
          </div>
        </TooltipBox>
      )}
    </Container>
  )
}

export default PCA
