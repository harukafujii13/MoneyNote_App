import React, { useEffect } from "react";
import InnerLayout from "../../styles/InnerLayout";
import Chart from "../Chart/Chart";
import { dollar } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";
import History from "../History/History";

const Dashboard = () => {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <div>
      <InnerLayout>
        <h1 className="font-semibold text-3xl mb-2">All Transactions</h1>
        <div className="stats-con grid grid-cols-5 gap-8">
          <div className="chart-con col-span-3 h-400">
            <Chart />
            <div className="amount-con grid grid-cols-4 gap-8 mt-8">
              <div className="income col-span-2 bg-FCF69 border-2 border-white shadow-sm rounded-2xl p-4 flex flex-col justify-center items-center">
                <h2>Total Income</h2>
                <p className="text-3xl font-bold text-lime-400">
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense col-span-2 bg-FCF69 border-2 border-white shadow-sm rounded-2xl p-4 flex flex-col justify-center items-center">
                <h2>Total Expense</h2>
                <p className="text-3xl font-bold text-red-400">
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="balance bg-FCF69 border-2 border-white shadow-sm rounded-2xl p-4 col-start-2 col-end-4 flex flex-col justify-center items-center">
                <h2>Total Balance</h2>
                <p className="text-4xl font-bold">
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con col-start-4 col-end-[-1]">
            <History />
            <h2 className="salay-title mb-4  mt-7 flex items-center justify-between text-base">
              Min <span className="text-2xl font-semibold">Salary</span>Max
            </h2>
            <div className="salary-item bg-FCF6F9 border-2 border-white shadow-sm p-4 rounded-2xl flex justify-between items-center">
              <p className="font-medium text-3xl">
                {Math.min(...incomes.map((item) => item.amount))}
              </p>
              <p className="font-medium text-3xl">
                {Math.max(...incomes.map((item) => item.amount))}
              </p>
            </div>

            <h2 className="salay-title my-4 flex items-center justify-between text-base">
              Min <span className="text-2xl font-semibold">Expense</span>Max
            </h2>
            <div className="salary-item bg-FCF6F9 border-2 border-white shadow-sm p-4 rounded-2xl flex justify-between items-center">
              <p className="font-medium text-3xl">
                {Math.min(...expenses.map((item) => item.amount))}
              </p>
              <p className="font-medium text-3xl">
                {Math.max(...expenses.map((item) => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </div>
  );
};

export default Dashboard;
