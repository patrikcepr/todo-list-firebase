import styled from 'styled-components';

const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-self: flex-end;
  background-color: #0004;
  border-radius: 0.5rem;
  padding: 0.5rem;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};

  @media (min-width: 1024px) {
    margin-left: 1rem;
    align-self: flex-end;
  }
`;

export default Controls;
