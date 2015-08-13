'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    rd3 = require('react-d3');

module.exports = React.createClass({
  render: function() {
    console.log('Graphing', this.props.kpi);
    if(!this.props.kpi.points){
      return (<div>No data</div>);
    }

    var lineData = [
  {
    name: this.props.kpi.name,
    values: this.props.kpi.points.map(function(point, idx) {
      return {x: idx, y: point.value};
    }),
    strokeWidth: 3,
    strokeDashArray: "5,5"
  }];
    console.log(lineData);
    return (<div><rd3.LineChart
              data={lineData}
            width="100%"
              height={200}
              viewBoxObject={{
                x: 0,
                y: 0,
                width: 500,
                height: 200
              }}
            /></div>);
  }
});
