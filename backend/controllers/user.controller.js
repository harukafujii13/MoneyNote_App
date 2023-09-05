const asyncHandler = require('express-async-handler');
const User = require('../models/user.modal');
const generateToken = require('../utils/generateToken');

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Logout User' });
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User profile' });
});

const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Update user profile' });
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
