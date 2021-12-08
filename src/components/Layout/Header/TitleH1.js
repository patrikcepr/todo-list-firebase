import styled from 'styled-components';

import { shadows } from '../../UI/Animations/Animations';

const TitleH1 = styled.h1`
  position: relative;
  overflow: hidden;
  padding: 1rem 0;
  margin-top: 0;
  color: ${(props) => props.theme.text};
  z-index: 5;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  &::after {
    /* content: '${(props) => (props.title ? props.title : '')}'; */
    content: 'In Shadows';
    width: 100%;
    height: 100%;
    z-index: -1;
    display: inline-block;
    color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    border-radius: 4px;
    position: absolute;
    top: 1rem;
    left: 5rem;
    transform: translateX(3rem);
    animation: ${(props) => (props.animation ? shadows : '')} 1.5s ease-in-out
      0.1s;
    @media (max-width: 768px) {
      left: -3rem;
    }
  }
`;

export default TitleH1;
