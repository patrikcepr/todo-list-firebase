import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Layout/Header/Header';
import Card from './components/UI/Card/Card';
import InputTasks from './components/Things/InputTasks';
import ListTasks from './components/Things/ListTasks';
import './App.css';

//firebase
import db from './util/firebaseConfig';
import { ref, onValue, set, remove } from '@firebase/database';

function App() {
  const [tasks, setTasks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchTasksHandler = useCallback(() => {
    const tasksRef = ref(db, 'tasks');
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      const loadedTasks = [];

      for (const key in data) {
        loadedTasks.push({
          id: key,
          task: data[key].task,
        });
      }

      setTasks(loadedTasks);
    });
  }, []);

  const addTaskHandler = useCallback(async (task) => {
    await set(ref(db, 'tasks/' + task.id), {
      task: task.task,
      complete: task.complete,
    });
  }, []);

  const deleteTaskHandler = (id) => {
    remove(ref(db, 'tasks/' + id));
  };

  // const fetchTasksHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch(
  //       'https://todo-list-firebase-b421c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Fetching got wrong!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const key in data) {
  //       loadedTasks.push({
  //         id: key,
  //         task: data[key].task,
  //       });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // const addTaskHandler = useCallback(
  //   async (task) => {
  //     try {
  //       const response = await fetch(
  //         'https://todo-list-firebase-b421c-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
  //         {
  //           method: 'POST',
  //           body: JSON.stringify(task),
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error('Posting got wrong!');
  //       }

  //       const data = await response.json();
  //       console.log(data);
  //       fetchTasksHandler();
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   },
  //   [fetchTasksHandler]
  // );

  useEffect(() => {
    fetchTasksHandler();
  }, [fetchTasksHandler, addTaskHandler]);

  // let content = <h2>Data is loading....</h2>;

  // if (!isLoading && tasks.length > 0) {
  //   content = <ListTasks tasks={tasks} onDelete={deleteTaskHandler} />;
  // }

  // if (!isLoading && tasks.length === 0 && !error) {
  //   content = <h2>No data received</h2>;
  // }

  // if (error) {
  //   content = <h2>{error}</h2>;
  // }

  return (
    <div className='App'>
      <Header title='Things to Do...' />
      <Card>
        <InputTasks tasks={tasks} onAddTask={addTaskHandler} />
        <ListTasks tasks={tasks} onDelete={deleteTaskHandler} />
      </Card>
    </div>
  );
}

export default App;
