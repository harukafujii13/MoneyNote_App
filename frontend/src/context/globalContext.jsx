import React, { useState, useContext } from 'react';
import axios from 'axios';

// const BASE_URL = 'http://localhost:8000/api/v1/';
const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api/v1/`;

const GlobalContext = React.createContext();

const calculateTotalAmount = (transactions) => {
  return transactions?.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
};

// const calculateTotalAmount = (transactions) => {
//   return transactions?.reduce((total, transaction) => {
//     if (typeof transaction.amount === 'number') {
//       return total + transaction.amount;
//     } else {
//       console.error('Non-numeric amount found:', transaction.amount);
//       return total;
//     }
//   }, 0);
// };

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  // const addIncome = async (income) => {
  //   await axios.post(`${BASE_URL}add-income`, income).catch((err) => {
  //     setError(err.response.data.message);
  //   });
  //   getIncomes();
  // };

  const addIncome = async (income) => {
    await axios
      .post(`${BASE_URL}add-income`, income, { withCredentials: true })
      .catch((err) => {
        setError(err.response.data.message);
      });
    getIncomes();
  };

  //withCredentials: The function sets withCredentials: true to include credentials
  //like cookies, authorization headers, or TLS client certificates in the request.

  // const getIncomes = async () => {
  //   await axios
  //     .get(`${BASE_URL}get-incomes`)
  //     .then((response) => {
  //       setIncomes(response.data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  const getIncomes = async () => {
    const token = localStorage.getItem('token');
    const config = {
      withCredentials: true,
    };
    // console.log({ config });
    await axios
      .get(`${BASE_URL}get-incomes`, config)
      .then((response) => {
        // console.log({ resp: response.data });
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
    try {
      const response = await axios.put(
        `${BASE_URL}edit-income/${id}`,
        updatedIncome
      );
      if (response.status === 200) {
        setIncomes((prevState) =>
          prevState.map((income) => {
            if (income._id === id) {
              return {
                ...income,
                ...response.data.income,
              };
            }

            return income;
          })
        );
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const getIncomeById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}get-income/${id}`);
      if (response.status === 200) {
        // console.log(response.data);
        return response.data;
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  const addExpense = async (expense) => {
    await axios
      .post(`${BASE_URL}add-expense`, expense, { withCredentials: true })
      .catch((err) => {
        setError(err.response.data.message);
      });
    getExpenses();
  };

  // const getExpenses = async () => {
  //   const response = await axios.get(`${BASE_URL}get-expenses`);
  //   setExpenses(response.data);
  // };

  const getExpenses = async () => {
    const token = localStorage.getItem('token');
    const config = {
      withCredentials: true,
    };
    // console.log({ config });

    await axios
      .get(`${BASE_URL}get-expenses`, config)
      .then((response) => {
        // console.log({ resp: response.data });
        setExpenses(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Edit and Update Expense
  const editExpense = async (id, updatedExpense) => {
    try {
      const response = await axios.put(
        `${BASE_URL}edit-expense/${id}`,
        updatedExpense
      );
      if (response.status === 200) {
        setExpenses((prevState) =>
          prevState.map((expenses) => {
            if (expenses._id === id) {
              return {
                ...expenses,
                ...response.data.expense,
              };
            }

            return expenses;
          })
        );
      }
    } catch (error) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const getExpensesById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}get-expense/${id}`);
      if (response.status === 200) {
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  const deleteExpense = async (id) => {
    await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const totalExpenses = () => {
    return calculateTotalAmount(expenses);
  };

  const totalBalance = () => {
    // console.log('Total Balance: ', totalIncome() - totalExpenses());
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
        getExpensesById,
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
