import React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import InnerLayout from '../../styles/InnerLayout';
import IncomeItem from '../CardItem/CardItem';
import ExpenseForm from './ExpenseForm';

const Expenses = () => {
  const { addIncom, expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <div className="flex overflow-auto">
      <InnerLayout>
        <h1 className="text-primary-color font-semibold text-3xl">Expenses</h1>
        <h2 className="flex items-center justify-center bg-FCF6F9 border-2 border-white shadow-md rounded-lg py-4 my-6 text-2xl text-primary-color font-semibold">
          Total Expense:
          <span className="text-pink-400 text-3xl font-semibold ml-1">
            ${totalExpenses()}
          </span>
        </h2>
        <div className="income-content flex gap-8">
          <div className="form-container">
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
