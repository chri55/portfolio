import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
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

function renderPortfolio() {
  return portfolioItems.map(({index, title, synopsis, description, link, repo, previewImageLink, tags, slug}) => {
    console.log(title);
    const args = {
      index,
      title,
      synopsis,
      description,
      link,
      repo,
      previewImageLink,
      tags,
      slug,
    };
    return (
      <div className="project" key={`key-${title.split()[0]}`}>
        <img src={`${previewImageLink}`} alt={`Screenshot of ${title}`} className="preview"/>
        <Link to={`/portfolio/${slug}/`} state={{args}}>
          <h3 className="projectName">{ title }</h3>
        </Link>
        <p><span className="synopsis">{ synopsis }</span></p>
        <a href={`${ link }`}>Link to project</a>
        <br/>
        <ul className="tags">
          {addTags({tags})}
        </ul>
      </div>
    )
  }).slice(0, 2);
}

class IndexPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="index-container">
          <Helmet title={ `${config.siteTitle}` } />
          <div className="content">
            <h2>Hi!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <br/>
          <div className="content">
            <h2>Some Examples:</h2>
          </div>
          <div className="portfolio">
            {renderPortfolio()}
          </div>
          <div className="portfolio">
            <Link to="/see-portfolio"><h3>See the rest of my portfolio ==></h3></Link>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default IndexPage;
