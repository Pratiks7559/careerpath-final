
  







  import mongoose from 'mongoose';
import Roadmap from './models/Roadmap.js'; // Include the .js extension for ESM imports

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/careerpath', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure code
  }
};

// Add career roadmaps to the database
const addRoadmapData = async () => {
  const careerRoadmaps = [
    {
        career: 'Software Engineer',
        education: [
          { step: "Bachelor's Degree", description: "Complete a computer science degree" },
          { step: "Master's Degree (Optional)", description: "Optional but beneficial for specialization" }
        ],
        skills: ["Programming languages", "Data Structures & Algorithms", "Web Development", "Database Management"],
        certifications: ["AWS Certified Developer", "Google Associate Android Developer"],
        projects: [
          { name: "Personal Portfolio", description: "Create a portfolio website showcasing your work." },
          { name: "E-commerce Website", description: "Build a full-stack e-commerce web app." }
        ],
        jobRoles: ["Software Developer", "Web Developer", "Frontend Developer", "Backend Developer"]
      },
      // New career roadmaps added
      {
        career: 'Entrepreneur',
        education: [
          { step: "Bachelor's Degree", description: "Complete a business, economics, or related degree" },
          { step: "Master's Degree (Optional)", description: "MBA or specialization in entrepreneurship" }
        ],
        skills: ["Business Strategy", "Leadership", "Finance", "Marketing"],
        certifications: ["Certified Entrepreneur", "Small Business Certification"],
        projects: [
          { name: "Business Plan", description: "Develop a detailed business plan for a startup." },
          { name: "Startup Launch", description: "Launch a minimum viable product (MVP) for a new product." }
        ],
        jobRoles: ["Founder", "CEO", "Business Owner"]
      },
      {
        career: 'IAS Officer',
        education: [
          { step: "Bachelor's Degree", description: "Complete a degree in any discipline" },
          { step: "IAS Exam Preparation", description: "Prepare for the Indian Administrative Services exam" }
        ],
        skills: ["Administrative Skills", "Public Speaking", "Leadership", "Decision Making"],
        certifications: ["Civil Services Exam Qualification"],
        projects: [
          { name: "Case Study Analysis", description: "Study and present real-life government case studies" },
          { name: "Mock Interview", description: "Participate in mock interviews for the IAS exam" }
        ],
        jobRoles: ["IAS Officer", "Civil Services Administrator", "Government Executive"]
      },
      {
        career: 'Lawyer',
        education: [
          { step: "Bachelor's Degree", description: "Complete a law degree (LLB)" },
          { step: "Bar Exam", description: "Pass the Bar exam to practice law" }
        ],
        skills: ["Legal Research", "Public Speaking", "Negotiation", "Critical Thinking"],
        certifications: ["Bar Council Certification"],
        projects: [
          { name: "Legal Case Analysis", description: "Analyze and present legal cases in court" },
          { name: "Mock Trial", description: "Participate in mock trials to hone courtroom skills" }
        ],
        jobRoles: ["Criminal Lawyer", "Corporate Lawyer", "Family Lawyer", "Civil Rights Lawyer"]
      },
      {
        career: 'Pilot',
        education: [
          { step: "Bachelor's Degree", description: "Complete a degree in aviation or related field" },
          { step: "Flight Training", description: "Enroll in a flight school to gain necessary certifications" }
        ],
        skills: ["Aircraft Control", "Navigation", "Communication", "Safety Protocols"],
        certifications: ["Commercial Pilot License (CPL)", "Airline Transport Pilot License (ATPL)"],
        projects: [
          { name: "Flight Simulation", description: "Use flight simulators for training and practice" },
          { name: "Solo Flight", description: "Complete a solo flight for certification" }
        ],
        jobRoles: ["Commercial Pilot", "Airline Pilot", "Cargo Pilot"]
      },
      {
        career: 'Data Scientist',
        education: [
          { step: "Bachelor's Degree", description: "Complete a data science or related degree" },
          { step: "Master's Degree (Optional)", description: "Gain expertise in machine learning and artificial intelligence" }
        ],
        skills: ["Data Analysis", "Machine Learning", "Statistical Modeling", "Big Data Technologies"],
        certifications: ["Data Science Certification", "Certified Analytics Professional (CAP)"],
        projects: [
          { name: "Customer Segmentation", description: "Use machine learning to segment customers based on purchase behavior" },
          { name: "Predictive Analytics", description: "Build models to predict stock market trends" }
        ],
        jobRoles: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "AI Specialist"]
      },
      {
        career: 'Chartered Accountant (CA)',
        education: [
          { step: "Bachelor's Degree", description: "Complete a degree in accounting or finance" },
          { step: "CA Exam", description: "Pass the Chartered Accountancy exam" }
        ],
        skills: ["Financial Analysis", "Taxation", "Audit", "Accounting Software"],
        certifications: ["CA Qualification"],
        projects: [
          { name: "Financial Statement Analysis", description: "Analyze and interpret company financial statements" },
          { name: "Audit Project", description: "Participate in a practical audit of a company" }
        ],
        jobRoles: ["Chartered Accountant", "Financial Analyst", "Tax Consultant", "Auditor"]
      },
      {
        career: 'Graphic Designer',
        education: [
          { step: "Bachelor's Degree", description: "Complete a degree in graphic design or related field" },
          { step: "Portfolio Development", description: "Create a portfolio of design projects to showcase" }
        ],
        skills: ["Adobe Creative Suite", "Typography", "UI/UX Design", "Creative Thinking"],
        certifications: ["Adobe Certified Expert (ACE)"],
        projects: [
          { name: "Brand Design", description: "Create a brand identity for a company" },
          { name: "Website Design", description: "Design a website layout and user interface" }
        ],
        jobRoles: ["Graphic Designer", "UI/UX Designer", "Web Designer"]
      },
      {
        career: 'Psychologist',
        education: [
          { step: "Bachelor's Degree", description: "Complete a degree in psychology" },
          { step: "Master's Degree", description: "Pursue a master's degree for specialization" },
          { step: "Doctorate (Optional)", description: "Further specialization in psychology fields" }
        ],
        skills: ["Counseling", "Behavioral Analysis", "Psychological Testing", "Therapeutic Techniques"],
        certifications: ["Licensed Psychologist"],
        projects: [
          { name: "Therapeutic Case Study", description: "Document and analyze therapeutic case studies" },
          { name: "Psychological Testing", description: "Conduct psychological tests and interpret results" }
        ],
        jobRoles: ["Clinical Psychologist", "Counseling Psychologist", "Forensic Psychologist"]
      },
      {
        career: 'Pharmacist',
        education: [
          { step: "Bachelor's Degree", description: "Complete a pharmacy degree" },
          { step: "Pharmacy License", description: "Pass the required licensing exams to practice as a pharmacist" }
        ],
        skills: ["Pharmaceutical Knowledge", "Patient Counseling", "Medication Management", "Clinical Research"],
        certifications: ["Licensed Pharmacist"],
        projects: [
          { name: "Medication Distribution", description: "Oversee and manage the distribution of medications in a hospital" },
          { name: "Pharmaceutical Research", description: "Research new drug formulations and their effects" }
        ],
        jobRoles: ["Pharmacist", "Clinical Pharmacist", "Pharmacy Manager"]
      },
      {
        career: 'Doctor',
        education: [
          { step: "Bachelor's Degree", description: "Complete a medical degree (MBBS)" },
          { step: "Internship", description: "Complete an internship under a licensed doctor" },
          { step: "Postgraduate Specialization (Optional)", description: "Specialize in a specific area of medicine (e.g., surgery, pediatrics)" }
        ],
        skills: ["Medical Knowledge", "Patient Care", "Surgical Skills", "Critical Thinking"],
        certifications: ["Medical License", "Specialization Certification (Optional)"],
        projects: [
          { name: "Clinical Rotation", description: "Undergo clinical rotations in various specialties" },
          { name: "Medical Research", description: "Participate in medical research projects" }
        ],
        jobRoles: ["General Practitioner", "Surgeon", "Pediatrician", "Cardiologist"]
      },
  
      // Engineer Career Roadmap
      {
        career: 'Engineer',
        education: [
          { step: "Bachelor's Degree", description: "Complete a degree in engineering (e.g., mechanical, civil, electrical)" },
          { step: "Master's Degree (Optional)", description: "Pursue a master's degree for advanced expertise" }
        ],
        skills: ["Problem Solving", "Technical Skills", "Project Management", "Designing"],
        certifications: ["Professional Engineering Certification (PE)"],
        projects: [
          { name: "Engineering Design Project", description: "Design and build a working engineering prototype" },
          { name: "Industrial Internship", description: "Complete an internship at an engineering firm" }
        ],
        jobRoles: ["Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Software Engineer"]
      },
  
      // Civil Engineer Career Roadmap
      {
        career: 'Civil Engineer',
        education: [
          { step: "Bachelor's Degree", description: "Complete a civil engineering degree" },
          { step: "Internship", description: "Complete an internship in construction or infrastructure projects" },
          { step: "Master's Degree (Optional)", description: "Specialize in a specific area (e.g., structural, environmental)" }
        ],
        skills: ["Structural Analysis", "Construction Management", "Surveying", "Geotechnical Engineering"],
        certifications: ["Civil Engineering License (PE)"],
        projects: [
          { name: "Building Design", description: "Design a building's structure or foundation" },
          { name: "Infrastructure Project", description: "Work on large-scale infrastructure projects like bridges or highways" }
        ],
        jobRoles: ["Construction Manager", "Structural Engineer", "Project Engineer"]
      },
  
      // Mechanical Engineer Career Roadmap
      {
        career: 'Mechanical Engineer',
        education: [
          { step: "Bachelor's Degree", description: "Complete a mechanical engineering degree" },
          { step: "Internship", description: "Gain hands-on experience in a mechanical engineering role" },
          { step: "Master's Degree (Optional)", description: "Gain specialized skills in areas like thermodynamics or robotics" }
        ],
        skills: ["Mechanical Design", "Thermodynamics", "Material Science", "Robotics"],
        certifications: ["Certified Mechanical Engineer (CMfgT)"],
        projects: [
          { name: "Robotics Project", description: "Design and build a functional robotic system" },
          { name: "Energy System Design", description: "Work on energy-efficient mechanical systems" }
        ],
        jobRoles: ["Mechanical Engineer", "Robotics Engineer", "Thermal Engineer"]
      },
  
      // Teacher Career Roadmap
      {
        career: 'Teacher',
        education: [
          { step: "Bachelor's Degree", description: "Complete a degree in education or subject-specific field" },
          { step: "Teaching Certification", description: "Obtain certification to teach in schools" },
          { step: "Master's Degree (Optional)", description: "Further specialize in education or a subject area" }
        ],
        skills: ["Classroom Management", "Communication", "Pedagogical Techniques", "Subject Knowledge"],
        certifications: ["Teaching License", "Special Education Certification (Optional)"],
        projects: [
          { name: "Lesson Planning", description: "Develop detailed lesson plans for your subject" },
          { name: "Teaching Internship", description: "Complete a student-teaching internship in schools" }
        ],
        jobRoles: ["Elementary School Teacher", "High School Teacher", "College Professor"]
      },
  
      // Painter Career Roadmap
      {
        career: 'Painter',
        education: [
          { step: "Art Degree (Optional)", description: "Complete a formal education in fine arts" },
          { step: "Portfolio Development", description: "Build a portfolio of original paintings" }
        ],
        skills: ["Color Theory", "Brush Techniques", "Composition", "Creativity"],
        certifications: ["Certified Artist (Optional)"],
        projects: [
          { name: "Exhibition", description: "Host an art exhibition showcasing your paintings" },
          { name: "Gallery Project", description: "Collaborate with a gallery for your art display" }
        ],
        jobRoles: ["Freelance Artist", "Gallery Curator", "Art Instructor"]
      }
    // Add other careers here...
  ];

  try {
    await Roadmap.insertMany(careerRoadmaps);
    console.log('Roadmap data added to database');
  } catch (err) {
    console.error('Error adding data:', err);
  } finally {
    mongoose.connection.close();
  }
};

// Main execution
const init = async () => {
  await connectDB();
  await addRoadmapData();
};

init();
