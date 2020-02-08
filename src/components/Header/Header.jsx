import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from "../../../data/SiteConfig";
import "./Header.css";


class Header extends Component {
  render() {
    return(
      <header className="header">
        <h1>{config.siteTitle}</h1>
        <div className="titles">
          <span className="title">Web Developer</span>
          <span className="spacer">•</span>
          <span className="title">Frontend Designer</span>
        </div>
        <hr/>
      </header>
    );
  }
}

export default Header;
