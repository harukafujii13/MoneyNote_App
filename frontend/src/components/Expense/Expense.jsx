import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import InnerLayout from '../../styles/InnerLayout';
import IncomeItem from '../CardItem/CardItem';
import ExpenseForm from '../Form/ExpenseForm';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Expenses = () => {
  const { addIncom, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <div className="flex overflow-auto">
      <InnerLayout>
        <div className="font-semibold text-3xl">Expenses</div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-row items-center justify-center font-semibold gap-2 w-[30rem] border-2 border-white shadow-md rounded-lg py-4 my-6">
            <div className="text-2xl">Total Expense:</div>
            <p className="text-primary-pink text-3xl">${totalExpenses()}</p>
          </div>
          <Button
            name="Add Income"
            icon={plus}
            bPad="py-2 px-4"
            bRad="rounded-full"
            bg="bg-primary-teal"
            color="text-white"
            onClick={() => setShowModal(true)}
          />
        </div>

        {showModal && (
          <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6 bg-primary-lavender">
                <div className="flex justify-end mb-4">
                  <p
                    className="text-2xl"
                    onClick={() => setShowModal(false)}>
                    <AiOutlineCloseSquare />
                  </p>
                </div>
                <ExpenseForm setShowModal={setShowModal} />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-row gap-8 justify-center">
          <div>
            {[...expenses].reverse().map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="color-green"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </div>
  );
};

export default Expenses;
