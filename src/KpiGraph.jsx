'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    rd3 = require('react-d3')
;

function rd3Render(points, width) {
  var data = [{
    values: points.map(function(p) {
      return {x: new Date(p.utime), y: p.value};
    })}],
      divisor = 5,
      xAxisTickValues = [],
      nowUtime = new Date().getTime(),
      step = Math.floor((nowUtime - points[0].utime) / divisor)
  ;
  for(var t = points[0].utime; t < nowUtime; t += step){
    xAxisTickValues.push(new Date(t));
  }

  return (<rd3.LineChart data={data} width={width} xAxisTickCount={5} />);
}

module.exports = React.createClass({
  mixins:[require('./WidthMixin.js')],
  render: function() {
    var points = this.props.kpi.points;

    if(!points || points.length <= 1 || this.state.width === 0){
      return (<div>Not enough data</div>);
    }

    return rd3Render(points, this.state.width);
  }
});
