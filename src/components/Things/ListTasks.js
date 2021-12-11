import React, { useContext } from 'react';

import Toolbar from '../UI/Toolbar/Toolbar';
import TaskValue from './TaskValue';
import Flex from '../UI/Flex/Flex';

import Task from './Task';
// import UpdateButton from '../UI/Button/UpdateButton';
// import Icon from '../UI/Icon/Icon';
// import IconImage from '../UI/Icon/IconImage';
// import Controls from '../UI/Button/Controls';

import AppContext from '../../store/app-context';

import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 0;

  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ListTasks = (props) => {
  const ctx = useContext(AppContext);
  const tasks = props.tasks.map(({ task, id, complete }) => {
    return (
      <Task key={id} complete={complete} theme={ctx.theme}>
        <Flex>
          <TaskValue>{task}</TaskValue>
          <Toolbar task={task} id={id} complete={complete} />
        </Flex>
      </Task>
    );
  });

  return <List>{tasks}</List>;
};

export default ListTasks;
