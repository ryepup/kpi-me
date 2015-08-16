'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    bs = require('react-bootstrap'),
    eventBus = require('./EventBus.js')
;
module.exports = React.createClass({
  getInitialState: function() { return {name: ''}; },
  onChange: function() {
    this.setState({name: this.refs.name.getValue()});
  },
  add: function(e) {
    e.preventDefault();
    if(!this.state.name) return;
    eventBus.publish(eventBus.events.ADD_KPI, {
      name: this.state.name.trim()
    });
    this.setState(this.getInitialState());
  },
  render: function() {
    var addBtn = <bs.ButtonInput bsStyle="primary" onClick={this.add}>Add</bs.ButtonInput>;
    return (
      <div>
        <h2>Add KPI</h2>
        <bs.Input type="text" value={this.state.name} placeholder="name" ref="name" onChange={this.onChange} buttonAfter={addBtn} label="KPI Name" />
        </div>
    );
  }
});
