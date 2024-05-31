import React from 'react';
import Task from './Task';


const Section3 = ({ tasks }) => {
  return (
    <div className='section'>
      <h2>Completed</h2>
      <div className="task-list">
        {tasks.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            completionDate={item.completionDate}
          />
        ))}
      </div>
    </div>
  );
};

export default Section3;
