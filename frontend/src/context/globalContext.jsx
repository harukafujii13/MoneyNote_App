import React, { useState, useContext } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/v1/';

const GlobalContext = React.createContext();

const calculateTotalAmount = (transactions) => {
  return transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
};

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const addIncome = async (income) => {
    await axios.post(`${BASE_URL}add-income`, income).catch((err) => {
      setError(err.response.data.message);
    });
    getIncomes();
  };

  const getIncomes = async () => {
    await axios
      .get(`${BASE_URL}get-incomes`)
      .then((response) => {
        setIncomes(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const deleteIncome = async (id) => {
    await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    return calculateTotalAmount(incomes);
  };

  // Edit and Update Income
  const editIncome = async (id, updatedIncome) => {
    await axios
      .put(`${BASE_URL}edit-income/${id}`, updatedIncome)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };

  const getIncomeById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}get-income/${id}`);
      return response.data;
    } catch (error) {
      setError(error.message);
    }
  };

  const addExpense = async (expense) => {
    await axios.post(`${BASE_URL}add-expense`, expense).catch((err) => {
      setError(err.response.data.message);
    });
    getExpenses();
  };

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`);
    setExpenses(response.data);
  };

  const editExpense = async (id, updatedExpense) => {
    await axios
      .put(`${BASE_URL}edit-expense/${id}`, updatedExpense)
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  const deleteExpense = async (id) => {
    await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    return calculateTotalAmount(expenses);
  };

  const totalBalance = () => {
    return totalIncome() - totalExpenses();
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        editIncome,
        totalIncome,
        getIncomeById,
        addExpense,
        getExpenses,
        expenses,
        deleteExpense,
        editExpense,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
