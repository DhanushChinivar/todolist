import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { task: newTask, completed: false }]);
    setNewTask('');
    console.log(tasks);
  };

  const deleteTask = (taskToDelete) => {
    const filteredTasks = tasks.filter((task) => task.task !== taskToDelete);
    setTasks(filteredTasks);
  };

  const completeTask = (taskToComplete) => {
    const updatedTasks = tasks.map((task) => {
      if (task.task === taskToComplete) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />
      <ul>
        {tasks.map((task, index) => {
          return (
            <div id="task-item" key={index}>
              <li>
                {task.task} {task.completed && '(Completed)'}
              </li>
              <button onClick={() => completeTask(task.task)}>Complete</button>
              <button onClick={() => deleteTask(task.task)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
