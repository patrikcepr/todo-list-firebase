import React, { useContext } from 'react';
import Header from './components/Layout/Header/Header';
import Card from './components/UI/Card/Card';
import InputTasks from './components/Things/InputTasks';
import ListTasks from './components/Things/ListTasks';
import Modal from './components/UI/Modal/Modal';

import './App.css';

import AppContext from './store/app-context';

//firebase access and crud methods
// import db from './firebaseConfig';
// import {
//   ref,
//   onValue,
//   set,
//   update,
//   remove,
//   get,
//   child,
// } from '@firebase/database';

// import defaultData from './assets/default-data';
// import { themeDefault, themeGreenyGreeny } from './components/UI/Theme/Theme';

function App() {
  const ctx = useContext(AppContext);

  // const [tasks, setTasks] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  // const [taskToEdit, setTaskToEdit] = useState({});
  // const [cardIsAnimated, setCardIsAnimated] = useState(false);

  // const fetchTasksHandler = useCallback(() => {
  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const tasksRef = ref(db, 'tasks');
  //     onValue(tasksRef, (snapshot) => {
  //       const data = snapshot.val();
  //       const loadedTasks = [];

  //       for (const task in data) {
  //         loadedTasks.push({
  //           id: task,
  //           task: data[task].task,
  //           complete: data[task].complete,
  //         });
  //       }

  //       setTasks(loadedTasks);
  //     });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // const addTaskHandler = useCallback(async (task) => {
  //   try {
  //     await set(ref(db, 'tasks/' + task.id), {
  //       task: task.task,
  //       complete: task.complete,
  //     });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }, []);

  // const completeHandler = useCallback(async (id, complete) => {
  //   try {
  //     await update(ref(db, 'tasks/' + id), {
  //       complete: !complete,
  //     });
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // }, []);

  // const showUpdateModalHandler = useCallback(
  //   async (task, id) => {
  //     //fetch the one to update, than show modal
  //     const dbRef = ref(db);
  //     try {
  //       await get(child(dbRef, `tasks/${id}`)).then((snapshot) => {
  //         const task = {
  //           id: id,
  //           task: snapshot.val().task,
  //           complete: snapshot.val().complete,
  //         };
  //         setTaskToEdit(task);
  //         setShowModal(!showModal);
  //       });
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   },
  //   [showModal]
  // );

  // const hideModalHandler = () => {
  //   setShowModal(!showModal);
  // };

  // const updateTaskHandler = useCallback(
  //   async (task) => {
  //     //actually update the task
  //     try {
  //       await update(ref(db, 'tasks/' + task.id), {
  //         task: task.task,
  //       });
  //       setShowModal(!showModal);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   },
  //   [showModal]
  // );

  // const deleteTaskHandler = (id) => {
  //   remove(ref(db, 'tasks/' + id));
  // };

  // const purgeDb = () => remove(ref(db, 'tasks/'));

  // const resetToDefaultTasksHandler = () => {
  //   setCardIsAnimated(true);
  //   purgeDb();
  //   defaultData.map((task) => addTaskHandler(task));
  //   setTimeout(() => {
  //     setCardIsAnimated(false);
  //   }, 600);
  // };

  // useEffect(() => {
  //   fetchTasksHandler();
  // }, [fetchTasksHandler, addTaskHandler]);

  let content = <h2>Data is loading....</h2>;

  if (!ctx.isLoading && ctx.tasks.length > 0) {
    content = (
      <ListTasks
        theme={ctx.theme}
        tasks={ctx.tasks}
        onDelete={ctx.onDelete}
        onChangeComplete={ctx.onChangeComplete}
        onShowTask={ctx.onShowTask}
      />
    );
  }

  if (!ctx.isLoading && ctx.tasks.length === 0 && !ctx.error) {
    content = <h2>No data received</h2>;
  }

  if (ctx.error) {
    content = <h2>{ctx.error}</h2>;
  }

  return (
    <div className='App'>
      <Header title='Things to Do...' />
      <Card theme={ctx.theme} animation={ctx.cardIsAnimated}>
        <InputTasks />
        {content}
      </Card>
      {ctx.showModal && <Modal />}
    </div>
  );
}

export default App;
