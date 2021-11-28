import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Layout/Header/Header';
import Card from './components/UI/Card/Card';
import InputTasks from './components/Things/InputTasks';
import ListTasks from './components/Things/ListTasks';
import Button from './components/UI/Button/Button';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const addTaskHandler = (task) => {
  //   console.log(task);
  //   setTasks((prevState) => [...prevState, task]);
  //   console.log(tasks);
  // };

  const fetchTasksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://todo-list-firebase-b421c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Something got wrong!');
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const key in data) {
        loadedTasks.push({
          id: key,
          task: data[key].task,
        });
      }

      setTasks(loadedTasks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const addTaskHandler = useCallback(
    async (task) => {
      try {
        const response = await fetch(
          'https://todo-list-firebase-b421c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
          {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Something is wrong!');
        }

        const data = await response.json();
        console.log(data);
        fetchTasksHandler();
      } catch (error) {
        setError(error.message);
      }
    },
    [fetchTasksHandler]
  );

  useEffect(() => {
    fetchTasksHandler();
  }, [addTaskHandler, fetchTasksHandler]);

  const deleteTaskHandler = (id) => {
    console.log(`I want to delete ${id}`);
  };

  let content = <h2>Data is loading....</h2>;

  if (!isLoading && tasks.length > 0) {
    content = <ListTasks tasks={tasks} onDelete={deleteTaskHandler} />;
  }

  if (!isLoading && tasks.length === 0 && !error) {
    content = <h2>No data received</h2>;
  }

  if (error) {
    content = <h2>{error}</h2>;
  }

  return (
    <div className='App'>
      <Header title='Things to Do...' />
      <Card>
        <InputTasks onAddTask={addTaskHandler} />
        <Button onClick={fetchTasksHandler}>Get tasks</Button>
        <section>{content}</section>
      </Card>
    </div>
  );
}

export default App;
