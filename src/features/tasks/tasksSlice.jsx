import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn('Failed to load tasks from local storage', e);
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch (e) {
    console.warn('Failed to save tasks to local storage', e);
  }
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      const newState = [...state, action.payload];
      saveState(newState);
      return newState;
    },
    deleteTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      saveState(newState);
      return newState;
    },
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const existingTask = state.find((task) => task.id === id);
      if (existingTask) {
        existingTask.text = text;
      }
      saveState(state);
    },
    toggleTask: (state, action) => {
      const existingTask = state.find((task) => task.id === action.payload);
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
      saveState(state);
    }
  }
});

export const { addTask, deleteTask, editTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;
