import React, { Component } from "react";
import Helmet from "react-helmet";
import MainLayout from "../layout/MainLayout";
import About from "../components/About/About";
import portfolioItems from "../components/Portfolio/Portfolio";
import config from "../../data/SiteConfig";
import "./index.css"

function addTags(tags) {
  console.log(tags);
  return (tags.tags.map((elem) => {
    console.log(elem);
    return(
      <li className="tag" key={`key-${elem.split()[0]}`}>
        <span>{elem}</span>
      </li>
    );
  }));
}

class PortfolioPage extends Component {
  render() {
    if (!this.props.isPartiallyCurrent && this.props.isCurrent){
      return (
        <MainLayout>
          <div className="index-container">
            <Helmet title={ `${config.siteTitle}` } />
            <h2>{this.props.location.state.args.title}</h2>
          </div>
        </MainLayout>
      );
    }
    else {
      return (
        <MainLayout></MainLayout>
      )
    }
  }
}

export default PortfolioPage;
