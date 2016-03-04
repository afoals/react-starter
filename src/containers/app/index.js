import React, { Component, PropTypes } from 'react';

import Nav from '../../components/nav';

export default class App extends Component {
  render() {
    return (
      <div id="content">
        <Nav/>
        {this.props.children}
      </div>
    );
  }
}
