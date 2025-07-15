// // // import express from 'express';
// // // import { body, validationResult } from 'express-validator';
// // // import Comment from '../models/Comment.js';
// // // import User from '../models/User.js';
// // // import Notification from '../models/Notification.js';

// // // const router = express.Router();

// // // // Add a new comment

// // // router.post('/', 
// // //   [
// // //     body('userName')
// // //       .exists().withMessage('Username is required')
// // //       .trim()
// // //       .notEmpty().withMessage('Username cannot be empty')
// // //       .escape(),
// // //     body('text')
// // //       .exists().withMessage('Comment text is required')
// // //       .trim()
// // //       .notEmpty().withMessage('Comment cannot be empty')
// // //       .isLength({ max: 1000 }).withMessage('Comment cannot exceed 1000 characters')
// // //       .escape()
// // //   ],
// // //   async (req, res) => {
// // //     try {
// // //       // Validate input
// // //       const errors = validationResult(req);
// // //       if (!errors.isEmpty()) {
// // //         return res.status(400).json({ 
// // //           success: false,
// // //           message: 'Validation failed',
// // //           errors: errors.array() 
// // //         });
// // //       }

// // //       const { userName, text } = req.body;

// // //       // Create new comment
// // //       const comment = new Comment({
// // //         userName: userName.trim(),
// // //         text: text.trim()
// // //       });

// // //       // Save to database
// // //       const savedComment = await comment.save();

// // //       // Return success response
// // //       return res.status(201).json({
// // //         success: true,
// // //         comment: {
// // //           _id: savedComment._id,
// // //           userName: savedComment.userName,
// // //           text: savedComment.text,
// // //           createdAt: savedComment.createdAt,
// // //           likes: savedComment.likes,
// // //           reactions: savedComment.reactions,
// // //           replies: savedComment.replies
// // //         }
// // //       });

// // //     } catch (err) {
// // //       console.error('Error creating comment:', err);
      
// // //       // Handle validation errors
// // //       if (err.name === 'ValidationError') {
// // //         return res.status(400).json({
// // //           success: false,
// // //           message: 'Validation failed',
// // //           errors: Object.values(err.errors).map(e => ({
// // //             field: e.path,
// // //             message: e.message
// // //           }))
// // //         });
// // //       }

// // //       // Handle other errors
// // //       return res.status(500).json({
// // //         success: false,
// // //         message: 'Internal server error',
// // //         error: process.env.NODE_ENV === 'development' ? err.message : undefined
// // //       });
// // //     }
// // //   }
// // // );

// // // // Get all comments with replies
// // // router.get('/', async (req, res) => {
// // //   try {
// // //     const comments = await Comment.find().sort({ createdAt: -1 });
// // //     res.json(comments);
// // //   } catch (err) {
// // //     console.error('Error fetching comments:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Delete a comment
// // // router.delete('/:id', async (req, res) => {
// // //   try {
// // //     const { userName } = req.body;
// // //     const comment = await Comment.findById(req.params.id);

// // //     if (!comment) {
// // //       return res.status(404).json({ message: 'Comment not found' });
// // //     }

// // //     if (comment.userName !== userName) {
// // //       return res.status(403).json({ message: 'Not authorized to delete this comment' });
// // //     }

// // //     await comment.remove();
    
// // //     // Also delete any notifications related to this comment
// // //     await Notification.deleteMany({ commentId: comment._id });
    
// // //     res.json({ message: 'Comment deleted successfully' });
// // //   } catch (err) {
// // //     console.error('Error deleting comment:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Update a comment
// // // router.put('/:id', async (req, res) => {
// // //   try {
// // //     const { userName, text } = req.body;
// // //     const comment = await Comment.findById(req.params.id);

// // //     if (!comment) {
// // //       return res.status(404).json({ message: 'Comment not found' });
// // //     }

