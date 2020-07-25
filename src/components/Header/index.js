import React from 'react'
/* Style Components */
import { Container } from './styled';

const Header = () => {
  return (
    <Container>
      <div className="Card--left">
        <i className="material-icons">shopping_bag</i>
        <h1 className="Card--title">Fast Shopping</h1>
      </div>
      <div className="Card--right">
        <i className="material-icons">shopping_cart</i>
        <span className="Card--order">2</span>
      </div>
    </Container>
  )
};

export default Header;
