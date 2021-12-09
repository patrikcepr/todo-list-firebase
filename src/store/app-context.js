import React, { createContext, useState, useCallback, useEffect } from 'react';

//firebase access and crud methods
import db from '../firebaseConfig';
import {
  ref,
  onValue,
  set,
  update,
  remove,
  get,
  child,
} from '@firebase/database';

import { themeDefault, themeGreenyGreeny } from '../components/UI/Theme/Theme';
import defaultData from '../assets/default-data';

const AppContext = createContext({
  theme: {},
  onTheme: () => {},
  isAnimated: Boolean,
  onDefault: () => {},
  cardIsAnimated: Boolean,
  tasks: [],
  isLoading: Boolean,
  error: null,
  showModal: Boolean,
  taskToEdit: {},
  onDelete: () => {},
  onAddTask: () => {},
  onChangeComplete: () => {},
  onHideModal: () => {},
  onUpdateTask: () => {},
  onShowTask: () => {},
});

// wrap around app in index.js
export const AppContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState({});
  const [themeSwitch, setThemeSwitch] = useState(true);
  const [isAnimated, setIsAnimated] = useState(false);
  const [cardIsAnimated, setCardIsAnimated] = useState(false);

  const fetchTasksHandler = useCallback(() => {
    setIsLoading(true);
    setError(null);

    try {
      const tasksRef = ref(db, 'tasks');
      onValue(tasksRef, (snapshot) => {
        const data = snapshot.val();
        const loadedTasks = [];

        for (const task in data) {
          loadedTasks.push({
            id: task,
            task: data[task].task,
            complete: data[task].complete,
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

  const showUpdateModalHandler = useCallback(
    async (task, id) => {
      //fetch the one to update, than show modal
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

  const purgeDb = () => remove(ref(db, 'tasks/'));

  const resetToDefaultTasksHandler = () => {
    setCardIsAnimated(true);
    purgeDb();
    defaultData.map((task) => addTaskHandler(task));
    setTimeout(() => {
      setCardIsAnimated(false);
    }, 400);
  };

  const changeThemeHandler = () => {
    setIsAnimated(true);
    setThemeSwitch(!themeSwitch);
    setTimeout(() => {
      setIsAnimated(false);
    }, 200);
  };

  useEffect(() => {
    fetchTasksHandler();
  }, [fetchTasksHandler, addTaskHandler]);

  const appContext = {
    theme: themeSwitch ? themeDefault : themeGreenyGreeny,
    onTheme: changeThemeHandler,
    isAnimated: isAnimated,
    onDefault: resetToDefaultTasksHandler,
    cardIsAnimated: cardIsAnimated,
    tasks: tasks,
    isLoading: isLoading,
    error: error,
    showModal: showModal,
    taskToEdit: taskToEdit,
    onDelete: deleteTaskHandler,
    onAddTask: addTaskHandler,
    onChangeComplete: completeHandler,
    onHideModal: hideModalHandler,
    onUpdateTask: updateTaskHandler,
    onShowTask: showUpdateModalHandler,
  };

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
