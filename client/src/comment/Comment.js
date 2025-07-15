// ./comment/comment.js

import React, { useState } from 'react';
import axios from 'axios';
import ReactionPicker from './ReactionPicker';
import './Comment.css';

const Comment = ({ comment, currentUser, onDelete, onUpdate, onLike, onReply, onReaction }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);
  const [replyText, setReplyText] = useState('');
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [activeReplyId, setActiveReplyId] = useState(null);
  const [nestedReplyText, setNestedReplyText] = useState('');

  const isOwner = currentUser?.name === comment.userName;
  const isLiked = currentUser?.name && comment.likes.includes(currentUser.name);

  const handleUpdate = async () => {
    if (!currentUser) return;
    try {
      await axios.put(`/api/comments/${comment._id}`, {
        userName: currentUser.name,
        text: editText,
      });
      onUpdate(comment._id, editText);
      setIsEditing(false);
    } catch (err) {
      console.error('Error updating comment:', err);
    }
  };

  const handleLike = async () => {
    if (!currentUser || isOwner) return;
    try {
      const response = await axios.post(
        `/api/comments/${comment._id}/like`,
        { userName: currentUser.name },
        { withCredentials: true }
      );
      onLike(response.data);
    } catch (err) {
      console.error('Error liking comment:', err);
    }
  };

  const handleAddReply = async (parentId, isNested = false) => {
    try {
      const text = isNested ? nestedReplyText : replyText;
      if (!text.trim() || !currentUser?.name) return;

      let response;
      if (isNested) {
        response = await axios.post(
          `/api/comments/${comment._id}/replies/${parentId}/reply`,
          { userName: currentUser.name, text },
          { withCredentials: true }
        );
      } else {
        response = await axios.post(
          `/api/comments/${comment._id}/reply`,
          { userName: currentUser.name, text },
          { withCredentials: true }
        );
      }

      onReply(response.data);
      setReplyText('');
      setNestedReplyText('');
      setShowReplyForm(false);
      setActiveReplyId(null);
    } catch (err) {
      console.error('Error adding reply:', err);
    }
  };

  const handleAddReaction = async (targetId, emoji, isReply = false) => {
    try {
      const endpoint = isReply
        ? `/api/comments/${comment._id}/replies/${targetId}/react`
        : `/api/comments/${comment._id}/react`;

      const response = await axios.post(
        endpoint,
        { userName: currentUser.name, emoji },
        { withCredentials: true }
      );
      onReaction(response.data);
    } catch (err) {
      console.error('Error adding reaction:', err);
    }
  };

  const renderReplies = (replies, depth = 0) =>
    replies.map((reply) => (
      <div key={reply._id} className={`reply depth-${depth} reply-container`}>
        <div className="reply-header">
          <span className="reply-author">{reply.userName}</span>
          <span className="reply-date">{new Date(reply.createdAt).toLocaleString()}</span>
        </div>

        <div className="reply-text">{reply.text}</div>
       
        <div className="reply-actions">
          <ReactionPicker onSelect={(emoji) => handleAddReaction(reply._id, emoji, true)} />
          {currentUser && (
            <button
              onClick={() =>
                setActiveReplyId(activeReplyId === reply._id ? null : reply._id)
              }
              className="reply-button"
            >
              Reply
            </button>
          )}
        </div>

        {activeReplyId === reply._id && (
          <div className="nested-reply-form">
            <textarea
              value={nestedReplyText}
              onChange={(e) => setNestedReplyText(e.target.value)}
              placeholder="Write a reply..."
              className="nested-reply-textarea"
            />
            <button
              onClick={() => handleAddReply(reply._id, true)}
              className="post-nested-reply-button"
            >
              Post Reply
            </button>
          </div>
        )}

        <div className="reactions-container">
          {reply.reactions.map((r, i) => (
            <span key={i} title={r.userName} className="reaction-emoji">
              {r.emoji}
            </span>
          ))}
        </div>

        {reply.replies && reply.replies.length > 0 && (
          <div className="nested-replies">{renderReplies(reply.replies, depth + 1)}</div>
        )}
      </div>
    ));

  return (
    <div className="comment-container">
      <div className="comment-header">
        <span className="comment-author">{comment.userName}</span>
        <span className="comment-date">
          {new Date(comment.createdAt).toLocaleString()}
          {comment.updatedAt && ' (edited)'}
        </span>
      </div>

      {isEditing ? (
        <div className="edit-section">
          <textarea
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-textarea"
          />
          <button onClick={handleUpdate} className="save-button">Save</button>
          <button onClick={() => setIsEditing(false)} className="cancel-button">Cancel</button>
        </div>
      ) : (
        <div className="comment-text">{comment.text}</div>
      )}

      <div className="comment-actions">
        {currentUser && !isOwner && (
          <button onClick={handleLike} className={`like-button ${isLiked ? 'liked' : ''}`}>
            ❤️ {comment.likes.length}
          </button>
        )}
        <ReactionPicker
          commentId={comment._id}
          currentUser={currentUser}
          onReactionAdded={(emoji) => handleAddReaction(comment._id, emoji, false)}
        />
        {currentUser && (
          <button
            onClick={() => setShowReplyForm(!showReplyForm)}
            className="reply-button"
          >
            Reply
          </button>
        )}
        {isOwner && (
          <>
            <button onClick={() => setIsEditing(true)} className="edit-button">
              Edit
            </button>
            <button onClick={() => onDelete(comment._id)} className="delete-button">
              Delete
            </button>
          </>
        )}
      </div>

      <div className="reactions-container">
        {comment.reactions.map((reaction, index) => (
          <span key={index} title={reaction.userName} className="reaction-emoji">
            {reaction.emoji}
          </span>
        ))}
      </div>

      {showReplyForm && currentUser && (
        <div className="reply-form">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="reply-textarea"
          />
          <button onClick={() => handleAddReply(comment._id)} className="post-reply-button">
            Post Reply
          </button>
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="replies-container">{renderReplies(comment.replies)}</div>
      )}
    </div>
  );
};

export default Comment;