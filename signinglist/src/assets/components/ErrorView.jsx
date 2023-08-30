import React from "react";
import { Title } from "./Title";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import errorImg from "../images/error-img.png";

const ErrorView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const navigate = useNavigate();

  const handdleClick = () => {
    navigate("/");
  };

  return (
    <div className=" md:p-16 md:bg-paleblack md:h-screen md:flex md:justify-center md:items-center">
      <div className="md:bg-white flex flex-col gap-8 p-10 md:rounded-2xl md:min-h-[400px] md:w-[400px] min-h-screen justify-end">
        
        <img src={errorImg} alt="Error icon" className="w-[60px] h-[60px]" />

        <Title text="Oops!" />

        <p className="">
          Error submitting the form. The email address you've entered is invalid
          or already in use. Please enter a valid email address that has not
          been previously registered.
        </p>
        <button
          type="submit"
          onClick={handdleClick}
          className="rounded-lg bg-blue-950 p-4 text-gray-200 mt-64 md:mt-0"
        >
          Try again!
        </button>
      </div>
      </div>
  );
};

export default ErrorView;
