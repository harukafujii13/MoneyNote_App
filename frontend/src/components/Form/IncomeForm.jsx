import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';

const IncomeForm = ({ setShowModal }) => {
  const { addIncome, getIncomes, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
    description: '',
  });

  const handleInput = (name) => (event) => {
    setInputState({ ...inputState, [name]: event.target.value });
    setError('');
  };

  const { title, amount, date, category, description } = inputState;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simple validation to check if any field is empty
    if (!title || !amount || !date || !category || !description) {
      setError('All fields must be filled out!');
      return;
    }

    // Additional validation can go here
    // For example, checking if 'amount' is a number
    if (isNaN(Number(amount))) {
      setError('Amount must be a number!');
      return;
    }

    // If validation passed, reset the state and add income
    addIncome(inputState);
    setInputState({
      title: '',
      amount: '',
      date: '',
      category: '',
      description: '',
    });

    setShowModal(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4">
      {error && (
        <p className="text-red-500 text-semibold text-base  animate-shake keyframes:shake flex justify-center">
          {error}
        </p>
      )}
      <div className="input-control">
        <input
          className="w-full outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm placeholder:text-primary-gunmetal/40"
          type="text"
          value={title}
          name={'title'}
          placeholder="Income Title"
          onChange={handleInput('title')}
        />
      </div>

      <div className="input-control">
        <input
          className="w-full outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm  placeholder:text-primary-gunmetal/40"
          type="text"
          value={amount}
          name={'amount'}
          placeholder="Income Amount"
          onChange={handleInput('amount')}
        />
      </div>

      <div className="input-control">
        <DatePicker
          className="w-full outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm placeholder:text-primary-gunmetal/40"
          id="date"
          placeholderText="Date"
          selected={date}
          dateFormat="MM/dd/yyyy"
          onChange={(date) => {
            setInputState({ ...inputState, date: date });
          }}
        />
      </div>

      <div className="input-control flex justify-end">
        <select
          className="outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm"
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput('category')}>
          <option
            className=""
            value=""
            disabled>
            Category
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="stocks">Stocks</option>
          <option value="bitcoin">Bitcoin</option>
          <option value="bank">Bank Transfer</option>
          <option value="youtube">Youtube</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <textarea
          className="outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm  placeholder:text-primary-gunmetal/40 w-full"
          name="description"
          value={description}
          placeholder="Memo"
          id="description"
          cols="30"
          rows="4"
          onChange={handleInput('description')}></textarea>
      </div>
      <div className="submit-btn flex justify-center">
        <Button
          name="Add Income"
          icon={plus}
          bPad="py-2 px-4"
          bRad="rounded-full"
          bg="bg-primary-teal"
          color="text-white"
        />
      </div>
    </form>
  );
};

export default IncomeForm;