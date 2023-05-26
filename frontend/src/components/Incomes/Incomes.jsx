import React from "react";
import { useGlobalContext } from "../../context/globalContext";
import InnerLayout from "../../styles/InnerLayout";
import Form from "../Form/Form";

const Incomes = () => {
  const { addIncom } = useGlobalContext();
  return (
    <InnerLayout>
      <h1>Incomes</h1>
      <div className="income-content">
        <div className="form-container">
          <Form />
        </div>
        <div className="incomes"></div>
      </div>
    </InnerLayout>
  );
};

export default Incomes;
