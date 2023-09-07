const ExpenseSchema = require('../models/expense.modal');

exports.addExpense = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const expense = ExpenseSchema({
    user: req.user._id,
    title,
    amount,
    category,
    description,
    date,
  });

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: 'All fields are required!' });
    }
    if (amount <= 0 || !amount === 'number') {
      return res
        .status(400)
        .json({ message: 'Amount must be a positive number!' });
    }
    await expense.save();
    res.status(200).json({ message: 'Expense Added' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }

  console.log(expense);
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'servaer Error' });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: 'Expense Deleted' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Server Error' });
    });
};

// Edit an existing expense record
exports.editExpense = async (req, res) => {
  const { id } = req.params;
  const { title, amount, category, description, date } = req.body;

  try {
    if (!title || !category || !description || !date) {
      return res.status(400).json({ message: 'All fields are required!' });
    }
    if (amount <= 0 || !amount === 'number') {
      return res
        .status(400)
        .json({ message: 'Amount must be a positive number!' });
    }

    const updatedExpense = await ExpenseSchema.findByIdAndUpdate(
      id,
      { title, amount, category, description, date },
      { new: true }
    );

    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found!' });
    }

    res
      .status(200)
      .json({ message: 'Expense Updated', expense: updatedExpense });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getExpenseById = async (req, res) => {
  const { id } = req.params;

  try {
    const expense = await ExpenseSchema.findById(id);

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found!' });
    }

    res.status(200).json(expense);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
