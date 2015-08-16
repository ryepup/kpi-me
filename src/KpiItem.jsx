'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    rbs = require('react-bootstrap'),
    KpiAddDataPoint = require('./KpiAddDataPoint.jsx'),
    KpiGraph = require('./KpiGraph.jsx'),
    KpiStats = require('./KpiStats.jsx'),
    eventBus = require('./EventBus.js')
;

module.exports = React.createClass({
  onDeleteKpi: function(e) {
    e.preventDefault();
    if(confirm('are you sure?'))
      eventBus.publish(eventBus.events.REMOVE_KPI, this.props);
  },
  onDeleteLastPoint: function(e) {
    e.preventDefault();
    eventBus.publish(eventBus.events.REMOVE_LAST_DATAPOINT, this.props);
  },

  render: function() {
    return (
        <rbs.Grid fluid={true}>
        <rbs.Row>
        <rbs.Col xs={12} sm={6} md={8} lg={10}><KpiGraph kpi={this.props.kpi}/></rbs.Col>
        <rbs.Col xs={12} sm={6} md={4} lg={2}><KpiAddDataPoint kpi={this.props.kpi}/></rbs.Col>
        </rbs.Row>
        <rbs.Row>
        <rbs.Col xs={12} sm={6} md={8} lg={10}><KpiStats kpi={this.props.kpi} /></rbs.Col>
        <rbs.Col xs={12} sm={6} md={4} lg={2}>
        <rbs.Button bsStyle="warning" onClick={this.onDeleteLastPoint}><rbs.Glyphicon glyph="trash"/> Delete last point</rbs.Button>
        <br/><br/>
        <rbs.Button bsStyle="danger" onClick={this.onDeleteKpi}><rbs.Glyphicon glyph="trash"/> Delete KPI</rbs.Button>
        </rbs.Col>
        </rbs.Row>
        </rbs.Grid>
    );
  }
});
