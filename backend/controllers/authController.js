// backend/controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please provide name, email and password.' });
        }
        // Create user; password will be hashed via pre-save hook
        const user = await User.create({ name, email, password });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '1d',
        });

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 24 * 60 * 60 * 1000,
        });

        return res.status(201).json({ message: 'User registered successfully', userId: user._id });
    } catch (err) {
        console.error('Signup error:', err);
        if (err.code === 11000) {
            // Duplicate email
            return res.status(409).json({ message: 'Email already exists' });
        }
        return res.status(500).json({ message: 'Server error', error: err.message });
    }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '1d',
        });

        res.cookie('jwt', token, {
            httpOnly: true, // Prevents client-side JS from reading the cookie
            secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', // CSRF protection
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });

        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Public
exports.logout = (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
    });
    res.status(200).json({ message: 'Logged out successfully' });
};
