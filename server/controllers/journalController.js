import JournalEntry from '../models/JournalEntry.js';

export const createJournalEntry = async (req, res) => {
  try {
    const entry = new JournalEntry(req.body);
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create journal entry' });
  }
};

export const getJournalEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find({ userEmail: req.params.userEmail }).sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get journal entries' });
  }
};

export const deleteJournalEntry = async (req, res) => {
  try {
    await JournalEntry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete' });
  }
};

export const updateJournalEntry = async (req, res) => {
  try {
    const updated = await JournalEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update' });
  }
};
