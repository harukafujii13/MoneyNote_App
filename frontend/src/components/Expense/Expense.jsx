import React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import InnerLayout from '../../styles/InnerLayout';
import IncomeItem from '../CardItem/CardItem';
import ExpenseForm from '../Form/ExpenseForm';

const Expenses = () => {
  const { addIncom, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <div className="flex overflow-auto">
      <InnerLayout>
        <div className="font-semibold text-3xl">Expenses</div>
        <div className="flex items-center justify-center">
          <div className="flex flex-row items-center justify-center font-semibold gap-2 w-[40rem] border-2 border-white shadow-md rounded-lg py-4 my-6">
            <div className="text-2xl">Total Expense:</div>
            <p className="text-primary-pink text-3xl">${totalExpenses()}</p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex items-start">
            <ExpenseForm />
          </div>
          <div className="incomes flex-1">
            {expenses.map((income) => {
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
