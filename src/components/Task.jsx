import React from 'react';

const Task = ({ task, index }) => {
  return (
    <li>
      <label htmlFor={`task-${index}`}>{task.task}</label>
      <input type='checkbox' id={`task-${index}`} />
      <button>Delete</button>
    </li>
  );
};

export default Task;
