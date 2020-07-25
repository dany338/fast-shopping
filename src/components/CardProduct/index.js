/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useOrders } from '../../infrastructure/hooks';

const CardProduct = ({ id, name, image, price, description, categories }) => {
  const { addShoppingCartRequest } = useOrders();

  const handleAddCart = () => {
    const order = {
      id,
      name,
      image,
      categories,
      units: 1,
      price,
      total: price
    };
    addShoppingCartRequest(order);
  };

  return (
    <Container>
      <div className="Card--left">
        <img
          className="Card--image"
          src={image}
          alt={`Image-${id}`}
        />
      </div>
      <div className="Card--right">
        <h3 className="Card--title">{name}</h3>
        <h6 className="Card--subtitle">{categories.join(', ')}</h6>
        <h6 className="Card--subtitle">{description}</h6>
        <div className="Card--right--actions">
          <div className="Card--button" onClick={() => handleAddCart()}>Add to Cart</div>
          <h3 className="Card--title">{price}</h3>
        </div>
      </div>
    </Container>
  )
};

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default withRouter(CardProduct);
