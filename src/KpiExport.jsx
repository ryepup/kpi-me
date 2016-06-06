'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    eventBus = require('./EventBus.js'),
    bs = require('react-bootstrap');

module.exports = React.createClass({
  getInitialState: () => ({}),
  email: function(e) {
    e.preventDefault();
    eventBus.publish(eventBus.events.EMAIL_KPIS);
  },
  render: function() {
    return (<div>
            <h2>Export</h2>

            <bs.ButtonInput bsStyle="primary" onClick={this.email}>Email</bs.ButtonInput>

            </div>);
  }
});
