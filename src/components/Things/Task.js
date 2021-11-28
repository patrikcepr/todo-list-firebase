import DeleteButton from '../UI/Button/DeleteButton';

import styled, { keyframes } from 'styled-components';

const moveInTopRot = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
  }
  
  50% {
    opacity: 0.7;
    transform: rotateX(0.5turn);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2); 
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2); 
  }
`;

const Task = styled.li`
  color: brown;
  background-color: burlywood;
  padding: 1rem;
  margin: 1rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  text-align: left;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  animation: ${moveInTopRot} 1.2s;

  &:hover ${DeleteButton} {
    display: inline-block;
  }
`;

export default Task;
