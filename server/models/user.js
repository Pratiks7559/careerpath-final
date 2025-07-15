// //models/User.js
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   name: String,
//   gender: String,
//   age: Number,
//   highestEducation: String,
//   profilePhoto: String,

//   // ✅ Latest quiz result
//   quizResult: {
//     type: String,
//     default: '',
//   },

//   // ✅ Quiz history array
//   quizHistory: [
//     {
//       result: String,
//       date: { type: Date, default: Date.now },
//     },
//   ],
// });

// export default mongoose.model('User', userSchema);
// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },

//   // Profile info
//   name: String,
//   gender: String,
//   age: Number,
//   highestEducation: String,
//   profilePhoto: String,

//   // OTP for forgot password
//   otp: String,
//   otpExpires: Date,

//   // Quiz result and history
//   quizResult: {
//     type: String,
//     default: '',
//   },
//   quizHistory: [
//     {
//       result: String,
//       date: {
//         type: Date,
//         default: Date.now,
//       },
//     },
//   ],
// });

// export default mongoose.model('User', userSchema);

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  // Profile info
  name: String,
  gender: String,
  age: Number,
  highestEducation: String,
  profilePhoto: String,

  // OTP for forgot password
  otp: String,
  otpExpires: Date,

  // Latest quiz result
  quizResult: {
    type: String,
    default: '',
  },

  // Quiz history with detailed scores
  quizHistory: [
    {
      result: String,
      scores: {
        type: Map,
        of: Number,
        default: {},
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export default mongoose.model('User', userSchema);
