import React, { useState } from 'react';
import moment from 'moment';
import CommentForm from './CommentForm';
import EmojiPicker from './EmojiPicker';
import './ReplyList.css';

const ReplyList = ({
  replies = [],
  currentUser,
  commentId,
  onUpdate,
  onDelete,
  onLike,
  onReply,
  replyingTo,
  setReplyingTo,
  showEmojiPickerFor,
  setShowEmojiPickerFor,
  onAddReaction
}) => {
  const [editingReplyId, setEditingReplyId] = useState(null); // ⭐️ Track editing state

  if (!Array.isArray(replies) || !currentUser) return null;

  return (
    <div className="reply-list-container">
      {replies.map((reply) => {
        if (!reply || !reply.author) return null;

        const isAuthor = currentUser._id === reply.author._id;
        const isLiked = reply.likes?.includes(currentUser._id);
        const isReplying = replyingTo === reply._id;
        const isEditing = editingReplyId === reply._id;

        const handleReply = (content) => {
          onReply(commentId, content, reply._id);
        };

        const handleEditSubmit = (content) => {
          onUpdate(commentId, reply._id, content);
          setEditingReplyId(null);
        };

        const handleDelete = () => {
          if (window.confirm('Are you sure you want to delete this reply?')) {
            onDelete(commentId, reply._id);
          }
        };

        const handleLike = () => {
          onLike(commentId, reply._id);
        };

        const toggleEmojiPicker = () => {
          setShowEmojiPickerFor(showEmojiPickerFor === reply._id ? null : reply._id);
        };

        return (
          <div key={reply._id} className="reply-item-container">
            <div className="reply-header-container">
              <div className="reply-author-info">
                <img
                  src={reply.author.profilePhoto}
                  alt={reply.author.name || 'User'}
                  className="reply-author-avatar"
                />
                <span className="reply-author-name">{reply.author.name}</span>
                {reply.parentReplyId?.author?.name && (
                  <span className="replying-to-text">
                    → @{reply.parentReplyId.author.name}
                  </span>
                )}
              </div>
              <span className="reply-time-stamp">
                {moment(reply.createdAt).fromNow()}
                {reply.updatedAt !== reply.createdAt && ' (edited)'}
              </span>
            </div>

            {/* Show edit form or plain text */}
            {isEditing ? (
              <div className="reply-edit-form">
                <CommentForm
                  initialContent={reply.content}
                  onSubmit={handleEditSubmit}
                  onCancel={() => setEditingReplyId(null)}
                  buttonText="Update Reply"
                />
              </div>
            ) : (
              <div className="reply-content-text">{reply.content}</div>
            )}

            <div className="reply-actions-container">
              <button
                className={`reply-like-button ${isLiked ? 'liked' : ''}`}
                onClick={handleLike}
                disabled={isAuthor}
              >
                ♥ {reply.likes?.length > 0 ? reply.likes.length : ''}
              </button>

              <button
                className="reply-action-button reply-button"
                onClick={() => setReplyingTo(isReplying ? null : reply._id)}
              >
                Reply
              </button>

              {isAuthor && !isEditing && (
                <>
                  <button
                    className="reply-action-button edit-button"
                    onClick={() => setEditingReplyId(reply._id)} // ⭐️ trigger edit mode
                  >
                    Edit
                  </button>
                  <button
                    className="reply-action-button delete-button"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </>
              )}

              <button
                className="reply-action-button emoji-button"
                onClick={toggleEmojiPicker}
              >
                😊
              </button>
            </div>

            {showEmojiPickerFor === reply._id && (
              <div className="emoji-picker-container">
                <EmojiPicker
                  onSelect={(emoji) => onAddReaction('reply', reply._id, emoji)}
                  onClose={() => setShowEmojiPickerFor(null)}
                />
              </div>
            )}

            {reply.reactions?.length > 0 && (
              <div className="reply-reactions-container">
                {reply.reactions.map((reaction, idx) => (
                  <span
                    key={idx}
                    className="reply-reaction-emoji"
                    title={reaction.userId?.name}
                  >
                    {reaction.emoji}
                  </span>
                ))}
              </div>
            )}

            {isReplying && (
              <div className="reply-form-container">
                <CommentForm
                  onSubmit={handleReply}
                  onCancel={() => setReplyingTo(null)}
                  buttonText="Post Reply"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ReplyList;
