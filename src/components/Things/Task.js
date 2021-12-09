import UpdateButton from '../UI/Button/UpdateButton';
import Controls from '../UI/Button/Controls';

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
  animation: ${moveInTopRot} 1s;
  transition: all 0.3s ease-out;
  @media (min-width: 768px) {
    margin: 0;
    flex: 1;
  }
  @media (min-width: 1024px) {
    max-width: calc(50% - 1rem);
    flex: 2;
  }

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      flex: 3;
    }
  }

  &:hover ${UpdateButton} {
    @media (min-width: 1024px) {
      visibility: visible;
      opacity: 0.9;
    }
  }
  &:hover ${Controls} {
    @media (min-width: 1024px) {
      visibility: visible;
    }
  }
`;

export default Task;
