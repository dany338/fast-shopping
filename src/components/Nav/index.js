import React from 'react';
import { withRouter, useRouteMatch } from 'react-router-dom';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useProducts } from '../../infrastructure/hooks';
/* Constants */
import { MOST_RECENT, LOWEST_PRICE, HIGHEST_PRICE, BEST_SELLERS } from '../../infrastructure/config/const';

const Nav = () => {
  const { productsOrderByTypeRequest, data } = useProducts();

  const handleChangeSelected = e => {
    const { value } = e.currentTarget;
    productsOrderByTypeRequest(value, 0); // PAGE 0
  };

  const isActiveCart = useRouteMatch({
    path: '/cart',
    exact: true
  });

  const isActiveCheckout = useRouteMatch({
    path: '/checkout',
    exact: true
  });

  const isActiveSuccess = useRouteMatch({
    path: '/thanks',
    exact: true
  });

  return (
    <Container>
      {(data.length > 0 && !isActiveCart && !isActiveCheckout && !isActiveSuccess)&& (
        <select onChange={(e) => handleChangeSelected(e)}>
          <option value="">Order by...</option>
          <option value={MOST_RECENT}>Most recent</option>
          <option value={LOWEST_PRICE}>Lowest price</option>
          <option value={HIGHEST_PRICE}>Highest price</option>
          <option value={BEST_SELLERS}>Best Sellers</option>
        </select>
      )}
    </Container>
  )
};

export default withRouter(Nav);
