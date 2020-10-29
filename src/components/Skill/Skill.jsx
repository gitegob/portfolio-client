import React from 'react';
import './Skill.css';

const Skill = ({ skill }) => {
  return (
    <>
      <div className="skill marginv">
        <div className="progress">
          <div className="progress-value" style={{ width: skill.percentage }}>
            {skill.name}
          </div>
        </div>
        <div className="percentage">{skill.percentage}</div>
      </div>
    </>
  );
};

export default Skill;
