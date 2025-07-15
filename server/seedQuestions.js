// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import QuizQuestion from './models/Quiz.js';

// dotenv.config();

// const questions = [
//   {
//     questionText: "What activity do you enjoy the most?",
//     options: ["Solving medical problems", "Designing machines", "Starting a business", "Studying laws"],
//     tags: ["doctor", "engineer", "businessman", "lawyer"]
//   },
//   {
//     questionText: "Which subject do you prefer?",
//     options: ["Biology", "Physics", "Commerce", "Political Science"],
//     tags: ["doctor", "engineer", "businessman", "govt employee"]
//   },
//   {
//     questionText: "Where do you see yourself working?",
//     options: ["Hospital", "Construction site", "Own company", "Government office"],
//     tags: ["doctor", "engineer", "businessman", "govt employee"]
//   },
//   {
//     questionText: "Which of these appeals to you most?",
//     options: ["Helping patients", "Inventing things", "Managing people", "Creating laws"],
//     tags: ["doctor", "engineer", "pm", "cm"]
//   },
//   {
//     questionText: "How would you prefer to spend your weekend?",
//     options: ["Volunteering at a clinic", "Building gadgets", "Planning a new product", "Visiting courts"],
//     tags: ["doctor", "engineer", "businessman", "lawyer"]
//   },
//   {
//     questionText: "Pick your favorite environment:",
//     options: ["Farm", "Pharmacy", "Kitchen", "Courtroom"],
//     tags: ["farmer", "pharmacy", "hotel management", "lawyer"]
//   },
//   {
//     questionText: "Which type of work excites you?",
//     options: ["Managing a hotel", "Representing a client", "Leading a country", "Painting for clients"],
//     tags: ["hotel management", "lawyer", "pm", "painter"]
//   },
//   {
//     questionText: "Which skill describes you best?",
//     options: ["Public speaking", "Creativity", "Precision", "Strategy"],
//     tags: ["cm", "painter", "doctor", "businessman"]
//   },
//   {
//     questionText: "Choose your ideal career tool:",
//     options: ["Stethoscope", "Blueprint", "Calculator", "Gavel"],
//     tags: ["doctor", "engineer", "businessman", "lawyer"]
//   },
//   {
//     questionText: "What motivates you the most?",
//     options: ["Serving people", "Creating impact", "Making profit", "Building community"],
//     tags: ["doctor", "pm", "businessman", "cm"]
//   }
// ];

// const seedDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     await QuizQuestion.deleteMany();
//     await QuizQuestion.insertMany(questions);
//     console.log("✅ Quiz questions seeded successfully.");
//     mongoose.disconnect();
//   } catch (error) {
//     console.error("❌ Error seeding quiz questions:", error);
//     mongoose.disconnect();
//   }
// };

// seedDB();

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import QuizQuestion from './models/Quiz.js';

dotenv.config();

