import styled from 'styled-components';
import { rotate } from '../Animations/Animations';

const UpdateButton = styled.div`
  border: none;
  animation: ${(props) => (props.animation ? rotate : '')} 200ms ease-in-out;
  transition: all 0.2s;
  cursor: pointer;

  @media (min-width: 768px) {
    opacity: ${(props) => (props.visible ? '1' : '0')};
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  }
`;

export default UpdateButton;
