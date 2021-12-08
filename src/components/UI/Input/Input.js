import styled from 'styled-components';

const Input = styled.input`
  width: calc(100% - 2rem);
  border: none;
  border-bottom: 4px solid ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.secondaryLight};
  padding: 1rem;
  font-size: 1rem;
  flex-grow: 2;

  &:focus {
    outline: thin dotted;
    border-bottom: 4px solid red;
  }

  &::placeholder {
    color: ${(props) => props.theme.secondaryDark};
  }
`;

export default Input;
