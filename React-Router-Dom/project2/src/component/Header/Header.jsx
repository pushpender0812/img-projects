import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
          </li>
          <li>
            <NavLink>Blog</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
