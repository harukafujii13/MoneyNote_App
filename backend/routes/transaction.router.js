const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income.controller");
const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense.controller");
const router = require("express").Router();

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .delete("/delete-expense/:id", deleteExpense);
module.exports = router;

//This code defines a POST route for the path "/add-income" using router.post().
//It specifies that when an HTTP POST request is made to "/add-income",
//the addIncome function will be executed.
