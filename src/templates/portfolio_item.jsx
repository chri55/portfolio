import React, { Component } from "react";
import Helmet from "react-helmet";
import MainLayout from "../layout/MainLayout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import "./portfolio_item.css"

function addTags(tags) {
  console.log(tags);
  return (tags.map((elem) => {
    console.log(elem);
    return(
      <li key={`key-${elem.split()[0]}`}>
        {elem}
      </li>
    );
  }));
}

class PortfolioPage extends Component {
  render() {
    console.log(this.props);
    return (
      <MainLayout>
        <div className="portfolio-container">
          <Helmet title={ `${config.siteTitle}` } />
          <h2>{this.props.pageContext.portfolioItem.title}</h2>
          <p>{this.props.pageContext.portfolioItem.synopsis}</p>
          <section className="splash">
            <img src={`${this.props.pageContext.portfolioItem.previewImageLink}`} alt={`Screenshot of ${this.props.pageContext.portfolioItem.title}`} className="featured"/>
          </section>
          <h3>More about this project...</h3>
          <hr className="divider"/>
          <p>{this.props.pageContext.portfolioItem.description}</p>
          <h3>Technologies used</h3>
          <hr className="divider"/>
          <ul>
            {addTags(this.props.pageContext.portfolioItem.tags)}
          </ul>
        </div>
      </MainLayout>
    );
  }
}

export default PortfolioPage;
