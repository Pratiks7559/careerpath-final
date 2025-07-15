// import Comment from '../models/Comment.js';
// import Reply from '../models/Reply.js';
// import Notification from '../models/Notification.js';

// // Create a new comment
// export const createComment = async (req, res) => {
//   try {
//     const { content, author } = req.body;
//     const newComment = new Comment({ content, author });
//     await newComment.save();
    
//     const populatedComment = await Comment.findById(newComment._id).populate('author', 'name');
//     res.status(201).json(populatedComment);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get all comments with replies
// export const getComments = async (req, res) => {
//   try {
//     const comments = await Comment.find({ postId: 'dashboard' })
//       .populate('author', 'name profilePhoto')
//       .populate({
//         path: 'replies',
//         populate: [
//           { path: 'author', select: 'name profilePhoto' },
//           { path: 'parentReplyId', populate: { path: 'author', select: 'name' } }
//         ]
//       })
//       .populate('reactions.userId', 'name')
//       .sort({ createdAt: -1 });
      
//     res.status(200).json(comments);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update a comment
// export const updateComment = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { content } = req.body;
    
//     const updatedComment = await Comment.findByIdAndUpdate(
//       id,
//       { content, updatedAt: Date.now() },
//       { new: true }
//     ).populate('author', 'name');
    
//     res.status(200).json(updatedComment);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete a comment and its replies
// export const deleteComment = async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     // Find all replies to this comment
//     const comment = await Comment.findById(id);
//     if (comment.replies.length > 0) {
//       await Reply.deleteMany({ _id: { $in: comment.replies } });
//     }
    
//     await Comment.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Comment and its replies deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Like/unlike a comment
// export const toggleLikeComment = async (req, res) => {
//   try {
//     const { commentId, userId } = req.body;
//     const comment = await Comment.findById(commentId);
    
//     const likeIndex = comment.likes.indexOf(userId);
//     if (likeIndex === -1) {
//       comment.likes.push(userId);
//     } else {
//       comment.likes.splice(likeIndex, 1);
//     }
    
//     await comment.save();
//     res.status(200).json(comment);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Add reaction to comment
// export const addReactionToComment = async (req, res) => {
//   try {
//     const { commentId, userId, emoji } = req.body;
//     const comment = await Comment.findById(commentId);
    
//     const existingReactionIndex = comment.reactions.findIndex(
//       r => r.userId.toString() === userId && r.emoji === emoji
//     );
    
//     if (existingReactionIndex !== -1) {
//       // Remove reaction if already exists
//       comment.reactions.splice(existingReactionIndex, 1);
//     } else {
//       // Add new reaction
//       comment.reactions.push({ userId, emoji });
      
//       // Create notification if not the comment author
//       const commentAuthor = comment.author.toString();
//       if (userId !== commentAuthor) {
//         const notification = new Notification({
//           recipient: commentAuthor,
//           sender: userId,
//           type: 'reaction',
//           commentId,
//           read: false
//         });
//         await notification.save();
//       }
//     }
    
//     await comment.save();
//     const updatedComment = await Comment.findById(commentId)
//       .populate('author', 'name')
//       .populate('reactions.userId', 'name');
      
//     res.status(200).json(updatedComment);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

import Comment from '../models/Comment.js';
import Reply from '../models/Reply.js';
import Notification from '../models/Notification.js';

// Create a new comment
export const createComment = async (req, res) => {
  try {
    const { content, author } = req.body;
    const newComment = new Comment({ content, author });

    const savedComment = await newComment.save();

    const populatedComment = await Comment.findById(savedComment._id)
      .populate('author', 'name profilePhoto')  // Also load profile photo
      .populate('reactions.userId', 'name');

    res.status(201).json(populatedComment);
  } catch (error) {
    console.error('Error creating comment:', error.message);
    res.status(500).json({ message: 'Failed to create comment' });
  }
};

// Get all comments with replies
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: 'dashboard' })
      .populate('author', 'name profilePhoto')
      .populate({
        path: 'replies',
        populate: [
          { path: 'author', select: 'name profilePhoto' },
          { path: 'parentReplyId', populate: { path: 'author', select: 'name' } }
        ]
      })
      .populate('reactions.userId', 'name')
      .sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error.message);
    res.status(500).json({ message: 'Failed to load comments' });
  }
};

// Update a comment
export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      { content, updatedAt: Date.now() },
      { new: true }
    )
    .populate('author', 'name profilePhoto')   // Load photo after update
    .populate('reactions.userId', 'name');

    res.status(200).json(updatedComment);
  } catch (error) {
    console.error('Error updating comment:', error.message);
    res.status(500).json({ message: 'Failed to update comment' });
  }
};

// Delete a comment and its replies
export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findById(id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    // Delete all associated replies
    if (comment.replies.length > 0) {
      await Reply.deleteMany({ _id: { $in: comment.replies } });
    }

    await Comment.findByIdAndDelete(id);

    res.status(200).json({ message: 'Comment and its replies deleted successfully' });
  } catch (error) {
    console.error('Error deleting comment:', error.message);
    res.status(500).json({ message: 'Failed to delete comment' });
  }
};

// Like/unlike a comment
export const toggleLikeComment = async (req, res) => {
  try {
    const { commentId, userId } = req.body;
    const comment = await Comment.findById(commentId);

    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    const likeIndex = comment.likes.indexOf(userId);
    if (likeIndex === -1) {
      comment.likes.push(userId);
    } else {
      comment.likes.splice(likeIndex, 1);
    }

    await comment.save();

    const updatedComment = await Comment.findById(commentId)
      .populate('author', 'name profilePhoto')
      .populate('reactions.userId', 'name');

    res.status(200).json(updatedComment);
  } catch (error) {
    console.error('Error toggling like:', error.message);
    res.status(500).json({ message: 'Failed to like/unlike comment' });
  }
};

// Add reaction to a comment
export const addReactionToComment = async (req, res) => {
  try {
    const { commentId, userId, emoji } = req.body;
    const comment = await Comment.findById(commentId);

    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    const existingReactionIndex = comment.reactions.findIndex(
      r => r.userId.toString() === userId && r.emoji === emoji
    );

    if (existingReactionIndex !== -1) {
      // Remove existing reaction
      comment.reactions.splice(existingReactionIndex, 1);
    } else {
      // Add new reaction
      comment.reactions.push({ userId, emoji });

      // Create a notification if the reactor is not the author
      if (userId !== comment.author.toString()) {
        const notification = new Notification({
          recipient: comment.author,
          sender: userId,
          type: 'reaction',
          commentId,
          read: false,
        });
        await notification.save();
      }
    }

    await comment.save();

    const updatedComment = await Comment.findById(commentId)
      .populate('author', 'name profilePhoto')
      .populate('reactions.userId', 'name')
      .populate('replies');

    res.status(200).json(updatedComment);
  } catch (error) {
    console.error('Error reacting to comment:', error.message);
    res.status(500).json({ message: 'Failed to add reaction' });
  }
};
