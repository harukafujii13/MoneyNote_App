const {
  addIncome,
  getIncomes,
  deleteIncome,
  editIncome,
} = require('../controllers/income.controller');

const {
  addExpense,
  getExpense,
  deleteExpense,
  editExpense,
} = require('../controllers/expense.controller');
const router = require('express').Router();

router
  .post('/add-income', addIncome)
  .get('/get-incomes', getIncomes)
  .delete('/delete-income/:id', deleteIncome)
  .put('/edit-income/:id', editIncome)
  .post('/add-expense', addExpense)
  .get('/get-expenses', getExpense)
  .delete('/delete-expense/:id', deleteExpense)
  .put('/edit-expense/:id', editExpense);
module.exports = router;

//This code defines a POST route for the path "/add-income" using router.post().
//It specifies that when an HTTP POST request is made to "/add-income",
//the addIncome function will be executed.
