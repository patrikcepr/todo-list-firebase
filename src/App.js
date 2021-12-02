import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Layout/Header/Header';
import Card from './components/UI/Card/Card';
import InputTasks from './components/Things/InputTasks';
import ListTasks from './components/Things/ListTasks';
import Modal from './components/UI/Modal/Modal';
import './App.css';

//firebase access and crud methods
import db from './firebaseConfig';
import {
  ref,
  onValue,
  set,
  update,
  remove,
  get,
  child,
} from '@firebase/database';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});

  const fetchTasksHandler = useCallback(() => {
    setIsLoading(true);
    setError(null);

    try {
      const tasksRef = ref(db, 'tasks');
      onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        const loadedTasks = [];

        for (const key in data) {
          loadedTasks.push({
            id: key,
            task: data[key].task,
            complete: data[key].complete,
          });
        }

        setTasks(loadedTasks);
      });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const addTaskHandler = useCallback(async (task) => {
    try {
      await set(ref(db, 'tasks/' + task.id), {
        task: task.task,
        complete: task.complete,
      });
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const completeHandler = useCallback(async (id, complete) => {
    try {
      await update(ref(db, 'tasks/' + id), {
        complete: !complete,
      });
    } catch (error) {
      setError(error.message);
    }
  }, []);

  const updateTaskShowHandler = useCallback(
    async (task, id) => {
      //show modal, than fetch the one to update in modal
      const dbRef = ref(db);
      try {
        await get(child(dbRef, `tasks/${id}`)).then((snapshot) => {
          const task = {
            id: id,
            task: snapshot.val().task,
            complete: snapshot.val().complete,
          };
          setTaskToEdit(task);
          setShowModal(!showModal);
        });
      } catch (error) {
        setError(error.message);
      }
    },
    [showModal]
  );

  const hideModalHandler = () => {
    setShowModal(!showModal);
  };

  const updateTaskHandler = useCallback(
    async (task) => {
      //actually update the task
      try {
        await update(ref(db, 'tasks/' + task.id), {
          task: task.task,
        });
        setShowModal(!showModal);
      } catch (error) {
        setError(error.message);
      }
    },
    [showModal]
  );

  const deleteTaskHandler = (id) => {
    remove(ref(db, 'tasks/' + id));
  };

  useEffect(() => {
    fetchTasksHandler();
  }, [fetchTasksHandler, addTaskHandler]);

  let content = <h2>Data is loading....</h2>;

  if (!isLoading && tasks.length > 0) {
    content = (
      <ListTasks
        tasks={tasks}
        onDelete={deleteTaskHandler}
        onChangeComplete={completeHandler}
        onShowTask={updateTaskShowHandler}
      />
    );
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
        <InputTasks tasks={tasks} onAddTask={addTaskHandler} />
        {content}
      </Card>
      {showModal && (
        <Modal
          onUpdateTask={updateTaskHandler}
          taskToEdit={taskToEdit}
          onHideModal={hideModalHandler}
        />
      )}
    </div>
  );
}

export default App;
