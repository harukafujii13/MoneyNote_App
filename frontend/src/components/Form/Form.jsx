import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";

const Form = () => {
  const { addIncome } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const handleInput = (name) => (event) => {
    setInputState({ ...inputState, [name]: event.target.value });
  };

  const { title, amount, date, category, description } = inputState;

  const handleSubmit = (event) => {
    event.preventDefault();
    addIncome(inputState);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-control">
        <input
          type="text"
          value={title}
          name={"title"}
          placeholder="Salary Title"
          onChange={handleInput("title")}
        />
      </div>

      <div className="input-control">
        <input
          type="text"
          value={amount}
          name={"amount"}
          placeholder="Salary Amount"
          onChange={handleInput("amount")}
        />
      </div>

      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Enter A Date"
          selected={date}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>

      <div className="selects input-control">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}>
          <option
            value=""
            disabled>
            Select Option
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Subscription</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          name="description"
          value={description}
          placeholder="Add A Reference"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}></textarea>
      </div>
      <div className="submit">
        <button>Add Income</button>
      </div>
    </form>
  );
};

export default Form;
