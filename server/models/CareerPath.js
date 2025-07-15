import mongoose from 'mongoose';

const careerPathSchema = new mongoose.Schema({
  career: { type: String, required: true },
  timeline: [{
    year: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    skillsRequired: [String],
    salaryExpectation: { type: Number, required: true },
    jobSatisfaction: { type: Number, required: true }, // 1-10 scale
    industryGrowth: { type: Number, required: true }, // 1-10 scale
  }],
});

export default mongoose.model('CareerPath', careerPathSchema);
