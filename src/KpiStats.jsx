'use strict'; // -*- mode:js2 -*-

const React = require('react'),
      moment = require('moment'),
      KpiPointStatsRow = require('./KpiPointStatsRow.jsx')
;

module.exports = React.createClass({

  render: function() {
    let kpi = this.props.kpi;

    if(!kpi.points || kpi.points.length === 0)
      return (<span />);

    let mostRecent = kpi.points[kpi.points.length - 1],
        d = moment(mostRecent.utime),
        lastWeek = moment().subtract(7, 'days'),
        lastWeekPoints = kpi.points
          .filter((p) => moment(p.utime).isAfter(lastWeek)),
        lastWeekTitle = 'Since ' + lastWeek.calendar()
    ;

    return (
        <div>
        <dl className="dl-horizontal">
        <dt>Last Value</dt>
        <dd>{mostRecent.value}</dd>
        <dt>Last Time</dt>
        <dd>{d.fromNow()}, {d.calendar()}</dd>
        </dl>

        <table className="table table-striped">
        <thead>
        <tr><th></th><th>Average</th><th>Min</th><th>Max</th><th>N</th></tr>
        </thead>
        <tbody>
        <KpiPointStatsRow title={lastWeekTitle} points={lastWeekPoints}/>
        <KpiPointStatsRow title="All Time" points={kpi.points}/>
        </tbody>
        </table>

        </div>
    );
  }
});
