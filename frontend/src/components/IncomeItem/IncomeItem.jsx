import React from "react";
import Button from "../Button/Button";
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  comments,
  dollar,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from "../../utils/Icons";

const IncomeItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) => {
  return (
    <div
      className="bg-FCF6F9 border-2 border-white shadow-lg rounded-lg p-4 mb-4 flex items-center gap-4 w-full text-222260"
      indicator={indicatorColor}>
      <div className="icon w-20 h-20 rounded-lg bg-F5F5F5 border-2 border-white flex items-center justify-center"></div>
      <div className="content flex-1 flex flex-col gap-1">
        <h5 className="relative text-lg pl-8">
          {title}
          <span
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-${indicatorColor}`}></span>
        </h5>
        <div className="inner-content flex justify-between items-center">
          <div className="text flex items-center gap-3">
            <p className="flex items-center gap-1.5 text-primary-color opacity-80">
              {dollar} 45
            </p>
            <p className="flex items-center gap-1.5 text-primary-color opacity-80">
              {calender} {date}
            </p>
            <p className="flex items-center gap-1.5 text-primary-color opacity-80">
              {comments}
              {description}
            </p>
          </div>
          <div className="btn-con">
            <Button
              icon={trash}
              bPad="p-4"
              bRad="rounded-full"
              bg="bg-primary-color"
              color="text-white"
              iColor="fill-white"
              hColor="hover:bg-pink-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeItem;
