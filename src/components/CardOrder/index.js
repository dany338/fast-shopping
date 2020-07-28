/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useOrders } from '../../infrastructure/hooks';

const CardOrder = ({ id, name, image, price, units, total, categories }) => {
  const { updateUnitsCartRequest, orderDeleteRequest } = useOrders();

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

  const handleDeleteOrder = () => {
    orderDeleteRequest(id);
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
          </div>
          <h6 className="Card--subtitle">{categories.map(({name}) => name).join(', ')}</h6>
        </div>
        <div className="Card--right--column">
          <h6 className="Card--subtitle"><b>...</b></h6>
          <i className="material-icons Card--right--delete" title="Delete order" onClick={handleDeleteOrder}>delete_forever</i>
        </div>
        <div className="Card--right--column">
          <h6 className="Card--subtitle"><b>Unit Price</b></h6>
          <h3 className="Card--subtitle">{price}</h3>
        </div>
        <div className="Card--right--column">
          <h6 className="Card--subtitle"><b>Units</b></h6>
          <select onChange={(e) => handleChangeUnit(e)} defaultValue={units}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="Card--right--column">
          <h6 className="Card--subtitle"><b>Total</b></h6>
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
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
};

export default withRouter(CardOrder);
