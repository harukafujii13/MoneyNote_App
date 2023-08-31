import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/register', { name, email, password })
      .then((result) => console.log(result));
    navigate('/login').catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-primary-gunmetal">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96 md:w-1/3 lg:w-1/4">
        <div className="text-2xl font-bold mb-4 flex justify-center">
          Register
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              autoComplete="off"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              autoComplete="off"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 hover:bg-[#78D1E2] text-white rounded-md bg-primary-teal">
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">Already have an account?</p>
          <Link
            to="/login"
            className="text-primary-pink hover:underline ">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

//rfce
