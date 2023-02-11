import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { deleteTask, toggleDone } from '../tasksSlice';

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onDeleteClicked = (event) => {
    const index = event.target.dataset.index;
    dispatch(deleteTask({ index }));
  };

  const onCheckClicked = (event) => {
    const index = event.target.dataset.index;
    console.log(index);
    dispatch(toggleDone({ index }));
  };

  const renderTasks = tasks.map((task, index) => {
    return (
      <li key={index}>
        <input
          className='check-box'
          type='checkbox'
          id={`task-${index}`}
          data-index={index}
          defaultChecked={task.isDone}
          onClick={onCheckClicked}
        />
        <label htmlFor={`task-${index}`}>{task.name}</label>
        <button data-index={index} onClick={onDeleteClicked}>
          <i class='fa-solid fa-trash'></i>
        </button>
      </li>
    );
  });
  return <ul>{renderTasks}</ul>;
};

export default TasksList;
