const jwt = require('jsonwebtoken');

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: process.env.NODE_ENV !== 'development' ? false : true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'none',
    maxAge: 30 * 24 * 60 * 60 * 1000, //30days
  });
};

module.exports = generateToken;

//Setting a cookie's httpOnly flag to true means that the cookie cannot be accessed through client-side scripts.
//Setting it to false, you're allowing client-side scripts to access the cookie,
//which generally makes it easier to work with the cookie during development
