// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import MotivationalQuote from './Quote';
// import JournalPage from './JournalPage';
// import Header from './Header';
// import MentorModal from './MentorModal';
// import WelcomeSection from './WelcomeSection';
// import FeedbackForm from './FeedbackForm';



// import './sample.css';

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [mentorModalVisible, setMentorModalVisible] = useState(false);
//   const [journalDialogVisible, setJournalDialogVisible] = useState(false);
//   const [feedbackVisible, setFeedbackVisible] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   // const [currentUser, setCurrentUser] = useState(null);
//   // const [users, setUsers] = useState([]);



//   const mentor = {
//     name: 'Vaibhav Patil',
//     profession: 'Software Engineer',
//     bio: 'Helping students navigate their career paths with confidence.',
//     phone: '9850237997',
//     email: 'vyp89366@gmail.com',
//     photo: '/Photograph.jpg',
//   };

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/user/profile', {
//           withCredentials: true,
//         });
//         setUser(res.data);
//       } catch (err) {
//         console.error('❌ Error fetching profile:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   useEffect(() => {
//     document.body.classList.add('main-body');
//     return () => document.body.classList.remove('main-body');
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.location.href = '/login';
//   };
 
//   if (loading) {
//     return (
//       <div className="loading-screen">
//         <div className="spinner"></div>
//         <p>Loading your dashboard...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="page-content">
//         <div className="dashboard">
//           <Header onLogout={handleLogout} />

//           <main className="main-content">
//             <div className="motivational-quote-section">
//               <MotivationalQuote />
//             </div>
//             <WelcomeSection user={user} />

//             {journalDialogVisible && (
//               <div className="journal-dialog">
//                 <div className="journal-dialog-header">
//                   Career Journal
//                   <button className="close-button" onClick={() => setJournalDialogVisible(false)}>
//                     ×
//                   </button>
//                 </div>
//                 <div className="journal-dialog-content">
//                   <JournalPage />
//                 </div>
//               </div>
//             )}

//             {/* Displaying Forum Page */}
//              {/* Displaying Forum Page */}
 


//           </main>

//           {/* FAB Menu */}
//           <div className="fab-container">
//             <div
//               className={`fab-button ${modalVisible || mentorModalVisible || journalDialogVisible ? 'open' : ''}`}
//               onClick={() => {
//                 setModalVisible(false);
//                 setMentorModalVisible(false);
//                 setJournalDialogVisible(false);
//                 setMenuOpen((prev) => !prev);
//               }}
//             >
//               ☰
//             </div>

//             <div className={`fab-menu ${menuOpen ? 'show' : ''}`}>
//               <div className="fab-item" onClick={() => {
//                 setJournalDialogVisible(true);
//                 setMenuOpen(false);
//               }}>
//                 📖<span>Journal</span>
//               </div>
//               <div className="fab-item" onClick={() => {
//                 setMentorModalVisible(true);
//                 setMenuOpen(false);
//               }}>
//                 🧑‍🏫<span>Mentor</span>
//               </div>
//               <div className="fab-item" onClick={() => {
//                 setModalVisible(true);
//                 setMenuOpen(false);
//               }}>
//                 💬<span>Forum</span> {/* Updated icon for Forum */}
//               </div>
//             </div>
//           </div>

//           {/* Feedback Button */}
//           <div className="feedback-fab" onClick={() => setFeedbackVisible(true)}>
//             📝
//           </div>

//           {/* Feedback Form */}
//           {feedbackVisible && (
//             <FeedbackForm onClose={() => setFeedbackVisible(false)} />
//           )}
//         </div>
//       </div>

//       {/* Modals */}
//       {mentorModalVisible && <MentorModal mentor={mentor} onClose={() => setMentorModalVisible(false)} />}

//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} CareerGuide. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }

// export default Dashboard;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CommentList from '../comment/CommentList';
// import NotificationBell from '../comment/NotificationBell';
// import MotivationalQuote from './Quote';
// import JournalPage from './JournalPage';
// import Header from './Header';
// import MentorModal from './MentorModal';
// import WelcomeSection from './WelcomeSection';
// import FeedbackForm from './FeedbackForm';
// import './sample.css';

// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [mentorModalVisible, setMentorModalVisible] = useState(false);
//   const [journalDialogVisible, setJournalDialogVisible] = useState(false);
//   const [feedbackVisible, setFeedbackVisible] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showForum, setShowForum] = useState(false);

