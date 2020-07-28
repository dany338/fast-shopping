import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 15px;

  .Card--image {
    width: 64px;
    height: 64px;
  }

  .Card--title {
    text-transform: capitalize;
    color: #444;
    font-size: 2rem;
    font-weight: 700;
  }

  .Card--subtitle {
    text-transform: capitalize;
    color: #444;
    font-size: 1rem;
    font-weight: 600;
  }

  .Card--button {
    text-transform: capitalize;
    color: #444;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    color: #e4c439;
    padding: 1rem;
    border-top: 0.5px solid #ce8e7b;
    border-bottom: 0.5px solid #ce8e7b;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.backgroundButtonHover} !important;
      transform: scale(1.05);
    }
  }
`;

export default Container;
