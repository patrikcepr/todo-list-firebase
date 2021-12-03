import React from 'react';

import Task from './Task';
import UpdateButton from '../UI/Button/UpdateButton';

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
  height: 20px;
  padding: 0;
  padding-right: 0.5rem;
`;

const IconImage = styled.img`
  height: 100%;
  padding: 0;
  filter: invert(23%) sepia(17%) saturate(6064%) hue-rotate(337deg)
    brightness(101%) contrast(93%);
`;

const Controls = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const ListTasks = (props) => {
  // const reversedTasks = [...props.tasks].reverse();
  const tasks = props.tasks.map(({ task, id, complete }) => {
    return (
      <Task key={id} complete={complete}>
        {task}
        <Controls>
          <UpdateButton onClick={props.onShowTask.bind(null, task, id)}>
            <Icon>
              <IconImage src={editImage} alt='Edit' />
            </Icon>
          </UpdateButton>
          <UpdateButton
            complete={complete}
            onClick={props.onChangeComplete.bind(null, id, complete)}
          >
            <Icon complete={complete}>
              <IconImage
                src={complete ? checkedImageOn : checkedImageOff}
                alt='Completed'
              />
            </Icon>
          </UpdateButton>
          <UpdateButton onClick={props.onDelete.bind(null, id)}>
            <Icon>
              <IconImage src={deleteImage} alt='Delete' />
            </Icon>
          </UpdateButton>
        </Controls>
      </Task>
    );
  });

  return <Ul>{tasks}</Ul>;
};

export default ListTasks;
