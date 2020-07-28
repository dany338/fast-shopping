import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 15px;
  border-top: 0.5px solid #ce8e7b;
  border-bottom: 0.5px solid #ce8e7b;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 10px;
  overflow-wrap: break-word;

  @media only screen and (max-width: 601px) {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    background-color: var(--color-3);
    transform: scale(1);
  }

  .Card--left {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5px;
    width: 20%;
    flex-wrap: wrap;
  }

  .Card--image {
    width: 50%;
    height: 50%;
    object-fit: cover;
  }

  .Card--right {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 10px;
    width: 70%;
    flex-wrap: wrap;
    padding: 0px 15px;
  }

  .Card--right--column {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 20%;
  }

  .Card--right--delete {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &:hover {
      color: var(--color-5) !important;
      transform: scale(1);
    }
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
