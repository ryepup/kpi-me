'use strict'; // -*- mode:js2 -*-

const React = require('react'),
      rd3 = require('react-d3')
;

function rd3Render(points, width) {
  let data = [{
    values: points.map(p => ({x: new Date(p.utime), y: p.value}))
  }],
      divisor = 5,
      xAxisTickValues = [],
      nowUtime = new Date().getTime(),
      step = Math.floor((nowUtime - points[0].utime) / divisor)
  ;
  for(let t = points[0].utime; t < nowUtime; t += step){
    xAxisTickValues.push(new Date(t));
  }

  return (<rd3.LineChart data={data} width={width} xAxisTickCount={5} />);
}

module.exports = React.createClass({
  mixins:[require('./WidthMixin.js')],
  render: function() {
    let points = this.props.kpi.points;

    if(!points || points.length <= 1 || this.state.width === 0){
      return (<div>Not enough data</div>);
    }

    return rd3Render(points, this.state.width);
  }
});
