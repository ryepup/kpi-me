'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    KpiItem = require('./KpiItem.jsx')
;
module.exports = React.createClass({
  render: function() {
    var kpis = this.props.kpis.map(function(kpi, i) {
      return (<KpiItem name={kpi.name} key={i}/>);
    });
    return (<div>{kpis}</div>);
  }
});
