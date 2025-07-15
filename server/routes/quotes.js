import express from 'express';

const router = express.Router();

// Expanded quotes/tips array (30 items)
const quotes = [
  "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "The way to get started is to quit talking and begin doing. – Walt Disney",
  "Opportunities don't happen, you create them. – Chris Grosser",
  "Your career is what you make of it, so keep learning and growing!",
  "It always seems impossible until it's done. – Nelson Mandela",
  "Work hard in silence, let your success be your noise. – Frank Ocean",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
  "Do what you love and success will follow. – Meg Whitman",
  "Dream big. Start small. Act now. – Robin Sharma",
  "Never stop learning, because life never stops teaching.",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Learn as if you will live forever, live like you will die tomorrow. – Mahatma Gandhi",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t limit your challenges. Challenge your limits.",
  "The expert in anything was once a beginner.",
  "Choose a job you love, and you will never have to work a day in your life. – Confucius",
  "Every accomplishment starts with the decision to try.",
  "Small steps every day lead to big results.",
  "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
  "A little progress each day adds up to big results.",
  "Set a goal so big that you can’t achieve it until you grow into the person who can.",
  "Be stubborn about your goals, and flexible about your methods.",
  "You are capable of amazing things."
];

// Random quote/tip API endpoint
router.get('/random-quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json({ quote: randomQuote });
});

export default router;
