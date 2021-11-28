import React, { useRef } from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
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
      task: taskRef.current.value,
      id: Math.random().toString(),
    };

    props.onAddTask(task);
    console.log(task);

    taskRef.current.value = '';
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input ref={taskRef} placeholder='Add new task' required />
      <Button>Add New Task</Button>
    </Form>
  );
};

export default InputTasks;
