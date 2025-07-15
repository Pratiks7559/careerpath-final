import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// ----------- Multer Config for Profile Photo Upload ----------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// ----------- Authentication Middleware ----------
const isAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Unauthorized. Please log in.' });
  }
  next();
};
router.get('/', (req, res) => {
  res.send("User route working!");
});
// ----------- GET User Profile ----------
router.get('/profile', isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { password, ...userData } = user.toObject();
    res.json(userData);
  } catch (err) {
    console.error('Profile error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// ----------- PUT Update Profile ----------
router.put('/update', upload.single('profilePhoto'), isAuthenticated, async (req, res) => {
  const { name, email, age, highestEducation } = req.body;
  const profilePhoto = req.file ? req.file.path : undefined;

  try {
    const updatedFields = { name, email, age, highestEducation };
    if (profilePhoto) updatedFields.profilePhoto = profilePhoto;

    const updatedUser = await User.findByIdAndUpdate(req.session.userId, updatedFields, { new: true });

    const { password, ...userData } = updatedUser.toObject();
    res.json({ message: 'Profile updated successfully', user: userData });
  } catch (err) {
    console.error('Error updating profile:', err);
    res.status(500).json({ message: 'Failed to update profile' });
  }
});

// ----------- PUT Change Password ----------
router.put('/change-password', isAuthenticated, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.session.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Current password is incorrect' });

    const hashed = await bcrypt.hash(newPassword, 10);
    user.password = hashed;
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (err) {
    console.error('Password change error:', err);
    res.status(500).json({ message: 'Failed to change password' });
  }
});

export default router;
