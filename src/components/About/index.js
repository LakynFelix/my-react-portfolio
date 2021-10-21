import React from "react";
import profileImage from "../../assets/cover/lakyn.jpg";
function About() {
  return (
      <section className="my-5 " >
        <h1 id="about">About Me</h1>
        <img
          src={profileImage}
          className="rounded-circle"
          alt="Profile Picture Lakyn Felix"
        />
        <div className="my-2">
        <p className="mx-1 aboutmesection w-30">
          My Name is Lakyn Felix and I am a Student in the Full Stack Web
          Developer Program At Carleton University. I have a passion for
          learning new things and I am always looking for new ways to improve
          myself. In my free time I love doing photography, I have been a
          photographer for the last 10 or so years. I have worked in many bars
          and done many events, shows, weddings ect.. Including Bluefest,
          Glowfair, Riverside Festival and many more.
        </p>
        </div>
      </section>
    )
  }
  
  export default About;