//   const mentor = {
//     name: 'Vaibhav Patil',
//     profession: 'Software Engineer',
//     bio: 'Helping students navigate their career paths with confidence.',
//     phone: '9850237997',
//     email: 'vyp89366@gmail.com',
//     photo: '/Photograph.jpg',
//   };

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/user/profile', {
//           withCredentials: true,
//         });
//         setUser(res.data);
//       } catch (err) {
//         console.error('❌ Error fetching profile:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   useEffect(() => {
//     document.body.classList.add('main-body');
//     return () => document.body.classList.remove('main-body');
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.location.href = '/login';
//   };

//   if (loading) {
//     return (
//       <div className="loading-screen">
//         <div className="spinner"></div>
//         <p>Loading your dashboard...</p>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div className="page-content">
//         <div className="dashboard">
//           <Header onLogout={handleLogout} />
//           {user && <NotificationBell currentUser={user} />}

//           <main className="main-content">
//             <div className="motivational-quote-section">
//               <MotivationalQuote />
//             </div>
//             <WelcomeSection user={user} loading={loading} />

//             {journalDialogVisible && (
//               <div className="journal-dialog">
//                 <div className="journal-dialog-header">
//                   Career Journal
//                   <button 
//                     className="close-button" 
//                     onClick={() => setJournalDialogVisible(false)}
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="journal-dialog-content">
//                   <JournalPage />
//                 </div>
//               </div>
//             )}

//             {showForum && (
//               <div className="forum-section">
//                 <div className="forum-header">
//                   <h2>Discussion Forum</h2>
//                   <button 
//                     className="close-button" 
//                     onClick={() => setShowForum(false)}
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="forum-content">
//                   <CommentList currentUser={user} />
//                 </div>
//               </div>
//             )}
//           </main>

//           {/* FAB Menu */}
//           <div className="fab-container">
//             <div
//               className={`fab-button ${mentorModalVisible || journalDialogVisible ? 'open' : ''}`}
//               onClick={() => {
//                 setMentorModalVisible(false);
//                 setJournalDialogVisible(false);
//                 setMenuOpen(prev => !prev);
//               }}
//             >
//               ☰
//             </div>

//             <div className={`fab-menu ${menuOpen ? 'show' : ''}`}>
//               <div 
//                 className="fab-item" 
//                 onClick={() => {
//                   setJournalDialogVisible(true);
//                   setMenuOpen(false);
//                   setShowForum(false);
//                 }}
//               >
//                 📖<span>Journal</span>
//               </div>
//               <div 
//                 className="fab-item" 
//                 onClick={() => {
//                   setMentorModalVisible(true);
//                   setMenuOpen(false);
//                   setShowForum(false);
//                 }}
//               >
//                 🧑‍🏫<span>Mentor</span>
//               </div>
//               <div 
//                 className="fab-item" 
//                 onClick={() => {
//                   setShowForum(true);
//                   setMenuOpen(false);
//                   setJournalDialogVisible(false);
//                 }}
//               >
//                 💬<span>Forum</span>
//               </div>
//             </div>
//           </div>

//           {/* Feedback Button */}
//           <div 
//             className="feedback-fab" 
//             onClick={() => setFeedbackVisible(true)}
//           >
//             📝
//           </div>

//           {feedbackVisible && (
//             <FeedbackForm onClose={() => setFeedbackVisible(false)} />
//           )}
//         </div>
//       </div>

//       {mentorModalVisible && (
//         <MentorModal 
//           mentor={mentor} 
//           onClose={() => setMentorModalVisible(false)} 
//         />
//       )}

//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} CareerGuide. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }

// export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import CommentList from '../comment/CommentList';
// import NotificationBell from '../comment/NotificationBell';
// import MotivationalQuote from './Quote';
// import JournalPage from './JournalPage';
// import Header from './Header';
// import MentorModal from './MentorModal';
// import WelcomeSection from './WelcomeSection';
// import FeedbackForm from './FeedbackForm';
// import SessionTimeout from '../timeout/SessionTimeout';
// import './sample.css';


// function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [mentorModalVisible, setMentorModalVisible] = useState(false);
//   const [journalDialogVisible, setJournalDialogVisible] = useState(false);
//   const [feedbackVisible, setFeedbackVisible] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showForum, setShowForum] = useState(false);

//   const mentor = {
//     name: 'Vaibhav Patil',
//     profession: 'Software Engineer',
//     bio: 'Helping students navigate their career paths with confidence.',
//     phone: '9850237997',
//     email: 'vyp89366@gmail.com',
//     photo: '/Photograph.jpg',
//   };

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/user/profile', {
//           withCredentials: true,
//         });
//         setUser(res.data);
//       } catch (err) {
//         console.error('❌ Error fetching profile:', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   useEffect(() => {
//     document.body.classList.add('main-body');
//     return () => document.body.classList.remove('main-body');
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.location.href = '/login';
//   };

