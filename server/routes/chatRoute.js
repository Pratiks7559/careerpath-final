// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// // POST route for chatbot interaction
// router.post('/', async (req, res) => {
//   const { message } = req.body;

//   if (!message) {
//     return res.status(400).json({ error: 'Message is required' });
//   }

//   try {
//     console.log('Received message:', message);

//     const witAiResponse = await axios.get(
//       'https://api.wit.ai/message',
//       {
//         params: {
//           v: '20230516', // API version
//           q: message     // User's input
//         },
//         headers: {
//           'Authorization': `Bearer ${process.env.WIT_AI_SERVER_ACCESS_TOKEN}`,
//         }
//       }
//     );

//     console.log('Wit.ai response:', witAiResponse.data);

//     const data = witAiResponse.data;
//     const intent = data.intents?.[0]?.name;

//     let replyText = '';

//     // Basic intent-based logic
//     if (intent === 'greet') {
//       replyText = "Hello! How can I help you with your career today?";
//     } else if (intent === 'ask_career') {
//       replyText = "Sure! Tell me your interests and skills, and I’ll suggest the best career paths.";
//     } else {
//       replyText = "I'm still learning! Try asking something related to your career path or goals. 😊";
//     }

//     res.json({ reply: replyText });

//   } catch (err) {
//     console.error("❌ Chatbot API Error:", err.message);
//     console.error(err.response?.data || err);
//     res.status(500).json({ error: 'Failed to get chatbot response from Wit.ai.' });
//   }
// });

// module.exports = router;

// backend/routes/chatRoutes.js
// backend/routes/chatRoute.js
import express from 'express';
import cohere from 'cohere-ai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    console.log('Received message:', message);

    // Call Cohere's generate method to get a response
    const response = await cohere.generate({
      model: 'xlarge',  // You can specify the desired model here
      prompt: message,  // User's message is the prompt
      max_tokens: 150,  // Limit the response length
      temperature: 0.7, // Creativity control (higher = more creative)
    });

    const botReply = response.body.generations[0].text; // Get the generated text from the response

    return res.json({ reply: botReply });

  } catch (error) {
    console.error("❌ Cohere API Error:", error.message);
    return res.status(500).json({ error: "Sorry, something went wrong!" });
  }
});

export default router;
