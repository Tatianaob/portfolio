import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hola, I am Tatiana</h2>
        <div className="prompt">
          <p>
            A software developer student with a passion for learning and
            working in collaborative and diverese spaces
          </p>
          <EmailIcon />
          <LinkedInIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        {" "}
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, React, MaterialUI, Yarn, NPM, Redux
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>Postgres, Flask, RESTful API, NestJS</span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>Python, TypeScript, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
