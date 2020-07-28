import React from 'react';
import { Link } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Components */
import CardOrder from '../../components/CardOrder';
/* Hooks */
import { useOrders } from '../../infrastructure/hooks';

const ShoppingCart = () => {
  const { data } = useOrders();

  const total = data.reduce((a, b) => a + b.total, 0);

  return (
    <Container>
      <div className="Card--header">
        <h1 className="Card--title">Shopping Cart</h1>
        <Link to={`/checkout`} className="Card--button">Check Out</Link>
      </div>
      <div className="Card--orders">
        {data.map((order) => <CardOrder key={`product-${order.id}-order`} {...order} /> )}
      </div>
      <div className="Card--footer">
        <Link to={`/`} className="Card--link--continue">Continue Shopping</Link>
        <div className="Card--title">{`$ ${total}`}</div>
      </div>
      <div className="Card--footer second">
        <Link to={`/checkout`} className="Card--button">Check Out</Link>
      </div>
    </Container>
  )
};

export default ShoppingCart;
