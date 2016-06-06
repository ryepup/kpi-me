'use strict';

function sendEmail(json){
  var emailProps = {
    subject: 'KPI-ME data export',
    body: 'Your data is attached. Thanks!',
    attachments: 'base64:kpi-me.json//' + btoa(json)
  };

  cordova.plugins.email.open(emailProps);
}

module.exports = sendEmail;
