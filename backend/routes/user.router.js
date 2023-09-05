const router = require('express').Router();
const {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} = require('../controllers/user.controller');

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);

module.exports = router;
