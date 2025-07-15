import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './JournalList.css';

function JournalList() {
  const [entries, setEntries] = useState([]);

  const fetchEntries = async () => {
    try {
      const res = await axios.get('/api/journal');
      setEntries(res.data);
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Failed to fetch journal entries.', 'error');
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to recover this journal entry!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`/api/journal/${id}`);
        await fetchEntries();
        Swal.fire('Deleted!', 'Your entry has been deleted.', 'success');
      } catch (err) {
        console.error(err);
        Swal.fire('Error', 'Failed to delete entry.', 'error');
      }
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  useEffect(() => {
    document.body.classList.add('list-page');
    return () => document.body.classList.remove('list-page');
  }, []);

  return (
    <div className="journal-list-container">
      <h2 className="journal-list-title">Journal Entries</h2>
      {entries.length === 0 ? (
        <p className="no-entries-message">No journal entries yet.</p>
      ) : (
        entries.map(entry => (
          <div key={entry._id} className="journal-card">
            <h3 className="journal-card-title">{entry.title}</h3>
            <p className="journal-card-content">{entry.content}</p>
            <p className="journal-card-category">
              <strong>Category:</strong> {entry.category}
            </p>
            <p className="journal-card-date">
              <small>{new Date(entry.createdAt).toLocaleString()}</small>
            </p>
            <button
              onClick={() => handleDelete(entry._id)}
              className="journal-card-delete-btn"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default JournalList;
