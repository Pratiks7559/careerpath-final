import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';
import ReplyList from './ReplyList';
import CommentForm from './CommentForm';
import EmojiPicker from './EmojiPicker';
import './CommentItem.css';

const CommentItem = ({
  comment,
  currentUser,
  onUpdate,
  onDelete,
  onLike,
  onReply,
  onUpdateReply,
  onDeleteReply,
  onLikeReply,
  replyingTo,
  setReplyingTo,
  editingComment,
  setEditingComment,
  showEmojiPickerFor,
  setShowEmojiPickerFor,
  onAddReaction,
}) => {
  const [showReplies, setShowReplies] = useState(true);
  const [avatar, setAvatar] = useState(comment?.author?.profilePhoto || '/default-avatar.png');

  useEffect(() => {
    if (comment?.author?.profilePhoto) {
      setAvatar(comment.author.profilePhoto);
    }
  }, [comment?.author?.profilePhoto]);

  const isAuthor = currentUser?._id && comment?.author?._id === currentUser._id;
  const isLiked = currentUser?._id && comment?.likes?.includes(currentUser._id);

  if (!comment || !comment.author || !currentUser) return null;

  const handleReply = (content) => onReply(comment._id, content);
  const handleEdit = (content) => onUpdate(comment._id, content);

  const handleDelete = () => {
    Swal.fire({
      title: 'Delete Comment?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(comment._id);
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your comment has been deleted.',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleLike = () => onLike(comment._id);
  const toggleEmojiPicker = () =>
    setShowEmojiPickerFor(showEmojiPickerFor === comment._id ? null : comment._id);

  return (
    <div className="comment-item-container">
      <div className="comment-header">
        <div className="comment-author-info">
          <img
            src={avatar}
            alt={comment.author.name || 'User'}
            className="comment-author-avatar"
          />
          <span className="comment-author-name">{comment.author.name}</span>
        </div>
        <span className="comment-timestamp">
          {moment(comment.createdAt).fromNow()}
          {comment.updatedAt !== comment.createdAt && ' (edited)'}
        </span>
      </div>

      <div className="comment-body">
        {editingComment === comment._id ? (
          <CommentForm
            initialContent={comment.content}
            onSubmit={handleEdit}
            onCancel={() => setEditingComment(null)}
            buttonText="Update"
          />
        ) : (
          <div className="comment-content-text">{comment.content}</div>
        )}
      </div>

      <div className="comment-actions-bar">
        <button
          className={`comment-like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
          disabled={isAuthor}
        >
          ♥ {comment.likes.length > 0 && comment.likes.length}
        </button>

        <button
          className="comment-reply-button"
          onClick={() => setReplyingTo(replyingTo === comment._id ? null : comment._id)}
        >
          Reply
        </button>

        {isAuthor && (
          <>
            <button
              className="comment-edit-button"
              onClick={() => setEditingComment(comment._id)}
            >
              Edit
            </button>
            <button className="comment-delete-button" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}

        <button className="comment-emoji-button" onClick={toggleEmojiPicker}>
          😊
        </button>

        {comment.replies.length > 0 && (
          <button
            className="comment-toggle-replies-button"
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies ? 'Hide replies' : `Show replies (${comment.replies.length})`}
          </button>
        )}
      </div>

      {showEmojiPickerFor === comment._id && (
        <div className="comment-emoji-picker">
          <EmojiPicker
            onSelect={(emoji) => onAddReaction('comment', comment._id, emoji)}
            onClose={() => setShowEmojiPickerFor(null)}
          />
        </div>
      )}

      {comment.reactions?.length > 0 && (
        <div className="comment-reactions-container">
          {comment.reactions.map((reaction, idx) => (
            <span
              key={idx}
              className="comment-reaction-item"
              title={reaction.userId?.name || 'User'}
            >
              {reaction.emoji}
            </span>
          ))}
        </div>
      )}

      {replyingTo === comment._id && (
        <div className="comment-reply-form">
          <CommentForm
            onSubmit={handleReply}
            onCancel={() => setReplyingTo(null)}
            buttonText="Post Reply"
          />
        </div>
      )}

      {showReplies && comment.replies.length > 0 && (
        <div className="comment-replies-list">
          <ReplyList
            replies={comment.replies}
            currentUser={currentUser}
            commentId={comment._id}
            onUpdate={onUpdateReply}
            onDelete={onDeleteReply}
            onLike={onLikeReply}
            onReply={onReply}
            replyingTo={replyingTo}
            setReplyingTo={setReplyingTo}
            showEmojiPickerFor={showEmojiPickerFor}
            setShowEmojiPickerFor={setShowEmojiPickerFor}
            onAddReaction={onAddReaction}
          />
        </div>
      )}
    </div>
  );
};

export default CommentItem;
