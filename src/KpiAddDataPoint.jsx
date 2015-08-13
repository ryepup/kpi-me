'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    rbs = require('react-bootstrap')
;

module.exports = React.createClass({
  add: function(e) {
    e.preventDefault();
    this.props.onAddDataPoint({
      kpi: this.props.kpi,
      point: {
        utime: new Date().getTime(),
        value: parseFloat(this.refs.amount.getValue())
      }
    });
  },
  render: function() {
    var addBtn = <rbs.ButtonInput bsStyle="primary" type="button" onClick={this.add}>Add</rbs.ButtonInput>;
    return (
            <rbs.Input type="number" buttonAfter={addBtn} ref="amount"/>
    );
  }
});
