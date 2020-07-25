import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  border-bottom: 2px solid #000;

  .Card--title {
    text-transform: capitalize;
    color: #444;
    font-size: 2rem;
    font-weight: 700;
  }

  .Card--left {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .Card--right {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }

  .Card--order {
    width: 32px;
    height: 32px;
    background-color: #F44336 !important;
    text-transform: uppercase;
    outline: 0;
    vertical-align: middle;
    border-radius: 50%;
    position: relative;
    top: 0px;
    right: -5px;
  }
`;

export default Container;
