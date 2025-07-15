import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
// import EmojiPicker from './EmojiPicker';
import './CommentList.css';

const CommentList = ({ currentUser }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState(null);
  const [editingComment, setEditingComment] = useState(null);
  const [showEmojiPickerFor, setShowEmojiPickerFor] = useState(null);
  const commentsContainerRef = useRef(null);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await axios.get('/api/comments');
      setComments(res.data);
      setLoading(false);
      setTimeout(() => {
        if (commentsContainerRef.current) {
          commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight;
        }
      }, 100);
    } catch (err) {
      console.error('Error fetching comments:', err);
      setLoading(false);
    }
  };

  const handleAddComment = async (content) => {
    try {
      const res = await axios.post('/api/comments', {
        content,
        author: currentUser._id
      });
      setComments([res.data, ...comments]);
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  const handleUpdateComment = async (commentId, content) => {
    try {
      const res = await axios.put(`/api/comments/${commentId}`, { content });
      setComments(comments.map(comment =>
        comment._id === commentId ? res.data : comment
      ));
      setEditingComment(null);
    } catch (err) {
      console.error('Error updating comment:', err);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`/api/comments/${commentId}`);
      setComments(comments.filter(comment => comment._id !== commentId));
    } catch (err) {
      console.error('Error deleting comment:', err);
    }
  };

  const handleLikeComment = async (commentId) => {
    try {
      const res = await axios.post('/api/comments/like', {
        commentId,
        userId: currentUser._id
      });
  
      setComments(comments.map(comment =>
        comment._id === commentId
          ? { ...res.data, replies: comment.replies }  // <- Yeh important
          : comment
      ));
    } catch (err) {
      console.error('Error liking comment:', err);
    }
  };
  

  const handleAddReply = async (commentId, content, parentReplyId = null) => {
    try {
      const res = await axios.post('/api/replies', {
        content,
        author: currentUser._id,
        commentId,
        parentReplyId
      });

      const updatedComments = comments.map(comment => {
        if (comment._id === commentId) {
          return {
            ...comment,
            replies: [res.data, ...comment.replies]
          };
        }
        return comment;
      });

      setComments(updatedComments);
      setReplyingTo(null);
    } catch (err) {
      console.error('Error adding reply:', err);
    }
  };

  const handleUpdateReply = async (commentId, replyId, content) => {
    try {
      const res = await axios.put(`/api/replies/${replyId}`, { content });

      const updatedComments = comments.map(comment => {
        if (comment._id === commentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply =>
              reply._id === replyId ? res.data : reply
            )
          };
        }
        return comment;
      });

      setComments(updatedComments);
    } catch (err) {
      console.error('Error updating reply:', err);
    }
  };

  const handleDeleteReply = async (commentId, replyId) => {
    try {
      await axios.delete(`/api/replies/${replyId}`);

      const updatedComments = comments.map(comment => {
        if (comment._id === commentId) {
          return {
            ...comment,
            replies: comment.replies.filter(reply => reply._id !== replyId)
          };
        }
        return comment;
      });

      setComments(updatedComments);
    } catch (err) {
      console.error('Error deleting reply:', err);
    }
  };

  const handleLikeReply = async (commentId, replyId) => {
    try {
      const res = await axios.post('/api/replies/like', {
        replyId,
        userId: currentUser._id
      });

      const updatedComments = comments.map(comment => {
        if (comment._id === commentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply =>
              reply._id === replyId ? res.data : reply
            )
          };
        }
        return comment;
      });

      setComments(updatedComments);
    } catch (err) {
      console.error('Error liking reply:', err);
    }
  };

  const handleAddReaction = async (type, id, emoji) => {
    try {
      if (type === 'comment') {
        await axios.post('/api/comments/reaction', {
          commentId: id,
          userId: currentUser._id,
          emoji
        });
      } else {
        await axios.post('/api/replies/reaction', {
          replyId: id,
          userId: currentUser._id,
          emoji
        });
      }
      fetchComments();
      setShowEmojiPickerFor(null);
    } catch (err) {
      console.error('Error adding reaction:', err);
    }
  };

  return (
    <div className="comment-system-container">
      <div className="comments-container" ref={commentsContainerRef}>
        {loading ? (
          <div className="comment-list__loading">Loading comments...</div>
        ) : (
          comments.map(comment => (
            <CommentItem
              key={comment._id}
              comment={comment}
              currentUser={currentUser}
              onUpdate={handleUpdateComment}
              onDelete={handleDeleteComment}
              onLike={handleLikeComment}
              onReply={handleAddReply}
              onUpdateReply={handleUpdateReply}
              onDeleteReply={handleDeleteReply}
              onLikeReply={handleLikeReply}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
              editingComment={editingComment}
              setEditingComment={setEditingComment}
              showEmojiPickerFor={showEmojiPickerFor}
              setShowEmojiPickerFor={setShowEmojiPickerFor}
              onAddReaction={handleAddReaction}
              className="comment-item"
            />
          ))
        )}
      </div>

      <div className="comment-input-container">
        <CommentForm 
          onSubmit={handleAddComment} 
          buttonText="Post Comment" 
          className="comment-form"
        />
      </div>
    </div>
  );
};

export default CommentList;
