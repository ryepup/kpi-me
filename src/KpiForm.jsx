'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    reactBootstrap = require('react-bootstrap'),
    ButtonInput = reactBootstrap.ButtonInput,
    Input = reactBootstrap.Input
;
module.exports = React.createClass({
  getInitialState: function() { return {name: ''}; },
  onChange: function() {
    this.setState({name: this.refs.name.getValue().trim()});
  },
  add: function(e) {
    e.preventDefault();
    if(!this.state.name) return;
    this.props.onSubmit(this.state);
    this.setState(this.getInitialState());
  },
  render: function() {
    var addBtn = <ButtonInput bsStyle="primary" type="submit">Add</ButtonInput>;
    return (
      <div>
        <h2>Add KPI</h2>
        <form onSubmit={this.add}>
        <Input type="text" value={this.state.name} placeholder="name" ref="name" onChange={this.onChange} buttonAfter={addBtn} label="KPI Name" />
        </form>
        </div>
    );
  }
});
