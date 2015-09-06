'use strict'; // -*- mode:js2 -*-

var React = require('react'),
    rbs = require('react-bootstrap'),
    moment = require('moment'),
    KpiPointStats = require('./KpiPointStats.jsx')
;

module.exports = React.createClass({

  render: function() {
    var kpi = this.props.kpi;

    if(!kpi.points || kpi.points.length === 0)
      return (<span />);

    var mostRecent = kpi.points[kpi.points.length - 1],
        d = moment(mostRecent.utime),
        lastWeek = moment().subtract(7, 'days'),
        lastWeekPoints = kpi.points.filter(function(p) {
          return moment(p.utime).isAfter(lastWeek);
        })
    ;

    return (
        <rbs.Grid fluid={true} className="kpi-stats">
        <rbs.Row>
        <rbs.Col xs={4}><h5>Most Recent Datapoint</h5></rbs.Col>
        <rbs.Col xs={4}><h5>Since {lastWeek.calendar()}</h5></rbs.Col>
        <rbs.Col xs={4}><h5>All Time</h5></rbs.Col>
        </rbs.Row>
        <rbs.Row>
        <rbs.Col xs={4}>
        <dl className="dl-horizontal">
        <dt>Value</dt>
        <dd>{mostRecent.value}</dd>
        <dt>Time</dt>
        <dd>{d.fromNow()}</dd>
        </dl>
        </rbs.Col>
        <rbs.Col xs={4}><KpiPointStats points={lastWeekPoints} /></rbs.Col>
        <rbs.Col xs={4}><KpiPointStats points={kpi.points} /></rbs.Col>
        </rbs.Row>
        </rbs.Grid>
    );
  }
});
