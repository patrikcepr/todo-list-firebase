import React from 'react';

import Task from './Task';
import DeleteButton from '../UI/Button/DeleteButton';

import styled from 'styled-components';

import deleteImage from '../../assets/delete.png';

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 4rem;
`;

const Icon = styled.div`
  height: 25px;
  width: 15px;
  padding: 0;
  color: brown;
`;

const IconImage = styled.img`
  height: 100%;
  padding: 0;
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
        <DeleteButton onClick={props.onDelete.bind(null, id)}>
          <Icon>
            <IconImage src={deleteImage} />
          </Icon>
        </DeleteButton>
      </Task>
    );
  });

  return <Ul>{tasks}</Ul>;
};

export default ListTasks;
