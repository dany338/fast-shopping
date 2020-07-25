import React from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Components */
import CardForm from '../../components/CardForm';
/* Hooks */
import { useOrders } from '../../infrastructure/hooks';

const CardSummary = ({ history }) => {
  const { data, ordersCreateRequest } = useOrders();

  const handlePlaceOrder = () => {
    Swal.fire({
      title: 'GENERATE ORDER',
      html: `¿Are you sure you want to generate the order for a value of: <b>${data.length}</b>?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'CANCEL',
      confirmButtonText: 'CONFIRM'
    }).then(async (result) => {
      if (result.value) {
        const {err} = await ordersCreateRequest(data);
        if(!err) {
          history.push('/thanks');
        }
      }
    });
  };

  return (
    <Container>
      <h1 className="Card--title">Order Summary</h1>
      <div>
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
      <div>
        <div className="Card--row">
          {data.map((order) => (
            <div className="Card--row">
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
      <div>
          <h1 className="Card--title">{`Total: $${data.length > 0 && (data.reduce((a, b) => a + b.total, 0))}`}</h1>
      </div>
      <div>
        <div className="Card--button" onClick={handlePlaceOrder}>Place Order</div>
      </div>
    </Container>
  )
};

export default withRouter(CardSummary);
