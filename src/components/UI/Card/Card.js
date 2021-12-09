import styled from 'styled-components';

import { flip } from '../Animations/Animations';

const Card = styled.div`
  padding: 1rem;
  overflow: hidden;
  margin: 1rem auto;
  width: 85%;
  max-width: 550px;
  background-color: ${(props) =>
    props.theme ? props.theme.primaryLight : 'white'};
  border-radius: 4px;
  animation: ${(props) => (props.animation ? flip : '')} 400ms ease-in-out;
  transform-style: preserve-3d;
  backface-visibility: visible;

  @media (min-width: 768px) {
    width: 85%;
    max-width: 1024px;
    padding: 2rem;
  }
`;

export default Card;
