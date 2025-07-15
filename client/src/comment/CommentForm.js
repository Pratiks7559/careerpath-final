import React, { useState } from 'react';
import './CommentForm.css';

const CommentForm = ({
  initialContent = '',
  onSubmit,
  onCancel,
  buttonText = 'Post',
  showCancel = true
}) => {
  const [content, setContent] = useState(initialContent || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <form className="comment-form-container" onSubmit={handleSubmit}>
      <div className="comment-form-group">
        <textarea
          className="comment-form-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your comment..."
          required
        />
      </div>
      <div className="comment-form-actions">
        <button type="submit" className="comment-form-submit-button">
          {buttonText}
        </button>
        {showCancel && onCancel && (
          <button 
            type="button" 
            className="comment-form-cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default CommentForm;