//   if (loading) {
//     return (
//       <div className="loading-screen">
//         <div className="spinner"></div>
//         <p>Loading your dashboard...</p>
//       </div>
//     );
//   }

//   return (
//     <>

//       <div className="page-content">
//         <div className="dashboard">
//           {/* Top Header */}
//           <SessionTimeout timeout={20 * 60 * 1000} />

//           <Header onLogout={handleLogout} />

//           {/* Notification Bell below Header */}
//           {user && (
//             <div className="notification-bell-wrapper">
//               <NotificationBell currentUser={user} />
//             </div>
//           )}

//           <main className="main-content">
//             <div className="motivational-quote-section">
//               <MotivationalQuote />
//             </div>

//             <WelcomeSection user={user} loading={loading} />

//             {journalDialogVisible && (
//               <div className="journal-dialog">
//                 <div className="journal-dialog-header">
//                   Career Journal
//                   <button 
//                     className="close-button" 
//                     onClick={() => setJournalDialogVisible(false)}
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="journal-dialog-content">
//                   <JournalPage />
//                 </div>
//               </div>
//             )}

//             {showForum && (
//               <div className="forum-section">
//                 <div className="forum-header">
//                   <h2>Comments</h2>
//                   <button 
//                     className="close-button" 
//                     onClick={() => setShowForum(false)}
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="forum-content">
//                   <CommentList currentUser={user} />
//                 </div>
//               </div>
//             )}
//           </main>

//           {/* Floating Action Buttons */}
//           <div className="fab-container">
//             <div
//               className={`fab-button ${mentorModalVisible || journalDialogVisible ? 'open' : ''}`}
//               onClick={() => {
//                 setMentorModalVisible(false);
//                 setJournalDialogVisible(false);
//                 setMenuOpen(prev => !prev);
//               }}
//             >
//               ☰
//             </div>

//             <div className={`fab-menu ${menuOpen ? 'show' : ''}`}>
//               <div 
//                 className="fab-item" 
//                 onClick={() => {
//                   setJournalDialogVisible(true);
//                   setMenuOpen(false);
//                   setShowForum(false);
//                 }}
//               >
//                 📖<span>Journal</span>
//               </div>
//               <div 
//                 className="fab-item" 
//                 onClick={() => {
//                   setMentorModalVisible(true);
//                   setMenuOpen(false);
//                   setShowForum(false);
//                 }}
//               >
//                 🧑‍🏫<span>Mentor</span>
//               </div>
//               <div 
//                 className="fab-item" 
//                 onClick={() => {
//                   setShowForum(true);
//                   setMenuOpen(false);
//                   setJournalDialogVisible(false);
//                 }}
//               >
//                 💬<span>Forum</span>
//               </div>
//             </div>
//           </div>

//           {/* Feedback Button */}
//           <div 
//             className="feedback-fab" 
//             onClick={() => setFeedbackVisible(true)}
//           >
//             📝
//           </div>

//           {feedbackVisible && (
//             <FeedbackForm onClose={() => setFeedbackVisible(false)} />
//           )}
//         </div>
//       </div>

//       {/* Mentor Modal */}
//       {mentorModalVisible && (
//         <MentorModal 
//           mentor={mentor} 
//           onClose={() => setMentorModalVisible(false)} 
//         />
//       )}

//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} CareerGuide. All rights reserved.</p>
//       </footer>
//     </>
//   );
// }

// export default Dashboard;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CommentList from '../comment/CommentList';
import NotificationBell from '../comment/NotificationBell';
import MotivationalQuote from './Quote';
import JournalPage from './JournalPage';
import Header from './Header';
import MentorModal from './MentorModal';
import WelcomeSection from './WelcomeSection';
import FeedbackForm from './FeedbackForm';
import SessionTimeout from '../timeout/SessionTimeout';
import ChatBot from '../chatbot/ChatBot';

