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
    setPendingTasks(pendingTasks.filter(t => t !== task)); // Remove task from pending tasks
  };

  const completeTask = (task) => {
    const completedTask = {
      ...task,
      completionDate: new Date().toLocaleString('en-GB', { hour12: false }) // Format as dd/mm/yyyy, HH:MM
    };
    setCompletedTasks([...completedTasks, completedTask]);
    setInProgressTasks(inProgressTasks.filter(t => t !== task)); // Remove task from in-progress tasks
  };

  const deleteTask = (task) => {
    setPendingTasks(pendingTasks.filter(t => t !== task)); // Remove task from pending tasks
  };

  return (
    <div className="container">
      <Section1 tasks={pendingTasks} addTask={addTask} startTask={startTask} deleteTask={deleteTask} />
      <Section2 tasks={inProgressTasks} completeTask={completeTask} />
      <Section3 tasks={completedTasks} />
    </div>
  );
}

export default App;
