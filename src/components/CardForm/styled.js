import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  border: 1px solid #ccc;

  .Card--row--info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .Card--title {
    text-transform: capitalize;
    color: #444;
    font-size: 1rem;
    font-weight: 600;
  }

  .Card--radio-buttons {
    display: inline;
  }

  .Card--row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .Card--field {
    text-transform: capitalize;
    color: #444;
    font-size: 1rem;
    font-weight: 600;
  }

  .Card--button {
    display: flex;
    justify-content: flex-end;
    align-items: center;
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

  .Card--link {
    text-transform: capitalize;
    color: #444;
    font-size: 1rem;
    background-color: ${props => props.theme.backgroundButton} !important;
    &:hover {
      background-color: ${props => props.theme.backgroundButtonHover} !important;
      transform: scale(1.05);
    }
  }
`;

export default Container;
