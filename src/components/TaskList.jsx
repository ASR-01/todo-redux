import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
/**
 * TaskList Component
 * 
 * This component is responsible for rendering the list of tasks.
 * It uses the `useSelector` hook to access the tasks from the Redux store.
 */

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
