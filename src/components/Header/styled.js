import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 15px;
  border-bottom: 2px solid #000;
  position: fixed;
  top: 0px;
  background-color: #f5f6f7 !important;
  z-index: 9999;

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
    width: 20px;
    height: 20px;
    background-color: #F44336 !important;
    text-transform: uppercase;
    outline: 0;
    vertical-align: middle;
    border-radius: 50%;
    position: relative;
    top: 15px;
    right: 15px;
    text-align: center;
    color: #fff;
    position: absolute;
  }
`;

export default Container;
