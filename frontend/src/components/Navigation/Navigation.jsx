import React from "react";
import avatar from "../../assets/avatar.png";
import { signout } from "../../utils/Icons";
import { MenuItems } from "../../utils/MenuItem";

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
        {MenuItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`items-center my-1 font-medium cursor-pointer transition-all duration-400  pl-4 relative ${
                active === item.id
                  ? "text-primary-color font-semibold"
                  : "text-primary-color2 opacity-80"
              }`}>
              {active === item.id && (
                <div className="absolute left-0 top-0 w-1 bg-primary-color h-full rounded-r-md" />
              )}
              <span>{item.icon}</span>
              <span className="ml-4">{item.title}</span>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-row">
        <li>{signout}</li>
        <li className="ml-2">Sign Out</li>
      </ul>
    </nav>
  );
};

export default Navigation;
