// server/routes/chat.js
import express from 'express';
import axios from 'axios';

const router = express.Router();
const GEMINI_API_KEY = 'AIzaSyB5yjnjpT9p897NyL_GbSIChkRd_9TeR7M'; // put your actual key here

router.post('/', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }]
      }
    );

    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No reply.';
    res.json({ reply });
  } catch (error) {
    console.error('Gemini API Error:', error.message);
    res.status(500).json({ reply: 'Server error' });
  }
});

export default router;
