import React from 'react';

const Task = ({ task, index }) => {
  return (
    <li>
      <label htmlFor={`task-${index}`}>{task.task}</label>
      <div>
        <input type='checkbox' id={`task-${index}`} />
        <button>Delete</button>
      </div>
    </li>
  );
};

export default Task;
