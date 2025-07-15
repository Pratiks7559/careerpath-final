import express from 'express';
import Feedback from '../models/Feedback.js';

const router = express.Router();

// POST route to submit feedback
router.post('/', async (req, res) => {
  const { feedback, rating } = req.body;

  try {
    const newFeedback = new Feedback({
      feedback,
      rating,
    });

    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving feedback.' });
  }
});

export default router;
