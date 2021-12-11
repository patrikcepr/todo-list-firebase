import styled from 'styled-components';

const Flex = styled.div`
  width: 100%;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default Flex;
