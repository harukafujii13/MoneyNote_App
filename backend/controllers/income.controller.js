const IncomeSchema = require('../models/income.modal');

exports.addIncome = async (req, res) => {
  const { title, amount, category, description, date } = req.body;

  const income = IncomeSchema({
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
    await income.save();
    res.status(200).json({ message: 'Income Added' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
  console.log(income);
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: 'servaer Error' });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      res.status(200).json({ message: 'Income Deleted' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Server Error' });
    });
};

// Edit an existing income record
exports.editIncome = async (req, res) => {
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

    const updatedIncome = await IncomeSchema.findByIdAndUpdate(
      id,
      { title, amount, category, description, date },
      { new: true }
    );

    if (!updatedIncome) {
      return res.status(404).json({ message: 'Income not found!' });
    }

    res.status(200).json({ message: 'Income Updated', income: updatedIncome });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getIncomeById = async (req, res) => {
  const { id } = req.params;

  try {
    const income = await IncomeSchema.findById(id);

    if (!income) {
      return res.status(404).json({ message: 'Income not found!' });
    }

    res.status(200).json(income);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
