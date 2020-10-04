import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <h3>navbar</h3>
      <ul>
        <Link to="/">
          <li>HomeScreen</li>
        </Link>
        <Link to="/alertscreen">
          <li>alertscreen</li>
        </Link>
        <Link to="/changepassowrdscreen">
          <li>changepassowrdscreen</li>
        </Link>


        changepassowrdscreen
      </ul>
    </nav>
  );
}

export default NavBar;
