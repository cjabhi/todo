import React, { useState } from 'react';
import Addtask from './Addtask';
import Task from './Task';
import DropArea from './DropArea';

const Section1 = ({ tasks, addTask, startTask, deleteTask ,setActivetask , onDrop , stat , setFrom_sect }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [showdrop , setShowdrop] = useState(false);
  const handleNewTaskClick = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleSubmit = (newTask) => {
    addTask(newTask);
    setIsFormVisible(false); // Hide the form after adding the task
  };

  return (
    <div className='section'>
      <h2 id='pending'>PENDING</h2>
      <div className="newtask" onClick={handleNewTaskClick}> + New Task </div>
      <Addtask isVisible={isFormVisible} handleSubmit={handleSubmit} />
      <div className="task-list">
      <DropArea onDrop = {()=> onDrop(stat , 0)} />
        {tasks.map((item, index) => (
          <React.Fragment key={index}>

            <Task 
              key={index}
              index = {index}
              title={item.title}
              description={item.description}
              onStart={() => startTask(item)}
              onDelete={() => deleteTask(item)}
              isPending={true}
              setActivetask = {setActivetask}
              setFrom_sect = {setFrom_sect}
              setShowdrop = {setShowdrop}
              />
            <DropArea onDrop = {()=> onDrop(stat , index+1)} setShowdrop = {setShowdrop}  showdrop = {showdrop} />
          </React.Fragment>
        ))}
        
      </div>
    </div>
  );
};

export default Section1;