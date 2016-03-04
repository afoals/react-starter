import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from "react-router";
import CSSModules from 'react-css-modules';

import styles from "./styles.css";

class Nav extends Component {
  render() {
    return (
      <nav className="container" styleName="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    );
  }
}

export default CSSModules(Nav, styles);
