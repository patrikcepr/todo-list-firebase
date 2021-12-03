import React, { useRef, Fragment } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import styled from 'styled-components';

//unique id module
import uuid from 'react-uuid';

const Form = styled.form`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputTasks = (props) => {
  const taskRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const task = {
      id: `${Date.now()}-${uuid()}`,
      task: taskRef.current.value,
      complete: false,
    };

    props.onAddTask(task);

    taskRef.current.value = '';
  };

  return (
    <Form onSubmit={submitHandler}>
      {props.tasks.length < 7 ? (
        <Fragment>
          <Input
            ref={taskRef}
            placeholder="Let's not forget to do this..."
            required
          />
          <Button>Add New Task</Button>
        </Fragment>
      ) : (
        <h2>Only seven tasks are allowed in demo mode.</h2>
      )}
    </Form>
  );
};

export default InputTasks;
