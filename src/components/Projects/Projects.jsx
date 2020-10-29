import React from 'react';
import './Projects.css';
import Project from '../Project/Project';

const Projects = () => {
  return (
    <section className="padding" id="projects">
      <h1 className="section-title">What I've been up to.</h1>
      <div id="projects-container">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
