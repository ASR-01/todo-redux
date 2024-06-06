/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../features/tasks/tasksSlice';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ id: task.id, text: taskText }));
    setIsEditing(false);
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div className={`flex justify-between items-center p-2 mb-2 rounded ${task.completed ? 'bg-green-200 dark:bg-green-700' : 'bg-gray-100 dark:bg-gray-800'}`}>
      <div className="flex items-center w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="flex-1 mr-2 py-1 px-2 border rounded dark:bg-gray-800 dark:text-white"
          />
        ) : (
          <span className={`flex-1 ${task.completed ? 'line-through' : ''} ${task.completed ? 'text-gray-500 dark:text-gray-300' : ''} break-words`}>
            {task.text}
          </span>
        )}
      </div>
      <div className="flex items-center">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="mr-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
