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
  // const onMouseOverHandler = (id) => {
  //   console.log(id);
  // };

  // const reversedTasks = [...props.tasks].reverse();
  const tasks = props.tasks.map(({ task, id }) => {
    return (
      <Task
        key={id}
        // onMouseOver={onMouseOverHandler.bind(null, id)}
      >
        {task}
        <DeleteButton onClick={props.onDelete.bind(null, id)}>X</DeleteButton>
      </Task>
    );
  });

  return <Ul>{tasks}</Ul>;
};

export default ListTasks;
