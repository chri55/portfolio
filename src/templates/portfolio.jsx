import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import MainLayout from "../layout/MainLayout";
import About from "../components/About/About";
import portfolioItems from "../components/Portfolio/Portfolio";
import config from "../../data/SiteConfig";
import "./portfolio.css"

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

function renderPortfolio(items) {
  return items.map(({index, title, synopsis, description, link, repo, previewImageLink, tags, slug}) => {
    console.log(title);
    return (
      <div className="project" key={`key-${title.split()[0]}`}>
        <img src={`${previewImageLink}`} alt={`Screenshot of ${title}`} className="preview"/>
        <Link to={`/portfolio/${slug}/`}>
          <h3 className="projectName">{ title }</h3>
        </Link>
        <p><span className="synopsis">{ synopsis }</span></p>
        { /*
        <p className="description">{ description }</p>
        <a href={`${ link }`}>Link to project</a>
        <br/>
        <a href={`${ repo }`}>Github Repo for Project</a>
        <ul className="tags">
          {addTags({tags})}
        </ul>
        */}
      </div>
    )
  })
}

class PortfolioPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="index-container">
          <Helmet title={ `${config.siteTitle}` } />
          <div className="portfolio">
            <p>Below are a few of the projects I've worked on!</p>
          </div>
          <div className="portfolio">
            {renderPortfolio(this.props.pageContext.portfolioItems)}
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default PortfolioPage;
