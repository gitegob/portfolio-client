import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <>
      <div className="project">
        <div className="project-img-container">
          <img alt="teamwork" src="/images/projs/my_brand.png" className="project-img" />
        </div>
        <div className="project-overlay">
          <h2 className="project-title">My Brand</h2>
          <p className="project-description text-center">My Personal Website. Get to know me.</p>
          <div className="project-links">
            <a href="https://github.com/gitego-brian/portfolio-ui/" className="project-link" button="true" target="_blank" rel="noopener noreferrer">
              Front-End
            </a>
            <a
              href="https://github.com/gitego-brian/portfolio-server"
              className="project-link"
              button="true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Back-end
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
