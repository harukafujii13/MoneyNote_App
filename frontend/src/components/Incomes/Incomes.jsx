import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import InnerLayout from "../../styles/InnerLayout";
import Form from "../Form/Form";
import IncomeItem from "../IncomeItem/IncomeItem";

const Incomes = () => {
  const { addIncom, incomes, getIncomes } = useGlobalContext();
  useEffect(() => {
    getIncomes();
  }, []);
  return (
    <div className="flex overflow-auto">
      <InnerLayout>
        <h1>Incomes</h1>
        <div className="income-content">
          <div className="form-container">
            <Form />
          </div>
          <div className="incomes">
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
