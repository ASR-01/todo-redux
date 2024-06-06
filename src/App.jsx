import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="container mx-auto mr-20 p-4">
      <div className="flex justify-between items-center mb-4 ">
        <h1 className="text-2xl font-bold">To-Do Application</h1>
        <ThemeToggle />
      </div>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
