import { createSlice } from "@reduxjs/toolkit";

/**
 * Loads the persisted tasks state from local storage.
 *
 * returns The array of tasks, or an empty array if loading fails.
 */
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (e) {
    console.warn("Failed to load tasks from local storage", e);
    return [];
  }
};

/**
 * Saves the tasks state to local storage.
 *
 * Array state - The array of tasks to be saved.
 */
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasks", serializedState);
  } catch (e) {
    console.warn("Failed to save tasks to local storage", e);
  }
};

// Define the initial state using the persisted tasks state
const initialState = loadState();

// Create a slice for tasks with add, delete, edit, and toggle actions
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    /**
     * Adds a new task to the state.
     *
     *  state - The current state of tasks.
     * action - The action containing the new task to add.
     *  The new state with the added task.
     */
    addTask: (state, action) => {
      const newState = [...state, action.payload];
      saveState(newState);
      return newState;
    },
    /**
     * Deletes a task from the state.
     *
     * state - The current state of tasks.
     *  action - The action containing the id of the task to delete.
     * The new state without the deleted task.
     */
    deleteTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      saveState(newState);
      return newState;
    },
    /**
     * Edits an existing task's text.
     *
     * state - The current state of tasks.
     * action - The action containing the id and new text of the task to edit.
     */
    editTask: (state, action) => {
      const { id, text } = action.payload;
      const existingTask = state.find((task) => task.id === id);
      if (existingTask) {
        existingTask.text = text;
      }
      saveState(state);
    },
    /**
     * Toggles the completed status of a task.
     *
     * state - The current state of tasks.
     *  action - The action containing the id of the task to toggle.
     */
    toggleTask: (state, action) => {
      const existingTask = state.find((task) => task.id === action.payload);
      if (existingTask) {
        existingTask.completed = !existingTask.completed;
      }
      saveState(state);
    },
  },
});

// Export the action creators for use in components
export const { addTask, deleteTask, editTask, toggleTask } = tasksSlice.actions;

// Export the reducer to be used in the store configuration
export default tasksSlice.reducer;
