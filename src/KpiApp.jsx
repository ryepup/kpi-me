'use strict'; // -*- mode:js2 -*-

const React = require('react'),
      KpiList = require('./KpiList.jsx'),
      KpiExport = require('./KpiExport.jsx'),
      KpiForm = require('./KpiForm.jsx'),
      KPI_ME = 'kpi-me',
      eventBus = require('./EventBus.js'),
      sendEmail = require('./email')
;

module.exports = React.createClass({
  getInitialState: () => ({kpis: []}),
  componentDidMount: function() {
    this.setState(JSON.parse(localStorage.getItem(KPI_ME)) || this.state);
    eventBus.on(eventBus.events.ADD_DATAPOINT, this.addDataPoint);
    eventBus.on(eventBus.events.ADD_KPI, this.addKpi);
    eventBus.on(eventBus.events.REMOVE_KPI, this.removeKpi);
    eventBus.on(eventBus.events.REMOVE_LAST_DATAPOINT, this.removeDataPoint);
    eventBus.on(eventBus.events.EMAIL_KPIS, this.emailKpis);
  },
  saveToLocalStorage: function() {
    localStorage.setItem(KPI_ME, JSON.stringify(this.state));
  },
  addKpi: function(kpi) {
    this.setState({kpis: this.state.kpis.concat([kpi])}, this.saveToLocalStorage);
  },
  removeKpi: function(opts) {
    let idx = this.state.kpis.indexOf(opts.kpi);
    this.state.kpis.splice(idx, 1);
    this.forceUpdate(this.saveToLocalStorage);
  },
  addDataPoint: function(opts) {
    let idx = this.state.kpis.indexOf(opts.kpi),
        kpi = this.state.kpis[idx];
    kpi.points = kpi.points || [];
    kpi.points.push(opts.point);
    this.forceUpdate(this.saveToLocalStorage);
  },
  removeDataPoint: function(opts) {
    opts.kpi.points.pop();
    this.forceUpdate(this.saveToLocalStorage);
  },
  emailKpis: () => sendEmail(localStorage.getItem(KPI_ME)),
  render: function() {
    return (<div className="container-fluid">
            <KpiList kpis={this.state.kpis} />
            <KpiForm />
            <KpiExport />
            </div>);
  }
});
