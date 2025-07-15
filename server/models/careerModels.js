import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  name: String,
  eligibility: String,
  requiredExams: [String],
  steps: [String],
  salaryOverTime: [Number],
});

const Career = mongoose.model('Career', careerSchema);

export default Career;
