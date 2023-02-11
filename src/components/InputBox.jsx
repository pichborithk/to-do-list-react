import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { taskAdded } from '../tasksSlice';

const InputBox = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    setTask(event.target.value);
    console.log(task);
  };

  const onSubmitAdd = (event) => {
    event.preventDefault();
    if (task) {
      dispatch(taskAdded({ id: nanoid(), name: task, isDone: false }));
    }
    setTask('');
    event.target.reset();
  };

  return (
    <form className='input-box' onSubmit={onSubmitAdd}>
      <input
        type='text'
        name='task'
        placeholder='Add a Task'
        required
        onChange={onInputChange}
      />
      <input className='submit' type='submit' value='+ Add' />
    </form>
  );
};

export default InputBox;
