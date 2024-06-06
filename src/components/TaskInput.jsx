import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import { v4 as uuidv4 } from 'uuid';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: uuidv4(), text: task, completed: false }));
      setTask('');
      // Reset the input box height after adding a task
      const textarea = document.getElementById('taskInput');
      if (textarea) {
        textarea.style.height = 'auto';
      }
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
    e.target.style.height = 'auto'; 
    e.target.style.height = `${e.target.scrollHeight}px`; // 
  };

  return (
    <div className="flex mb-4 relative">
      <textarea
        id="taskInput"
        value={task}
        onChange={handleInputChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-800 dark:text-white resize-none overflow-hidden"
        placeholder="Add a new task"
        rows="1" 
        style={{ maxWidth: 'calc(100% - 90px)' }} 
      />
      <button
        onClick={handleAddTask}
        className="absolute bottom-0 right-0 mb-[2.4]  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
