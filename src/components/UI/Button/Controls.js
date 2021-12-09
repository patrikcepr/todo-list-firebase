import styled from 'styled-components';

const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-self: flex-end;
  background-color: #0004;
  border-radius: 0.5rem;
  padding: 0.5rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
    justify-self: flex-end;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  }
`;

export default Controls;
