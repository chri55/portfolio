import React, { Component } from "react";
import Helmet from "react-helmet";
import MainLayout from "../layout/MainLayout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import "./index.css";
import "./about.css";

class AboutPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="index-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <div className="content">
            <div className="profile">
              <img class="prof" src="https://cpt-images.s3.us-east-2.amazonaws.com/chris-min.jpg" />
            </div>
            <h2>About Me</h2>
            <p>I love to develop beautiful, responsive sites and
              present incredible user experiences. I have a versatile skillset -
              ranging from creating static sites with HTML, CSS, and Javascript
              to creating robust web applications with <strong>React, GraphQL, SQL and more!</strong>
              <br />
              <br />
            Currently, I work as Software Engineer II at <a href="https://reachify.io">Reachify</a> making call deflection software to help restaurants focus on the food.
            </p>
          </div>
          <div className="content">
            <h2>Resume</h2>
            <br></br>
            <h3>Skills</h3>
            <div className="two-col">
              <ul>
                <li>Coding and Programming</li>
                <li>UI / UX Design</li>
                <li>Web Development</li>
                <li>Securing Software using OWASP concepts</li>
                <li>Accessible Design</li>
              </ul>
              <ul>
                <li>Site Troubleshooting</li>
                <li>Information Architecture</li>
                <li>Cross-browser compatibility</li>
                <li>Multimedia Designs</li>
              </ul>
            </div>
            <br></br>
            <h3>Experience</h3>
            <h4 className="exp"><strong>Software Engineer II (Reachify)</strong></h4>
            <p className="exp light"><em>July 2022 - Present</em></p>
            <p className="exp">Currently I am developing solutions for Reachify's call deflection self-management portal that allows customers to create dynamic call flows for their phone systems and answer customer questions automatically. I created and shipped many features of the platform prior to release, utilizing many front- and back-end technologies, including React, Node, GraphQL and PostgreSQL.</p>
            <p className="exp"></p>
            <br></br>
            <h4 className="exp"><strong>Software Engineer (BTB Security)</strong></h4>
            <p className="exp light"><em>November 2020 - July 2022</em></p>
            <p className="exp">Created and implemented solutions and integrations for BTB's Managed Detection and Response service, called RADAR®. Led a project to redesign the user interface from the ground up, migrating from an outdated Angular implementation to a modern React framework. Implemented back-end services in Go and PHP.</p>
            <p className="exp"></p>
            <br></br>
            <h4 className="exp"><strong>Researcher (DiSC)</strong></h4>
            <p className="exp light"><em>January 2019 - May 2020</em></p>
            <p className="exp">Worked for the Rutgers Camden Digital Studies Center (DiSC) researching harassment of online personalities. Specifically, we researched an "AI influencer" personality on Instagram that claimed to be a robot. In reality, a company was behind this character and that character was simply a 3D model set into the scenarios in her pictures. As a result, this character got a lot of harassment on Instagram, and our job was to collect and analyze the comments to determine how online harassment shown to these virtual entities was different to that shown to humans. More info can be found on <a href="http://club-405.com">Club 405's website.</a></p>
            <p className="exp"></p>
            <br></br>
            <h4 className="exp"><strong>Researcher (CCIB)</strong></h4>
            <p className="exp light"><em>June 2018 - June 2020</em></p>
            <p className="exp">Worked for the Rutgers Camden Center for Computational and Integrative Biology (CCIB) researching distributed search-and-evacuate algorithms using mobile agents. Our aim was to fully understand and recreate these algorithms in order to create the first visualizer to help other researchers in this field. These algorithms typically involve multiple mobile agents, (or for the sake of simplicity, bots) which are searching in an enclosed space for some sort of goal. As this is typically an evacuation problem, we say that the goal is an exit, and the algorithm terminates when a certain number of bots cooperate to find that exit. We created the initial framework for the simulator using JavaScript, and extended it to include the visualizer, which is made using <a href="https://d3js.org">D3.js.</a> We have since looked at other problems such as particle simulations on a triangular grid, and hope to create another simulation/visualization framework for this genre of problems. More information can be found at the project's website: <a href="#link-to-proj">Search and evacuations algorithms</a></p>
            <br></br>
            <h3>Education</h3>
            <h4 className="exp"><strong>Rutgers University Camden</strong></h4>
            <p className="exp light"><em>September 2016-May 2020</em></p>
            <p className="exp">Graduated with a Bachelor of Arts in Computer Science and Digital Studies.</p>
            <br></br>
            <h3>Awards & Honors</h3>
            <ul>
              <li>RUCHacks Winner</li>
              <li>PHISIM scholarship award winner</li>
              <li>Presented research at <a href="http://ccscne.org/">CCSCNE</a> for Rutgers Camden CCIB</li>
              <li>Presented research at <a href="https://www.acjs.org/default.aspx">ACJS</a> in San Antonio, and <a href="https://www.asc41.com/annualmeeting.html">ASC</a> in San Francisco, CA for Rutgers Camden DiSC</li>
            </ul>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default AboutPage;
