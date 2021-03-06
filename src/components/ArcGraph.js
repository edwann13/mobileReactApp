import React, { Component } from 'react'
import { scaleLinear } from "d3-scale"
import { max } from 'd3-array'
import { select } from 'd3-selection'
import {arc} from 'd3-shape'

var d3 = require('d3');
class ArcGraph extends Component {
   constructor(props){
      super(props)
      this.state = {
         completed: 100,
         total: 200
      }
      this.createBarChart = this.createBarChart.bind(this)
      var that = this

   }

   componentDidMount() {
      this.createBarChart()
   }

   componentDidUpdate() {
      this.createBarChart()
   }

   updateArc1() {
      this.setState({
         completed: this.state.completed + 1
      })
   }

   createBarChart() {
   	var margin = {top:20, right: 20, left:20},
   		width = 500 - margin.right - margin.left,
   		height = 500 - margin.top - margin.bottom,
   		radius = width/2;
      const node = this.node
      const yScale = scaleLinear()
         .domain([0, 300])
         .range([0, 300])

      var arc = d3.arc()
      arc = d3.arc()
         .innerRadius(50)
         .outerRadius(65)
         .startAngle(Math.PI * 2 * (0)/this.state.total)
         .endAngle(Math.PI * 2 *(this.state.completed )/this.state.total);
      select(node)
         .append("path")
         .attr('d', arc)
         .attr('x', 100)
         .attr('y', 100)
         .attr('width', 700)
         .attr('height', 700)
         .style('fill', this.props.color)
         .attr('transform','translate(75,75)');
      

      arc = d3.arc()
         .innerRadius(50)
         .outerRadius(65)
         .startAngle(Math.PI * 2 * (this.state.completed/this.state.total))
         .endAngle(Math.PI * 2 * (this.state.total)/this.state.total);
      select(node)
         .append("path")
         .attr('d', arc)
         .attr('x', 100)
         .attr('y', 100)
         .attr('width', 700)
         .attr('height', 700)
         .style('fill', 'white')
         .attr('transform','translate(75,75)');

   }
render() {
      return <svg onClick={this.updateArc1.bind(this)} id={this.props.id} ref={node => this.node = node}
      width={700} height={700}>
      </svg>
   }
}
export default ArcGraph




