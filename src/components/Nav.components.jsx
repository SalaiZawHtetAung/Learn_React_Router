import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavComponents = () => {
  return (
    <nav>
      <ol className=" flex space-x-5 text-blue-600 no-underline">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/book">Book</NavLink>
        </li>
        <li>
          <NavLink to="/book/2">DetailBook</NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default NavComponents;
