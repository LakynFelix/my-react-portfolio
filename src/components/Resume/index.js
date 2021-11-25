import React from "react";
export default function Resume() {
  return (
    <div className="resume row justify-content-center">
      <h2 className> MY RESUME</h2>
      <p className="w-50 mx-1">
        <a href="https://www.linkedin.com/in/lakyn-felix-a8a8b5a4/">Linkedin</a>
        &nbsp;&nbsp;
        <a href="https://github.com/LakynFelix">Github</a>&nbsp;&nbsp;
        <a href="https://www.facebook.com/lakyn.felix">
          Facebook <i class="fab fa-facebook"></i>
        </a>
        &nbsp;&nbsp;
        <a href="https://www.instagram.com/lakynmfphotography/">Instagram</a>
      </p>
      <br></br>

      <h3> Education</h3>
      <p className="w-50 mx-1">
        {" "}
        Web Development Bootcamp at Carleton University
      </p>

      <p class="w-50 mx-1">Interactive Multimedia Development</p>

      <h3>Skills</h3>
      <p className="w-50 mx-1">
        Proficient in HTML, CSS, JavaScript, Node.js, Express, MongoDB, MySQL
        and React.
      </p>
      <p className="w-50 mx-1">
        Familiar with Adobe Photoshop, Illustrator, Lightroom and InDesign.
        &nbsp;&nbsp;
        <a href="../assets/resume/Lakyn2021.pdf" download >
          Download Resume
        </a>
      </p>
    </div>
  );
}
