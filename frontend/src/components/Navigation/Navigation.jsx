import React from "react";
import avatar from "../../assets/avatar.png";
import { signout } from "../../utils/Icons";
import { MenuItems } from "../../utils/MenuItem";

const Navigation = () => {
  return (
    <div className="p-8 w-96 h-full bg-opacity-75 bg-white border-3 border-white backdrop-blur-lg rounded-xl flex flex-col justify-between gap-8">
      <div className="h-100 flex items-center gap-4">
        <img
          src={avatar}
          className="w-20 h-20 rounded-full bg-pink-100 border-2 border-white p-1 shadow-sm"
        />
        <div>
          <h1 className="text-rgba-34-34-96 font-bold">HARUKA</h1>
          <p className="text-rgba-34-34-96-60">Your Money</p>
        </div>
      </div>
      <ul className="flex flex-col h-full">
        {MenuItems.map((item) => {
          return (
            <li
              className="items-center my-1 font-medium cursor-pointer transition-all duration-400 text-rgba-34-34-96-60 pl-4 relative"
              key={item.id}>
              {item.icon}
              <span className="ml-4">{item.title}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <li>{signout}Sign Out</li>
      </div>
    </div>
  );
};

export default Navigation;
