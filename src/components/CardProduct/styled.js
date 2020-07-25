import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 50%;

  .Card--left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
  }

  .Card--image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .Card--right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .Card--right--actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .Card--button {
    text-transform: capitalize;
    color: #444;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 10px;
    padding: 1rem;
    border-top: 0.5px solid #ce8e7b;
    border-bottom: 0.5px solid #ce8e7b;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: ${props => props.theme.backgroundButton} !important;
    color: #e4c439;

    &:hover {
      background-color: ${props => props.theme.backgroundButtonHover} !important;
      transform: scale(1.05);
    }
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
`;

export default Container;
