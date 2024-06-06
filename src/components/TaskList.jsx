import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

/**
 * TaskList Component
 * 
 * This component is responsible for rendering the list of tasks.
 * It uses the `useSelector` hook to access the tasks from the Redux store.
 */
const TaskList = () => {
  // Select tasks from the Redux store state
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.map((task) => (
        // Render each task using the TaskItem component
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
