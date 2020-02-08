import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import portfolioItems from "../components/Portfolio/Portfolio";

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

function renderPortfolio() {
  return portfolioItems.map(({index, title, synopsis, description, link, repo, previewImageLink, tags}) => {
    console.log(title);
    return (
      <div className="project" key={`key-${title.split()[0]}`}>
        <img src={`${previewImageLink}`} alt={`Screenshot of ${title}`} className="preview"/>
        <h3 className="projectName">{ title }</h3>
        <p><span className="synopsis">{ synopsis }</span></p>
        <p className="description">{ description }</p>
        <a href={`${ link }`}>Link to project</a>
        <br/>
        <a href={`${ repo }`}>Github Repo for Project</a>
        <ul className="tags">
          {addTags({tags})}
        </ul>
      </div>
    )
  })
}

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={ `${config.siteTitle}` } />
          <p>Below are a few of the projects I've worked on!</p>
          <div className="portfolio">
            {renderPortfolio()}
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
