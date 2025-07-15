import mongoose from 'mongoose';


const educationSchema = new mongoose.Schema({
  educationType: { type: String, required: true },
  institutionName: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  marks: { type: String },
  currentlyStudying: { type: Boolean, default: false }
});

const experienceSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  position: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  currentlyWorking: { type: Boolean, default: false }
});

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  technologies: { type: String }
});

const socialMediaSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true }
});

const certificationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  issuingOrganization: { type: String },
  issueDate: { type: Date },
  credentialUrl: { type: String }
});

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date }
});

const resumeSchema = new mongoose.Schema({
  photo: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  bio: { type: String },
  educations: [educationSchema],
  experiences: [experienceSchema],
  skills: { type: [String], default: [] },
  projects: [projectSchema],
  socialMediaLinks: [socialMediaSchema],
  certifications: [certificationSchema],
  achievements: [achievementSchema],
  atsScore: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const Resume = mongoose.model('Resume', resumeSchema);
export default Resume;