import React, { useRef } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import styled from 'styled-components';

//unique id module
import uuid from 'react-uuid';

const Form = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
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
      {props.tasks.length < 6 && (
        <Input
          ref={taskRef}
          placeholder="Let's not forget to do this..."
          required
        />
      )}
      {props.tasks.length < 6 && <Button>Add New Task</Button>}
    </Form>
  );
};

export default InputTasks;
