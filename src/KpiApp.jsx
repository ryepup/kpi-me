'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    KpiList = require('./KpiList.jsx'),
    KpiForm = require('./KpiForm.jsx'),
    KPI_ME = 'kpi-me'
;

module.exports = React.createClass({
  getInitialState: function() { return {kpis: []}; },
  componentDidMount: function() {
    this.setState(JSON.parse(localStorage.getItem(KPI_ME)));
  },
  saveToLocalStorage: function() {
    localStorage.setItem(KPI_ME, JSON.stringify(this.state));
  },
  addKpi: function(kpi) {
    this.setState({kpis: this.state.kpis.concat([kpi])}, this.saveToLocalStorage);
  },
  addDataPoint: function(opts) {
    var idx = this.state.kpis.indexOf(opts.kpi);
    var kpi = this.state.kpis[idx];
    kpi.points = kpi.points || [];
    kpi.points.push(opts.point);
    this.setState({kpis: this.state.kpis}, this.saveToLocalStorage);
  },
  render: function() {
    return (<div className="container-fluid">
            <KpiList kpis={this.state.kpis} onAddDataPoint={this.addDataPoint} />
            <KpiForm onSubmit={this.addKpi}/>
            </div>);
  }
});
