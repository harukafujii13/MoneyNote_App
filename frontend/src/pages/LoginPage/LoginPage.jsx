import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/usersApislice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/home');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/home');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-primary-gunmetal">
      <div className="p-6 bg-white rounded-lg shadow-lg w-96 md:w-1/3 lg:w-1/4">
        <div className="text-2xl font-bold mb-4 flex justify-center">Login</div>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="Enter email"
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
              placeholder="Enter password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 hover:bg-[#78D1E2] text-white rounded-md bg-primary-teal">
            Login
          </button>
          {isLoading && <Loader />}
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">Don't have an account?</p>
          <Link
            to="/register"
            className="text-primary-pink hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
