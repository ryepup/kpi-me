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
  render: function() {
    return (<div><KpiList kpis={this.state.kpis} /><KpiForm onSubmit={this.addKpi}/></div>);
  }
});
