import React, { useState, useEffect, useCallback } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Style Components */
import { Container } from './styled';
/* Components */
import CardProduct from '../../components/CardProduct';
/* Hooks */
import { useProducts } from '../../infrastructure/hooks';
/* Constants */
import { RECORDS_BY_PAGE } from '../../infrastructure/config/const';

const Products = () => {
  const [ processing, setProcessing ] = useState(false);
  const {
    isLoading,
    dataPagination: data,
    productsRequest
  } = useProducts();

  const load = useCallback(async () => {
    productsRequest(RECORDS_BY_PAGE);
  }, [productsRequest]);

  useEffect(() => {
    if(!processing) {
      load();
      setProcessing(true);
    }
  }, [load, processing]);

  return (
    <Container>
      {!isLoading ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#f42f6391" highlightColor="#444">
            <Skeleton height={34} />
          </SkeletonTheme>
        </div>
      ) : (
        <>
          {data.map((product) => <CardProduct key={`product-${product.id}`} {...product} /> )}
        </>
      )}
    </Container>
  )
}

export default Products;
