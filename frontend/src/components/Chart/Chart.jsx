import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarController,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useGlobalContext } from '../../context/globalContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const CombinedChart = () => {
  const { totalIncome, totalExpenses } = useGlobalContext();

  const barData = {
    labels: ['Total Incomes', 'Total Expenses'],
    datasets: [
      {
        label: 'Total Amounts',
        data: [totalIncome(), totalExpenses()],
        backgroundColor: ['#8AD6E5', '#8AD6E5'],
      },
    ],
  };

  return (
    <div className="bg-white border-2 border-gray-200 shadow-lg p-4 md:p-6 rounded-xl lg:h-full md:h-full h-full lg:w-[40rem] md:w-[27rem] w-[20rem] flex items-center justify-center">
      <div className="lg:w-[30rem] md:w-[25rem] w-[19rem]">
        <h2 className="lg:text-xl md:text-xl text-sm font-semibold mb-4 text-center">
          Total Incomes vs Total Expenses
        </h2>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default CombinedChart;

// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   BarController,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { useGlobalContext } from '../../context/globalContext';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   BarController,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement
// );

// const CombinedChart = () => {
//   const { totalIncome, totalExpenses } = useGlobalContext();

//   const barData = {
//     labels: ['Total Incomes', 'Total Expenses'],
//     datasets: [
//       {
//         label: 'Total Amounts',
//         data: [totalIncome(), totalExpenses()],
//         backgroundColor: ['#E3A1C8', '#7ED6DD'],
//       },
//     ],
//   };

//   return (
//     <div className="bg-white border-2 border-white shadow-sm p-4 rounded-2xl h-full">
//       <Bar data={barData} />
//     </div>
//   );
// };

// export default CombinedChart;

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
//     labels: sortedIncomes.map((inc) => dateFormat(inc.date)),
//     datasets: [
//       {
//         label: 'Income',
//         data: sortedIncomes.map((income) => income.amount),
//         backgroundColor: '#E3A1C8',
//         tension: 0.2,
//       },
//       {
//         label: 'Expenses',
//         data: sortedExpenses.map((expense) => expense.amount),
//         backgroundColor: '#7ED6DD',
//         tension: 0.2,
//       },
//     ],
//   };

//   return (
//     <div className="bg-white border-2 border-white shadow-sm p-4 rounded-2xl lg:h-[17rem] md:h-[17rem] h-[10rem]">
//       <Line data={data} />
//     </div>
//   );
// };

// export default Chart;
