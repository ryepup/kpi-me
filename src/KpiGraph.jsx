'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    ChartistGraph = require('react-chartist'),
    moment = require('moment'),
    Chartist = require('chartist')
;

module.exports = React.createClass({
  render: function() {
    var points = this.props.kpi.points;

    if(!points || points.length === 0){
      return (<div>Not enough data</div>);
    }
    points = points.concat([{utime: new Date().getTime(), value: null}]);

    var chartOpts = {
          fullWidth: true,

          axisX: {
            // HACK: chartist is broken
            type: function(unit, data, rect, axisOpts) {
              return new Chartist.AutoScaleAxis(unit, data, rect, axisOpts);
            }
          },
          series: {
            d: {
              lineSmooth: Chartist.Interpolation.step()
            }
          }
        },
        chartData = {
          series: [{
            name: 'd',
            data: points.map(function(p) { return {x: p.utime, y: p.value}; })
          }]
        };

    return (<ChartistGraph data={chartData} options={chartOpts} type={'Line'}/>);
  }
});
