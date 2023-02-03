import React from 'react';

const Task = ({ task, index, onClickDelete, onToggleDone }) => {
  return (
    <li>
      <label htmlFor={`task-${index}`}>{task.name}</label>
      <div>
        <input
          type='checkbox'
          id={`task-${index}`}
          data-index={index}
          defaultChecked={task.done}
          onClick={onToggleDone}
        />
        <button data-index={index} onClick={onClickDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
