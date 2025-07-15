import mongoose from 'mongoose';

const QuizQuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true
  },
  options: [{
    type: String,
    required: true
  }],
  tags: [{
    type: String,
    required: true
  }]
});

const QuizQuestion = mongoose.model('QuizQuestion', QuizQuestionSchema);

export default QuizQuestion;
