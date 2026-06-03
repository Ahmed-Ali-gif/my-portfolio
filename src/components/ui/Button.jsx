import React from "react";

const Button = ({className,title,icon}) => {
  return (
    <>
      <button className={`${className} flex items-center gap-2 rounded-lg`}>
       {title}
       <span className="text-sm">{icon}</span>
      </button>
    </>
  );
};

export default Button;
