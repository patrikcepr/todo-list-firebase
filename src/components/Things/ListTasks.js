import React from 'react';

import Task from './Task';
import DeleteButton from '../UI/Button/DeleteButton';
import CompletedButton from '../UI/Button/CompletedButton';

import styled from 'styled-components';

import deleteImage from '../../assets/delete.png';
import checkedImageOff from '../../assets/check_off.png';
import checkedImageOn from '../../assets/check_on.png';

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 3rem;
`;

const Icon = styled.div`
  height: 25px;
  width: 15px;
  padding: 0;
  padding-right: 1rem;
`;

const IconImage = styled.img`
  height: 100%;
  padding: 0;
`;

const Controls = styled.div`
  display: flex;
`;

const ListTasks = (props) => {
  // const onMouseOverHandler = (id) => {
  //   console.log(id);
  // };

  // const reversedTasks = [...props.tasks].reverse();
  const tasks = props.tasks.map(({ task, id, complete }) => {
    return (
      <Task
        key={id}
        complete={complete}
        // onMouseOver={onMouseOverHandler.bind(null, id)}
      >
        {task}
        <Controls>
          <CompletedButton
            complete={complete}
            onClick={props.onChangeComplete.bind(null, id, complete)}
          >
            <Icon complete={complete}>
              <IconImage src={complete ? checkedImageOn : checkedImageOff} />
            </Icon>
          </CompletedButton>
          <DeleteButton onClick={props.onDelete.bind(null, id)}>
            <Icon>
              <IconImage src={deleteImage} />
            </Icon>
          </DeleteButton>
        </Controls>
      </Task>
    );
  });

  return <Ul>{tasks}</Ul>;
};

export default ListTasks;
