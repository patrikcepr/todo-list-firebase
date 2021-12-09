import React, { useContext } from 'react';

import Task from './Task';
import UpdateButton from '../UI/Button/UpdateButton';
import Icon from '../UI/Icon/Icon';
import IconImage from '../UI/Icon/IconImage';
import Controls from '../UI/Button/Controls';

import AppContext from '../../store/app-context';

import styled from 'styled-components';

import deleteImage from '../../assets/delete.png';
import checkedImageOff from '../../assets/check_off.png';
import checkedImageOn from '../../assets/check_on.png';
import editImage from '../../assets/editing.png';

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ListTasks = (props) => {
  const ctx = useContext(AppContext);
  // const reversedTasks = [...props.tasks].reverse();
  const tasks = props.tasks.map(({ task, id, complete }) => {
    return (
      <Task key={id} complete={complete} theme={ctx.theme}>
        <Flex>
          {task}
          <Controls>
            <UpdateButton
              visible={complete}
              onClick={ctx.onChangeComplete.bind(null, id, complete)}
            >
              <Icon>
                <IconImage
                  theme={ctx.theme}
                  src={complete ? checkedImageOn : checkedImageOff}
                  alt='Completed'
                />
              </Icon>
            </UpdateButton>
            <UpdateButton onClick={ctx.onShowTask.bind(null, task, id)}>
              <Icon>
                <IconImage theme={ctx.theme} src={editImage} alt='Edit' />
              </Icon>
            </UpdateButton>
            <UpdateButton onClick={ctx.onDelete.bind(null, id)}>
              <Icon>
                <IconImage theme={ctx.theme} src={deleteImage} alt='Delete' />
              </Icon>
            </UpdateButton>
          </Controls>
        </Flex>
      </Task>
    );
  });

  return <List>{tasks}</List>;
};

export default ListTasks;
