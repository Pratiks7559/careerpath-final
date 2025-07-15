import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JournalEntry.css'; // Link to the external CSS file

function JournalEntry({ onEntryAdded }) {
  const [form, setForm] = useState({ title: '', content: '', category: 'Progress' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.content || !form.category) {
      alert('Please fill all fields.');
      return;
    }

    try {
      await axios.post('/api/journal', form);
      onEntryAdded();
      setForm({ title: '', content: '', category: 'Progress' });
    } catch (err) {
      console.error(err);
      alert('Failed to add journal entry.');
    }
  };

  useEffect(() => {
    // Add a class to the body when this page is loaded
    document.body.classList.add('entry-page');

    // Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('entry-page');
    };
  }, []);

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" 
        rel="stylesheet" 
      />
      <form onSubmit={handleSubmit} className="journal-entry-form">
        <h2 className="journal-form-title">Add Journal Entry</h2>
        
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="journal-input-field"
          required
        />

        <textarea
          name="content"
          placeholder="Content"
          value={form.content}
          onChange={handleChange}
          className="journal-textarea-field"
          required
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="journal-category-select"
          required
        >
          <option value="Progress">Progress</option>
          <option value="Skills">Skills</option>
          <option value="Challenges">Challenges</option>
          <option value="Milestones">Milestones</option>
        </select>

        <button type="submit" className="journal-submit-button">Add Entry</button>
      </form>
    </>
  );
}

export default JournalEntry;
