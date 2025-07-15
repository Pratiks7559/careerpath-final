import { useState, useEffect } from 'react';
import axios from 'axios';

export const useComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get('/api/comments');
        setComments(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching comments:', err);
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  const handleAction = async (action, url, data) => {
    try {
      const res = await axios[action](url, data);
      return res.data;
    } catch (error) {
      console.error(`${action} error:`, error);
    }
  };

  const addComment = async (content, author) => {
    const newComment = await handleAction('post', '/api/comments', { content, author });
    if (newComment) {
      setComments([newComment, ...comments]);
    }
  };

  const updateComment = async (commentId, content) => {
    const updatedComment = await handleAction('put', `/api/comments/${commentId}`, { content });
    if (updatedComment) {
      setComments(comments.map((comment) =>
        comment._id === commentId ? updatedComment : comment
      ));
    }
  };

  const deleteComment = async (commentId) => {
    await handleAction('delete', `/api/comments/${commentId}`);
    setComments(comments.filter(comment => comment._id !== commentId));
  };

  const likeComment = async (commentId, userId) => {
    const updatedComment = await handleAction('post', '/api/comments/like', {
      commentId,
      userId
    });
    if (updatedComment) {
      setComments(comments.map(comment =>
        comment._id === commentId ? updatedComment : comment
      ));
    }
  };

  const addReply = async (commentId, content, author, parentReplyId = null) => {
    const newReply = await handleAction('post', '/api/replies', {
      content,
      author,
      commentId,
      parentReplyId
    });
    if (newReply) {
      setComments(comments.map(comment => {
        if (comment._id === commentId) {
          return { ...comment, replies: [newReply, ...comment.replies] };
        }
        return comment;
      }));
    }
  };

  const updateReply = async (commentId, replyId, content) => {
    const updatedReply = await handleAction('put', `/api/replies/${replyId}`, { content });
    if (updatedReply) {
      setComments(comments.map(comment => {
        if (comment._id === commentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply =>
              reply._id === replyId ? updatedReply : reply
            )
          };
        }
        return comment;
      }));
    }
  };

  const deleteReply = async (commentId, replyId) => {
    await handleAction('delete', `/api/replies/${replyId}`);
    setComments(comments.map(comment => {
      if (comment._id === commentId) {
        return { ...comment, replies: comment.replies.filter(reply => reply._id !== replyId) };
      }
      return comment;
    }));
  };

  const likeReply = async (commentId, replyId, userId) => {
    const updatedReply = await handleAction('post', '/api/replies/like', {
      replyId,
      userId
    });
    if (updatedReply) {
      setComments(comments.map(comment => {
        if (comment._id === commentId) {
          return {
            ...comment,
            replies: comment.replies.map(reply =>
              reply._id === replyId ? updatedReply : reply
            )
          };
        }
        return comment;
      }));
    }
  };

  const addReaction = async (type, id, emoji, userId) => {
    const url = type === 'comment' ? '/api/comments/reaction' : '/api/replies/reaction';
    await handleAction('post', url, { [type + 'Id']: id, userId, emoji });
  };

  return {
    comments,
    loading,
    addComment,
    updateComment,
    deleteComment,
    likeComment,
    addReply,
    updateReply,
    deleteReply,
    likeReply,
    addReaction
  };
};
