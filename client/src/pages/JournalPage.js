import React, { useEffect, useState } from "react";
import JournalEntry from "./JournalEntryForm";
import JournalList from "./JournalList";
import './JournalPage.css';

function JournalPage() {
  const [refresh, setRefresh] = useState(false);

  const refreshList = () => setRefresh(!refresh);

  useEffect(() => {
    // Add a class to the body when this page is loaded
    document.body.classList.add('journal-page-body');

    // Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('journal-page-body');
    };
  }, []);

  return (
    <div className="journal-page-container">
      <div className="journal-entry-section">
        <JournalEntry onEntryAdded={refreshList} />
      </div>
      <div className="journal-list-section">
        <JournalList key={refresh} />
      </div>
    </div>
  );
}

export default JournalPage;
