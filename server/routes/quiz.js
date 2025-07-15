// import express from 'express';
// import QuizQuestion from '../models/Quiz.js';
// import User from '../models/user.js'; // Assuming you have a User model
// const router = express.Router();

// // Route to get all quiz questions
// router.get('/questions', async (req, res) => {
//   try {
//     const questions = await QuizQuestion.find();
//     res.json(questions);
//   } catch (err) {
//     console.error('❌ Error fetching questions:', err);
//     res.status(500).json({ message: 'Error fetching questions' });
//   }
// });

// // Route to submit quiz answers and generate career suggestion
// router.post('/result', async (req, res) => {
//   const { answers } = req.body; // Answers will be an array of answers the user has selected
//   let careerScores = {};

//   try {
//     // Iterate through the answers and accumulate career scores
//     for (let i = 0; i < answers.length; i++) {
//       const question = await QuizQuestion.findById(answers[i].questionId);
//       const selectedOption = answers[i].selectedOption;
//       const selectedTag = question.tags[question.options.indexOf(selectedOption)];

//       // Accumulate score for each career based on selected answer
//       if (!careerScores[selectedTag]) {
//         careerScores[selectedTag] = 0;
//       }
//       careerScores[selectedTag]++;
//     }

//     // Get the career with the highest score
//     let suggestedCareer = Object.keys(careerScores).reduce((a, b) => careerScores[a] > careerScores[b] ? a : b);

//     // You can map the career tag to a full career name if you want
//     const careerMapping = {
//       doctor: "Doctor",
//       engineer: "Engineer",
//       businessman: "Businessman",
//       lawyer: "Lawyer",
//       pharmacy: "Pharmacist",
//       hotel_management: "Hotel Manager",
//       painter: "Painter",
//       pm: "Prime Minister",
//       cm: "Chief Minister",
//       govt_employee: "Government Employee",
//     };

//     const careerSuggestion = careerMapping[suggestedCareer] || "Career not found";

//     // Save the result to the user's profile (assuming you're logged in and have a user object)
//     const userId = req.user._id; // Assuming you are storing the user id in the request (via JWT or session)
//     await User.findByIdAndUpdate(userId, { $set: { quizResult: careerSuggestion } });

//     res.json({ suggestion: careerSuggestion });
//   } catch (err) {
//     console.error('❌ Error generating result:', err);
//     res.status(500).json({ message: 'Error generating result' });
//   }
// });

// export default router;

// import express from 'express';
// import QuizQuestion from '../models/Quiz.js';
// import User from '../models/user.js';

// const router = express.Router();

// // Route to get all quiz questions
// router.get('/questions', async (req, res) => {
//   try {
//     const questions = await QuizQuestion.find();
//     res.json(questions);
//   } catch (err) {
//     console.error('❌ Error fetching questions:', err);
//     res.status(500).json({ message: 'Error fetching questions' });
//   }
// });

// // Route to submit quiz answers and generate career suggestion
// router.post('/result', async (req, res) => {
//   const { answers } = req.body;
//   const userId = req.session.userId; // Get user ID from session

//   if (!userId) {
//     return res.status(401).json({ message: 'User not logged in' });
//   }

//   let careerScores = {};

//   try {
//     for (let i = 0; i < answers.length; i++) {
//       const { questionId, selectedOption } = answers[i];
//       const question = await QuizQuestion.findById(questionId);

//       if (!question) continue;

//       const selectedTag = question.tags[question.options.indexOf(selectedOption)];

//       if (selectedTag) {
//         careerScores[selectedTag] = (careerScores[selectedTag] || 0) + 1;
//       }
//     }

//     const suggestedCareer = Object.keys(careerScores).reduce((a, b) =>
//       careerScores[a] > careerScores[b] ? a : b
//     );

//     const careerMapping = {
//       doctor: "Doctor",
//       engineer: "Engineer",
//       businessman: "Businessman",
//       lawyer: "Lawyer",
//       pharmacy: "Pharmacist",
//       hotel_management: "Hotel Manager",
//       painter: "Painter",
//       pm: "Prime Minister",
//       cm: "Chief Minister",
//       govt_employee: "Government Employee",
//     };

//     const careerSuggestion = careerMapping[suggestedCareer] || "Career not found";

//     // Save result to user profile
//     await User.findByIdAndUpdate(userId, {
//       $set: { quizResult: careerSuggestion },
//     });

//     res.json({ suggestion: careerSuggestion });
//   } catch (err) {
//     console.error('❌ Error generating result:', err);
//     res.status(500).json({ message: 'Error generating result' });
//   }
// });

// export default router;

// import express from 'express';
// import QuizQuestion from '../models/Quiz.js';
// import User from '../models/user.js';

// const router = express.Router();

// // GET /api/quiz/questions - Fetch 10 random questions
// router.get('/questions', async (req, res) => {
//   try {
//     const questions = await QuizQuestion.aggregate([{ $sample: { size: 10 } }]);
//     res.json(questions);
//   } catch (error) {
//     console.error('❌ Error fetching quiz questions:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // POST /api/quiz/result - Submit answers and generate career suggestion
// router.post('/result', async (req, res) => {
//   const { answers } = req.body;
//   const userId = req.session.userId; // Get user ID from session

//   if (!userId) {
//     return res.status(401).json({ message: 'User not logged in' });
//   }

//   let careerScores = {};

//   try {
//     for (let i = 0; i < answers.length; i++) {
//       const { questionId, selectedOption } = answers[i];
//       const question = await QuizQuestion.findById(questionId);

//       if (!question) continue;

