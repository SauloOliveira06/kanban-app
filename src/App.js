import { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { TaskList } from './components/TaskList/TaskList';

let idAcc = 0;
const generatedId = () => {
  idAcc = idAcc + 1;
  return idAcc;
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generatedId(),
      title,
      state
    };
    setTasks((existingTask) => {
      return [...existingTask, newTask]
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  const updateTask = (id, title, state) => {
    console.log("update task sendo chamada");
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList
          title="Pendente"
          taskState="Pendente"
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          tasks={tasks.filter((t) => t.state === "Pendente")}
          onTaskUpdate={updateTask} />
        <TaskList
          title="Fazendo"
          taskState="Fazendo"
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          tasks={tasks.filter((t) => t.state === "Fazendo")}
          onTaskUpdate={updateTask} />
        <TaskList
          title="Completa"
          taskState="Completa"
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          tasks={tasks.filter((t) =>
            t.state === "Completa")}
          onTaskUpdate={updateTask} />
      </div>
    </div>
  );
}

export default App;
