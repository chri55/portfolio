import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BottomNavigation from "../components/BottomNavigation/BottomNavigation";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header />
        {children}
        <Footer config={config}>Contact me</Footer>
        <section className="bottom-spacer"></section>
        <BottomNavigation></BottomNavigation>
      </div>
    );
  }
}
