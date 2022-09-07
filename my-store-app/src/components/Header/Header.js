import React, {Component} from 'react';
import {connect} from "react-redux";

class Header extends Component {
  render() {
    return (
      <div>
        {this.props.headerName}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    headerName: state.title
  }
}

export default connect(mapStateToProps)(Header);