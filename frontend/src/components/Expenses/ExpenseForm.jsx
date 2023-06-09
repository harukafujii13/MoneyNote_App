import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";

const ExpenseForm = () => {
  const { addExpense, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const handleInput = (name) => (event) => {
    setInputState({ ...inputState, [name]: event.target.value });
    setError();
  };

  const { title, amount, date, category, description } = inputState;

  const handleSubmit = (event) => {
    event.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8">
      {error && (
        <p className="error text-red-500 animation:shake keyframes:shake">
          {error}
        </p>
      )}
      <div className="input-control">
        <input
          className="w-full font-inherit outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm text-primary-color placeholder:text-primary-color/40"
          type="text"
          value={title}
          name={"title"}
          placeholder="Expense Title"
          onChange={handleInput("title")}
        />
      </div>

      <div className="input-control">
        <input
          className="w-full font-inherit outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm text-primary-color placeholder:text-primary-color/40"
          type="text"
          value={amount}
          name={"amount"}
          placeholder="Expense Amount"
          onChange={handleInput("amount")}
        />
      </div>

      <div className="input-control">
        <DatePicker
          className="w-full font-inherit outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm text-primary-color placeholder:text-primary-color/40"
          id="date"
          placeholderText="Date"
          selected={date}
          dateFormat="MM/dd/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>

      <div className="selects input-control flex justify-end">
        <select
          className="font-inherit outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm text-primary-color"
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}>
          <option
            className="text-primary-color/40"
            value=""
            disabled>
            Category
          </option>
          <option value="education">Education</option>
          <option value="groceries">Groceries</option>
          <option value="health">Health</option>
          <option value="subscriptions">Subscriptions</option>
          <option value="takeaways">Gift</option>
          <option value="clothing">Clothing</option>
          <option value="travelling">Travelling</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-control">
        <textarea
          className="font-inherit outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm text-primary-color placeholder:text-primary-color/40"
          name="description"
          value={description}
          placeholder="Memo"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput("description")}></textarea>
      </div>
      <div className="submit-btn">
        <Button
          name="Add Expense"
          icon={plus}
          bPad="py-2 px-4"
          bRad="rounded-full"
          bg="bg-orange-400"
          color="text-white"
        />
      </div>
    </form>
  );
};

export default ExpenseForm;
