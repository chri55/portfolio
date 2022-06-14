import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";
import "./BottomNavigation.css";
import { MdHome as HomeIcon } from "@react-icons/all-files/md/MdHome";
import { MdPhoto as PortfolioIcon } from "@react-icons/all-files/md/MdPhoto";
import { MdBook as BlogIcon } from "@react-icons/all-files/md/MdBook";
import { RiUser3Fill as AboutIcon } from "@react-icons/all-files/ri/RiUser3Fill";

class BottomNavigation extends Component {
  render() {
    const isPartiallyActive = ({ isPartiallyCurrent }) => {
      return isPartiallyCurrent ? { className: "active" } : {};
    };
    return (
      <div className="bottom-nav-root">
        <Link to="/" className="nav-link" activeClassName="active">
          <div className="nav-item">
            <HomeIcon></HomeIcon>
            <p>Home</p>
          </div>
        </Link>
        <Link to="/about" className="nav-link" activeClassName="active">
          <div className="nav-item">
            <AboutIcon></AboutIcon>
            <p>Resume</p>
          </div>
        </Link>
        <Link
          to="/portfolio"
          className="nav-link"
          activeClassName="active"
          getProps={isPartiallyActive}
          {...this.props}
        >
          <div className="nav-item">
            <PortfolioIcon></PortfolioIcon>
            <p>Portfolio</p>
          </div>
        </Link>
        <Link
          to="/blog/"
          className="nav-link"
          activeClassName="active"
          getProps={isPartiallyActive}
          {...this.props}
        >
          <div className="nav-item">
            <BlogIcon></BlogIcon>
            <p>Blog</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default BottomNavigation;
