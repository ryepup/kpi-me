'use strict'; // -*- mode:js2 -*-

const React = require('react/addons'),
      bs = require('react-bootstrap'),
      eventBus = require('./EventBus.js'),
      ResetMixin = require('./ResetMixin.js')
;
module.exports = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ResetMixin],
  getInitialState: () => ({name: ''}),
  add: function(e) {
    e.preventDefault();
    if(!this.state.name) return;
    eventBus.publish(eventBus.events.ADD_KPI, {
      name: this.state.name.trim()
    });
    this.reset();
  },
  render: function() {
    let addBtn = <bs.ButtonInput bsStyle="primary" onClick={this.add}>Add</bs.ButtonInput>;
    return (
      <div>
        <h2>Add KPI</h2>
        <bs.Input type="text" placeholder="name" valueLink={this.linkState('name')}
      buttonAfter={addBtn} label="KPI Name" />
        </div>
    );
  }
});
