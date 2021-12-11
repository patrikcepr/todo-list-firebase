import styled from 'styled-components';

const RoundedButton = styled.button`
  border-radius: 100%;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  padding-bottom: 0.8rem;
  position: relative;
  top: -1.5rem;
  right: -35%;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1rem;
  border: 3px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;
`;

export default RoundedButton;
