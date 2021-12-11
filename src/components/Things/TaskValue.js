import styled from 'styled-components';

const TaskValue = styled.div`
  align-self: flex-start;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  transition: all 0.5s ease-in-out;
`;

export default TaskValue;
