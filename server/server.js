import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import path from 'path';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import quizRoutes from './routes/quiz.js';

 // Import the chatbot route correctly
 import careerRoute from './routes/careerRoute.js';


 import bodyParser from 'body-parser';
 import cookieParser from 'cookie-parser';
import quotesRouter from './routes/quotes.js';
import journalRoutes from './routes/journalRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
// import commentRoutes from'./routes/Comment.js';
import commentRoutes from './routes/commentRoutes.js';

import notificationRoutes from './routes/notificationRoutes.js';
import replyRoutes from './routes/replyRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import chatRoute from './routes/chat.js'
import { getAISuggestions } from './groqSuggestions.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);





dotenv.config();

const app = express();


// CORS Setup
app.use(cors({
  origin: 'http://localhost:3000', // Frontend running on localhost:3000
  credentials: true,
  optionsSuccessStatus: 200
}));

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Session Setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // 'true' in production if you're using HTTPS
}));

// Serve Static Files (for profile photo uploads, etc.)
app.use('/uploads', express.static('uploads'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ MongoDB connected");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

// Routes Setup
app.use('/api/auth', authRoutes);     
// Authentication routes
app.use('/api/user', userRoutes);     
// User-related routes
app.use('/api/quiz', quizRoutes);    
 // Quiz-related routes
// app.use('/api/chat', chatRoute);     
// Chatbot API route
app.use('/api', careerRoute); // Route for c
// app.use('/api/courses', coursesRoute);
// app.use('/api/journal', journalRoutes);
app.use('/api/quotes', quotesRouter);

app.use('/api/journal', journalRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/notifications',notificationRoutes);
app.use('/api/replies', replyRoutes);
app.use('/api/chat', chatRoute);
app.post('/api/suggestions', async (req, res) => {
  const { partial } = req.body;
  const suggestions = await getAISuggestions(partial);
  res.json({ suggestions });
});
const uploadDir = path.join(__dirname, 'uploade');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Routes
app.use('/api/resumes', resumeRoutes);

// Serve static files from uploads directory
app.use('/uploads', express.static(uploadDir));

app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
