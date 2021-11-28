import React from 'react';

import Task from './Task';
import DeleteButton from '../UI/Button/DeleteButton';

import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 4rem;
`;

const ListTasks = (props) => {
  const onMouseOverHandler = (id) => {
    console.log(id);
  };

  const deleteTaskHandler = (id) => {
    console.log(props.tasks);
    console.log(`I want to delete ${id}`);
  };

  // const reversedTasks = [...props.tasks].reverse();
  const tasks = props.tasks.map((item, i) => {
    return (
      <Task
        key={item.id}
        id={item.id}
        onMouseOver={onMouseOverHandler.bind(null, item.id)}
      >
        {(item = item.task)}
        <DeleteButton onClick={deleteTaskHandler.bind(null, props.id)}>
          X
        </DeleteButton>
      </Task>
    );
  });

  return <Ul>{tasks}</Ul>;
};

export default ListTasks;
