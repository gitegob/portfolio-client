/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './Projects.css';
import Project from '../Project/Project';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/actions/projects';
import { useEffect } from 'react';

const Projects = () => {
  const { projects } = useSelector((store) => store.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  return (
    <section className="padding" id="projects">
      <h1 className="section-title">What I've been up to.</h1>
      <div id="projects-container">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
