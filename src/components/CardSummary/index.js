import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import { nanoid } from 'nanoid';
/* Style Components */
import { Container } from './styled';
/* Components */
import CardForm from '../../components/CardForm';
/* Hooks */
import { useOrders, useUsers } from '../../infrastructure/hooks';

const CardSummary = ({ history }) => {
  const { data, ordersCreateRequest } = useOrders();
  const { customer } = useUsers();
  const total = data.reduce((a, b) => a + b.total, 0);

  const handlePlaceOrder = () => {
    if(Object.values(customer).filter(value => value === '').length >=4 ) {
      Swal.fire({
        title: 'OBLIGATORY FIELD!',
        icon: 'info',
        text: 'you must enter a valid info for the customer!',
        confirmButtonText: 'OK'
      })
    } else if(data.length > 0) {
      Swal.fire({
        title: 'GENERATE ORDER',
        html: `¿Are you sure you want to generate the order for these orders: <b>${data.length}</b>?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'CANCEL',
        confirmButtonText: 'CONFIRM'
      }).then(async (result) => {
        if (result.value) {
          const {err} = await ordersCreateRequest(data, customer, nanoid(10), total);
          if(!err) {
            history.push('/thanks');
          }
        }
      });
    }
  };

  return (
    <Container>
      <h1 className="Card--title">Order Summary</h1>
      <div style={{ width: '100%' }}>
        <div className="Card--row">
          <div className="Card--row--col--first">
            <b>Product</b>
          </div>
          <div className="Card--row--col--second">
            <b>Unit Price</b>
          </div>
          <div className="Card--row--col--third">
            <b>Units</b>
          </div>
          <div className="Card--row--col--third">
            <b>Total Price</b>
          </div>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div className="Card--row summary">
          {data.map((order) => (
            <div className="Card--row" key={`item-${order.id}`}>
              <div className="Card--row--col--first">
                <b>{order.name}</b>
              </div>
              <div className="Card--row--col--second">
                <b>{order.price}</b>
              </div>
              <div className="Card--row--col--third">
                <b>{order.units}</b>
              </div>
              <div className="Card--row--col--third">
                <b>{order.total}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Card--total--orders">
          <h1 className="Card--title">{`Total: $${data.length > 0 && (total)}`}</h1>
      </div>
      <div className="Card--actions--orders">
        <div className="Card--button" onClick={handlePlaceOrder}>Place Order</div>
      </div>
    </Container>
  )
};

CardSummary.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object]),
};

CardSummary.defaultProps = {
  history: {},
};

export default withRouter(CardSummary);
