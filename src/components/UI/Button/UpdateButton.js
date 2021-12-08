import styled from 'styled-components';
import { rotate } from '../Animations/Animations';

const UpdateButton = styled.div`
  border: none;
  opacity: ${(props) => (props.complete ? '1' : '0')};
  visibility: ${(props) => (props.complete ? 'visible' : 'hidden')};
  animation: ${(props) => (props.animation ? rotate : '')} 200ms ease-in-out;
  transition: all 0.2s;
  cursor: pointer;
`;

export default UpdateButton;
