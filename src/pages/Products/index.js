import React, { useState, useEffect, useCallback } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Style Components */
import { Container } from './styled';
/* Components */
import CardProduct from '../../components/CardProduct';
import Pagination from '../../components/Pagination';
/* Hooks */
import { useProducts } from '../../infrastructure/hooks';
/* Constants */
import { RECORDS_BY_PAGE } from '../../infrastructure/config/const';

const Products = () => {
  const [ processing, setProcessing ] = useState(false);
  const {
    isLoading,
    dataPagination: data,
    productsRequest,
    pageCount
  } = useProducts();

  const load = useCallback(async () => {
    await productsRequest(RECORDS_BY_PAGE);
    setProcessing(true);
  }, [productsRequest]);

  useEffect(() => {
    if(!processing) {
      load();
    }
    console.log(isLoading);
  }, [load, isLoading, processing]);

  return (
    <Container>
      {!processing ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#f42f6391" highlightColor="#444">
            <Skeleton height={34} />
          </SkeletonTheme>
        </div>
      ) : (
        <>
          {pageCount > 0 && ( <Pagination pageCount={pageCount} />)}<br />
          {data.map((product) => <CardProduct key={`product-${product.id}`} {...product} /> )}<br />
          {pageCount > 0 && ( <Pagination pageCount={pageCount} />)}<br />
        </>
      )}
    </Container>
  )
}

export default Products;
