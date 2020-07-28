import styled from 'styled-components';

export const Container = styled.div`
  width: 12rem auto;
  background: #fff;
  color: #e4c439;
  padding: 1rem;
  border-radius: 10px;
  border-top: 0.5px solid #ce8e7b;
  border-bottom: 0.5px solid #ce8e7b;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.2s ease-in-out all;
  display: flex;
  flex-direction: row;
  height: auto;
  overflow-wrap: break-word;

  @media only screen and (max-width: 601px) {
    display: flex;
    flex-direction: column;
  }

  --color-3: #ffbc00;
  &:hover {
    background-color: var(--color-3);
    transform: scale(1.05);
  }

  .Card--left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 5px;
  }

  .Card--image {
    object-fit: cover;
  }

  .Card--right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 10px;
  }

  .Card--right--actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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
    cursor: pointer;
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
    text-align: justify;
  }

  .Card--subtitle {
    text-transform: capitalize;
    color: #444;
    font-size: 1rem;
    font-weight: 600;
    text-align: justify;
  }
`;

export default Container;
