import express from 'express';
import Career from '../models/careerModels.js';

const router = express.Router();

// GET route to fetch all career data
router.get('/career', async (req, res) => {
  try {
    // Try to get all careers from the DB
    let careers = await Career.find();

    // If no careers exist, insert default ones
    if (careers.length === 0) {
      careers = await Career.insertMany([
        {
          name: 'Software Engineer',
          eligibility: "Bachelor's degree in Computer Science",
          requiredExams: ['JEE-Main', 'GATE'],
          steps: ['Complete degree', 'Apply for exams', 'Pass interview'],
          salaryOverTime: [50000, 60000, 75000, 90000, 110000],
        },
        {
          name: 'Doctor',
          eligibility: 'MBBS',
          requiredExams: ['NEET'],
          steps: ['Complete MBBS', 'Internship', 'Postgraduate specialization'],
          salaryOverTime: [40000, 50000, 70000, 85000, 100000],
        },
        {
          name: 'Civil Engineer',
          eligibility: "Bachelor's degree in Civil Engineering",
          requiredExams: ['JEE-Main', 'GATE'],
          steps: ['Complete degree', 'Apply for jobs', 'Pass interviews'],
          salaryOverTime: [45000, 55000, 70000, 85000, 95000],
        },
        {
          name: 'Mechanical Engineer',
          eligibility: "Bachelor's degree in Mechanical Engineering",
          requiredExams: ['JEE-Main', 'GATE'],
          steps: ['Complete degree', 'Internship', 'Get placed'],
          salaryOverTime: [46000, 58000, 72000, 86000, 100000],
        },
        {
          name: 'Electrical Engineer',
          eligibility: "Bachelor's degree in Electrical Engineering",
          requiredExams: ['JEE-Main', 'GATE'],
          steps: ['Graduate', 'Appear for exams', 'Job placement'],
          salaryOverTime: [47000, 59000, 73000, 88000, 105000],
        },
        {
          name: 'Entrepreneur',
          eligibility: 'Any educational background + business skills',
          requiredExams: [],
          steps: ['Learn business fundamentals', 'Start venture', 'Grow & scale'],
          salaryOverTime: [0, 10000, 50000, 150000, 500000],
        },
        {
          name: 'Government Officer (IAS)',
          eligibility: "Bachelor's degree in any field",
          requiredExams: ['UPSC CSE'],
          steps: ['Graduate', 'Prepare for UPSC', 'Clear prelims & mains', 'Interview'],
          salaryOverTime: [56000, 67000, 83000, 100000, 120000],
        },
        {
          name: 'Teacher/Professor',
          eligibility: "Bachelor's + B.Ed or Master's + UGC-NET",
          requiredExams: ['CTET', 'UGC-NET'],
          steps: ['Graduate', 'Clear required exams', 'Apply to schools/colleges'],
          salaryOverTime: [30000, 40000, 50000, 65000, 80000],
        },
        {
          name: 'Lawyer',
          eligibility: 'LLB or BA LLB',
          requiredExams: ['CLAT', 'AIBE'],
          steps: ['Law degree', 'Pass AIBE', 'Register with Bar Council'],
          salaryOverTime: [25000, 40000, 60000, 90000, 120000],
        },
        {
          name: 'Pilot',
          eligibility: '12th with PCM + Commercial Pilot License',
          requiredExams: ['DGCA CPL'],
          steps: ['Enroll in flying school', 'Flight training', 'License', 'Airline job'],
          salaryOverTime: [80000, 120000, 180000, 250000, 350000],
        },
        {
          name: 'Data Scientist',
          eligibility: "Bachelor's in CS/Math/Stats, Master's preferred",
          requiredExams: [],
          steps: ['Get degree', 'Learn ML/AI', 'Build projects', 'Apply for jobs'],
          salaryOverTime: [60000, 85000, 120000, 160000, 200000],
        },
        {
          name: 'Chartered Accountant (CA)',
          eligibility: 'Commerce background',
          requiredExams: ['CA Foundation', 'CA Intermediate', 'CA Final'],
          steps: ['Register with ICAI', 'Clear exams', 'Articleship', 'Pass final'],
          salaryOverTime: [50000, 75000, 100000, 140000, 180000],
        },
        {
          name: 'Graphic Designer',
          eligibility: 'Diploma/Degree in Graphic Design or related field',
          requiredExams: [],
          steps: ['Design course', 'Build portfolio', 'Freelance or job'],
          salaryOverTime: [20000, 35000, 50000, 70000, 90000],
        },
        {
          name: 'Psychologist',
          eligibility: "Bachelor's + Master's in Psychology",
          requiredExams: ['UGC-NET (for academic roles)'],
          steps: ['Graduate', 'Master’s', 'Internship', 'Practice/PhD'],
          salaryOverTime: [30000, 45000, 60000, 80000, 100000],
        },
        {
          name: 'Pharmacist',
          eligibility: 'Diploma/Bachelor in Pharmacy',
          requiredExams: ['GPAT (optional)'],
          steps: ['Pharmacy degree', 'License', 'Join hospital/retail chain'],
          salaryOverTime: [25000, 35000, 50000, 60000, 75000],
        },
        
      ]);
    }

    // Respond with the data
    res.status(200).json(careers);
  } catch (error) {
    console.error('Error fetching career data:', error);
    res.status(500).json({ message: 'Error fetching career data' });
  }
});

export default router;

