import React, { useState } from 'react';


const Addtask = ({ isVisible, handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ title, description });
    setTitle(''); // Clear input fields after form submission
    setDescription('');
  };

  return (
    <div className="add-task-container" style={{ display: isVisible ? 'block' : 'none' }}>
      <h2>Add Task</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Task Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Task Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Addtask;