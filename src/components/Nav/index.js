import React from "react";

import {Link} from "react-router-dom";
function Nav() {
  const handleClick = () => {
    console.log("click handled");
  };

  return (
    <header data-testid="header" className="flex-row px-1">
      <nav>
        <ul className="navbar">
          <li className="mx-2">
            <Link to ="/"> 
              About me
              </Link>
          </li>
          <li className={"mx-2"}>
            <Link to="/portfolio">
              Portfolio
              </Link>
          </li>
          <li className={"mx-2"}>
          <Link to="/resume" >
              Resume
              </Link>
          </li>
          <li className={"mx-2"}>
          <Link to="/contact"> 
              Contact
            </Link>
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
