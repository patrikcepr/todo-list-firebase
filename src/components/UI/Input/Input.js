import styled from 'styled-components';

import theme from '../Theme/Theme';

const Input = styled.input`
  width: calc(100% - 2rem);
  border: none;
  border-bottom: 3px solid ${theme.secondary};
  background-color: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  font-size: 1rem;
  flex-grow: 2;

  &:focus {
    outline: thin dotted;
    border-bottom: 3px solid red;
  }
`;

export default Input;
