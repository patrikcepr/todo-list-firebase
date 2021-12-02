import React from 'react';

import Task from './Task';
import DeleteButton from '../UI/Button/DeleteButton';
import CompletedButton from '../UI/Button/CompletedButton';
import UpdateTaskButton from '../UI/Button/UpdateTaskButton';

import styled from 'styled-components';

import deleteImage from '../../assets/delete.png';
import checkedImageOff from '../../assets/check_off.png';
import checkedImageOn from '../../assets/check_on.png';
import editImage from '../../assets/editing.png';

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 3rem;
`;

const Icon = styled.div`
  height: 22px;
  padding: 0;
  padding-right: 0.6rem;
`;

const IconImage = styled.img`
  height: 100%;
  padding: 0;
`;

const Controls = styled.div`
  display: flex;
  gap: 0.3rem;
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
          <UpdateTaskButton onClick={props.onShowTask.bind(null, task, id)}>
            <Icon>
              <IconImage src={editImage} alt='Edit' />
            </Icon>
          </UpdateTaskButton>
          <CompletedButton
            complete={complete}
            onClick={props.onChangeComplete.bind(null, id, complete)}
          >
            <Icon complete={complete}>
              <IconImage
                src={complete ? checkedImageOn : checkedImageOff}
                alt='Completed'
              />
            </Icon>
          </CompletedButton>
          <DeleteButton onClick={props.onDelete.bind(null, id)}>
            <Icon>
              <IconImage src={deleteImage} alt='Delete' />
            </Icon>
          </DeleteButton>
        </Controls>
      </Task>
    );
  });

  return <Ul>{tasks}</Ul>;
};

export default ListTasks;
