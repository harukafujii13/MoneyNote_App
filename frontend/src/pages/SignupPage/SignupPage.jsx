import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRegisterMutation } from '../../slices/usersApislice';
import { setCredentials } from '../../slices/authSlice';
import Loader from '../../components/Loader/Loader';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/login'); //?
    }
  }, [navigate, userInfo]);

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   if (password !== confirmPassword) {
  //     toast.error('Password do not match');
  //   } else {
  //     try {
  //       const res = await register({ name, email, password }).unwrap();
  //       dispatch(setCredentials({ ...res }));
  //       navigate('/login');
  //     } catch (err) {
  //       toast.error(err?.data?.message || err.error);
  //     }
  //   }
  // };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error(
        'Please ensure your password and confirmation password match.'
      );
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success('Registration successful!');
        navigate('/login');
      } catch (err) {
        if (err.status === 500) {
          toast.error('Server error. Please try again later.');
        } else {
          toast.error(
            err?.data?.message ||
              'An error occurred during registration. Please try again.'
          );
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-primary-gunmetal">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96 md:w-1/3 lg:w-1/4">
        <div className="text-2xl font-bold mb-4 flex justify-center">
          Register
        </div>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              value={name}
              placeholder="Enter name"
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
              value={email}
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
              value={password}
              placeholder="Password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium">
              Confirm password
            </label>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm password"
              name="confirmPassword"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 hover:bg-[#78D1E2] text-white rounded-md bg-primary-teal">
            Register
          </button>
          {isLoading && <Loader />}
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
