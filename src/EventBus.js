
var listeners = [],
    eventNames = 'ADD_DATAPOINT ADD_KPI REMOVE_LAST_DATAPOINT REMOVE_KPI EMAIL_KPIS',
    eventEnum = {};

eventNames.split(' ').forEach(function(name) {
  eventEnum[name] = name;
});

module.exports = {
  subscribe: function(listener) { listeners.push(listener); },
  on: function(type, listener) {
    listeners.push(function(evttype, evt) {
      if(type === evttype) listener(evt);
    });
  },
  publish: function(type, evt) {
    if(!eventEnum[type]){
      throw new Error('unknown event type');
    }
    listeners.forEach(function(listener) {
      listener(type, evt);
    });
  },
  events: eventEnum
};
