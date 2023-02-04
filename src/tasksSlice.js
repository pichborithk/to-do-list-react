import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'Writing', isDone: false },
  { id: '2', name: 'Reading', isDone: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      state.splice(action.payload.index, 1);
    },
  },
});

export const { taskAdded } = tasksSlice.actions;
export const { deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