// // //     if (comment.userName !== userName) {
// // //       return res.status(403).json({ message: 'Not authorized to edit this comment' });
// // //     }

// // //     comment.text = text;
// // //     comment.updatedAt = Date.now();
// // //     await comment.save();

// // //     res.json(comment);
// // //   } catch (err) {
// // //     console.error('Error updating comment:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Like a comment
// // // router.post('/:id/like', async (req, res) => {
// // //   try {
// // //     const { userName } = req.body;
// // //     const comment = await Comment.findById(req.params.id);

// // //     if (!comment) {
// // //       return res.status(404).json({ message: 'Comment not found' });
// // //     }

// // //     if (comment.userName === userName) {
// // //       return res.status(400).json({ message: 'Cannot like your own comment' });
// // //     }

// // //     // Check if user already liked this comment
// // //     const alreadyLiked = comment.likes.includes(userName);
// // //     if (alreadyLiked) {
// // //       return res.status(400).json({ message: 'Already liked this comment' });
// // //     }

// // //     comment.likes.push(userName);
// // //     await comment.save();

// // //     // Create notification for comment owner
// // //     const notification = new Notification({
// // //       recipientName: comment.userName,
// // //       senderName: userName,
// // //       commentId: comment._id,
// // //       type: 'reaction'
// // //     });
// // //     await notification.save();

// // //     res.json(comment);
// // //   } catch (err) {
// // //     console.error('Error liking comment:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Add a reply to comment
// // // router.post('/:id/reply', async (req, res) => {
// // //   try {
// // //     const { userName, text } = req.body;
// // //     const comment = await Comment.findById(req.params.id);

// // //     if (!comment) {
// // //       return res.status(404).json({ message: 'Comment not found' });
// // //     }

// // //     if (!userName || !text) {
// // //       return res.status(400).json({ message: 'Username and text are required' });
// // //     }

// // //     const reply = {
// // //       userName,
// // //       text
// // //     };

// // //     comment.replies.push(reply);
// // //     await comment.save();

// // //     // Get the newly added reply (last one in array)
// // //     const newReply = comment.replies[comment.replies.length - 1];

// // //     // Create notification for comment owner if it's not their own reply
// // //     if (comment.userName !== userName) {
// // //       const notification = new Notification({
// // //         recipientName: comment.userName,
// // //         senderName: userName,
// // //         commentId: comment._id,
// // //         replyId: newReply._id,
// // //         type: 'reply'
// // //       });
// // //       await notification.save();
// // //     }

// // //     res.json(comment);
// // //   } catch (err) {
// // //     console.error('Error adding reply:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });

// // // // Add emoji reaction to comment
// // // router.post('/:id/react', async (req, res) => {
// // //   try {
// // //     const { userName, emoji } = req.body;
// // //     const comment = await Comment.findById(req.params.id);

// // //     if (!comment) {
// // //       return res.status(404).json({ message: 'Comment not found' });
// // //     }

// // //     if (!userName || !emoji) {
// // //       return res.status(400).json({ message: 'Username and emoji are required' });
// // //     }
// // //     // Remove existing reaction from this user if any
// // //     comment.reactions = comment.reactions.filter(r => r.userName !== userName);
// // //     // Add new reaction
// // //     comment.reactions.push({ userName, emoji });
// // //     await comment.save();
// // //     // Create notification for comment owner if it's not their own reaction
// // //     if (comment.userName !== userName) {
// // //       const notification = new Notification({
// // //         recipientName: comment.userName,
// // //         senderName: userName,
// // //         commentId: comment._id,
// // //         type: 'reaction'
// // //       });
// // //       await notification.save();
// // //     }
// // //     res.json(comment);
// // //   } catch (err) {
// // //     console.error('Error adding reaction:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });
// // // // Get notifications for user
// // // router.get('/notifications/:userName', async (req, res) => {
// // //   try {
// // //     const notifications = await Notification.find({ 
// // //       recipientName: req.params.userName,
// // //       isRead: false
// // //     }).sort({ createdAt: -1 });

