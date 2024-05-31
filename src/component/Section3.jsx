import React from 'react';
import Task from './Task';
import DropArea from './DropArea';


const Section3 = ({ tasks , setActivetask , onDrop , stat , setFrom_sect }) => {
  return (
    <div className='section'>
      <h2 id='complete'>COMPLETED</h2>
      <div className="task-list">
      <DropArea onDrop = {()=> onDrop(stat , 0)} />
        {tasks.map((item, index) => (
          <React.Fragment key={index} >
            
          <Task
            key={index}
            index={index}
            title={item.title}
            description={item.description}
            completionDate={item.completionDate}
            setActivetask={setActivetask}
            setFrom_sect={setFrom_sect}
          />
          <DropArea onDrop = {()=> onDrop(stat , index+1)} />
            </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Section3;