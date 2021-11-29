import styled from 'styled-components';

const CompletedButton = styled.div`
  padding-right: 1rem;
  border: none;
  opacity: ${(props) => (props.complete ? '1' : '0')};
  visibility: ${(props) => (props.complete ? 'visible' : 'hidden')};
  display: block;
  transition: all 0.2s;
  cursor: pointer;
`;

export default CompletedButton;
