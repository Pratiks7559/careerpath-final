import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import './page.css';

function CommentsPage() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/user/profile', {
          withCredentials: true,
        });
        setCurrentUser(res.data);
      } catch (err) {
        console.error('Error fetching user for comments:', err);
      }
    };
    fetchProfile();
  }, []);

  if (!currentUser) {
    return (
      <div className="loading-screen21">
        <div className="spinner21"></div>
        <p>Loading comments...</p>
      </div>
    );
  }

  return (
    <div className="page-content21">
      <div className="forum-page21">
        <h2>Community Comments</h2>
        <CommentList currentUser={currentUser} />
      </div>
    </div>
  );
}

export default CommentsPage;
