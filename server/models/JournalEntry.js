import mongoose from 'mongoose';

const journalEntrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Progress', 'Skills', 'Challenges', 'Milestones'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);

export default JournalEntry;
