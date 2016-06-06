module.exports = {
  componentDidMount: function() { this.updateWidth(); },
  getInitialState: () => ({width: 0}),
  width: function() {
    let dom = this.getDOMNode();
    return dom ? dom.getBoundingClientRect().width : 0;
  },
  updateWidth: function() {
    let w = this.width();
    if(this.state.width !== w){
      this.setState({width: w});
    }
  }
};
