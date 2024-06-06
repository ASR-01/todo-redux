import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';

/**
 * Configure and create the Redux store.
 * 
 * This store will manage the state of the application, including tasks.
 * We use the `configureStore` function from Redux Toolkit to simplify
 * the store setup and integrate Redux DevTools and middleware by default.
 */
export const store = configureStore({
  // The `reducer` object defines the top-level state fields,
  // where `tasks` is managed by the `tasksReducer`.
  reducer: {
    tasks: tasksReducer,
  },
});
