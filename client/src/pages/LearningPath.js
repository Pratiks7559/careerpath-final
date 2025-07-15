// src/components/LearningPath.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LearningPath({ career }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLearningPath = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/courses?career=${career}`);
        setCourses(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load courses');
        setLoading(false);
      }
    };

    fetchLearningPath();
  }, [career]);

  if (loading) return <div>Loading learning path...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="learning-path">
      <h2>Recommended Learning Path for {career}</h2>
      <div className="course-list">
        {courses.length === 0 ? (
          <p>No courses available for this career yet.</p>
        ) : (
          courses.map((course, index) => (
            <div key={index} className="course">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p><strong>Rating:</strong> {course.rating}</p>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LearningPath;
