const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const User = require('../../models/user');

// fetch all users api
router.get('/list', (req, res) => {
  User.find({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: 'Your request could not be processed. Please try again.'
      });
    }
    res.status(200).json({
      data: { users: data }
    });
  });
});

module.exports = router;
