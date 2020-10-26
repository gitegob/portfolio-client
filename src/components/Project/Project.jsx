import React from 'react';

const Project = () => {
  return (
    <>
      <div className="project">
        <div className="project-img-container">
          <img alt="teamwork" src="./images/projs/teamwork.png" className="project-img" />
        </div>
        <div className="project-overlay">
          <h2 className="project-title">TeamWork</h2>
          <p className="project-description text-center">An internal social network for organizations’ employees.</p>
          <div className="project-links">
            <a href="https://github.com/gitego-brian/TeamWork" className="project-link" button="true">
              Front-End
            </a>
            <a href="https://github.com/gitego-brian/Teamwork-server" className="project-link" button="true">
              Back-end
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
