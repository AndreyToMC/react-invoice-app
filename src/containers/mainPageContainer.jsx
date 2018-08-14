import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class MainPageContainer extends Component {

  render() {
    return (
      <div></div>
    );
  }

}

function mapStateToProps(state) {
  return {  };
}
function mapDispatchToProps(dispatch) {
  return {  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPageContainer)
