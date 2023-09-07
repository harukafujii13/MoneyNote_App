import React from 'react';
import Button from '../Button/Button';
import {
  book,
  calender,
  circle,
  clothing,
  comments,
  dollar,
  edit,
  food,
  freelance,
  medical,
  takeaway,
  trash,
  tv,
} from '../../utils/Icons';
import { dateFormat } from '../../utils/dateFormat';
import { TbPigMoney } from 'react-icons/tb';

const CardExpenseItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
  setShowModal,
  setIsEditMode,
  getExpensesById,
  setFormdata,
}) => {
  const categoryIcon = () => {
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
      className="border-2 border-white shadow-lg rounded-lg p-2 md:p-4 lg:p-4 mb-4 flex items-center gap-2 md:gap-4 lg:gap-4 w-[18rem] md:w-[35rem] lg:w-[43rem]"
      indicator={indicatorColor}>
      <div className="w-20 h-20 rounded-lg border-2 border-white flex items-center justify-center">
        {categoryIcon()}
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex flex-row items-center lg:justify-start md:justify-start justify-center gap-1 md:gap-2 lg:gap-2">
          <p className="text-xl md:text-2xl lg:text-2xl text-primary-pink">
            <TbPigMoney />
          </p>
          <div className="text-lg md:text-xl lg:text-xl font-semibold">
            {title}
          </div>
        </div>

        <div className="inner-content flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-start items-center gap-2 md:gap-4 lg:gap-4">
          <div className="text-sm md:text-lg lg:text-lg flex lg:flex-row md:flex-row flex-col items-start justify-start gap-1 md:gap-1 lg:gap-4">
            <div className="flex flex-row gap-2 md:gap-4 lg:gap-4">
              <p className="flex items-center gap-1">
                {dollar} {amount}
              </p>
              <p className="flex items-center gap-1">
                {calender} {dateFormat(date)}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                {comments}
                {description}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="flex flex-row gap-2">
              <div>
                <Button
                  icon={edit}
                  bPad="p-2 md:p-4 lg:p-4"
                  bRad="rounded-full"
                  bg="bg-primary-gunmetal"
                  color="text-white"
                  iColor="fill-white"
                  hColor="hover:bg-[#78D1E2]"
                  onClick={async () => {
                    const data = await getExpensesById(id);
                    // console.log(data);
                    setFormdata(data);
                    setIsEditMode(true);
                    setShowModal(true);
                  }}
                />
              </div>
              <div>
                <Button
                  icon={trash}
                  bPad="p-2 md:p-4 lg:p-4"
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
      </div>
    </div>
  );
};

export default CardExpenseItem;
