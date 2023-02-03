import React from 'react';

const InputBox = ({ onInputChange, onSubmitAdd }) => {
  return (
    <form className='input-box' onSubmit={(event) => onSubmitAdd(event)}>
      <input
        type='text'
        name='task'
        placeholder='Add a Task'
        required
        onChange={onInputChange}
      />
      <input type='submit' value='+ Add' />
    </form>
  );
};

export default InputBox;
