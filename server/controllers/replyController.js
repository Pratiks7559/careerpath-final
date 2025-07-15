// import Reply from '../models/Reply.js';
// import Comment from '../models/Comment.js';
// import Notification from '../models/Notification.js';

// // Create a reply to a comment or another reply
// export const createReply = async (req, res) => {
//   try {
//     const { content, author, commentId, parentReplyId } = req.body;
//     const newReply = new Reply({ content, author, commentId, parentReplyId });
//     await newReply.save();
//     // Add reply to comment's replies array
//     await Comment.findByIdAndUpdate(commentId, { $push: { replies: newReply._id } });
    
//     // Populate author info
//     const populatedReply = await Reply.findById(newReply._id).populate('author', 'name profilePhoto');
    
//     // Create notification for the comment author or parent reply author
//     const comment = await Comment.findById(commentId);
//     let notificationRecipient;
    
//     if (parentReplyId) {
//       const parentReply = await Reply.findById(parentReplyId);
//       notificationRecipient = parentReply.author;
//     } else {
//       notificationRecipient = comment.author;
//     }
    
//     // Don't notify if replying to self
//     if (author.toString() !== notificationRecipient.toString()) {
//       const notification = new Notification({
//         recipient: notificationRecipient,
//         sender: author,
//         type: 'reply',
//         commentId,
//         replyId: newReply._id,
//         read: false
//       });
//       await notification.save();
//     }
    
//     res.status(201).json(populatedReply);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update a reply
// export const updateReply = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { content } = req.body;

//     // Update the reply content
//     await Reply.findByIdAndUpdate(id, { content, updatedAt: Date.now() });

//     // Re-fetch the reply and populate full author details
//     const updatedReply = await Reply.findById(id)
//       .populate('author', 'name profilePhoto');

//     res.status(200).json(updatedReply);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // Delete a reply
// export const deleteReply = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const reply = await Reply.findById(id);
    
//     // Remove reply from comment's replies array
//     await Comment.findByIdAndUpdate(reply.commentId, { $pull: { replies: id } });
    
//     // Delete any nested replies
//     const nestedReplies = await Reply.find({ parentReplyId: id });
//     if (nestedReplies.length > 0) {
//       await Reply.deleteMany({ parentReplyId: id });
//       await Comment.findByIdAndUpdate(reply.commentId, { $pull: { replies: { $in: nestedReplies.map(r => r._id) } } });
//     }
    
//     await Reply.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Reply deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Like/unlike a reply
// // Like/unlike a reply
// export const toggleLikeReply = async (req, res) => {
//   try {
//     const { replyId, userId } = req.body;
//     const reply = await Reply.findById(replyId);

//     const likeIndex = reply.likes.indexOf(userId);
//     if (likeIndex === -1) {
//       reply.likes.push(userId);
//     } else {
//       reply.likes.splice(likeIndex, 1);
//     }

//     await reply.save();

//     // ✅ Re-populate author and reactions before sending back
//     const updatedReply = await Reply.findById(replyId)
//       .populate('author', 'name profilePhoto')
//       .populate('reactions.userId', 'name profilePhoto');

//     res.status(200).json(updatedReply);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// // Add reaction to reply
// export const addReactionToReply = async (req, res) => {
//   try {
//     const { replyId, userId, emoji } = req.body;
//     const reply = await Reply.findById(replyId);
    
//     const existingReactionIndex = reply.reactions.findIndex(
//       r => r.userId.toString() === userId && r.emoji === emoji
//     );
    
//     if (existingReactionIndex !== -1) {
//       // Remove reaction if already exists
//       reply.reactions.splice(existingReactionIndex, 1);
//     } else {
//       // Add new reaction
//       reply.reactions.push({ userId, emoji });
      
//       // Create notification if not the reply author
//       const replyAuthor = reply.author.toString();
//       if (userId !== replyAuthor) {
//         const notification = new Notification({
//           recipient: replyAuthor,
//           sender: userId,
//           type: 'reaction',
//           replyId,
//           read: false
//         });
//         await notification.save();
//       }
//     }
    
//     await reply.save();
//     const updatedReply = await Reply.findById(replyId)
//       .populate('author', 'name')
//       .populate('reactions.userId', 'name');
      
//     res.status(200).json(updatedReply);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
import Reply from '../models/Reply.js';
import Comment from '../models/Comment.js';
import Notification from '../models/Notification.js';

