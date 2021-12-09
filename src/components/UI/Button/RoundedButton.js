import styled from 'styled-components';

const RoundedButton = styled.button`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 0.2rem 0.5rem 0.5rem 0.5rem;
  position: relative;
  top: -1.5rem;
  right: -35%;
  font-size: 3rem;
  font-weight: 300;
  border: 3px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};
`;

export default RoundedButton;
