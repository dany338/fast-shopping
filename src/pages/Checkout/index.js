import React from 'react'
/* Style Components */
import { Container } from './styled';
/* Components */
import CardInformation from '../../components/CardInformation';
import CardSummary from '../../components/CardSummary';

const Checkout = () => {
  return (
    <Container>
      <CardInformation />
      <CardSummary />
    </Container>
  )
};

export default Checkout;
