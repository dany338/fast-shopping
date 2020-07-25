import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Components */
import CardForm from '../../components/CardForm';

const CardInformation = props => {
  return (
    <Container>
      <h1 className="Card--title">Customer Information</h1>
      <CardForm />
    </Container>
  )
};

export default withRouter(CardInformation);
