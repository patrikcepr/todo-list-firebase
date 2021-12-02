import DeleteButton from '../UI/Button/DeleteButton';
import CompletedButton from '../UI/Button/CompletedButton';
import UpdateButton from '../UI/Button/UpdateTaskButton';

import styled, { keyframes } from 'styled-components';

const moveInTopRot = keyframes`
  0% {
    opacity: 0.1;
    transform: translateY(-50px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
  }
  
  50% {
    opacity: 0.4;
    transform: rotateX(0.5turn);
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.2); 
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2); 
  }
`;

const Task = styled.li`
  color: ${(props) => (props.complete ? 'darkgrey' : 'brown')};
  background-color: ${(props) => (props.complete ? 'green' : 'burlywood')};
  opacity: ${(props) => (props.complete ? 0.5 : 1)};
  padding: 1.3rem;
  margin: 1rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  border-radius: 4px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  animation: ${moveInTopRot} 1.2s;
  transition: all 0.3s ease-out;

  &:hover ${DeleteButton} {
    visibility: visible;
    opacity: 0.7;
  }
  &:hover ${CompletedButton} {
    visibility: visible;
    opacity: 0.7;
  }
  &:hover ${UpdateButton} {
    visibility: visible;
    opacity: 0.7;
  }
`;

export default Task;
