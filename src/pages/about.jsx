import React, { Component } from "react";
import Helmet from "react-helmet";
import MainLayout from "../layout/MainLayout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import "./index.css";

class AboutPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="index-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <div className="content">
            <h2>About Me</h2>
            <p>I love to develop beautiful and responsive sites and present incredible user experiences. I have a versatile skillset -  ranging from creating static sites with HTML, CSS, and Javascript to creating robust web applications with React, Flask, and Django.
            <br/>
            <br/>
            Currently, I work as a researcher at Rutgers University-Camden for two different departments: The Center for Computational and Integrative Biology (CCIB), and the Digital Studies Center (DiSC). Through these jobs, I got to learn vital web developemnt skills and take on collaborative projects well beyond the scope of what I could do alone.
            
            </p>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default AboutPage;
