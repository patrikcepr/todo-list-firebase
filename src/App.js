import React, { useContext } from 'react';
import Header from './components/Layout/Header/Header';
import Card from './components/UI/Card/Card';
import InputTasks from './components/Things/InputTasks';
import ListTasks from './components/Things/ListTasks';
import Modal from './components/UI/Modal/Modal';

import { logEvent } from '@firebase/analytics';
import { analytics } from './firebaseConfig';

import './App.css';

import AppContext from './store/app-context';

function App() {
  logEvent(analytics);

  const ctx = useContext(AppContext);

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
      <Card animation={ctx.cardIsAnimated}>
        <InputTasks />
        {content}
      </Card>
      {ctx.showModal && <Modal />}
    </div>
  );
}

export default App;
