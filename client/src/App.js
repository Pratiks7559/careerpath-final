// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import IntroPage from './pages/IntroPage';

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<IntroPage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={
//           <PrivateRoute><Dashboard /></PrivateRoute>
//         } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import { Routes, Route } from 'react-router-dom';
// import IntroPage from './pages/IntroPage';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<IntroPage />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//   );
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import Login from './pages/Login';
import ForgotPassword from './password/ForgotPassword';
import VerifyOTP from './password/VerifyOTP';
import ResetPassword from './password/ResetPassword';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Quiz from './pages/Quiz';
import Resources from './pages/Resources';
import Career from './pages/Career';
// import CareerRoadmap from './roadmap/CareerRoadmap';
import CareerSelection from './roadmap/CareerSelection';
import JournalPage from './pages/JournalPage';
// import CommentList from './comment/CommentList';

import CommentsPage from './comment/CommentsPage';
import ResumeForm from './resume/ResumeForm';
import ResumeView from './resume/ResumeView';
import MentalWellness from './pages/MentalWellness';
import StudyPlanGenerator from './StudyPlan/StudyPlanGenerator';
function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
<Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/resources" element={<Resources />} /> {/* ✅ Separate route but part of dashboard */}
      <Route path="/career" element={<Career />} /> 
      {/* <Route path="/comments" element={<CommentList />} />  */}
      <Route path="/comments" element={<CommentsPage />} />  
      <Route path="/journal" element={<JournalPage />} />  
      <Route path="/career-roadmap" element={<CareerSelection />} />  
      <Route path="/resumes" element={<ResumeForm  />} />  
      <Route path="/resumes/:id" element={<ResumeView />} />
      <Route path="/mental-wellness" element={<MentalWellness />} />
      <Route path="/study-plan" element={<StudyPlanGenerator />} />
    </Routes>
  );
}

export default App;
