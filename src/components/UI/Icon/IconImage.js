import styled from 'styled-components';

const IconImage = styled.img`
  height: 100%;
  padding: 0;
  opacity: ${(props) => (props.opacity ? props.opacity : '1')};
  filter: invert(${(props) => (props.theme.text === '#fff' ? '100%' : '0%')});
  /* filter: invert(23%) sepia(17%) saturate(6064%) hue-rotate(337deg)
    brightness(101%) contrast(93%); */
`;

export default IconImage;
