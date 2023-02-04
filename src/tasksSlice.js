import { createSlice } from '@reduxjs/toolkit';

// const initialState = [
//   { id: '1', name: 'Writing', isDone: false },
//   { id: '2', name: 'Reading', isDone: false },
// ];

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded(state, action) {
      state.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask(state, action) {
      state.splice(action.payload.index, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    toggleDone(state, action) {
      state[action.payload.index].isDone = !state[action.payload.index].isDone;
      localStorage.setItem('tasks', JSON.stringify(state));
    },
  },
});

export const { taskAdded, deleteTask, toggleDone } = tasksSlice.actions;

export default tasksSlice.reducer;
