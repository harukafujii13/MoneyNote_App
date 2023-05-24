import React from "react";
import avatar from "../../assets/avatar.png";
import { signout } from "../../utils/Icons";
import { MenuItems } from "../../utils/MenuItem";

const Navigation = () => {
  return (
    <div>
      <img src={avatar} />
      <div>
        <h1>Haruka</h1>
        <h2>Your Money</h2>
      </div>
      <ul>
        {MenuItems.map((item) => {
          return (
            <li key={item.id}>
              {item.icon}
              <span>{item.title}</span>
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
