import "./WorkCardStyles.css";

import React from 'react';
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="image"/>
            <h2 className="project-title">Project Title</h2>
            <div className="pro-details">
                <p>This is Text</p>
                <div className="pro-btns">
                    <NavLink></NavLink>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
