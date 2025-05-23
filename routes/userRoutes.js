const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Sign up user
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.json(user);
});

module.exports = router;
