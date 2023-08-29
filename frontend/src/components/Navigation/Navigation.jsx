import React from 'react';
import avatar from '../../assets/avatar.png';
import { signout } from '../../utils/Icons';
import { MenuItems } from '../../utils/MenuItem';
import { Link } from 'react-router-dom';

const Navigation = ({ active, setActive }) => {
  return (
    <nav className="p-8 w-96 h-full bg-opacity-75 bg-white border-3 border-white backdrop-blur-lg rounded-xl flex flex-col justify-between gap-8">
      <div className="h-100 flex items-center gap-4">
        <img
          src={avatar}
          className="w-20 h-20 rounded-full bg-pink-100 border-2 border-white p-1 shadow-sm"
        />
        <div>
          <h1 className="text-primary-color font-bold">HARUKA</h1>
          <p className="text-primary-color2">Your Money</p>
        </div>
      </div>
      <ul className="flex flex-col h-full">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/income">Income</Link>
        </li>
        <li>
          <Link to="/expense">Expense</Link>
        </li>
      </ul>
      <ul className="flex flex-row">
        <li>{signout}</li>
        <li className="ml-2">Sign Out</li>
      </ul>
    </nav>
  );
};

export default Navigation;
