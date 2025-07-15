import express from 'express';
import JournalEntry from '../models/JournalEntry.js';

const router = express.Router();

// POST - create entry
router.post('/', async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const entry = new JournalEntry({ title, content, category });
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET - all entries
router.get('/', async (req, res) => {
  try {
    const entries = await JournalEntry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE - one entry
router.delete('/:id', async (req, res) => {
  try {
    await JournalEntry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Entry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
