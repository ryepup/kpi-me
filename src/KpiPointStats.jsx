'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    numeral = require('numeral'),
    avg = function(points) {
      if(points.length === 0) return 0;
      var total = points.reduce(function(acc, v) {
          return (acc || 0) + v;
      });
      return total / points.length;
    },
    min = function(points) { return Math.min.apply(null, points); },
    max = function(points) { return Math.max.apply(null, points); },
    fmt = function(x) { return numeral(x).format('0,0.00'); }
;

module.exports = React.createClass({

  render:function() {
    var points = this.props.points.map(function(p) { return p.value; });

    return (<dl className="dl-horizontal">
            <dt>Average</dt>
            <dd>{fmt(avg(points))}</dd>
            <dt>Min</dt>
            <dd>{fmt(min(points))}</dd>
            <dt>Max</dt>
            <dd>{fmt(max(points))}</dd>
            <dt>N</dt>
            <dd>{points.length}</dd>
            </dl>);

  }
});
