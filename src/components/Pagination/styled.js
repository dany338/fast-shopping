import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  background-color: ${props => props.theme.headerBackground} !important;
  color: ${props => props.theme.headerText};
  overflow-wrap: break-word;
  flex-grow: 4;
`;

export const PageButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-radius: 10px;
`;

export default Container;
