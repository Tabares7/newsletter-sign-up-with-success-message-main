import React from "react";

const Input = ({ title, placeholder, buttontext }) => {
  return (
    <div className="flex flex-col gap-4 mt-10">
      <label className="text-sm font-semibold " htmlFor="input">
        {title}
      </label>
      <input
        type="mail"
        className="-mt-2 w-full border-solid border-2 border-black-300 p-4 rounded-lg"
        placeholder={placeholder}
        alt="email"
        required
        id="input"
      />
      <button className="rounded-lg bg-blue-950 p-4 text-gray-200">
        {buttontext}
      </button>
    </div>
  );
};

export default Input;
