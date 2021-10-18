import React from "react";
export default function Resume() {
  return (
    <div class="resume">
      <h2 className> MY RESUME</h2>
      <p>
        <a href="https://www.linkedin.com/in/lakyn-felix-a8a8b5a4/">Linkedin</a>&nbsp;&nbsp;
        <a href="https://github.com/LakynFelix">Github</a>&nbsp;&nbsp;
        <a href="https://www.facebook.com/lakyn.felix">Facebook <i class="fab fa-facebook"></i></a>&nbsp;&nbsp;
        <a href="https://www.instagram.com/lakynmfphotography/">Instagram</a>
      </p>
      <br></br>

      <h3> Education</h3>
      <p> Web Development Bootcamp at Carleton University</p>
      <p> Interactive Multimedia Development</p>

      <h3>Skills</h3>
      <p>
        {" "}
        Proficient in HTML, CSS, JavaScript, Node.js, Express, MongoDB, MySQL
        and React.
      </p>
      <p>
        {" "}
        Familiar with Adobe Photoshop, Illustrator, Lightroom and InDesign.
        &nbsp;&nbsp;
        <a href="../assets/resume/Resume 2021_lakynFelix.pdf" download>
          Download Resume
        </a>
      </p>
    </div>
  );
}
