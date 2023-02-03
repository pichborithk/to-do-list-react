import React from 'react';
import Task from './Task';

const TasksList = ({ tasks, onClickDelete, onToggleDone }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task
          task={task}
          key={index}
          index={index}
          onClickDelete={onClickDelete}
          onToggleDone={onToggleDone}
        />
      ))}
    </ul>
  );
};

export default TasksList;
