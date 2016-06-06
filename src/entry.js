// browserify root

const React = require('react'),
      KpiApp = require('./KpiApp.jsx')
;
require('./style.css');
React.render(<KpiApp/>, document.getElementById('content'));
