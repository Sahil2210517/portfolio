// backend/routes/auth.js

const express = require('express');
const { signup } = require('../controllers/authController');

const router = express.Router();

// @route   POST /api/auth/signup
router.post('/signup', signup);

// @route   POST /api/auth/login
router.post('/login', require('../controllers/authController').login);

// @route   POST /api/auth/logout
router.post('/logout', require('../controllers/authController').logout);

module.exports = router;
