/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useOrders } from '../../infrastructure/hooks';

const CardOrder = ({ id, name, image, price, total, categories }) => {
  const { updateUnitsCartRequest } = useOrders();

  const handleChangeUnit = e => {
    const { value } = e.currentTarget;
    const units =  Number(value);
    const order = {
      id,
      name,
      image,
      categories,
      units,
      price,
      total: Number(units) * price
    };
    updateUnitsCartRequest(order);
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
        <div className="Card--right--column">
          <div className="Card--right--delete">
            <h3 className="Card--title">{name}</h3>
            <i className="material-icons">delete_forever</i>
          </div>
          <h6 className="Card--subtitle">{categories.join(', ')}</h6>
        </div>
        <div className="Card--right--column">
          <h6 className="Card--subtitle">Unit Price</h6>
          <h3 className="Card--subtitle">{price}</h3>
        </div>
        <div className="Card--right--column">
          <select onChange={(e) => handleChangeUnit(e)}>
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="Card--right--column">
          <h3 className="Card--subtitle">{total}</h3>
        </div>
      </div>
    </Container>
  )
};

CardOrder.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default withRouter(CardOrder);
