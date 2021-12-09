import React, { useContext, useRef, Fragment } from 'react';

import Input from '../UI/Input/Input';
import RoundedButton from '../UI/Button/RoundedButton';
// import Form from '../UI/Form/Form';

import AppContext from '../../store/app-context';

import styled from 'styled-components';

//unique id module
import uuid from 'react-uuid';

const Form = styled.form``;

const InputTasks = (props) => {
  const ctx = useContext(AppContext);

  const taskRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const task = {
      id: `${Date.now()}-${uuid()}`,
      task: taskRef.current.value,
      complete: false,
    };

    ctx.onAddTask(task);

    taskRef.current.value = '';
  };

  return (
    <Form onSubmit={submitHandler}>
      {ctx.tasks.length < 10 ? (
        <Fragment>
          <Input
            theme={ctx.theme}
            ref={taskRef}
            placeholder="Let's not forget to do this..."
            rows='3'
            required
          />
          <RoundedButton theme={ctx.theme}>+</RoundedButton>
        </Fragment>
      ) : (
        <h2>Only ten tasks are allowed in demo mode.</h2>
      )}
    </Form>
  );
};

export default InputTasks;
