import React, { useState, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useLogoutMutation } from '../../slices/usersApislice';
import { logout } from '../../slices/authSlice';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const ref = useRef(null);

  const isActive = (path) => location.pathname === path;

  const handleClick = (e) => {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const { useInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  const activeStyle = 'text-[#1F7A8C]';
  const nonActiveStyle = 'text-primary-gunmetal';

  return (
    <div>
      <div className="hidden md:flex flex-col w-56 h-full p-8 bg-opacity-75 bg-white border-3 border-white backdrop-blur-lg rounded-xl justify-start items-center font-nunito">
        <div className="flex flex-row justify-center items-center">
          <p className="text-7xl mr-2">
            <BiUserCircle />
          </p>
          <div className="text-2xl font-bold">Haruka</div>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col h-[30rem] gap-5 text-xl font-semibold justify-center">
            <li>
              <NavLink
                to="/home"
                className={isActive('/home') ? 'text-[#1F7A8C]' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/income"
                className={isActive('/income') ? 'text-[#1F7A8C]' : ''}>
                Incomes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/expense"
                className={isActive('/expense') ? 'text-[#1F7A8C]' : ''}>
                Expenses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile"
                className={isActive('/profile') ? 'text-[#1F7A8C]' : ''}>
                Profile
              </NavLink>
            </li>
            <li>
              <div
                onClick={logoutHandler}
                className="hover:text-[#1F7A8C]">
                Sign Out
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        onClick={() => setShowMenu(true)}
        className="md:hidden flex flex-col justify-between items-center w-6 h-5 text-4xl text-primary-gray cursor-pointer">
        <span className="w-full h-[2px] bg-black"></span>
        <span className="w-full h-[2px] bg-black"></span>
        <span className="w-full h-[2px] bg-black"></span>
      </div>
      {showMenu && (
        <div
          ref={ref}
          onClick={handleClick}
          className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-start md:hidden">
          <div className="w-full h-full overflow-y-scroll scrollbarHide bg-white flex flex-col items-center px-4 py-10 relative md:w-2/5 sm:w-3/5">
            <MdOutlineClose
              onClick={() => setShowMenu(false)}
              className="text-4xl text-black cursor-pointer absolute top-4 right-4"
            />
            <div className="flex flex-row justify-center items-center mt-[3rem]">
              <p className="text-7xl mr-3">
                <BiUserCircle />
              </p>
              <div className="text-2xl font-bold">Haruka</div>
            </div>
            <ul className="flex flex-col gap-6 items-start mt-[3rem] text-xl font-semibold">
              <NavLink
                to="/home"
                className={isActive('/home') ? activeStyle : nonActiveStyle}
                onClick={closeMenu}>
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/income"
                className={isActive('/income') ? activeStyle : nonActiveStyle}
                onClick={closeMenu}>
                <li>Incomes</li>
              </NavLink>
              <NavLink
                to="/expense"
                className={isActive('/expense') ? activeStyle : nonActiveStyle}
                onClick={closeMenu}>
                <li>Expenses</li>
              </NavLink>
              <NavLink
                to="/profile"
                className={isActive('/profile') ? activeStyle : nonActiveStyle}
                onClick={closeMenu}>
                <li>Profile</li>
              </NavLink>
              <li>
                <div
                  className="hover:text-[#1F7A8C]"
                  onClick={logoutHandler}>
                  Sign Out
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
