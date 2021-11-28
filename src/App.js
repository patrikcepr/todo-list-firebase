import React, { useState } from 'react';
import Header from './components/Layout/Header/Header';
import Card from './components/UI/Card/Card';
import InputTasks from './components/Things/InputTasks';
import ListTasks from './components/Things/ListTasks';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  // const deleteTaskHandler = (id) => {
  //   console.log(`I want to delete ${id}`);
  // };

  return (
    <div className='App'>
      <Header title='Things to Do...' />
      <Card>
        <InputTasks onAddTask={addTaskHandler} />
        {tasks.length > 0 && (
          <ListTasks
            tasks={tasks}
            //onDelete={deleteTaskHandler}
          />
        )}
      </Card>
    </div>
  );
}

export default App;
