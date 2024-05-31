import React from 'react';
import Task from './Task';


const Section2 = ({ tasks, completeTask }) => {
  return (
    <div className='section'>
      <h2>In Progress</h2>
      <div className="task-list">
        {tasks.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            onComplete={() => completeTask(item)}
            isPending={false} // Task is in progress
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;
