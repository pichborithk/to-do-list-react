import React from 'react';
import Task from './Task';

const TasksList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task task={task} key={index} index={index} />
      ))}
    </ul>
  );
};

export default TasksList;
