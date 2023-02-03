import React from 'react';
import Task from './Task';

const TasksList = ({ tasks, onClickDelete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          task={task}
          key={index}
          index={index}
          onClickDelete={onClickDelete}
        />
      ))}
    </ul>
  );
};

export default TasksList;
