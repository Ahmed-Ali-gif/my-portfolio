import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ className, title, icon, path,view, download}) => {
  return (
    <>
      <NavLink to={path} title={view} download>
        <button className={`${className} flex items-center gap-2 rounded-lg cursor-pointer `}>
          {title}
          <div className="text-xl">{icon}</div>
        </button>
      </NavLink>
    </>
  );
};

export default Button;
