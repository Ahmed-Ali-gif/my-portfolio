import React from "react";
import { NavLink, useNavigate, useRouteError } from "react-router-dom";
import Button from "../ui/Button";

const Error = () => {
  const error = useRouteError();
  const goBack = useNavigate();
  const back = () => {
    goBack(-1);
  };
  return (
    <div className="text-4xl flex justify-center items-center min-h-screen">
      <div>
        <h1>{error.data}</h1>
        <NavLink>
          <Button className="px-2 py-2 bg-amber-700 text-xl cursor-pointer rounded-2xl border my-4" onClick={back} title="ReturnBack" />
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
