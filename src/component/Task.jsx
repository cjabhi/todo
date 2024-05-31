import React, { useEffect } from 'react';

const Task = ({ title, description, onStart, onComplete, onDelete, isPending, completionDate , setActivetask , index , setFrom_sect , setShowdrop}) => {
  return (
    <div className='task' draggable onDragStart={() =>{
      
      setActivetask(index)
      if(isPending)
        setFrom_sect(1);
      else if(completionDate)
        setFrom_sect(3);
      else
        setFrom_sect(2);
    } 
   } 
    onDragEnd={()=>setActivetask(null)} >
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