// // //     res.json(notifications);
// // //   } catch (err) {
// // //     console.error('Error fetching notifications:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });
// // // // Mark notification as read
// // // router.put('/notifications/:id/read', async (req, res) => {
// // //   try {
// // //     const notification = await Notification.findByIdAndUpdate(
// // //       req.params.id,
// // //       { isRead: true },
// // //       { new: true }
// // //     );
// // //     if (!notification) {
// // //       return res.status(404).json({ message: 'Notification not found' });
// // //     }
// // //     res.json(notification);
// // //   } catch (err) {
// // //     console.error('Error marking notification as read:', err);
// // //     res.status(500).json({ message: 'Server error' });
// // //   }
// // // });
// // // export default router;
// // import express from 'express';
// // import { body, validationResult } from 'express-validator';
// // import Comment from '../models/Comment.js';
// // import Notification from '../models/Notification.js';

// // const router = express.Router();

// // // Helper function to create notifications
// // const createNotification = async (recipient, sender, commentId, replyId, type) => {
// //   if (recipient !== sender) {
// //     await Notification.create({
// //       recipientName: recipient,
// //       senderName: sender,
// //       commentId,
// //       replyId,
// //       type,
// //       createdAt: new Date()
// //     });
// //   }
// // };

// // // Create a new comment
// // router.post('/', 
// //   [
// //     body('userName')
// //       .exists().withMessage('Username is required')
// //       .trim()
// //       .notEmpty().withMessage('Username cannot be empty')
// //       .escape(),
// //     body('text')
// //       .exists().withMessage('Comment text is required')
// //       .trim()
// //       .notEmpty().withMessage('Comment cannot be empty')
// //       .isLength({ max: 1000 }).withMessage('Comment cannot exceed 1000 characters')
// //       .escape()
// //   ],
// //   async (req, res) => {
// //     try {
// //       const errors = validationResult(req);
// //       if (!errors.isEmpty()) {
// //         return res.status(400).json({ 
// //           success: false,
// //           message: 'Validation failed',
// //           errors: errors.array() 
// //         });
// //       }

// //       const { userName, text } = req.body;

// //       const comment = new Comment({
// //         userName: userName.trim(),
// //         text: text.trim()
// //       });

// //       const savedComment = await comment.save();

// //       return res.status(201).json({
// //         success: true,
// //         comment: savedComment
// //       });

// //     } catch (err) {
// //       console.error('Error creating comment:', err);
      
// //       if (err.name === 'ValidationError') {
// //         return res.status(400).json({
// //           success: false,
// //           message: 'Validation failed',
// //           errors: Object.values(err.errors).map(e => ({
// //             field: e.path,
// //             message: e.message
// //           }))
// //         });
// //       }

// //       return res.status(500).json({
// //         success: false,
// //         message: 'Internal server error',
// //         error: process.env.NODE_ENV === 'development' ? err.message : undefined
// //       });
// //     }
// //   }
// // );

// // // Get all comments
// // router.get('/', async (req, res) => {
// //   try {
// //     const comments = await Comment.find().sort({ createdAt: -1 });
// //     res.json({ success: true, comments });
// //   } catch (err) {
// //     console.error('Error fetching comments:', err);
// //     res.status(500).json({ success: false, message: 'Server error' });
// //   }
// // });

// // // Delete a comment
// // router.delete('/:id', async (req, res) => {
// //   try {
// //     const { userName } = req.body;
// //     const comment = await Comment.findById(req.params.id);

// //     if (!comment) {
// //       return res.status(404).json({ success: false, message: 'Comment not found' });
// //     }
// //     if (comment.userName !== userName) {
// //       return res.status(403).json({ success: false, message: 'Not authorized' });
// //     }

// //     await comment.remove();
// //     await Notification.deleteMany({ commentId: comment._id });
    
