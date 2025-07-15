import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Quote.css';

function MotivationalQuote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch random quote from backend when component mounts
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/quotes/random-quote');
        setQuote(response.data.quote);
      } catch (error) {
        console.error('Error fetching quote:', error);
        setQuote('Could not load a quote right now. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);
  useEffect(() => {
    document.body.classList.add('reggi');
    return () => document.body.classList.remove('reggi');
  }, []);

  return (
    <div className="motivational-quote">
      {loading ? (
        <div>Loading quote...</div>
      ) : (
        <div className="quote-text">
          <p>"{quote}"</p>
        </div>
      )}
    </div>
  );
}

export default MotivationalQuote;
