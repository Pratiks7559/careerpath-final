import React, { useEffect } from 'react';
import './MentorModal.css';

const MentorModal = ({ mentor, onClose }) => {
  useEffect(() => {
    document.body.classList.add('mentor-modal-open');

    return () => {
      document.body.classList.remove('mentor-modal-open');
    };
  }, []);

  return (
    <div className="mentor-modal-overlay" onClick={onClose}>
      <div className="mentor-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="mentor-modal-header">
          <h3 className="mentor-modal-title">Mentor Profile</h3>
          <button className="mentor-modal-close-btn" onClick={onClose}>×</button>
        </div>
        <div className="mentor-modal-body">
          <img src={mentor.photo} alt="Mentor" className="mentor-modal-photo" />
          <h4 className="mentor-modal-name">{mentor.name}</h4>
          <p className="mentor-modal-profession"><strong>Profession:</strong> {mentor.profession}</p>
          <p className="mentor-modal-bio"><strong>Bio:</strong> {mentor.bio}</p>
          <p className="mentor-modal-phone"><strong>Phone:</strong> {mentor.phone}</p>
          <p className="mentor-modal-email"><strong>Email:</strong> {mentor.email}</p>
        </div>
      </div>
    </div>
  );
};

export default MentorModal;
