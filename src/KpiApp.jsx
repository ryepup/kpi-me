'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    KpiList = require('./KpiList.jsx'),
    KpiForm = require('./KpiForm.jsx'),
    KPI_ME = 'kpi-me',
    eventBus = require('./EventBus.js')
;

module.exports = React.createClass({
  getInitialState: function() { return {kpis: []}; },
  componentDidMount: function() {
    this.setState(JSON.parse(localStorage.getItem(KPI_ME)));
    eventBus.on(eventBus.events.ADD_DATAPOINT, this.addDataPoint);
    eventBus.on(eventBus.events.ADD_KPI, this.addKpi);
    eventBus.on(eventBus.events.REMOVE_KPI, this.removeKpi);
    eventBus.on(eventBus.events.REMOVE_LAST_DATAPOINT, this.removeDataPoint);
  },
  saveToLocalStorage: function() {
    localStorage.setItem(KPI_ME, JSON.stringify(this.state));
  },
  addKpi: function(kpi) {
    this.setState({kpis: this.state.kpis.concat([kpi])}, this.saveToLocalStorage);
  },
  removeKpi: function(opts) {
    var idx = this.state.kpis.indexOf(opts.kpi);
    this.state.kpis.splice(idx, 1);
    this.forceUpdate(this.saveToLocalStorage);
  },
  addDataPoint: function(opts) {
    var idx = this.state.kpis.indexOf(opts.kpi);
    var kpi = this.state.kpis[idx];
    kpi.points = kpi.points || [];
    kpi.points.push(opts.point);
    this.forceUpdate(this.saveToLocalStorage);
  },
  removeDataPoint: function(opts) {
    opts.kpi.points.pop();
    this.forceUpdate(this.saveToLocalStorage);
  },
  render: function() {
    return (<div className="container-fluid">
            <KpiList kpis={this.state.kpis} />
            <KpiForm />
            </div>);
  }
});