// //     res.json({ success: true, message: 'Comment deleted successfully' });
// //   } catch (err) {
// //     console.error('Error deleting comment:', err);
// //     res.status(500).json({ success: false, message: 'Server error' });
// //   }
// // });

// // // Update a comment
// // router.put('/:id', 
// //   [
// //     body('text')
// //       .trim()
// //       .notEmpty().withMessage('Comment cannot be empty')
// //       .isLength({ max: 1000 }).withMessage('Comment cannot exceed 1000 characters')
// //   ],
// //   async (req, res) => {
// //     try {
// //       const errors = validationResult(req);
// //       if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //       }

// //       const { userName, text } = req.body;
// //       const comment = await Comment.findById(req.params.id);

// //       if (!comment) {
// //         return res.status(404).json({ success: false, message: 'Comment not found' });
// //       }
// //       if (comment.userName !== userName) {
// //         return res.status(403).json({ success: false, message: 'Not authorized' });
// //       }

// //       comment.text = text.trim();
// //       comment.updatedAt = Date.now();
// //       await comment.save();

// //       res.json({ success: true, comment });
// //     } catch (err) {
// //       console.error('Error updating comment:', err);
// //       res.status(500).json({ success: false, message: 'Server error' });
// //     }
// //   }
// // );

// // // Like a comment
// // router.post('/:id/like', 
// //   [
// //     body('userName').trim().notEmpty()
// //   ],
// //   async (req, res) => {
// //     try {
// //       const errors = validationResult(req);
// //       if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //       }

// //       const { userName } = req.body;
// //       const comment = await Comment.findById(req.params.id);

// //       if (!comment) {
// //         return res.status(404).json({ success: false, message: 'Comment not found' });
// //       }
// //       if (comment.userName === userName) {
// //         return res.status(400).json({ success: false, message: 'Cannot like your own comment' });
// //       }
// //       if (comment.likes.includes(userName)) {
// //         return res.status(400).json({ success: false, message: 'Already liked' });
// //       }

// //       comment.likes.push(userName);
// //       await comment.save();

// //       await createNotification(
// //         comment.userName,
// //         userName,
// //         comment._id,
// //         null,
// //         'reaction'
// //       );

// //       res.json({ success: true, comment });
// //     } catch (err) {
// //       console.error('Error liking comment:', err);
// //       res.status(500).json({ success: false, message: 'Server error' });
// //     }
// //   }
// // );

// // // Add reply to comment
// // router.post('/:id/reply', 
// //   [
// //     body('userName').trim().notEmpty(),
// //     body('text')
// //       .trim()
// //       .notEmpty()
// //       .isLength({ max: 1000 })
// //   ],
// //   async (req, res) => {
// //     try {
// //       const errors = validationResult(req);
// //       if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //       }

// //       const { userName, text } = req.body;
// //       const comment = await Comment.findById(req.params.id);

// //       if (!comment) {
// //         return res.status(404).json({ success: false, message: 'Comment not found' });
// //       }

// //       comment.replies.push({ userName, text });
// //       await comment.save();

// //       const newReply = comment.replies[comment.replies.length - 1];

// //       await createNotification(
// //         comment.userName,
// //         userName,
// //         comment._id,
// //         newReply._id,
// //         'reply'
// //       );

// //       res.status(201).json({ success: true, comment });
// //     } catch (err) {
// //       console.error('Error adding reply:', err);
// //       res.status(500).json({ success: false, message: 'Server error' });
// //     }
// //   }
// // );

// // // Add reaction to comment
// // router.post('/:id/react', 
// //   [
// //     body('userName').trim().notEmpty(),
// //     body('emoji').trim().notEmpty()
// //   ],
// //   async (req, res) => {
// //     try {
// //       const errors = validationResult(req);
// //       if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //       }

// //       const { userName, emoji } = req.body;
// //       const comment = await Comment.findById(req.params.id);

