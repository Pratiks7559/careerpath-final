// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Quiz.css';

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Add custom class to <body>
//   useEffect(() => {
//     document.body.classList.add('quiz-body-style');
//     return () => {
//       document.body.classList.remove('quiz-body-style');
//     };
//   }, []);

//   // Fetch questions from server
//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/quiz/questions', { withCredentials: true });
//         setQuestions(res.data);
//       } catch (err) {
//         console.error('❌ Error fetching quiz questions:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   // Handle answer change
//   const handleAnswerChange = (index, selectedOption) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[index] = selectedOption;
//     setAnswers(updatedAnswers);
//   };

//   // Handle quiz submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formattedAnswers = questions.map((question, index) => ({
//       questionId: question._id,
//       selectedOption: answers[index],
//     }));

//     try {
//       const res = await axios.post(
//         'http://localhost:5000/api/quiz/result',
//         { answers: formattedAnswers },
//         { withCredentials: true }
//       );
//       setResult(res.data);
//     } catch (err) {
//       console.error('❌ Error submitting quiz:', err);
//     }
//   };

//   // Show loading
//   if (loading) return <div className='quiz-loading'>Loading quiz...</div>;

//   return (
//     <div className="quiz-wrapper">
//       <h1 className="quiz-title">Career Assessment Quiz</h1>

//       <form onSubmit={handleSubmit} className="quiz-form">
//         {questions.map((question, index) => (
//           <div key={question._id} className="quiz-question-card">
//             <p className="quiz-question-text">{question.questionText}</p>
//             <div className="quiz-options-group">
//               {question.options.map((option, optionIndex) => (
//                 <label key={optionIndex} className="quiz-option-label">
//                   <input
//                     type="radio"
//                     name={`question-${index}`}
//                     value={option}
//                     onChange={() => handleAnswerChange(index, option)}
//                     required
//                     className="quiz-radio-input"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}

//         <button type="submit" className="quiz-submit-button">Submit Quiz</button>
//       </form>

//       {result && (
//         <div className="quiz-result-container">
//           <h2 className="quiz-result-title">Your Career Suggestion</h2>
//           <p className="quiz-result-text">{result.suggestion}</p>
//           <button
//             type="button"
//             onClick={() => window.location.reload()}
//             className="quiz-retake-button"
//           >
//             Retake Quiz
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Quiz;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quiz.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('quiz-body-style');
    return () => {
      document.body.classList.remove('quiz-body-style');
    };
  }, []);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/quiz/questions', {
          withCredentials: true,
        });
        setQuestions(res.data);
      } catch (err) {
        console.error('❌ Error fetching quiz questions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (index, selectedOption) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = selectedOption;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedAnswers = questions.map((question, index) => ({
      questionId: question._id,
      selectedOption: answers[index],
    }));

    try {
      const res = await axios.post(
        'http://localhost:5000/api/quiz/result',
        { answers: formattedAnswers },
        { withCredentials: true }
      );
      setResult(res.data);
    } catch (err) {
      console.error('❌ Error submitting quiz:', err);
    }
  };

  const renderPieChart = () => {
    if (!result || !result.scores) return null;

    const labels = Object.keys(result.scores);
    const data = Object.values(result.scores);

    const chartData = {
      labels,
      datasets: [
        {
          label: 'Career Match %',
          data,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
            '#8AFFC1',
            '#D4A5A5',
            '#B8E986',
            '#7FCDCD',
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
      <div className="quiz-chart-container">
        <Pie data={chartData} />
      </div>
    );
  };

  if (loading) return <div className='quiz-loading'>Loading quiz...</div>;

  return (
    <div className="quiz-wrapper">
      <h1 className="quiz-title">Career Assessment Quiz</h1>

      <form onSubmit={handleSubmit} className="quiz-form">
        {questions.map((question, index) => (
          <div key={question._id} className="quiz-question-card">
            <p className="quiz-question-text">{question.questionText}</p>
            <div className="quiz-options-group">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="quiz-option-label">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleAnswerChange(index, option)}
                    required
                    className="quiz-radio-input"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        <button type="submit" className="quiz-submit-button">Submit Quiz</button>
      </form>

      {result && (
        <div className="quiz-result-section">
          <div className="quiz-result-container">
            <h2 className="quiz-result-title">Your Career Suggestion</h2>
            <p className="quiz-result-text">{result.suggestion}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="quiz-retake-button"
            >
              Retake Quiz
            </button>
          </div>
          {renderPieChart()}
        </div>
      )}
    </div>
  );
}

export default Quiz;
