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
      transform: rotateY(0deg);
      opacity: 1;
    }
    50% {
      transform: rotateY(180deg);
      opacity: 0.1;
    }
    100% {
      transform: rotateY(0deg);
      opacity: 1;
    }
  `;

export const moveInTopRot = keyframes`
  0% {
    opacity: 0.1;
    transform: translateY(-50px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); 
  }
  
  50% {
    opacity: 0.4;
    transform: rotateX(0.5turn);
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.2); 
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  `;

export const rotate = keyframes`
    from {
      transform: rotateY(0);
    }
    to {
      transform: rotateY(180deg);
      
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
