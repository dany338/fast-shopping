import React from 'react'
import { Link } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useOrders } from '../../infrastructure/hooks';

const Header = () => {
  const { data } = useOrders();
  const isOrders = data.length > 0;
  return (
    <Container>
      <div className="Card--left">
        <i className="material-icons">shopping_bag</i>
        <Link to={'/'}><h1 className="Card--title">Fast Shopping</h1></Link>
      </div>
      <div className="Card--right">
        {isOrders ? (
          <Link to={'/cart'}>
            <i className="material-icons">shopping_cart</i>
            <span className="Card--order">{data.length}</span>
          </Link>
        ) : (
          <i className="material-icons">shopping_cart</i>
        )}
      </div>
    </Container>
  )
};

export default Header;
