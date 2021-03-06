'use strict'; // -*- mode:js2 -*-

const React = require('react'),
      KpiItem = require('./KpiItem.jsx'),
      bs = require('react-bootstrap')
;
module.exports = React.createClass({
  handleSelect: function(key) {
    this.setState({ activeKey: key });
  },
  getInitialState: () => ({activeKey: null}),
  render: function() {
    let self = this,
        kpis = this.props.kpis.map(function(kpi, i) {
          let inner = (<span/>),
              style = "default"
          ;
          if(i == this.state.activeKey){
            inner = (<KpiItem kpi={kpi} />);
            style = "primary";
          }
          return (<bs.Panel header={kpi.name} eventKey={i} key={i} bsStyle={style}>
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
