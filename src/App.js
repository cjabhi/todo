import React, { useState, useEffect } from 'react';
import './App.css';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';

function App() {
  const initialPendingTasks = localStorage.getItem("pendingTasks") ? JSON.parse(localStorage.getItem("pendingTasks")) : [];
  const initialInProgressTasks = localStorage.getItem("inProgressTasks") ? JSON.parse(localStorage.getItem("inProgressTasks")) : [];
  const initialCompletedTasks = localStorage.getItem("completedTasks") ? JSON.parse(localStorage.getItem("completedTasks")) : [];

  const [pendingTasks, setPendingTasks] = useState(initialPendingTasks);
  const [inProgressTasks, setInProgressTasks] = useState(initialInProgressTasks);
  const [completedTasks, setCompletedTasks] = useState(initialCompletedTasks);

  const [activetask, setActivetask] = useState(null);
  const [from_sect, setFrom_sect] = useState(1);

  useEffect(() => {
    localStorage.setItem("pendingTasks", JSON.stringify(pendingTasks));
  }, [pendingTasks]);

  useEffect(() => {
    localStorage.setItem("inProgressTasks", JSON.stringify(inProgressTasks));
  }, [inProgressTasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  const addTask = (newTask) => {
    const updatedTasks = [...pendingTasks, newTask];
    setPendingTasks(updatedTasks);
  };

  const startTask = (task) => {
    setInProgressTasks([...inProgressTasks, task]);
    setPendingTasks(pendingTasks.filter(t => t !== task));
  };

  const completeTask = (task) => {
    const completedTask = {
      ...task,
      completionDate: new Date().toLocaleString('en-GB', { hour12: false })
    };
    setCompletedTasks([...completedTasks, completedTask]);
    setInProgressTasks(inProgressTasks.filter(t => t !== task));
  };

  const deleteTask = (task) => {
    setPendingTasks(pendingTasks.filter(t => t !== task));
  };

  const onDrop = (stat, position) => {
    console.log(`${activetask} is going to place into ${stat} and at the position ${position}`);
    let lc = stat.substring(stat.length - 1);
    lc = parseInt(lc);
    if (activetask == null || activetask == undefined || from_sect === 3 || from_sect == lc) return;
    
    let taskTomove = {};
    if (from_sect == 1) {
      taskTomove = pendingTasks[activetask];
      const updated = pendingTasks.filter((task, index) => index !== activetask);
      setPendingTasks(updated);
      
    } else if (from_sect == 2) {
      taskTomove = inProgressTasks[activetask];
      const updated = inProgressTasks.filter((task, index) => index !== activetask);
      setInProgressTasks(updated);
    }

    if (stat === 'section1') {
      console.log(taskTomove);
      const upend_tasks = [...pendingTasks];
      upend_tasks.splice(position, 0, { ...taskTomove });
      console.log(from_sect);
      setPendingTasks(upend_tasks);
    }
    else if (stat === 'section2') {
      console.log(taskTomove);
      const upend_tasks = [...inProgressTasks];
      upend_tasks.splice(position, 0, { ...taskTomove });
      console.log(from_sect);
      setInProgressTasks(upend_tasks);
    } else if (stat === 'section3') {
      console.log(taskTomove);
      const ucomp_tasks = [...completedTasks];
      taskTomove = {
        ...taskTomove,
        completionDate: new Date().toLocaleString('en-GB', { hour12: false })
      };
      ucomp_tasks.splice(position, 0, { ...taskTomove });
      console.log(from_sect);
      setCompletedTasks(ucomp_tasks);


    } else {
      taskTomove = completeTask[activetask];
      return;
    }
  };

  return (
    <>
    <h1 id='heading'>
      hey ! welcome to the Green Stitch's TODO app
    </h1>
    <div className="container">
      <Section1 stat={'section1'} tasks={pendingTasks} addTask={addTask} startTask={startTask} deleteTask={deleteTask} setActivetask={setActivetask} onDrop={onDrop} setFrom_sect={setFrom_sect} />
      <Section2 stat={'section2'} tasks={inProgressTasks} completeTask={completeTask} setActivetask={setActivetask} onDrop={onDrop} setFrom_sect={setFrom_sect} />
      <Section3 stat={'section3'} tasks={completedTasks} setActivetask={setActivetask} onDrop={onDrop} setFrom_sect={setFrom_sect} />
    </div>
    </>
  );
}

export default App;
