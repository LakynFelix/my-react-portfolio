import React from "react";

function Nav() {
  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header data-testid="header" className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <a href="#portfolio" onClick={() => handleClick()}>
              Portfolio
            </a>
          </li>
          <li className={"mx-2"}>
            <a href="#resume" onClick={() => handleClick()}>
              Resume
            </a>
          </li>
          <li className={"mx-2"}>
            <a href="#contact" onClick={() => handleClick()}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

// import React from "react";

// export default function Nav() {
//   return (
//  <header>
//       <nav class="nav">
//       <NavLink to="/about">
//         <a href="#about">About Me</a>&nbsp;&nbsp;&nbsp;&nbsp;
//         </NavLink>
//         <NavLink to="/portfolio">
//         <a href="#portfolio">Portfolio</a>&nbsp;&nbsp;&nbsp;&nbsp;
//         </NavLink>
//         <NavLink to="/contact">
//         <a href="#contact">Contact Me</a>&nbsp;&nbsp;&nbsp;&nbsp;
//         </NavLink>
//         <NavLink to="/resume">
//         <a href="#resume">Resume</a>&nbsp;&nbsp;&nbsp;&nbsp;
//         </NavLink>
//       </nav>
//        <h2 className="name">Lakyn M Felix</h2>
//     </header>
//   );
// }
