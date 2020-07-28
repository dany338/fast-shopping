import React from 'react';
import { Link } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Assets */
import assets from '../../assets';
/* Hooks */
import { useOrders } from '../../infrastructure/hooks';

const Success = () => {
  const { code } = useOrders();

  return (
    <Container>
      <img
        className="Card--image"
        src={assets.holidays}
        alt="Holidays"
      />
      <h1 className="Card--title">Thanks for your purchase</h1>
      <h3 className="Card--subtitle">{`Jhon, we have created your order #${code && (code)}. Your items will be soon at your door`}</h3>
      <h3 className="Card--subtitle">Stay safe</h3>
      <Link to={`/`} className="Card--button">Start Again</Link>
    </Container>
  )
};

export default Success;
