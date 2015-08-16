'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    KpiItem = require('./KpiItem.jsx'),
    bs = require('react-bootstrap')
;
module.exports = React.createClass({
  getInitialState: function() {
    return {activeKey: null};
  },
  handleSelect: function(key) {
    this.setState({ activeKey: key });
  },
  render: function() {
    var self = this;
    var kpis = this.props.kpis.map(function(kpi, i) {
      var inner = (<span/>);
      if(i == this.state.activeKey){
        inner = (<KpiItem kpi={kpi} />);
      }
      return (<bs.Panel header={kpi.name} eventKey={i} key={i}>
              {inner}
              </bs.Panel>);
    }, this);
    return (<div>
            <h2>KPIs</h2>
            <bs.PanelGroup
            activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
            {kpis}
            </bs.PanelGroup>
            </div>);
  }
});
