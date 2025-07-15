// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const multer = require('multer');
// const User = require('../models/user'); // User model (schema)
// const path = require('path');

// // Multer setup for image upload
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const upload = multer({ storage });

// // Middleware to verify token (JWT)
// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) return res.status(401).json({ message: 'Access Denied. No token provided.' });

//   try {
//     const decoded = jwt.verify(token, 'secretKey');
//     req.userId = decoded.id;
//     next();
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid token' });
//   }
// };

// // Register Route
// const registerRoute = async (req, res) => {
//   try {
//     const { name, email, gender, age, highestEducation, password } = req.body;
//     const profilePhoto = req.file ? req.file.path : '';

//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'Email already registered' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       gender,
//       age,
//       highestEducation,
//       password: hashedPassword,
//       profilePhoto
//     });
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error("❌ Register error:", err.message);
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };

// // Login Route
// const loginRoute = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid email or password' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     const token = jwt.sign({ id: user._id }, 'secretKey');
//     res.json({ token, user: { name: user.name, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// };

// // Profile Route (requires JWT)
// const profileRoute = async (req, res) => {
//   try {
//     const user = await User.findById(req.userId).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });

//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Failed to fetch profile', error: err.message });
//   }
// };

// // Initialize Router and Define Routes
// const router = express.Router();

// router.post('/register', upload.single('profilePhoto'), registerRoute);
// router.post('/login', loginRoute);
// router.get('/profile', verifyToken, profileRoute);

// module.exports = router;

// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';  // Assuming you have a User model

// const router = express.Router();

// // Register Route
// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;

//   // Check if the user already exists
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).send('User already exists');
//   }

//   // Hash the password before saving it
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new user
//   const user = new User({ email, password: hashedPassword });
//   await user.save();

//   res.status(201).send('User registered');
// });

// // Login Route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Find user by email
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(404).send('User not found');
//   }

//   // Compare password
//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) {
//     return res.status(401).send('Invalid credentials');
//   }

//   // Create JWT token
//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.json({ message: 'Login successful', token });
// });

// export default router;










// import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

// const router = express.Router();

// // Register Route
// router.post('/register', async (req, res) => {
//   const { email, password, name } = req.body;

//   // Check if the user already exists
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).send('User already exists');
//   }

//   // Hash the password before saving
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new user
//   const user = new User({
//     email,
//     password: hashedPassword,
//     name,
//   });
//   await user.save();

//   res.status(201).send('User registered');
// });

// // Login Route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Find the user by email
//   const user = await User.findOne({ email });
//   if (!user) {
//     return res.status(404).send('User not found');
//   }

//   // Compare password
//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) {
//     return res.status(401).send('Invalid credentials');
//   }

//   // Generate JWT token
//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.json({ token });
// });

// export default router;
import express from 'express';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import User from '../models/user.js';
// import sendEmail from '../utils/sendEmail.js';
import {
  requestPasswordReset,
  verifyOTP,
  resetPassword,
} from '../controllers/authController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/register', upload.single('profilePhoto'), async (req, res) => {
  const { email, password, name, gender, age, highestEducation } = req.body;
  const profilePhoto = req.file ? req.file.path : null;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      name,
      gender,
      age,
      highestEducation,
      profilePhoto,
    });

    await user.save();
    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Something went wrong, please try again!' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    req.session.userId = user._id;
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});
router.post('/request-reset', requestPasswordReset);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', resetPassword);

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

export default router;
