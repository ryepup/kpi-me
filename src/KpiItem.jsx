'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    rbs = require('react-bootstrap'),
    KpiAddDataPoint = require('./KpiAddDataPoint.jsx'),
    KpiGraph = require('./KpiGraph.jsx')
;

module.exports = React.createClass({
  render: function() {
    if(this.props.open)
    return (<rbs.Collapse in={this.props.open}>
            <rbs.Grid>
            <rbs.Row>
            <rbs.Col xs={12} sm={6} md={8} lg={10}><KpiGraph kpi={this.props.kpi}/></rbs.Col>
            <rbs.Col xs={12} sm={6} md={4} lg={2}><KpiAddDataPoint onAddDataPoint={this.props.onAddDataPoint} kpi={this.props.kpi}/></rbs.Col>
            </rbs.Row>
            <rbs.Row>
            <rbs.Col xs={12} md={6}>[STATS]</rbs.Col>
            </rbs.Row>
            </rbs.Grid>
            </rbs.Collapse>
           );
    return null;
  }
});
