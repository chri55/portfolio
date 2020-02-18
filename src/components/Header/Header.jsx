import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import config from "../../../data/SiteConfig";
import "./Header.css";


class Header extends Component {
  render() {
    return(
      <header className="header">
        <Link to="/"><h1 className="site-title">{config.siteTitle}</h1></Link>
        <div className="titles">
          <span className="job">Web Developer</span>
          <span className="spacer">•</span>
          <span className="job">Frontend Designer</span>
        </div>
        <hr/>
      </header>
    );
  }
}

export default Header;
