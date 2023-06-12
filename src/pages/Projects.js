import React from 'react'
import ProjectItem from '../components/ProjectItem';
import Proj1 from '../assets/running.jpeg';
import Proj2 from '../assets/spotify.jpeg';
import "../styles/Projects.css";
import Proj3 from "../assets/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg"
function Projects() {
  return (
    <div className='projects'>
        <h1>My Personal Projects</h1>
    <div className='projectList'>
        <ProjectItem name="Oh My Run" image={Proj1}/>
        <ProjectItem name="Spotify Clone" image={Proj2}/>
        <ProjectItem name="Task List" image={Proj3}/>
    </div>
    </div>
  );
}

export default Projects;