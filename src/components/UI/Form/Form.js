import styled from 'styled-components';

const Form = styled.form`
  display: ${(props) => (props.display ? props.display : 'flex')};
  gap: 1rem;
  flex-direction: ${(props) => props.fDirection};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Form;