// //       if (!comment) {
// //         return res.status(404).json({ success: false, message: 'Comment not found' });
// //       }

// //       comment.reactions = comment.reactions.filter(r => r.userName !== userName);
// //       comment.reactions.push({ userName, emoji });
// //       await comment.save();

// //       await createNotification(
// //         comment.userName,
// //         userName,
// //         comment._id,
// //         null,
// //         'reaction'
// //       );

// //       res.json({ success: true, comment });
// //     } catch (err) {
// //       console.error('Error adding reaction:', err);
// //       res.status(500).json({ success: false, message: 'Server error' });
// //     }
// //   }
// // );

// // // Add nested reply to a reply
// // router.post('/:commentId/replies/:replyId/reply', 
// //   [
// //     body('userName').trim().notEmpty(),
// //     body('text')
// //       .trim()
// //       .notEmpty()
// //       .isLength({ max: 1000 })
// //   ],
// //   async (req, res) => {
// //     try {
// //       const errors = validationResult(req);
// //       if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //       }

// //       const { commentId, replyId } = req.params;
// //       const { userName, text } = req.body;

// //       const comment = await Comment.findById(commentId);
// //       if (!comment) {
// //         return res.status(404).json({ success: false, message: 'Comment not found' });
// //       }

// //       // Recursive function to find and add nested reply
// //       const addNestedReply = (replies, targetId) => {
// //         for (let reply of replies) {
// //           if (reply._id.equals(targetId)) {
// //             reply.replies.push({ userName, text });
// //             return reply.replies[reply.replies.length - 1];
// //           }
// //           if (reply.replies?.length > 0) {
// //             const result = addNestedReply(reply.replies, targetId);
// //             if (result) return result;
// //           }
// //         }
// //         return null;
// //       };

// //       const newReply = addNestedReply(comment.replies, replyId);
// //       if (!newReply) {
// //         return res.status(404).json({ success: false, message: 'Reply not found' });
// //       }

// //       await comment.save();

// //       // Get parent reply to send notification
// //       const findParentReply = (replies, targetId) => {
// //         for (let reply of replies) {
// //           if (reply._id.equals(targetId)) return reply;
// //           if (reply.replies?.length > 0) {
// //             const found = findParentReply(reply.replies, targetId);
// //             if (found) return found;
// //           }
// //         }
// //         return null;
// //       };

// //       const parentReply = findParentReply(comment.replies, replyId);
// //       if (parentReply) {
// //         await createNotification(
// //           parentReply.userName,
// //           userName,
// //           commentId,
// //           newReply._id,
// //           'reply'
// //         );
// //       }

// //       res.status(201).json({ success: true, reply: newReply });
// //     } catch (err) {
// //       console.error('Error adding nested reply:', err);
// //       res.status(500).json({ success: false, message: 'Server error' });
// //     }
// //   }
// // );

// // // Add reaction to a reply
// // // Add reaction to a reply
// // // Add reaction to a reply
// // router.post('/:commentId/replies/:replyId/react', 
// //   [
// //     body('userName').trim().notEmpty(),
// //     body('emoji').trim().notEmpty()
// //   ],
// //   async (req, res) => {
// //     try {
// //       const errors = validationResult(req);
// //       if (!errors.isEmpty()) {
// //         return res.status(400).json({ errors: errors.array() });
// //       }

// //       const { commentId, replyId } = req.params;
// //       const { userName, emoji } = req.body;

// //       const comment = await Comment.findById(commentId);
// //       if (!comment) {
// //         return res.status(404).json({ success: false, message: 'Comment not found' });
// //       }

