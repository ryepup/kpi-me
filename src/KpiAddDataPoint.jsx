'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    bs = require('react-bootstrap'),
    eventBus = require('./EventBus.js')
;

module.exports = React.createClass({
  add: function(e) {
    e.preventDefault();
    eventBus.publish(eventBus.events.ADD_DATAPOINT, {
      kpi: this.props.kpi,
      point: {
        utime: new Date().getTime(),
        value: parseFloat(this.refs.amount.getValue())
      }
    });
  },
  render: function() {
    var addBtn = <bs.ButtonInput bsStyle="primary" type="button" onClick={this.add}>Add</bs.ButtonInput>;
    return (
            <bs.Input type="number" buttonAfter={addBtn} ref="amount"/>
    );
  }
});
