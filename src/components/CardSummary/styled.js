import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 0px 15px;

  .Card--title {
    text-transform: capitalize;
    color: #444;
    font-size: 2rem;
    font-weight: 700;
  }

  .Card--row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .Card--row--col--first {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    overflow-wrap: break-word;
    width: 50%;
  }

  .Card--row--col--second {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-wrap: break-word;
    width: 20%;
  }

  .Card--row--col--third {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow-wrap: break-word;
    width: 15%;
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
    color: #e4c439;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme.backgroundButtonHover} !important;
      transform: scale(1.05);
    }
  }

  .summary {
    border: 2px dashed #333;
    background:
      linear-gradient(to top, #ffbc00, 2px, transparent 2px),
      linear-gradient(to right, #ffbc00, 2px, transparent 2px),
      linear-gradient(to bottom, #ffbc00, 2px, transparent 2px),
      linear-gradient(to left, #ffbc00, 2px, transparent 2px);
    background-origin: border-box;
  }

  .Card--total--orders {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }

  .Card--actions--orders {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
`;

export default Container;

