import React, { useEffect } from "react";
import InnerLayout from "../../styles/InnerLayout";
import Chart from "../Chart/Chart";
import { dollar } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";
import History from "../History/History";

function Dashboard() {
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
    <div className="py-4">
      <InnerLayout>
        <h1 className="text-2xl font-bold mb-4">All Transactions</h1>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3">
            <Chart />
            <div className="grid grid-cols-4 gap-8 mt-8">
              <div className="bg-pink-50 border-2 border-white shadow-md rounded-lg p-4 col-span-2">
                <h2 className="text-lg font-bold">Total Income</h2>
                <p className="text-4xl font-semibold">
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="bg-pink-50 border-2 border-white shadow-md rounded-lg p-4">
                <h2 className="text-lg font-bold">Total Expense</h2>
                <p className="text-4xl font-semibold">
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="bg-pink-50 border-2 border-white shadow-md rounded-lg p-4 col-span-2">
                <h2 className="text-lg font-bold">Total Balance</h2>
                <p className="text-5xl font-semibold text-green-500 opacity-60">
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <History />
            <h2 className="text-lg font-bold mb-2">
              Min <span className="text-xl">Salary</span> Max
            </h2>
            <div className="bg-pink-50 border-2 border-white shadow-md rounded-lg p-4 mb-4">
              <p className="font-semibold text-xl">
                ${Math.min(...incomes.map((item) => item.amount))}
              </p>
              <p className="font-semibold text-xl">
                ${Math.max(...incomes.map((item) => item.amount))}
              </p>
            </div>
            <h2 className="text-lg font-bold mb-2">
              Min <span className="text-xl">Expense</span> Max
            </h2>
            <div className="bg-pink-50 border-2 border-white shadow-md rounded-lg p-4">
              <p className="font-semibold text-xl">
                ${Math.min(...expenses.map((item) => item.amount))}
              </p>
              <p className="font-semibold text-xl">
                ${Math.max(...expenses.map((item) => item.amount))}
              </p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </div>
  );
}

export default Dashboard;

// import React, { useEffect } from "react";
// import InnerLayout from "../../styles/InnerLayout";
// import Chart from "../Chart/Chart";
// import { dollar } from "../../utils/Icons";
// import { useGlobalContext } from "../../context/globalContext";
// import History from "../History/History";

// const Dashboard = () => {
//   const {
//     totalExpenses,
//     incomes,
//     expenses,
//     totalIncome,
//     totalBalance,
//     getIncomes,
//     getExpenses,
//   } = useGlobalContext();

//   useEffect(() => {
//     getIncomes();
//     getExpenses();
//   }, []);
//   return (
//     <div>
//       <InnerLayout>
//         <h1>All Transactions</h1>
//         <div className="stats-con grid grid-cols-5 gap-8">
//           <div className="chart-con col-span-3 h-96">
//             <Chart />
//             <div className="amount-con grid grid-cols-4 gap-8 mt-8">
//               <div className="income col-span-2 col-span-2 bg-FCF69 border-2 border-white shadow-md rounded-lg p-4">
//                 <h2>Total Income</h2>
//                 <p className="text-4xl font-bold">
//                   {dollar} {totalIncome()}
//                 </p>
//               </div>
//               <div className="expense col-span-2 bg-FCF69 border-2 border-white shadow-md rounded-lg p-4">
//                 <h2>Total Expense</h2>
//                 <p className="text-4xl font-bold">
//                   {dollar} {totalExpenses()}
//                 </p>
//               </div>
//               <div className="balance col-span-2 bg-FCF69 border-2 border-white shadow-md rounded-lg p-4 col-start-2 col-end-4 flex flex-col justify-center items-center">
//                 <h2>Total Balance</h2>
//                 <p className="text-4xl font-bold opacity-80 text-7xl text-lime-400">
//                   {dollar} {totalBalance()}
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="history-con col-span-9">
//             <History />
//             <h2 className="salay-title text-lg my-4 flex items-center justify-between">
//               Min <span className="text-xl">Salary</span>Max
//             </h2>
//             <div className="salary-item">
//               <p className="text-4xl font-bold">
//                 {Math.min(...incomes.map((item) => item.amount))}
//               </p>
//               <p className="text-4xl font-bold">
//                 {Math.max(...incomes.map((item) => item.amount))}
//               </p>
//             </div>

//             <h2 className="salay-title text-lg my-4 flex items-center justify-between">
//               Min <span className="text-xl">Expense</span>Max
//             </h2>
//             <div className="salary-item bg-pink-50 border-2 border-white shadow-md p-4 rounded-lg flex justify-between items-center">
//               <p className="font-medium text-base">
//                 {Math.min(...expenses.map((item) => item.amount))}
//               </p>
//               <p className="font-medium text-base">
//                 {Math.max(...expenses.map((item) => item.amount))}
//               </p>
//             </div>
//           </div>
//         </div>
//       </InnerLayout>
//     </div>
//   );
// };

// export default Dashboard;
