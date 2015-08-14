'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    ChartistGraph = require('react-chartist')
;

module.exports = React.createClass({
  render: function() {
    if(!this.props.kpi.points || this.props.kpi.points.length <= 1){
      return (<div>Not enough data</div>);
    }

    var chartOpts = {
      fullWidth: true,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return value;
          return index % 13 === 0 ? 'W' + value : null;
        }
      }
    },
        chartData = {
          labels: this.props.kpi.points.map(function(p) { return p.utime; }),
          series: [this.props.kpi.points.map(function(p) { return p.value; })]
        };

    return (<ChartistGraph data={chartData} options={chartOpts} type={'Line'}/>);
  }
});
