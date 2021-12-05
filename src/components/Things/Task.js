import UpdateButton from '../UI/Button/UpdateButton';

import styled from 'styled-components';

import theme from '../UI/Theme/Theme';

import { moveInTopRot } from '../UI/Animations/Animations';

const Task = styled.li`
  color: ${(props) => (props.complete ? theme.secondaryDark : theme.text)};
  background-color: ${(props) =>
    props.complete ? theme.secondaryLight : theme.primary};
  opacity: ${(props) => (props.complete ? 0.75 : 1)};
  padding: 1.3rem;
  margin: 1.5rem 0;
  font-size: 1.1rem;
  text-align: left;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  border-radius: 4px;
  box-shadow: 0 10px 20px ${theme.transparentBackgroundLight};
  display: flex;
  justify-content: space-between;
  animation: ${moveInTopRot} 1.2s;
  transition: all 0.3s ease-out;

  &:hover ${UpdateButton} {
    visibility: visible;
    opacity: 0.9;
  }
`;

export default Task;