// Create a reply
export const createReply = async (req, res) => {
  try {
    const { content, author, commentId, parentReplyId } = req.body;

    const newReply = new Reply({ content, author, commentId, parentReplyId });
    await newReply.save();

    await Comment.findByIdAndUpdate(commentId, { $push: { replies: newReply._id } });

    const populatedReply = await Reply.findById(newReply._id)
      .populate('author', 'name profilePhoto')
      .populate('reactions.userId', 'name profilePhoto');

    const comment = await Comment.findById(commentId);
    let notificationRecipient;

    if (parentReplyId) {
      const parentReply = await Reply.findById(parentReplyId);
      notificationRecipient = parentReply.author;
    } else {
      notificationRecipient = comment.author;
    }

    if (author.toString() !== notificationRecipient.toString()) {
      const notification = new Notification({
        recipient: notificationRecipient,
        sender: author,
        type: 'reply',
        commentId,
        replyId: newReply._id,
        read: false,
      });
      await notification.save();
    }

    res.status(201).json(populatedReply);
  } catch (error) {
    console.error('Error creating reply:', error);
    res.status(500).json({ message: error.message });
  }
};

// Update a reply
export const updateReply = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    await Reply.findByIdAndUpdate(id, { content, updatedAt: Date.now() });

    const updatedReply = await Reply.findById(id)
      .populate('author', 'name profilePhoto')
      .populate('reactions.userId', 'name profilePhoto');

    res.status(200).json(updatedReply);
  } catch (error) {
    console.error('Error updating reply:', error);
    res.status(500).json({ message: error.message });
  }
};

// Delete a reply (including nested replies)
export const deleteReply = async (req, res) => {
  try {
    const { id } = req.params;
    const reply = await Reply.findById(id);

    if (!reply) {
      return res.status(404).json({ message: 'Reply not found' });
    }

    await Comment.findByIdAndUpdate(reply.commentId, { $pull: { replies: id } });

    const nestedReplies = await Reply.find({ parentReplyId: id });
    const nestedReplyIds = nestedReplies.map(r => r._id);

    if (nestedReplyIds.length > 0) {
      await Reply.deleteMany({ parentReplyId: id });
      await Comment.findByIdAndUpdate(reply.commentId, { $pull: { replies: { $in: nestedReplyIds } } });
    }

    await Reply.findByIdAndDelete(id);

    res.status(200).json({ message: 'Reply and nested replies deleted successfully' });
  } catch (error) {
    console.error('Error deleting reply:', error);
    res.status(500).json({ message: error.message });
  }
};

// Like or unlike a reply
export const toggleLikeReply = async (req, res) => {
  try {
    const { replyId, userId } = req.body;

    const reply = await Reply.findById(replyId);

    if (!reply) {
      return res.status(404).json({ message: 'Reply not found' });
    }

    const likeIndex = reply.likes.indexOf(userId);
    if (likeIndex === -1) {
      reply.likes.push(userId);
    } else {
      reply.likes.splice(likeIndex, 1);
    }

    await reply.save();

    const updatedReply = await Reply.findById(replyId)
      .populate('author', 'name profilePhoto')
      .populate('reactions.userId', 'name profilePhoto');

    res.status(200).json(updatedReply);
  } catch (error) {
    console.error('Error liking/unliking reply:', error);
    res.status(500).json({ message: error.message });
  }
};

// Add or remove a reaction to a reply
export const addReactionToReply = async (req, res) => {
  try {
    const { replyId, userId, emoji } = req.body;

    const reply = await Reply.findById(replyId);

    if (!reply) {
      return res.status(404).json({ message: 'Reply not found' });
    }

    const existingReactionIndex = reply.reactions.findIndex(
      r => r.userId.toString() === userId && r.emoji === emoji
    );

    if (existingReactionIndex !== -1) {
      reply.reactions.splice(existingReactionIndex, 1);
    } else {
      reply.reactions.push({ userId, emoji });

      if (userId !== reply.author.toString()) {
        const notification = new Notification({
          recipient: reply.author,
          sender: userId,
          type: 'reaction',
          replyId,
          read: false,
        });
        await notification.save();
      }
    }

    await reply.save();

    const updatedReply = await Reply.findById(replyId)
      .populate('author', 'name profilePhoto')
      .populate('reactions.userId', 'name profilePhoto');

    res.status(200).json(updatedReply);
  } catch (error) {
    console.error('Error adding/removing reaction to reply:', error);
    res.status(500).json({ message: error.message });
  }
};
