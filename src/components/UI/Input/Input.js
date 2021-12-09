import styled from 'styled-components';

const Input = styled.textarea`
  width: calc(100% - 2rem);
  border: none;
  border-radius: 0.5rem;
  border-bottom: 4px solid ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.secondaryLight};
  padding: 1rem;
  font-size: 1.2rem;
  line-height: 1.9rem;
  flex-grow: 2;
  resize: none;

  &:focus {
    outline: thin dotted;
    border-bottom: 4px solid red;
  }

  &::placeholder {
    color: ${(props) => props.theme.secondaryDark};
  }
`;

export default Input;
