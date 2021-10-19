import React from "react";
import data from "./projects.json";
import { capitalizeFirstLetter } from "../utils/helpers";

function Cards() {
  return (
    <div className="card-container">
      <h1>Projects</h1>
      {data.map((projects) => {
        return (
          <div className="card">
            <div className="card-image">
              <img src={projects.image} alt="projects"/>
            </div>
            <div className="card-content">
              <h2>{projects.title}</h2>
              <p>{projects.description}
              <a href={projects.github} alt="GitHub"/>
              <a href={projects.deployed} alt="Deployed"/>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
