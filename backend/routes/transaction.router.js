const {
  addIncome,
  getIncomes,
  deleteIncome,
  editIncome,
  getIncomeById,
} = require('../controllers/income.controller');

const {
  addExpense,
  getExpense,
  deleteExpense,
  editExpense,
  getExpenseById,
} = require('../controllers/expense.controller');
const router = require('express').Router();

router
  .post('/add-income', addIncome)
  .get('/get-incomes', getIncomes)
  .delete('/delete-income/:id', deleteIncome)
  .put('/edit-income/:id', editIncome)
  .get('/get-income/:id', getIncomeById)

  .post('/add-expense', addExpense)
  .get('/get-expenses', getExpense)
  .delete('/delete-expense/:id', deleteExpense)
  .put('/edit-expense/:id', editExpense)
  .get('/get-expense/:id', getExpenseById);

module.exports = router;

//This code defines a POST route for the path "/add-income" using router.post().
//It specifies that when an HTTP POST request is made to "/add-income",
//the addIncome function will be executed.
