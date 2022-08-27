import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "bootstrap/dist/css/bootstrap.min.css";
import "./tab.css";

const Tabsss = () => {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     width: "100%",
    //     flexDirection: "column",
    //     height: "100vh",
    //   }}
    // >
    //   <h4 style={{ marginTop: "0px", fontSize: "60PX" }}>Credentials</h4>
    //   <Tabs
    //     className="tabs"
    //     defaultActiveKey="second"
    //     style={{ margin: "90px " }}
    //   >
    //     <Tab eventKey="first" title="SKILLS">
    //       <div className="skills">
    //         <li>
    //           <h3>REACTJS</h3>
    //           <span className="bar">
    //             <span className="reactjs"></span>
    //           </span>
    //         </li>

    //         <li>
    //           <h3>MONGODB</h3>
    //           <span className="bar">
    //             <span className="mongodb"></span>
    //           </span>
    //         </li>

    //         <li>
    //           <h3>MACHINE LEARNING</h3>
    //           <span className="bar">
    //             <span className="ml"></span>
    //           </span>
    //         </li>
    //       </div>
    //     </Tab>

    //     <Tab eventKey="second" title="EXPERIENCE">
    //       <p>webTek Labs Pvt.Ltd</p>
    //       <h5>Industry training</h5>
    //       <p>The Sparks Foundation</p>
    //       <h5>Data Science and Business Analytics</h5>
    //       <h5>TitleWeb Development & Designing</h5>
    //     </Tab>
    //     <Tab eventKey="third" title="EDUCATION">
    //       <div className="edu">
    //         <i class="fa fa-graduation-cap" aria-hidden="true">
    //           Masters of Computer Application
    //           <dl></dl>
    //           <dt></dt>
    //           <dd>Dayananda sagar college of engineering</dd>
    //         </i>
    //       </div>
    //     </Tab>
    //     <Tab eventKey="fourh" title="CERTIFICATION">
    //       <p>
    //         Google data analytics: foundation Cisco Networking Academy
    //         Introduction to Cybersecurity LearnCodeOnline.in MERN STACK
    //         University of Washington Machine Learning Foundations: A Case Study
    //         Approach
    //       </p>
    //     </Tab>
    //   </Tabs>
    // </div>

    //  -------- starts here -------
    <div>
      <section id="resume" class="resume">
        <div class="container">
          <div class="section-title">
            <h1 style={{ textAlign: "center" }}>Credentials</h1>
            <p></p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Summary</h3>
              <div class="resume-item pb-0">
                <h3 style={{ fontSize: "20px" }}>Technical Skills</h3>
                <p>
                  <em>
                    <b>Languages: </b> C/C++, Python, Javascript, SQL, HTML/CSS{" "}
                    <br></br>
                    <b>Frameworks:</b> React, Node.js, Express.js
                    Database:Mongodb
                    <br></br>
                    <b>Libraries:</b> pandas, NumPy, Matplotlib<br></br>
                  </em>
                </p>
                <p>
                  <h3 style={{ fontSize: "20px" }}>Coding Profile </h3>
                  <ul>
                    <a href="https://leetcode.com/piyushghosh17/">
                      <li>Leetcode</li>
                    </a>
                    <a href="https://www.hackerrank.com/piyushghosh2021">
                      <li>HackerRank</li>
                    </a>
                  </ul>
                </p>
                <h3 style={{ fontSize: "20px" }}>CERTIFICATES</h3>
                <p>
                  <ul>
                    <li>
                      <a href="https://www.coursera.org/account/accomplishments/certificate/RPCJKQVT2MF7">
                        Machine Learning Foundations :
                      </a>{" "}
                      A Case Study Approach (Issued by University of
                      Washington(coursera))
                    </li>
                    <li>
                      {" "}
                      <a href="https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/50332/3502596_50332.pdf?1610342970">
                        MERN STACK
                      </a>
                      : ( Issued by learnCodeOnline.in)
                    </li>
                  </ul>
                </p>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Masters of Computer Application</h4>
                <h5>2021 - 2023</h5>
                <p>
                  <em>Dayananda Sagar College Of Engineering, BLR ,IND</em>
                </p>
                <p></p>
              </div>
              <div class="resume-item">
                <h4>Bachelors of Computer Application</h4>
                <h5>2018 - 2021</h5>
                <p>
                  <em>Brainware University, KOL, IND</em>
                </p>
                <p></p>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Experience</h3>
              <div class="resume-item">
                <h4>Web Development and Designing </h4>
                <h5>1 month</h5>
                <p>
                  <em>The spark Foundation </em>
                </p>
                <p>
                  <ul>
                    <li>
                      Developed and Designed Banking system and donation website
                      for unprivileged children using MERN STACK
                    </li>
                    <li>
                      When user logs into the platform thereafter he/she can do
                      transaction. With every transaction it will reflect into
                      their account{" "}
                    </li>
                    <li>
                      An additional donation page is designed where donors can
                      directly donate . Razorpay is used as Payment gateway .
                    </li>
                    <li></li>
                  </ul>
                </p>
              </div>
              <div class="resume-item">
                <h4>Data Science and Business Analytics</h4>
                <h5>1 month</h5>
                <p>
                  <em>The spark Foundation</em>
                </p>
                <p>
                  <ul>
                    <li>
                      Exploratory data analysis on terrorism, retail and sports
                      data set..
                    </li>
                    <li>
                      Analysis on Sports data set like which team had won by max
                      wickets/runs, team with most wins per season. Data
                      Visualization is done to convey Trends in Data to decision
                      makers
                    </li>
                    <li>
                      As security/defense analyst, I have tried to find out hot
                      zone of terrorism. What all security issues and insights
                      can be driven by EDA. Constructed graph using pandas,
                      seaborn and matplotlib.pyplot
                    </li>
                    <li>
                      As Sales Analyst, I have tried to find best month of
                      sales, which city had the highest sales, what products
                      sold most and why do you think it sold the most.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tabsss;
