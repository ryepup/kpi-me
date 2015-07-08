'use strict'; // -*- mode:js2 -*-

var React = require('react');
module.exports = React.createClass({
  getInitialState: function() { return {name: ''}; },
  onChange: function(e) {
    this.setState({name: e.target.value.trim()});
  },
  add: function(e) {
    e.preventDefault();
    if(!this.state.name) return;
    this.props.onSubmit(this.state);
    this.setState(this.getInitialState());
  },
  render: function() {
    return (
        <form onSubmit={this.add}>
        <input type="text" value={this.state.name} onChange={this.onChange} placeholder="name" />
        <input type="submit" value="add"/>
        </form>
    );
  }
});
