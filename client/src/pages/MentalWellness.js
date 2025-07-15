import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MentalWellness.css';

const MentalWellness = () => {
  const [videos, setVideos] = useState([]);

  const affirmations = [
    "I am capable of achieving my goals.",
    "I trust my journey and grow every day.",
    "I deserve to feel confident and calm.",
    "I release stress and welcome peace.",
    "Every step forward is progress.",
    "I am enough as I am.",
    "My challenges help me grow stronger.",
    "I am not alone; I am supported.",
    "I control my thoughts and emotions.",
    "I approach exams with calm and clarity."
  ];

  const articles = [
    { title: "Exam Stress: How to Beat It", link: "https://www.wikihow.com/Deal-With-Exam-Stress" },
    { title: "Build Self-Confidence: A Guide", link: "https://www.betterup.com/blog/how-to-build-confidence" },
    { title: "Career Anxiety: How to Cope", link: "https://www.mindler.com/blog/career-anxiety/" },
    { title: "Relaxation Techniques for Students", link: "https://e-student.org/best-study-methods/" }
  ];

  const audioClips = [
    { title: "Just Relax", src: "/audio/just-relax-11157.mp3" },
    { title: "Nature", src: "/audio/nature-99499.mp3" },
    { title: "Calm mind", src: "/audio/please-calm-my-mind-125566.mp3" },
    { title: "Piano Music", src: "/audio/relaxing-piano-music-248868.mp3" },
    { title: "Stress Relief", src: "/audio/stress-relief-background-music-track-312874.mp3" },
    { title: "Dancing Stardust", src: "/audio/dancing-in-the-stardust-free-music-no-copyright-203603.mp3" },
  ];

  // Random YouTube search query generator
  const queries = [
    'mental wellness meditation',
    'guided relaxation stress relief',
    'student focus music',
    'mindfulness and peace',
    'calm your mind meditation'
  ];
  const randomQuery = queries[Math.floor(Math.random() * queries.length)];

  const fetchVideos = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: randomQuery,
          maxResults: 6,
          key: 'AIzaSyDG_dmav-51l0u632mrT2lWFiOiHkt_dn8', // Replace with your actual API key
          type: 'video',
          videoEmbeddable: 'true',
          safeSearch: 'strict',
        }
      });
      setVideos(res.data.items);
    } catch (error) {
      console.error("❌ Error fetching YouTube videos:", error);
    }
  };

  useEffect(() => {
    document.body.classList.add('mental');
    fetchVideos(); // fetch fresh videos on every load

    return () => {
      document.body.classList.remove('mental');
    };
  }, []);

  return (
    <div className="mental-wellness-container">
      <h2>🛡️ Mental Wellness Corner</h2>
      <p className="subtitle">Explore tools to support your emotional well-being, focus, and self-confidence.</p>

      {/* 🌟 Affirmation */}
      <div className="section">
        <h3>🌟 Today's Affirmation</h3>
        <blockquote>
          {affirmations[Math.floor(Math.random() * affirmations.length)]}
        </blockquote>
      </div>

      {/* 🎧 Audio Section */}
      <div className="section">
        <h3>🎧 Listen & Relax</h3>
        <div className="audio-list">
          {audioClips.map((clip, idx) => (
            <div key={idx} className="audio-item">
              <strong>{clip.title}</strong>
              <audio controls src={clip.src}></audio>
            </div>
          ))}
        </div>
      </div>

      {/* 🧘 YouTube Videos */}
      <div className="section">
        <h3>🧘 Relaxation & Wellness Videos</h3>
        <button className="refresh-btn" onClick={fetchVideos}>🔄 Refresh Videos</button>
        <div className="video-grid">
          {videos.map((video, idx) => (
            <iframe
              key={idx}
              width="100%"
              height="215"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>

      {/* 📚 Articles */}
      <div className="section">
        <h3>📚 Helpful Articles</h3>
        <ul>
          {articles.map((a, i) => (
            <li key={i}>
              <a href={a.link} target="_blank" rel="noopener noreferrer">
                {a.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 🌐 Resources */}
      <div className="section">
        <h3>🌐 Trusted Resources</h3>
        <ul>
          <li><a href="https://www.yourdost.com/" target="_blank" rel="noreferrer">YourDOST – Emotional Support</a></li>
          <li><a href="https://www.nimhans.ac.in/" target="_blank" rel="noreferrer">NIMHANS – Mental Health Center</a></li>
          <li><a href="https://www.who.int/mental_health/en/" target="_blank" rel="noreferrer">WHO – Mental Health Resources</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MentalWellness;
