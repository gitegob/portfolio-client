import React from 'react';
import './Skills.css';
import Skill from '../Skill/Skill';

const Skills = () => {
  return (
    <section className="padding" id="skills">
      <h1 className="section-title">Languages & Technologies.</h1>
      <div className="skills-container">
        <Skill skill={{ name: 'HTML', percentage: '95%' }} />
        <Skill skill={{ name: 'CSS', percentage: '90%' }} />
        <Skill skill={{ name: 'Javascript', percentage: '90%' }} />
        <Skill skill={{ name: 'ReactJS + Redux/Context', percentage: '85%' }} />
        <Skill skill={{ name: 'Redux', percentage: '75%' }} />
        <Skill skill={{ name: 'NodeJS + Express', percentage: '90%' }} />
        <Skill skill={{ name: 'PostgreSQL + Sequelize', percentage: '80%' }} />
        <Skill skill={{ name: 'MongoDB + Mongoose', percentage: '75%' }} />
      </div>
    </section>
  );
};

export default Skills;
