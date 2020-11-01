/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './Skills.css';
import { useDispatch, useSelector } from 'react-redux';
import Skill from '../Skill/Skill';
import { getSkills } from '../../store/actions/skills';

const Skills = () => {
  const { skills } = useSelector((store) => store.skills);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSkills());
  }, []);
  return (
    <section className="padding" id="skills">
      <h1 className="section-title">Languages & Technologies.</h1>
      <div className="skills-container">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
