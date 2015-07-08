'use strict'; // -*- mode:js2 -*-

var React = require('react');
module.exports = React.createClass({
  render: function() {
    return (
        <div>{this.props.name}</div>
    );
  }
});
