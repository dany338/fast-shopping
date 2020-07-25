import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
/* Style Components */
import { Container, PageButton } from './styled';

const Button = ({ page }) => {
  const handleClickPage = () => {
    console.log(page);
  };

  return (
    <PageButton onClick={handleClickPage}>{page}</PageButton>
  )
};

Button.propTypes = {
  page: PropTypes.number.isRequired,
};

const Pagination = ({ pages }) => {
  return (
    <Container>
      {pages.map(page => <Button page={page} />)}
    </Container>
  )
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default withRouter(Pagination);
