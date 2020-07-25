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

  return (
    <Container>
      <div className="Card--header">
        <h1 className="Card--title">Shopping Cart</h1>
        <div className="Card--button">Check Out</div>
      </div>
      <div className="Card--orders">
        {data.map((order) => <CardOrder key={`product-${order.id}-order`} {...order} /> )}
      </div>
      <div className="Card--footer">
        <Link to={`/products`} className="Card--link--continue">Continue Shopping</Link>
        <div className="Card--title">$ 440.43</div>
      </div>
      <div className="Card--button">Check Out</div>
    </Container>
  )
};

export default ShoppingCart;
