/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompleted } from '../features/tasks/tasksSlice';

/**
 * TaskItem Component
 * 
 * This component represents an individual task item.
 * It displays the task text and provides options to mark it as completed or delete it.
 * 
 * Props:
 * - task: The task object containing id, text, and completed status.
 */
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  // Function to handle deleting a task
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  // Function to handle toggling the completed status of a task
  const handleToggleCompleted = () => {
    dispatch(toggleTaskCompleted(task.id));
  };

  return (
    <div className="flex items-center justify-between p-2 my-2 border rounded dark:bg-gray-800 dark:text-white">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompleted}
          className="mr-2"
        />
        <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
