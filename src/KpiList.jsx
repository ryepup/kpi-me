'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    KpiItem = require('./KpiItem.jsx'),
    rbs = require('react-bootstrap')
;
module.exports = React.createClass({
  getInitialState: function() {
    return {selected: null};
  },
  render: function() {
    var self = this;
    var kpis = this.props.kpis.map(function(kpi, i) {
      var onClick = function(e) {
        e.preventDefault();
        self.setState({selected: kpi});
      },
          open = kpi === this.state.selected;
      return (<rbs.ListGroupItem onClick={onClick} active={open} header={kpi.name} key={i}>
              <KpiItem kpi={kpi} open={open} onAddDataPoint={this.props.onAddDataPoint} />
              </rbs.ListGroupItem>);
    }, this);
    return (<div>
            <h2>KPIs</h2>
            <rbs.ListGroup>
            {kpis}
            </rbs.ListGroup>
            </div>);
  }
});
