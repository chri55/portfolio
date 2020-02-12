import React, { Component } from "react";
import Helmet from "react-helmet";
import MainLayout from "../layout/MainLayout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </MainLayout>
    );
  }
}

export default AboutPage;
