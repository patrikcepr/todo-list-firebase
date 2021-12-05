import { keyframes } from 'styled-components';

export const animatedGradient = keyframes`
  0% {
    opacity: 0.3;
    background-position:0% 50%;
  }
  50% {
    opacity: 1;
    background-position:100% 50%;
  }
  100% {
    opacity: 0.7;
    background-position:0% 50%;
  }
  `;

export const flip = keyframes`
    0% {
      transform: rotateZ(0deg) rotateY(0);
    }
    100% {
      transform: rotateZ(360deg) rotateY(-360deg);
    }
  `;

export const shadows = keyframes`
  0% {
    opacity: 0;
    filter: blur(0)
  }
  10% {
    opacity: .1;
    filter: blur(0)
  }
  20% {
    opacity: .15;
    filter: blur(0)
  }
  30% {
    opacity: .2;
    filter: blur(0)
  }
  50% {
    opacity: 1;
    filter: blur(2px)
  }
  100% {
    opacity: 0;
    transform: translateX(15rem);
    filter: blur(1.5rem)
  }
`;

export const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
