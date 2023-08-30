import React from 'react';
import { useEffect } from 'react';
import { useGlobalContext } from '../../context/globalContext';
import InnerLayout from '../../styles/InnerLayout';
import Form from '../Form/Form';
import CardItem from '../CardItem/CardItem';

const Incomes = () => {
  const { addIncom, incomes, getIncomes, deleteIncome, totalIncome } =
    useGlobalContext();
  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <div className="flex overflow-auto">
      <InnerLayout>
        <div className="font-semibold text-3xl">Incomes</div>
        <div className="flex items-center justify-center">
          <div className="flex flex-row items-center justify-center font-semibold gap-2 w-[40rem] border-2 border-white shadow-md rounded-lg py-4 my-6">
            <div className="text-2xl">Total Income:</div>
            <p className="text-primary-pink text-3xl">${totalIncome()}</p>
          </div>
        </div>
        <div className="flex flex-row gap-8">
          <div className="flex items-start">
            <Form />
          </div>
          <div className="incomes flex-1">
            {incomes.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;
              return (
                <CardItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="color-green"
                  deleteItem={deleteIncome}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </div>
  );
};

export default Incomes;
