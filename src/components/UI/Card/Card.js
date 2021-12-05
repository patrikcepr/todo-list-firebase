import styled from 'styled-components';

import { flip } from '../Animations/Animations';

const Card = styled.div`
  padding: 1rem;
  overflow: hidden;
  margin: 2rem auto;
  width: 85%;
  max-width: 550px;
  background-color: khaki;
  border-radius: 4px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  animation: ${(props) => (props.animation ? flip : '')} 1.5s ease-in-out;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export default Card;
