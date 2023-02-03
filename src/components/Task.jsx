import React from 'react';

const Task = ({ task, index, onClickDelete }) => {
  return (
    <li>
      <label htmlFor={`task-${index}`}>{task.task}</label>
      <div>
        <input type='checkbox' id={`task-${index}`} />
        <button data-index={index} onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
