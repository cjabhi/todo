import React, { useState } from 'react';
import Addtask from './Addtask';
import Task from './Task';

const Section1 = ({ tasks, addTask, startTask, deleteTask }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleNewTaskClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (newTask) => {
    addTask(newTask);
    setIsFormVisible(false); // Hide the form after adding the task
  };

  return (
    <div className='section'>
      <h2>Pending Tasks</h2>
      <div className="newtask" onClick={handleNewTaskClick}> + New Task </div>
      <Addtask isVisible={isFormVisible} handleSubmit={handleSubmit} />
      <div className="task-list">
        {tasks.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            onStart={() => startTask(item)}
            onDelete={() => deleteTask(item)}
            isPending={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Section1;
