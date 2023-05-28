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
import { dateFormat } from "../../utils/dateFormat";

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
  const categoryIcon = () => {
    switch (category) {
      case "salary":
        return <i className="text-2xl text-primary-color">{money}</i>;
      case "freelancing":
        return <i className="text-2xl text-primary-color">{freelance}</i>;
      case "investments":
        return <i className="text-2xl text-primary-color">{stocks}</i>;
      case "stocks":
        return <i className="text-2xl text-primary-color">{users}</i>;
      case "bitcoin":
        return <i className="text-2xl text-primary-color">{bitcoin}</i>;
      case "bank":
        return <i className="text-2xl text-primary-color">{card}</i>;
      case "youtube":
        return <i className="text-2xl text-primary-color">{yt}</i>;
      case "other":
        return <i className="text-2xl text-primary-color">{piggy}</i>;
      default:
        return "";
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case "education":
        return <i className="text-2xl text-primary-color">{book}</i>;
      case "groceries":
        return <i className="text-2xl text-primary-color">{food}</i>;
      case "health":
        return <i className="text-2xl text-primary-color">{medical}</i>;
      case "subscriptions":
        return <i className="text-2xl text-primary-color">{tv}</i>;
      case "takeaways":
        return <i className="text-2xl text-primary-color">{takeaway}</i>;
      case "clothing":
        return <i className="text-2xl text-primary-color">{clothing}</i>;
      case "travelling":
        return <i className="text-2xl text-primary-color">{freelance}</i>;
      case "other":
        return <i className="text-2xl text-primary-color">{circle}</i>;
      default:
        return "";
    }
  };

  return (
    <div
      className="bg-FCF6F9 border-2 border-white shadow-lg rounded-lg p-4 mb-4 flex items-center gap-4 w-full text-222260"
      indicator={indicatorColor}>
      <div className="icon w-20 h-20 rounded-lg bg-F5F5F5 border-2 border-white flex items-center justify-center">
        {type === "expense" ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content flex-1 flex flex-col gap-1">
        <h5 className="text-lg pl-8 relative text-primary-color font-semibold ">
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-indicator">
            ⭐️
          </span>
          {title}
        </h5>
        <div className="inner-content flex justify-between items-center">
          <div className="text flex items-center gap-3">
            <p className="flex items-center gap-1.5 text-primary-color opacity-80">
              {dollar} {amount}
            </p>
            <p className="flex items-center gap-1.5 text-primary-color opacity-80">
              {calender} {dateFormat(date)}
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
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeItem;
