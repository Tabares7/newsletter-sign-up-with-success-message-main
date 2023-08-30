import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = ({ title, placeholder, buttontext }) => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      // Redirige a la vista de éxito y pasa el email como un parámetro
      navigate(`/success?email=${encodeURIComponent(email)}`);
    } else {
      // Redirige a la vista de error
      navigate('/error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-10">
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
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit' className="rounded-lg bg-blue-950 p-4 text-gray-200">
        {buttontext}
      </button>
    </form>
  );
};

export default Input;
