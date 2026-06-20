import React from "react";

const Box = ({icon ,title, info }) => {
  return (
    <div className="px-6 py-2 flex items-center bg-blue-200 rounded-sm">
      <div className="mr-3 bg-amber-300 px-2 py-1 rounded-sm">d</div>
      <div className="flex flex-col ">
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <h2>{info}</h2>
        </div>
      </div>
    </div>
  );
};

export default Box;
