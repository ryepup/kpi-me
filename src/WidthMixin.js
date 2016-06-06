module.exports = {
  componentDidMount: function() { this.updateWidth(); },
  getInitialState: () => ({width: 0}),
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
};
