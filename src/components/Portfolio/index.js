import React from "react";
import data from "./projects.json";
import { capitalizeFirstLetter } from "../utils/helpers";

function Cards() {
  return (
    <div className="container">
      <h1>Projects</h1>
      {data.map((projects, i) => {
        return (
          <div className="card row justify-content-center " key={i}>
            <div className="card-content">
              <h2>{projects.title}</h2>
              <div className="card-image">
                <img
                  src={process.env.PUBLIC_URL + projects.image}
                  alt="projects"
                />
              </div>
              <br />

              <p className="mx-4 w-30 ">
                {projects.description}
                <br />
                <a href={projects.github} target="_blank" alt="GitHub">
                  GitHub
                </a>
                &nbsp;&nbsp;
                <a href={projects.deployed} target="_blank" alt="Deployed">
                  Deployed
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;