// import mongoose from 'mongoose';



// const notificationSchema = new mongoose.Schema({
//   recipientName: {
//     type: String,
//     required: true,
//   },
//   senderName: {
//     type: String,
//     required: true,
//   },
//   commentId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Comment',
//     required: true,
//   },
//   replyId: {
//     type: mongoose.Schema.Types.ObjectId,
//   },
//   isRead: {
//     type: Boolean,
//     default: false,
//   },
//   type: {
//     type: String,
//     enum: ['reply', 'reaction'],
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });





// const Notification = mongoose.model('Notification', notificationSchema);
// export default Notification;
import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['reply', 'reaction', 'mention'], required: true },
  commentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  replyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reply' },
  read: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;