// //       // Recursive function to find reply and add reaction
// //       const addReactionToReply = (replies) => {
// //         for (let reply of replies) {
// //           if (reply._id.equals(replyId)) {
// //             // Remove previous reaction from same user if exists
// //             reply.reactions = reply.reactions?.filter(r => r.userName !== userName) || [];
// //             reply.reactions.push({ userName, emoji });
// //             return reply;
// //           }
// //           if (reply.replies?.length > 0) {
// //             const found = addReactionToReply(reply.replies);
// //             if (found) return found;
// //           }
// //         }
// //         return null;
// //       };

// //       const targetReply = addReactionToReply(comment.replies);
// //       if (!targetReply) {
// //         return res.status(404).json({ success: false, message: 'Reply not found' });
// //       }

// //       await comment.save();

// //       await createNotification(
// //         targetReply.userName,
// //         userName,
// //         commentId,
// //         targetReply._id,
// //         'reaction'
// //       );

// //       res.json({ success: true, reply: targetReply });
// //     } catch (err) {
// //       console.error('Error reacting to reply:', err);
// //       res.status(500).json({ success: false, message: 'Server error' });
// //     }
// //   }
// // );



// // // Get notifications for user
// // router.get('/notifications/:userName', async (req, res) => {
// //   try {
// //     const notifications = await Notification.find({ 
// //       recipientName: req.params.userName,
// //       isRead: false
// //     }).sort({ createdAt: -1 });

// //     res.json({ success: true, notifications });
// //   } catch (err) {
// //     console.error('Error fetching notifications:', err);
// //     res.status(500).json({ success: false, message: 'Server error' });
// //   }
// // });

// // // Mark notification as read
// // router.put('/notifications/:id/read', async (req, res) => {
// //   try {
// //     const notification = await Notification.findByIdAndDelete(req.params.id);
    
// //     if (!notification) {
// //       return res.status(404).json({ success: false, message: 'Notification not found' });
// //     }

// //     res.json({ success: true, message: 'Notification marked as read' });
// //   } catch (err) {
// //     console.error('Error handling notification:', err);
// //     res.status(500).json({ success: false, message: 'Server error' });
// //   }
// // });

// // export default router;
// import express from 'express';
// const router = express.Router();
// import Comment from '../models/Comment.js';
// import Notification from '../models/Notification.js';
// import User from '../models/User.js';

// // Get all comments with user details
// router.get('/', async (req, res) => {
//   try {
//     const comments = await Comment.find()
//       .populate('user', 'name')
//       .populate({
//         path: 'replies',
//         populate: {
//           path: 'user',
//           select: 'name'
//         }
//       })
//       .sort({ createdAt: -1 });
      
//     res.json(comments);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Create a new comment
// router.post('/', async (req, res) => {
//   try {
//     const { userId, content } = req.body;
    
//     const comment = new Comment({
//       user: userId,
//       content
//     });

//     const savedComment = await comment.save();
    
//     // Create notifications for all users (except the commenter)
//     const users = await User.find({ _id: { $ne: userId } });
//     const notifications = users.map(user => ({
//       recipient: user._id,
//       sender: userId,
//       comment: savedComment._id,
//       type: 'comment'
//     }));
    
//     await Notification.insertMany(notifications);
    
//     const populatedComment = await Comment.findById(savedComment._id)
//       .populate('user', 'name');
      
//     res.status(201).json(populatedComment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Add a reply to a comment
// router.post('/:commentId/replies', async (req, res) => {
//   try {
//     const { commentId } = req.params;
//     const { userId, content } = req.body;
    
//     const comment = await Comment.findById(commentId);
//     if (!comment) return res.status(404).json({ message: 'Comment not found' });
    
//     const reply = {
//       user: userId,
//       content,
//       replies: []
//     };
    
//     comment.replies.push(reply);
//     const savedComment = await comment.save();
    
//     // Get the newly added reply
//     const newReply = savedComment.replies[savedComment.replies.length - 1];
    
//     // Create notification for comment author
//     if (comment.user.toString() !== userId) {
//       const notification = new Notification({
//         recipient: comment.user,
//         sender: userId,
//         comment: comment._id,
//         reply: newReply._id,
//         type: 'reply'
//       });
//       await notification.save();
//     }
    
