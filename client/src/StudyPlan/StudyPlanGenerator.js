import React, { useState,useEffect } from 'react';
import { SUBJECTS, GOALS } from './subjects';
import { downloadPlanAsPDF } from './utils/pdfExport';
import Swal from 'sweetalert2';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './StudyPlan.css';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const StudyPlanGenerator = () => {
  const [entry, setEntry] = useState({ subject: '', goal: '', day: '', time: '' });
  const [studyPlan, setStudyPlan] = useState(
    Object.fromEntries(daysOfWeek.map(day => [day, []]))
  );

  const addEntry = () => {
    const { subject, goal, day, time } = entry;
    if (!subject || !goal || !day || !time) {
      Swal.fire('⚠️ Please fill all fields!');
      return;
    }
    setStudyPlan(prev => ({
      ...prev,
      [day]: [...prev[day], { subject, goal, time }]
    }));
    setEntry({ subject: '', goal: '', day: '', time: '' });
  };

  const resetPlan = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your current plan will be deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        setStudyPlan(Object.fromEntries(daysOfWeek.map(day => [day, []])));
        Swal.fire('Deleted!', 'Your study plan has been cleared.', 'success');
      }
    });
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceItems = Array.from(studyPlan[source.droppableId]);
    const [moved] = sourceItems.splice(source.index, 1);

    const destItems = Array.from(studyPlan[destination.droppableId]);
    destItems.splice(destination.index, 0, moved);

    setStudyPlan(prev => ({
      ...prev,
      [source.droppableId]: sourceItems,
      [destination.droppableId]: destItems
    }));
  };
  useEffect(() => {
      document.body.classList.add('studyplan');
      return () => {
        document.body.classList.remove('studyplan');
      };
    }, []);

  return (
    <div className="study-plan-container">
      <h2>📅 Study Plan Generator</h2>

      <p style={{ color: 'red', fontWeight: 'bold', marginBottom: '15px' }}>
        ⚠️ Note: This system does not save your schedule. If you refresh the page, your study plan will be lost.
        Please download and save your timetable immediately after creating it.
      </p>

      <div className="form-row">
        <select value={entry.subject} onChange={e => setEntry({ ...entry, subject: e.target.value })}>
          <option value="">Select Subject</option>
          {SUBJECTS.map((s, i) => <option key={i}>{s}</option>)}
        </select>

        <select value={entry.goal} onChange={e => setEntry({ ...entry, goal: e.target.value })}>
          <option value="">Select Goal</option>
          {GOALS.map((g, i) => <option key={i}>{g}</option>)}
        </select>

        <input
          type="text"
          className="time1"
          placeholder="Time (e.g. 5–6 PM)"
          value={entry.time}
          onChange={e => setEntry({ ...entry, time: e.target.value })}
        />

        <select value={entry.day} onChange={e => setEntry({ ...entry, day: e.target.value })}>
          <option value="">Select Day</option>
          {daysOfWeek.map((d, i) => <option key={i}>{d}</option>)}
        </select>

        <button onClick={addEntry}>Add Task</button>
      </div>

      <div className="action-buttons">
        <button onClick={resetPlan} className="danger">❌ Delete Plan</button>
        <button onClick={() => downloadPlanAsPDF(studyPlan)}>Download PDF</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="plan-grid">
          {daysOfWeek.map(day => (
            <Droppable
              key={day}
              droppableId={day}
              isDropDisabled={false}
              isCombineEnabled={false}
            >
              {(provided) => (
                <div className="day-column" ref={provided.innerRef} {...provided.droppableProps}>
                  <div className="day-label">{day}</div>
                  {studyPlan[day].map((item, i) => (
                    <Draggable key={`${day}-${i}`} draggableId={`${day}-${i}`} index={i}>
                      {(provided) => (
                        <div
                          className="task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <strong>{item.subject}</strong> - {item.goal} <br />
                          <em>{item.time}</em>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default StudyPlanGenerator;
