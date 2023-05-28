import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import InnerLayout from "../../styles/InnerLayout";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

const Incomes = () => {
  const { addIncom, incomes, getIncomes, deleteIncome } = useGlobalContext();
  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <div className="flex overflow-auto">
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content flex gap-8">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes flex-1">
            {incomes.map((income) => {
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
