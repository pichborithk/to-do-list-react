import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { deleteTask } from '../tasksSlice';

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks);

  const onDeleteClicked = (event) => {
    const index = event.target.dataset.index;
    console.log(index);
    dispatch(deleteTask({ index }));
  };

  const renderTasks = tasks.map((task, index) => {
    return (
      <li key={index}>
        <label htmlFor={`task-${index}`}>{task.name}</label>
        <div>
          <input
            type='checkbox'
            id={`task-${index}`}
            data-index={index}
            defaultChecked={task.isDone}
            // onClick={onToggleDone}
          />
          <button data-index={index} onClick={onDeleteClicked}>
            Delete
          </button>
        </div>
      </li>
    );
  });
  return <ul>{renderTasks}</ul>;
};

export default TasksList;
