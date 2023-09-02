import React, { useEffect } from 'react';
import InnerLayout from '../../styles/InnerLayout';
import Chart from '../Chart/Chart';
import { dollar } from '../../utils/Icons';
import { useGlobalContext } from '../../context/globalContext';

const Dashboard = () => {
  const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <div>
      <InnerLayout>
        <h1 className="font-semibold text-3xl flex lg:justify-start md:justify-start justify-center lg:mb-0 md:mb-0 mb-4">
          All Transactions
        </h1>

        <div className="stats-con grid md:grid-cols-5 gap-8 ">
          <div className="chart-con md:col-span-3 h-[400px]">
            <Chart />
            <div className="amount-con flex flex-wrap justify-between mt-8">
              <div className="income bg-blue-200 border-2 border-white shadow-sm rounded-2xl p-4 w-full md:w-[30%]">
                <h2>Total Income</h2>
                <p className="text-3xl font-bold text-lime-400">
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense bg-yellow-200 border-2 border-white shadow-sm rounded-2xl p-4 w-full md:w-[30%]">
                <h2>Total Expense</h2>
                <p className="text-3xl font-bold text-red-400">
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="balance bg-green-200 border-2 border-white shadow-sm rounded-2xl p-4 w-full md:w-[30%]">
                <h2>Total Balance</h2>
                <p className="text-3xl font-bold">
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </InnerLayout>
    </div>
  );
};

export default Dashboard;

// import React, { useEffect } from 'react';
// import InnerLayout from '../../styles/InnerLayout';
// import Chart from '../Chart/Chart';
// import { dollar } from '../../utils/Icons';
// import { useGlobalContext } from '../../context/globalContext';

// const Dashboard = () => {
//   const { totalExpenses, totalIncome, totalBalance, getIncomes, getExpenses } =
//     useGlobalContext();

//   useEffect(() => {
//     getIncomes();
//     getExpenses();
//   }, []);

//   return (
//     <div>
//       <InnerLayout>
//         <h1 className="font-semibold text-3xl mb-2">All Transactions</h1>
//         <div className="stats-con grid grid-cols-5 gap-8">
//           <div className="chart-con col-span-3 h-400">
//             <Chart />
//             <div className="amount-con flex justify-between mt-8">
//               <div className="income bg-FCF69 border-2 border-white shadow-sm rounded-2xl p-4">
//                 <h2>Total Income</h2>
//                 <p className="text-3xl font-bold text-lime-400">
//                   {dollar} {totalIncome()}
//                 </p>
//               </div>
//               <div className="expense bg-FCF69 border-2 border-white shadow-sm rounded-2xl p-4">
//                 <h2>Total Expense</h2>
//                 <p className="text-3xl font-bold text-red-400">
//                   {dollar} {totalExpenses()}
//                 </p>
//               </div>
//               <div className="balance bg-FCF69 border-2 border-white shadow-sm rounded-2xl p-4">
//                 <h2>Total Balance</h2>
//                 <p className="text-3xl font-bold">
//                   {dollar} {totalBalance()}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </InnerLayout>
//     </div>
//   );
// };

// export default Dashboard;
