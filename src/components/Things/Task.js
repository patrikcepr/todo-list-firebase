import UpdateButton from '../UI/Button/UpdateButton';
import Controls from '../UI/Button/Controls';
import Toolbar from '../UI/Toolbar/Toolbar';
import TaskValue from './TaskValue';
import Flex from '../UI/Flex/Flex';

import styled from 'styled-components';

import { moveInTopRot } from '../UI/Animations/Animations';

const Task = styled.li`
  color: ${(props) =>
    props.complete ? props.theme.secondaryDark : props.theme.text};
  background-color: ${(props) =>
    props.complete ? props.theme.secondaryLight : props.theme.primary};
  opacity: ${(props) => (props.complete ? 0.8 : 1)};
  padding: 1.3rem;
  margin: 1rem 0;
  font-size: 1.1rem;
  line-height: 1.7rem;
  text-align: left;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  border-radius: 1rem;
  border: 3px solid white;
  box-shadow: 0 ${(props) => (props.complete ? '0 3px' : '10px 20px')}
    /* ${(props) => (props.complete ? '3px' : '20px')} */
    ${(props) => props.theme.shadow};
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${moveInTopRot} 1s;
  transition: all 0.5s ease-in-out;
  @media (min-width: 768px) {
    margin: 0;
    width: calc(50% - 3.5rem);
    /* flex: 1; */
  }
  @media (min-width: 1024px) {
    width: calc(33% - 3.5rem);
    /* flex: 2; */
  }

  &:hover {
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  &:hover ${Toolbar} {
    visibility: visible;
  }
  &:hover ${UpdateButton} {
    visibility: visible;
    opacity: 0.9;
  }
  &:hover ${Controls} {
    visibility: visible;
  }

  &:hover ${TaskValue} {
    width: 100%;
    transition: all 1s ease;
    display: -webkit-box;
    -webkit-line-clamp: unset;
    -webkit-box-orient: vertical;
  }

  &:hover ${Flex} {
    flex-direction: column;
  }
`;

export default Task;
