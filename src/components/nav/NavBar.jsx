import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Projects", path: "project" },
    { title: "Skills", path: "skills" },
    { title: "About", path: "about" },
    { title: "Journey", path: "journey" },
    { title: "Contact", path: "contact" },
  ];
  return (
    <ul className="flex items-center gap-4">
      {navItems.map((elem, indx) => {
        const { title, path } = elem;
        return (
          <li key={indx}>
            <NavLink
              className={({ isActive }) => `text-[14px] font-semibold transition-all duration-75 px-2 py-2 leading-[100%] 
                ${isActive ? "text-blue-500 border-b-2" : "hover:text-blue-400"}
                `}
              to={path}
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
