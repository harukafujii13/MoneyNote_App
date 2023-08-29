import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';

const Navigation = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="p-8 w-56 h-full bg-opacity-75 bg-white border-3 border-white backdrop-blur-lg rounded-xl flex flex-col justify-start items-center font-nunito">
      <div className="flex flex-row justify-center items-center">
        <p className="text-7xl mr-2">
          <BiUserCircle />
        </p>
        <div className="text-2xl font-bold">Haruka</div>
      </div>
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
    </nav>
  );
};

export default Navigation;
