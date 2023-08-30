import React from 'react';
import Button from '../Button/Button';
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
} from '../../utils/Icons';
import { dateFormat } from '../../utils/dateFormat';
import { TbPigMoney } from 'react-icons/tb';

const CardItem = ({
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
      case 'salary':
        return <i className="text-2xl">{money}</i>;
      case 'freelancing':
        return <i className="text-2xl">{freelance}</i>;
      case 'investments':
        return <i className="text-2xl">{stocks}</i>;
      case 'stocks':
        return <i className="text-2xl">{users}</i>;
      case 'bitcoin':
        return <i className="text-2xl">{bitcoin}</i>;
      case 'bank':
        return <i className="text-2xl">{card}</i>;
      case 'youtube':
        return <i className="text-2xl">{yt}</i>;
      case 'other':
        return <i className="text-2xl">{piggy}</i>;
      default:
        return '';
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case 'education':
        return <i className="text-2xl">{book}</i>;
      case 'groceries':
        return <i className="text-2xl">{food}</i>;
      case 'health':
        return <i className="text-2xl">{medical}</i>;
      case 'subscriptions':
        return <i className="text-2xl">{tv}</i>;
      case 'takeaways':
        return <i className="text-2xl">{takeaway}</i>;
      case 'clothing':
        return <i className="text-2xl">{clothing}</i>;
      case 'travelling':
        return <i className="text-2xl">{freelance}</i>;
      case 'other':
        return <i className="text-2xl">{circle}</i>;
      default:
        return '';
    }
  };

  return (
    <div
      className="border-2 border-white shadow-lg rounded-lg p-4 mb-4 flex items-center gap-4 w-full"
      indicator={indicatorColor}>
      <div className="w-20 h-20 rounded-lg border-2 border-white flex items-center justify-center">
        {type === 'expense' ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex flex-row items-center justify-start gap-2">
          <p className="text-2xl text-primary-pink">
            <TbPigMoney />
          </p>
          <div className="text-xl font-semibold">{title}</div>
        </div>
        <div className="inner-content flex justify-between items-center">
          <div className="text-lg flex items-center gap-8">
            <p className="flex items-center gap-1">
              {dollar} {amount}
            </p>
            <p className="flex items-center gap-1">
              {calender} {dateFormat(date)}
            </p>
            <p className="flex items-center gap-1">
              {comments}
              {description}
            </p>
          </div>
          <div>
            <Button
              icon={trash}
              bPad="p-4"
              bRad="rounded-full"
              bg="bg-primary-gunmetal"
              color="text-white"
              iColor="fill-white"
              hColor="hover:bg-[#78D1E2]"
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
