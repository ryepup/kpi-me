'use strict'; // -*- mode:js2 -*-

const React = require('react/addons'),
      bs = require('react-bootstrap'),
      eventBus = require('./EventBus.js'),
      ResetMixin = require('./ResetMixin.js')
;

module.exports = React.createClass({
  mixins: [React.addons.LinkedStateMixin, ResetMixin],
  getInitialState: () => ({value: 0}),
  add: function(e) {
    e.preventDefault();
    eventBus.publish(eventBus.events.ADD_DATAPOINT, {
      kpi: this.props.kpi,
      point: {
        utime: new Date().getTime(),
        value: parseFloat(this.state.value)
      }
    });
    this.reset();
  },
  render: function() {
    let addBtn = <bs.ButtonInput bsStyle="primary" type="button" onClick={this.add}>Add</bs.ButtonInput>;
    return (
        <bs.Input type="number" buttonAfter={addBtn} valueLink={this.linkState('value')} />
    );
  }
});
