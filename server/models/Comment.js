// import mongoose from 'mongoose';


// const reactionSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   emoji: {
//     type: String,
//     required: true,
//   },
// });

// const replySchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   text: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   reactions: [reactionSchema],
// });

// const commentSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: true,
//   },
//   text: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//   updatedAt: {
//     type: Date,
//   },
//   likes: [String], // Array of usernames who liked
//   reactions: [reactionSchema],
//   replies: [replySchema],
// });

// const Comment = mongoose.model('Comment', commentSchema);
// export default Comment;

// models/Comment.js
// import mongoose from 'mongoose';

// // Reaction schema (for both comments and replies)
// const reactionSchema = new mongoose.Schema({
//   userName: { 
//     type: String, 
//     required: [true, 'Reaction username is required'],
//     trim: true
//   },
//   emoji: { 
//     type: String, 
//     required: [true, 'Emoji is required'],
//     trim: true
//   }
// }, { _id: false });

// // First define the basic reply schema structure without recursion
// const replySchemaDefinition = {
//   userName: { 
//     type: String, 
//     required: [true, 'Reply username is required'],
//     trim: true
//   },
//   text: { 
//     type: String, 
//     required: [true, 'Reply text is required'],
//     trim: true,
//     maxlength: [1000, 'Reply cannot exceed 1000 characters']
//   },
//   createdAt: { 
//     type: Date, 
//     default: Date.now 
//   },
//   reactions: { 
//     type: [reactionSchema], 
//     default: [] 
//   }
// };

// // Create the reply schema with the basic definition
// const replySchema = new mongoose.Schema(replySchemaDefinition, { 
//   _id: true,
//   timestamps: false 
// });

// // Now safely add the recursive replies reference
// replySchema.add({
//   replies: { 
//     type: [replySchema], 
//     default: [] 
//   }
// });

// // Main comment schema
// const commentSchema = new mongoose.Schema({
//   userName: { 
//     type: String, 
//     required: [true, 'Username is required'],
//     trim: true
//   },
//   text: { 
//     type: String, 
//     required: [true, 'Comment text is required'],
//     trim: true,
//     maxlength: [1000, 'Comment cannot exceed 1000 characters']
//   },
//   createdAt: { 
//     type: Date, 
//     default: Date.now 
//   },
//   updatedAt: { 
//     type: Date 
//   },
//   likes: { 
//     type: [String], 
//     default: [] 
//   },
//   reactions: { 
//     type: [reactionSchema], 
//     default: [] 
//   },
//   replies: { 
//     type: [replySchema], 
//     default: [] 
//   }
// }, {
//   timestamps: { createdAt: true, updatedAt: true }
// });

// // Add indexes for better performance
// commentSchema.index({ createdAt: -1 }); // For sorting comments
// commentSchema.index({ 'replies.createdAt': -1 }); // For sorting replies

// // Virtual for reply count
// commentSchema.virtual('replyCount').get(function() {
//   let count = this.replies.length;
  
//   // Recursively count nested replies
//   const countNestedReplies = (replies) => {
//     replies.forEach(reply => {
//       count += reply.replies.length;
//       if (reply.replies.length > 0) {
//         countNestedReplies(reply.replies);
//       }
//     });
//   };
  
//   countNestedReplies(this.replies);
//   return count;
// });

// // Pre-save hook to update timestamps
// commentSchema.pre('save', function(next) {
//   if (this.isModified('text')) {
//     this.updatedAt = new Date();
//   }
//   next();
// });

// // Static method for getting comments with nested replies
// commentSchema.statics.findWithReplies = function(commentId) {
//   return this.findById(commentId)
//     .select('-__v')
//     .lean()
//     .exec();
// };

// export default mongoose.model('Comment', commentSchema);

import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  postId: { type: String, default: 'dashboard' }, // For future scalability
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }],
  reactions: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    emoji: String
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;