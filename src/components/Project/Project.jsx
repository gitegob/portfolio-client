import React from 'react';
import './Project.css';

const Project = ({ project }) => {
  return (
    <>
      <div className="project">
        <div className="project-img-container">
          <img alt="teamwork" src={project.image || '/images/projs/my_brand.png'} className="project-img" />
        </div>
        <div className="project-overlay">
          <h2 className="project-title">{project.name || 'My Brand'}</h2>
          <p className="project-description text-center">{project.description || 'My Personal Website. Get to know me.'}</p>
          <div className="project-links">
            {project?.frontend && (
              <a
                href={project.frontend || 'https://github.com/gitego-brian/portfolio-ui/'}
                className="project-link"
                button="true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Front-End
              </a>
            )}
            {project?.backend && (
              <a
                href={project.backend || 'https://github.com/gitego-brian/portfolio-server'}
                className="project-link"
                button="true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Back-end
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
