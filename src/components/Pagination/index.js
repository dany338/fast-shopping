import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container, PageButton } from './styled';
/* Hooks */
import { useProducts } from '../../infrastructure/hooks';

const Button = ({ page }) => {
  const { productsChangePageRequest, currentPage } = useProducts();

  const handleClickPage = () => {
    productsChangePageRequest(page);
  };

  return (
    <PageButton active={(currentPage === page)} onClick={handleClickPage}>{page}</PageButton>
  )
};

Button.propTypes = {
  page: PropTypes.number.isRequired,
};

const Pagination = ({ pageCount }) => {
  return (
    <Container>
      {Array.from({length: pageCount}, (_, i) => <Button key={`button-${i}`}page={i} />)}
    </Container>
  )
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
};

export default withRouter(Pagination);
