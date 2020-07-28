import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  color: ${props => props.theme.headerText};
  overflow-wrap: break-word;
`;

export const PageButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  background-color: ${props => props.active ? `${props.theme.backgroundButtonHover}` : `${props.theme.headerBackground}` };
  width: 32px;
  height: 32px;

  &:hover {
    background-color: ${props => props.theme.backgroundButtonHover} !important;
    color: ${props => props.theme.headerText};
  }
`;

export default Container;
