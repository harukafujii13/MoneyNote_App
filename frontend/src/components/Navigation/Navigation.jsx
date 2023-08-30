import React, { useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';

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

  const activeStyle = 'text-[#1F7A8C]';
  const nonActiveStyle = 'text-primary-gunmetal';

  return (
    <div>
      <div className="hidden md:block p-8 w-56 h-full bg-opacity-75 bg-white border-3 border-white backdrop-blur-lg rounded-xl flex flex-col justify-start items-center font-nunito">
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
              <p>Sign Out</p>
            </li>
          </ul>
        </div>
      </div>

      <div
        onClick={() => setShowMenu(true)}
        className="w-6 h-5 flex flex-col justify-between items-center md:hidden text-4xl text-primary-gray cursor-pointer overflow-hidden">
        <span className="w-full h-[2px] bg-black"></span>
        <span className="w-full h-[2px] bg-black"></span>
        <span className="w-full h-[2px] bg-black"></span>
      </div>
      {showMenu && (
        <div
          ref={ref}
          onClick={handleClick}
          className="absolute md:hidden top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-start">
          <div className="md:w-2/5 sm:w-3/5 w-full h-full overflow-y-scroll scrollbarHide bg-white flex flex-col items-center px-4 py-10 relative">
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
              <li onClick={closeMenu}>
                <p>Sign Out</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
