import styled from 'styled-components';

const TaskValue = styled.div`
  width: 65%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  transition: all 1s ease;
`;

export default TaskValue;