const questions = [
  // Original questions
  {
    questionText: "What activity do you enjoy the most?",
    options: ["Solving medical problems", "Designing machines", "Starting a business", "Studying laws"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "Which subject do you prefer?",
    options: ["Biology", "Physics", "Commerce", "Political Science"],
    tags: ["doctor", "engineer", "businessman", "govt employee"]
  },
  {
    questionText: "Where do you see yourself working?",
    options: ["Hospital", "Construction site", "Own company", "Government office"],
    tags: ["doctor", "engineer", "businessman", "govt employee"]
  },
  {
    questionText: "Which of these appeals to you most?",
    options: ["Helping patients", "Inventing things", "Managing people", "Creating laws"],
    tags: ["doctor", "engineer", "pm", "cm"]
  },
  {
    questionText: "How would you prefer to spend your weekend?",
    options: ["Volunteering at a clinic", "Building gadgets", "Planning a new product", "Visiting courts"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "Pick your favorite environment:",
    options: ["Farm", "Pharmacy", "Kitchen", "Courtroom"],
    tags: ["farmer", "pharmacy", "hotel management", "lawyer"]
  },
  {
    questionText: "Which type of work excites you?",
    options: ["Managing a hotel", "Representing a client", "Leading a country", "Painting for clients"],
    tags: ["hotel management", "lawyer", "pm", "painter"]
  },
  {
    questionText: "Which skill describes you best?",
    options: ["Public speaking", "Creativity", "Precision", "Strategy"],
    tags: ["cm", "painter", "doctor", "businessman"]
  },
  {
    questionText: "Choose your ideal career tool:",
    options: ["Stethoscope", "Blueprint", "Calculator", "Gavel"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "What motivates you the most?",
    options: ["Serving people", "Creating impact", "Making profit", "Building community"],
    tags: ["doctor", "pm", "businessman", "cm"]
  },

  // New questions (added)
  {
    questionText: "What kind of problems do you enjoy solving?",
    options: ["Health issues", "Technical challenges", "Business strategies", "Legal disputes"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "Which place feels most exciting to work in?",
    options: ["Hospital", "Laboratory", "Startup office", "Courtroom"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "Which subject interests you the most?",
    options: ["Biology", "Mathematics", "Economics", "Political Science"],
    tags: ["doctor", "engineer", "businessman", "govt_employee"]
  },
  {
    questionText: "What's your ideal leadership role?",
    options: ["Team doctor", "Project manager", "CEO", "Government official"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "How do you prefer to spend your weekends?",
    options: ["Volunteering at a health camp", "Building models", "Pitching ideas", "Attending debates"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "Which of these tools fascinates you the most?",
    options: ["Surgical tools", "Blueprints", "Spreadsheets", "Gavel"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "How would friends describe you?",
    options: ["Compassionate", "Analytical", "Visionary", "Assertive"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "Which daily task excites you?",
    options: ["Treating patients", "Solving coding problems", "Managing a team", "Preparing legal cases"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "Where do you see yourself in 10 years?",
    options: ["Surgeon", "Tech Lead", "Entrepreneur", "Politician"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "Which of these do you enjoy most?",
    options: ["Helping people", "Fixing machines", "Negotiating deals", "Understanding laws"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "Pick a work environment you prefer:",
    options: ["Clinic", "Tech company", "Boardroom", "Courtroom"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "What drives you most?",
    options: ["Saving lives", "Innovating technology", "Generating wealth", "Upholding justice"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "What do you value in a career?",
    options: ["Helping others", "Solving complex problems", "Independence", "Power"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "What type of media do you follow most?",
    options: ["Medical podcasts", "Tech YouTubers", "Startup blogs", "Political debates"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "Which skill fits you best?",
    options: ["Empathy", "Logic", "Leadership", "Persuasion"],
    tags: ["doctor", "engineer", "businessman", "lawyer"]
  },
  {
    questionText: "If you had a choice, you would prefer to:",
    options: ["Work in a hospital", "Build an app", "Start a company", "Work in parliament"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "What's your go-to hobby?",
    options: ["Volunteering", "Tinkering", "Selling items online", "Public speaking"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "Your ideal professional recognition would be:",
    options: ["Saving a life", "Invention patent", "Successful IPO", "Becoming a minister"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "Which phrase resonates most with you?",
    options: ["Health is wealth", "Think outside the box", "Work for yourself", "Lead the nation"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "What do you prioritize in work?",
    options: ["Well-being", "Efficiency", "Profit", "Policy"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "Which image appeals to you most?",
    options: ["Doctor with a stethoscope", "Engineer in a lab", "CEO in a boardroom", "Minister giving a speech"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "Choose your dream project:",
    options: ["Running a clinic", "Building a robot", "Launching a product", "Reforming education"],
    tags: ["doctor", "engineer", "businessman", "cm"]
  },
  {
    questionText: "Which quality do you admire?",
    options: ["Patience", "Precision", "Risk-taking", "Diplomacy"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "Pick a quote that inspires you:",
    options: [
      "The good physician treats the disease; the great physician treats the patient",
      "Engineers like to solve problems",
      "An entrepreneur is someone who jumps off a cliff and builds a plane on the way down",
      "Politics is the art of the possible"
    ],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "Which magazine would you read?",
    options: ["Medical Today", "Wired", "Forbes", "The Economist"],
    tags: ["doctor", "engineer", "businessman", "pm"]
  },
  {
    questionText: "What kind of creativity appeals to you?",
    options: ["Painting", "Building models", "Marketing", "Culinary arts"],
    tags: ["painter", "engineer", "businessman", "hotel_management"]
  },
  {
    questionText: "Choose your work attire:",
    options: ["Lab coat", "Tool belt", "Blazer", "Apron"],
    tags: ["doctor", "engineer", "businessman", "hotel_management"]
  },
  {
    questionText: "How do you celebrate success?",
    options: ["Quiet dinner", "Team meetup", "Big party", "Personal retreat"],
    tags: ["doctor", "engineer", "businessman", "hotel_management"]
  },
  {
    questionText: "What's your dream achievement?",
    options: ["Cure a disease", "Build a rocket", "Create a unicorn startup", "Open a 5-star hotel"],
    tags: ["doctor", "engineer", "businessman", "hotel_management"]
  },
  {
    questionText: "What type of service excites you?",
    options: ["Healthcare", "Infrastructure", "Hospitality", "Law"],
    tags: ["doctor", "engineer", "hotel_management", "lawyer"]
  },
  {
    questionText: "Your ideal project looks like:",
    options: ["Medical camp", "Bridge construction", "Business expo", "Hotel launch event"],
    tags: ["doctor", "engineer", "businessman", "hotel_management"]
  },
  {
    questionText: "Which profession would you shadow?",
    options: ["Surgeon", "Mechanical Engineer", "Startup Founder", "Chef"],
    tags: ["doctor", "engineer", "businessman", "hotel_management"]
  },
  {
    questionText: "Which phrase suits your mindset?",
    options: ["Healing hands", "Tech is the future", "Be your own boss", "Guests are God"],
    tags: ["doctor", "engineer", "businessman", "hotel_management"]
  },
  {
    questionText: "What motivates you to get up every day?",
    options: ["Helping people", "Creating something", "Earning profits", "Serving others"],
    tags: ["doctor", "engineer", "businessman", "hotel_management"]
  },
  {
    questionText: "Pick a school subject you loved:",
    options: ["Science", "Math", "Commerce", "Home Science"],
    tags: ["doctor", "engineer", "businessman", "hotel_management"]
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await QuizQuestion.deleteMany();
    await QuizQuestion.insertMany(questions);
    console.log("✅ Quiz questions seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding quiz questions:", error);
  } finally {
    await mongoose.disconnect();
  }
};

seedDB();

