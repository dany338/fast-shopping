import {
  productsListInit,
  productsListSuccess,
  productsListError,
  productsChangePageInit,
  productsOrderByTypeInit
} from './actions';
import * as ProductsServices from "../../services";

export const productsRequest = to => {
  return async dispatch => {
    dispatch(productsListInit());
    try {
      const data = await ProductsServices.apiProducts.list();
      console.log('data', data);
      if(Array.isArray(data)) {
        console.log('entro 2');
        const total = data.length;
        const pageCount = Math.ceil(total / to);
        dispatch(productsListSuccess(data, pageCount, to));
      } else if(typeof data === 'string') {
        dispatch(productsListError(data.toString()));
      }
    } catch (error) {
      console.error(error);
      dispatch(productsListError('An error was generated please consult the administrator!'));
    }
  };
};

export const productsChangePageRequest = page => {
  return async dispatch => {
    try {
      dispatch(productsChangePageInit(page));
    } catch (error) {
      console.error(error.toString());
    }
  };
};

export const productsOrderByTypeRequest = (type, page) => {
  return async dispatch => {
    try {
      dispatch(productsOrderByTypeInit(type, page));
    } catch (error) {
      console.error(error.toString());
    }
  };
};