//       const selectedIndex = question.options.indexOf(selectedOption);
//       const selectedTag = question.tags[selectedIndex];

//       if (selectedTag) {
//         careerScores[selectedTag] = (careerScores[selectedTag] || 0) + 1;
//       }
//     }

//     const suggestedCareer = Object.keys(careerScores).reduce((a, b) =>
//       careerScores[a] > careerScores[b] ? a : b
//     );

//     const careerMapping = {
//       doctor: "Doctor",
//       engineer: "Engineer",
//       businessman: "Businessman",
//       lawyer: "Lawyer",
//       pharmacy: "Pharmacist",
//       hotel_management: "Hotel Manager",
//       painter: "Painter",
//       pm: "Prime Minister",
//       cm: "Chief Minister",
//       govt_employee: "Government Employee",
//     };

//     const careerSuggestion = careerMapping[suggestedCareer] || "Career not found";

//     // Save result to user's profile
//     await User.findByIdAndUpdate(userId, {
//       $set: { quizResult: careerSuggestion },
//     });

//     res.json({ suggestion: careerSuggestion });
//   } catch (error) {
//     console.error('❌ Error generating quiz result:', error);
//     res.status(500).json({ message: 'Error generating result' });
//   }
// });

// export default router;

// import express from 'express';
// import QuizQuestion from '../models/Quiz.js';
// import User from '../models/user.js';

// const router = express.Router();

// // Route to get random quiz questions (10)
// router.get('/questions', async (req, res) => {
//   try {
//     const questions = await QuizQuestion.aggregate([{ $sample: { size: 10 } }]);
//     res.json(questions);
//   } catch (err) {
//     console.error('❌ Error fetching questions:', err);
//     res.status(500).json({ message: 'Error fetching questions' });
//   }
// });

// // Route to submit quiz answers and generate career suggestion
// router.post('/result', async (req, res) => {
//   const { answers } = req.body;
//   const userId = req.session.userId; // Get user ID from session

//   if (!userId) {
//     return res.status(401).json({ message: 'User not logged in' });
//   }

//   let careerScores = {};

//   try {
//     for (let i = 0; i < answers.length; i++) {
//       const { questionId, selectedOption } = answers[i];
//       const question = await QuizQuestion.findById(questionId);

//       if (!question) continue;

//       const selectedTag = question.tags[question.options.indexOf(selectedOption)];

//       if (selectedTag) {
//         careerScores[selectedTag] = (careerScores[selectedTag] || 0) + 1;
//       }
//     }

//     const suggestedCareer = Object.keys(careerScores).reduce((a, b) =>
//       careerScores[a] > careerScores[b] ? a : b
//     );

//     const careerMapping = {
//       doctor: "Doctor",
//       engineer: "Engineer",
//       businessman: "Businessman",
//       lawyer: "Lawyer",
//       pharmacy: "Pharmacist",
//       hotel_management: "Hotel Manager",
//       painter: "Painter",
//       pm: "Prime Minister",
//       cm: "Chief Minister",
//       govt_employee: "Government Employee",
//     };

//     const careerSuggestion = careerMapping[suggestedCareer] || "Career not found";

//     // Save result to user profile and quiz history
//     await User.findByIdAndUpdate(userId, {
//       $set: { quizResult: careerSuggestion },
//       $push: { quizHistory: { result: careerSuggestion } },
//     });

//     res.json({ suggestion: careerSuggestion });
//   } catch (err) {
//     console.error('❌ Error generating result:', err);
//     res.status(500).json({ message: 'Error generating result' });
//   }
// });

// export default router;
import express from 'express';
import QuizQuestion from '../models/Quiz.js';
import User from '../models/user.js';

const router = express.Router();

// Route to get 10 random questions
router.get('/questions', async (req, res) => {
  try {
    const questions = await QuizQuestion.aggregate([{ $sample: { size: 10 } }]);
    res.json(questions);
  } catch (err) {
    console.error('❌ Error fetching questions:', err);
    res.status(500).json({ message: 'Error fetching questions' });
  }
});

// Route to submit answers and generate result
router.post('/result', async (req, res) => {
  const { answers } = req.body;
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ message: 'User not logged in' });
  }

  const careerScores = {};

  try {
    for (const { questionId, selectedOption } of answers) {
      const question = await QuizQuestion.findById(questionId);
      if (!question) continue;

      const optionIndex = question.options.indexOf(selectedOption);
      const selectedTag = question.tags[optionIndex];

      if (selectedTag) {
        careerScores[selectedTag] = (careerScores[selectedTag] || 0) + 1;
      }
    }

    const suggestedCareerKey = Object.keys(careerScores).reduce((a, b) =>
      careerScores[a] > careerScores[b] ? a : b
    );

    const careerMapping = {
      doctor: "Doctor",
      engineer: "Engineer",
      businessman: "Businessman",
      lawyer: "Lawyer",
      pharmacy: "Pharmacist",
      hotel_management: "Hotel Manager",
      painter: "Painter",
      pm: "Prime Minister",
      cm: "Chief Minister",
      govt_employee: "Government Employee",
    };

    const careerSuggestion = careerMapping[suggestedCareerKey] || "Career not found";

    // Save to user document
    await User.findByIdAndUpdate(userId, {
      $set: { quizResult: careerSuggestion },
      $push: {
        quizHistory: {
          result: careerSuggestion,
          scores: careerScores,
        },
      },
    });

    res.json({
      suggestion: careerSuggestion,
      scores: careerScores, // Send this to frontend for graph
    });

  } catch (err) {
    console.error('❌ Error generating result:', err);
    res.status(500).json({ message: 'Error generating result' });
  }
});

export default router;
