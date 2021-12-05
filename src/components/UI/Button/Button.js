import styled from 'styled-components';

import theme from '../Theme/Theme';

import { animatedGradient } from '../Animations/Animations';

const Button = styled.button`
  width: ${(props) => (props.width ? props.width : '60%')};
  color: ${theme.text};
  background-color: ${theme.transparentBackgroundLight};
  padding: 1rem 2rem;
  border-radius: 4px;
  display: inline-block;
  transition: all 0.2s ease-out;
  position: relative;
  border: 1px solid ${theme.transparentBackgroundLight};
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '';
    display: inline-block;
    background-color: ${theme.transparentBackgroundLight};
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
    transition: all 0.2s ease-out;
  }

  &:hover::after {
    transform: scaleX(1.3) scaleY(1.5);
    opacity: 0;
  }

  &::before {
    content: '';
    display: inline-block;
    background-image: linear-gradient(
      105deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 44%,
      ${theme.secondaryLight} 50%,
      rgba(255, 255, 255, 0) 51%,
      rgba(255, 255, 255, 0) 100%
    );
    background-size: 300% 100%;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
  }

  &:hover::before {
    animation: ${animatedGradient} 1s ease-out;
  }
`;

export default Button;