//     const populatedComment = await Comment.findById(commentId)
//       .populate('user', 'name')
//       .populate({
//         path: 'replies',
//         populate: {
//           path: 'user',
//           select: 'name'
//         }
//       });
      
//     res.status(201).json(populatedComment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Add a reply to a reply (nested)
// router.post('/:commentId/replies/:replyId/replies', async (req, res) => {
//   try {
//     const { commentId, replyId } = req.params;
//     const { userId, content } = req.body;
    
//     const comment = await Comment.findById(commentId);
//     if (!comment) return res.status(404).json({ message: 'Comment not found' });
    
//     // Find the parent reply
//     const parentReply = comment.replies.id(replyId);
//     if (!parentReply) return res.status(404).json({ message: 'Reply not found' });
    
//     const newReply = {
//       user: userId,
//       content,
//       replies: []
//     };
    
//     parentReply.replies.push(newReply);
//     const savedComment = await comment.save();
    
//     // Get the newly added nested reply
//     const savedParentReply = savedComment.replies.id(replyId);
//     const savedNestedReply = savedParentReply.replies[savedParentReply.replies.length - 1];
    
//     // Create notification for parent reply author
//     if (parentReply.user.toString() !== userId) {
//       const notification = new Notification({
//         recipient: parentReply.user,
//         sender: userId,
//         comment: comment._id,
//         reply: savedNestedReply._id,
//         type: 'reply'
//       });
//       await notification.save();
//     }
    
//     const populatedComment = await Comment.findById(commentId)
//       .populate('user', 'name')
//       .populate({
//         path: 'replies',
//         populate: {
//           path: 'user',
//           select: 'name',
//           populate: {
//             path: 'replies',
//             populate: {
//               path: 'user',
//               select: 'name'
//             }
//           }
//         }
//       });
      
//     res.status(201).json(populatedComment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Add reaction to comment
// router.post('/:commentId/reactions', async (req, res) => {
//   try {
//     const { commentId } = req.params;
//     const { userId, emoji } = req.body;
    
//     const comment = await Comment.findById(commentId);
//     if (!comment) return res.status(404).json({ message: 'Comment not found' });
    
//     // Check if user already reacted with this emoji
//     const existingReaction = comment.reactions.find(
//       r => r.user.toString() === userId && r.emoji === emoji
//     );
    
//     if (existingReaction) {
//       // Remove reaction if already exists
//       comment.reactions = comment.reactions.filter(
//         r => !(r.user.toString() === userId && r.emoji === emoji)
//       );
//     } else {
//       // Add new reaction
//       comment.reactions.push({ user: userId, emoji });
      
//       // Create notification for comment author if not the same user
//       if (comment.user.toString() !== userId) {
//         const notification = new Notification({
//           recipient: comment.user,
//           sender: userId,
//           comment: comment._id,
//           type: 'reaction',
//           emoji
//         });
//         await notification.save();
//       }
//     }
    
//     const savedComment = await comment.save();
//     const populatedComment = await Comment.findById(savedComment._id)
//       .populate('user', 'name')
//       .populate('reactions.user', 'name');
      
//     res.json(populatedComment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Add reaction to reply
// router.post('/:commentId/replies/:replyId/reactions', async (req, res) => {
//   try {
//     const { commentId, replyId } = req.params;
//     const { userId, emoji } = req.body;
    
//     const comment = await Comment.findById(commentId);
//     if (!comment) return res.status(404).json({ message: 'Comment not found' });
    
//     const reply = comment.replies.id(replyId);
//     if (!reply) return res.status(404).json({ message: 'Reply not found' });
    
//     // Check if user already reacted with this emoji
//     const existingReaction = reply.reactions.find(
//       r => r.user.toString() === userId && r.emoji === emoji
//     );
    
