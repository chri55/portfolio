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
        <Link to={`/portfolio/${slug}/`} partiallyActive={true}>
          <img src={`${previewImageLink}`} alt={`Screenshot of ${title}`} className="preview"/>
        </Link>
        <Link to={`/portfolio/${slug}/`} partiallyActive={true}>
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

function renderTechLogos(arr) {
  return arr.map(item => {
    return (
      <div className="innerTech">
        <object className="tech-logo" data={`https://cpt-images.s3.us-east-2.amazonaws.com/${item.toLowerCase()}.svg`} type='image/svg+xml'>
        </object>
        <h6 className="logo-desc">{`${item}`}</h6>
      </div>
    )
  })
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
              I'm Chris. I love to develop beautiful and responsive sites and present incredible user experiences. I have a versatile skillset -  ranging from creating static sites with HTML, CSS, and Javascript to creating robust web applications with React, Flask, and Django.
            </p>
            <Link to="/about"><h3>Learn more about me!</h3></Link>
          </div>
          <br/>
          <div className="content">
            <h2>Some Tech I Love To Use:</h2>
            <div className="tech">
              {renderTechLogos(["Gatsby", "React", "Sass", "GraphQL"])}
            </div>
          </div>
          <br/>
          <div className="content">
            <h2>Some Examples of my Work:</h2>
          </div>
          <div className="portfolio">
            {renderPortfolio()}
          </div>
          <div className="portfolio">
            <Link to="/portfolio/"><h3>See the rest of my portfolio!</h3></Link>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default IndexPage;