import './sample.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mentorModalVisible, setMentorModalVisible] = useState(false);
  const [journalDialogVisible, setJournalDialogVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showForum, setShowForum] = useState(false);
  const [showCareerTools, setShowCareerTools] = useState(false);
  const navigate = useNavigate();

  const mentor = {
    name: 'Vaibhav Patil',
    profession: 'Software Engineer',
    bio: 'Helping students navigate their career paths with confidence.',
    phone: '9850237997',
    email: 'vyp89366@gmail.com',
    photo: '/Photograph.jpg',
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/user/profile', {
          withCredentials: true,
        });
        setUser(res.data);
      } catch (err) {
        console.error('❌ Error fetching profile:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    document.body.classList.add('main-body');
    return () => document.body.classList.remove('main-body');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <>
      <div className="page-content">
        <div className="dashboard">
          <Header onLogout={handleLogout} />

          {user && (
            <div className="notification-bell-wrapper">
              <div className="oo">
                <SessionTimeout timeout={20 * 60 * 1000} />
              </div>
              <NotificationBell currentUser={user} />
            </div>
          )}
{/* Add ChatBot floating widget */}
<ChatBot />

          {/* === Welcome & Quote Section === */}
          <div className="header-welcome-quote">
            <WelcomeSection user={user} loading={loading} />
            <div className="motivational-quote-section">
              <MotivationalQuote />
            </div>
          </div>
          <div className="highlight-banner">
  <h3>📅 Need a Weekly Study Plan?</h3>
  <p>Auto-generate a personalized study schedule and get reminders!</p>
  <button onClick={() => navigate('/study-plan')}>Generate Now</button>
</div>

          {/* === Main Content === */}
          {/* <main className="main-content"> */}
           <div className="highlight-banner wellness-banner">
              <h3>🛡️ Explore the Mental Wellness Corner</h3>
                  <p>Discover daily affirmations, stress-relief tips, peaceful music, and resources to boost your mental health.</p>
                      <button onClick={() => navigate('/mental-wellness')}>
                        Visit Now
                          </button>
                              </div>




            {journalDialogVisible && (
              <div className="journal-dialog">
                <div className="journal-dialog-header">
                  Career Journal
                  <button
                    className="close-button"
                    onClick={() => setJournalDialogVisible(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="journal-dialog-content">
                  <JournalPage />
                </div>
              </div>
            )}

            {showForum && (
              <div className="forum-section">
                <div className="forum-header">
                  <h2>Comments</h2>
                  <button
                    className="close-button"
                    onClick={() => setShowForum(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="forum-content">
                  <CommentList currentUser={user} />
                </div>
              </div>
            )}
          {/* </main> */}

          {/* === Floating FAB Button === */}
          <div className="fab-container">
            <div
              className={`fab-button ${mentorModalVisible || journalDialogVisible ? 'open' : ''}`}
              onClick={() => {
                setMentorModalVisible(false);
                setJournalDialogVisible(false);
                setMenuOpen(prev => !prev);
              }}
            >
              ☰
            </div>

            <div className={`fab-menu ${menuOpen ? 'show' : ''}`}>
              <div
                className="fab-item"
                onClick={() => {
                  setJournalDialogVisible(true);
                  setMenuOpen(false);
                  setShowForum(false);
                  navigate('/journal');
                }}
              >
                📖<span>Journal</span>
              </div>
              <div
                className="fab-item"
                onClick={() => {
                  setMentorModalVisible(true);
                  setMenuOpen(false);
                  setShowForum(false);
                }}
              >
                🧑‍🏫<span>Mentor</span>
              </div>
              <div
                className="fab-item"
                onClick={() => {
                  navigate('/comments');
                }}
              >
                💬<span>Comments</span>
              </div>
            </div>
          </div>

          {/* === Fixed Career Tools Button - Right Side === */}
       {/* Wrap in a portal or move outside any transformed containers */}
<div className="career-tools-global-container">
  <button
    className="career-tools-glow-btn"
    onClick={() => setShowCareerTools(prev => !prev)}
    title="Career Tools"
    aria-label="Career Tools Menu"
  >
    🚀
  </button>
  {showCareerTools && (
    <div className="career-tools-popup-right">
      <button 
        className="tool-option"
        onClick={() => {
          navigate('/career-roadmap');
          setShowCareerTools(false);
        }}
      >
        <span role="img" aria-label="Roadmap">📌</span> Career Roadmap
      </button>
      <button 
        className="tool-option"
        onClick={() => {
          navigate('/resumes');
          setShowCareerTools(false);
        }}
      >
        <span role="img" aria-label="Resume">📄</span> Resume Generator
      </button>
    </div>
  )}
</div>
        </div>
      </div>

      {/* === Mentor Modal === */}
      {mentorModalVisible && (
        <MentorModal mentor={mentor} onClose={() => setMentorModalVisible(false)} />
      )}

      {/* === Footer & Feedback === */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} CareerPath. All rights reserved.</p>
        <div
          className="feedback-footer-wrapper"
          onClick={() => setFeedbackVisible(true)}
          title="Give Feedback"
        >
          <div className="feedback-footer-icon">
            <i className="feedback-icon">📝</i>
            <span className="feedback-text">Feedback</span>
          </div>
        </div>
      </footer>

      {feedbackVisible && <FeedbackForm onClose={() => setFeedbackVisible(false)} />}
    </>
  );
}

export default Dashboard;
