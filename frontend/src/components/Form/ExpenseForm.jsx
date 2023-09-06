import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';

const ExpenseForm = ({ setShowModal, isEditMode, formdata }) => {
  const { addExpense, error, setError, editExpense } = useGlobalContext();

  console.log('//////', formdata);

  const [inputState, setInputState] = useState({
    title: formdata?.title ?? '',
    amount: formdata?.amount ? Number(formdata.amount) : 0,
    date: new Date(formdata?.date ?? new Date()),
    category: formdata?.category ?? '',
    description: formdata?.description ?? '',
  });

  const handleInput = (name) => (event) => {
    let value = event.target.value;

    if (name === 'amount') {
      value = isNaN(Number(value)) ? 0 : Number(value);
    }

    setInputState({ ...inputState, [name]: value });
    setError('');
  };

  const { title, amount, date, category, description } = inputState;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // to check if any field is empty
    if (!title || !amount || !date || !category || !description) {
      setError('All fields must be filled out!');
      return;
    }

    //checking if 'amount' is a number
    if (isNaN(Number(amount))) {
      setError('Amount must be a number!');
      return;
    }

    if (isEditMode && formdata?._id) {
      // Edit mode
      try {
        await editExpense(formdata._id, inputState);
      } catch (err) {
        console.error('Failed to edit income', err);
      }
    } else {
      addExpense(inputState);
    }

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
          className="w-full  outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm text-primary-color placeholder:text-primary-gunmetal/40"
          type="text"
          value={title}
          name={'title'}
          placeholder="Expense Title"
          onChange={handleInput('title')}
        />
      </div>

      <div className="input-control">
        <input
          className="w-full outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm text-primary-color placeholder:text-primary-gunmetal/40"
          type="text"
          value={amount}
          name={'amount'}
          placeholder="Expense Amount"
          onChange={handleInput('amount')}
        />
      </div>

      <div className="input-control">
        <DatePicker
          className="w-full outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm text-primary-color placeholder:text-primary-gunmetal/40"
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
      <div>
        <textarea
          className="outline-none rounded-md border-2 p-2 border-white bg-white resize-none shadow-sm text-primary-color placeholder:text-primary-gunmetal/40 w-full"
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
          name={isEditMode ? 'Edit Expense' : 'Add Expense'}
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

export default ExpenseForm;
