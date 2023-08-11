import React from "react";
import "./Skill.css";

const Skill = ({ skill }) => {
  return (
    <>
      <div className="skill">
        <div className="progress-value">{skill.name}</div>
      </div>
    </>
  );
};

export default Skill;
