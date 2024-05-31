import React from 'react';

const Task = ({ title, description, onStart, onComplete, onDelete, isPending, completionDate }) => {
  return (
    <div className='task'>
      <div className='task-content'>
        <h3>{title}</h3>
        <p>{description}</p>
        {completionDate && <p className='completion-date'>Completed on: {completionDate}</p>}
      </div>
      <div className='task-actions'>
        {isPending && <button className='start-button' onClick={onStart}>Start</button>}
        {isPending && <button className='delete-button' onClick={onDelete}>✖</button>}
        {!isPending && !completionDate && <button className='complete-button' onClick={onComplete}>Complete</button>}
        {completionDate && <span className='completed-symbol'>✔</span>}
      </div>
    </div>
  );
};

export default Task;
