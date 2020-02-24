import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer id='footer' className="footer">
        <div className="notice-container">
          <h5>Contact me: {" "}
            <a href="#footer">
            {config.userEmail}
            </a>
          </h5>
        </div>
        <div className="notice-container">
          <h5 id="copy">{copyright}</h5>
          <h5 id="origin">
            Based on{" "}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>
            .
          </h5>
        </div>
      </footer>
    );
  }
}

export default Footer;
