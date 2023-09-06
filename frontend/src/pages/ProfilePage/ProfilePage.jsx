import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader/Loader';
import { setCredentials } from '../../slices/authSlice';
import { useUpdateUserMutation } from '../../slices/usersApislice';
import InnerLayout from '../../styles/InnerLayout';

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.name]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password,
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        toast.success('Profile updated successfully!');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div>
      <InnerLayout>
        <div className="font-semibold text-3xl flex lg:justify-start md:justify-start justify-center lg:mb-0 md:mb-0 mb-4">
          Profile
        </div>

        <div className="flex items-center justify-center text-primary-gunmetal mt-[5.5rem]">
          <div className="rounded-lg shadow-lg w-[20rem] md:w-[20rem] lg:w-[27rem] border-2 border-white p-2">
            <div className="lg:text-2xl md:text-2xl text-xl font-bold mb-4 flex justify-center">
              Update Profile
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
                Update
              </button>
              {isLoading && <Loader />}
            </form>
          </div>
        </div>
      </InnerLayout>
    </div>
  );
};

export default ProfilePage;
