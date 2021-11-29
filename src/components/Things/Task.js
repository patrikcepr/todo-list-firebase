import DeleteButton from '../UI/Button/DeleteButton';
import CompletedButton from '../UI/Button/CompletedButton';

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
  padding: 2rem;
  margin: 1rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;
  text-decoration: ${(props) => (props.complete ? 'line-through' : 'none')};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  animation: ${moveInTopRot} 1.2s;

  &:hover ${DeleteButton} {
    visibility: visible;
    opacity: 0.7;
  }
  &:hover ${CompletedButton} {
    visibility: visible;
    opacity: 0.7;
  }
`;

export default Task;
