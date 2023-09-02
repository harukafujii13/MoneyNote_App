import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = () => {
  const { incomes, expenses } = useGlobalContext();

  const sortedIncomes = [...incomes].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const sortedExpenses = [...expenses].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const data = {
    labels: sortedIncomes.map((inc) => dateFormat(inc.date)),
    datasets: [
      {
        label: 'Income',
        data: sortedIncomes.map((income) => income.amount),
        backgroundColor: '#a3e635',
        tension: 0.2,
      },
      {
        label: 'Expenses',
        data: sortedExpenses.map((expense) => expense.amount),
        backgroundColor: '#f87171',
        tension: 0.2,
      },
    ],
  };

  return (
    <div className="bg-blue-100 border-2 border-white shadow-sm p-4 rounded-2xl h-full">
      <Line data={data} />
    </div>
  );
};

export default Chart;

// import React from 'react';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js';

// import { Line } from 'react-chartjs-2';
// import { useGlobalContext } from '../../context/globalContext';
// import { dateFormat } from '../../utils/dateFormat';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const Chart = () => {
//   const { incomes, expenses } = useGlobalContext();

//   const sortedIncomes = [...incomes].sort(
//     (a, b) => new Date(a.date) - new Date(b.date)
//   );
//   const sortedExpenses = [...expenses].sort(
//     (a, b) => new Date(a.date) - new Date(b.date)
//   );

//   const data = {
//     labels: sortedIncomes.map((inc) => {
//       const { date } = inc;
//       return dateFormat(date);
//     }),
//     datasets: [
//       {
//         label: 'Income',
//         data: sortedIncomes.map((income) => {
//           const { amount } = income;
//           return amount;
//         }),
//         backgroundColor: '#a3e635',
//         tension: 0.2,
//       },
//       {
//         label: 'Expenses',
//         data: sortedExpenses.map((expense) => {
//           const { amount } = expense;
//           return amount;
//         }),
//         backgroundColor: '#f87171',
//         tension: 0.2,
//       },
//     ],
//   };

//   return (
//     <div className="bg-FCF6F9 border-2 border-white shadow-sm p-4 rounded-2xl h-full">
//       <Line data={data} />
//     </div>
//   );
// };

// export default Chart;
