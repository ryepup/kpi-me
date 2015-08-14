module.exports = {
  getInitialState: function() { return {width: 0}; },
  componentDidUpdate: function() { this.updateWidth(); },
  width: function() {
    var dom = this.getDOMNode();
    return dom ? dom.getBoundingClientRect().width : 0;
  },
  updateWidth: function() {
    var w = this.width();
    if(this.state.width !== w){
      this.setState({width: w});
    }
  }
}
