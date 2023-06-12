import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hola, my name is Tatiana</h2>
        <div className="prompt">
          <p>
            A software developer student with a passion for learning and
            creating
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
              ReactJS, HTML, CSS, NPM, MaterialUI, Yarn, WebPack, Redux, RTK{" "}
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>Postgres, Flask, NestJS </span>
          </li>
          <li className="item">
            <h2>Programming Languages</h2>
            <span>Python, JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