//     if (existingReaction) {
//       // Remove reaction if already exists
//       reply.reactions = reply.reactions.filter(
//         r => !(r.user.toString() === userId && r.emoji === emoji)
//       );
//     } else {
//       // Add new reaction
//       reply.reactions.push({ user: userId, emoji });
      
//       // Create notification for reply author if not the same user
//       if (reply.user.toString() !== userId) {
//         const notification = new Notification({
//           recipient: reply.user,
//           sender: userId,
//           comment: comment._id,
//           reply: reply._id,
//           type: 'reaction',
//           emoji
//         });
//         await notification.save();
//       }
//     }
    
//     const savedComment = await comment.save();
//     const populatedComment = await Comment.findById(savedComment._id)
//       .populate('user', 'name')
//       .populate({
//         path: 'replies',
//         populate: {
//           path: 'user reactions.user',
//           select: 'name'
//         }
//       });
      
//     res.json(populatedComment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Edit comment
// router.patch('/:commentId', async (req, res) => {
//   try {
//     const { commentId } = req.params;
//     const { content } = req.body;
    
//     const comment = await Comment.findById(commentId);
//     if (!comment) return res.status(404).json({ message: 'Comment not found' });
    
//     comment.content = content;
//     comment.updatedAt = new Date();
    
//     const savedComment = await comment.save();
//     const populatedComment = await Comment.findById(savedComment._id)
//       .populate('user', 'name');
      
//     res.json(populatedComment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Edit reply
// router.patch('/:commentId/replies/:replyId', async (req, res) => {
//   try {
//     const { commentId, replyId } = req.params;
//     const { content } = req.body;
    
//     const comment = await Comment.findById(commentId);
//     if (!comment) return res.status(404).json({ message: 'Comment not found' });
    
//     const reply = comment.replies.id(replyId);
//     if (!reply) return res.status(404).json({ message: 'Reply not found' });
    
//     reply.content = content;
//     reply.updatedAt = new Date();
    
//     const savedComment = await comment.save();
//     const populatedComment = await Comment.findById(savedComment._id)
//       .populate('user', 'name')
//       .populate({
//         path: 'replies',
//         populate: {
//           path: 'user',
//           select: 'name'
//         }
//       });
      
//     res.json(populatedComment);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Delete comment (and all its replies)
// router.delete('/:commentId', async (req, res) => {
//   try {
//     const { commentId } = req.params;
    
//     // Delete all notifications related to this comment
//     await Notification.deleteMany({ comment: commentId });
    
//     const deletedComment = await Comment.findByIdAndDelete(commentId);
//     if (!deletedComment) return res.status(404).json({ message: 'Comment not found' });
    
//     res.json({ message: 'Comment deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Delete reply
// router.delete('/:commentId/replies/:replyId', async (req, res) => {
//   try {
//     const { commentId, replyId } = req.params;
    
//     const comment = await Comment.findById(commentId);
//     if (!comment) return res.status(404).json({ message: 'Comment not found' });
    
//     const reply = comment.replies.id(replyId);
//     if (!reply) return res.status(404).json({ message: 'Reply not found' });
    
//     // Delete all notifications related to this reply
//     await Notification.deleteMany({ reply: replyId });
    
//     // Remove the reply
//     comment.replies = comment.replies.filter(r => r._id.toString() !== replyId);
//     await comment.save();
    
//     res.json({ message: 'Reply deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// export default  router;
import express from 'express';
import {
  createComment,
  getComments,
  updateComment,
  deleteComment,
  toggleLikeComment,
  addReactionToComment
} from '../controllers/commentController.js';

const router = express.Router();

router.post('/', createComment);
router.get('/', getComments);
router.put('/:id', updateComment);
router.delete('/:id', deleteComment);
router.post('/like', toggleLikeComment);
router.post('/reaction', addReactionToComment);

export default router;