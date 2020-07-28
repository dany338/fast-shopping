import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  grid-gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 601px) {
    grid-template-columns: repeat(auto-fit,minmax(100%, 1fr));
    padding: 0px 15px;
  }
`;

export default Container;
