import React, { useRef } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import styled from 'styled-components';

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
      task: taskRef.current.value,
    };

    props.onAddTask(task);

    taskRef.current.value = '';
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        ref={taskRef}
        placeholder="Let's not forget to do this..."
        required
      />
      {props.tasks.length < 20 && <Button>Add New Task</Button>}
    </Form>
  );
};

export default InputTasks;
