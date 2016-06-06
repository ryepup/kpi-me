'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    numeral = require('numeral'),
    avg = function(points) {
      points = points || [];
      if(points.length === 0) return 0;
      var total = points.reduce((acc, v) => acc + v, 0);
      return total / points.length;
    },
    min = (points) => Math.min.apply(null, points),
    max = (points) => Math.max.apply(null, points),
    fmt = function(x) {
      if(x === Infinity || x === -Infinity) return '-';
      return numeral(x).format('0,0.00');
    }
;

module.exports = React.createClass({

  render:function() {
    var points = this.props.points.map((p) => p.value),
        heading = <th>{this.props.title}</th>;

    return <tr>{heading}
      <td>{fmt(avg(points))}</td>
      <td>{fmt(min(points))}</td>
      <td>{fmt(max(points))}</td>
      <td>{points.length}</td>
      </tr>;

  }
});
