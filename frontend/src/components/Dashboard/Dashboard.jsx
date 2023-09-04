import React, { useEffect } from 'react';
import InnerLayout from '../../styles/InnerLayout';
import Chart from '../Chart/Chart';
import { dollar } from '../../utils/Icons';
import { useGlobalContext } from '../../context/globalContext';

const Dashboard = () => {
  const { totalBalance, getIncomes, getExpenses } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <InnerLayout>
      <h1 className="font-semibold lg:text-3xl md:text-3xl text-2xl text-center lg:text-left lg:mb-0 mb-4">
        Total Balance
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-row items-center justify-center font-semibold gap-2 lg:w-[30rem] md:w-[20rem] w-[15rem] border-2 border-white shadow-md rounded-lg lg:py-4 md:py-4 py-2 lg:my-6 md:my-6 my-0">
          <div className="lg:text-2xl md:text-xl text-sm">Total balance:</div>
          <p className="text-primary-pink lg:text-3xl md:text-2xl text-xl">
            {dollar} {totalBalance()}
          </p>
        </div>
        <div className="stats-con w-full flex items-center justify-center">
          <div className="chart-con h-[400px] flex items-center justify-center">
            <Chart />
          </div>
        </div>
      </div>
    </InnerLayout>
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
