import {
  PRODUCTS_LIST_INIT,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_ERROR,
  PRODUCTS_CHANGE_PAGE,
  PRODUCTS_ORDER_BY_TYPE
} from './types';

export const productsListInit = () => ({ type: PRODUCTS_LIST_INIT });
export const productsListSuccess = (data, pageCount, to) => ({ type: PRODUCTS_LIST_SUCCESS, payload: { data, pageCount, to } });
export const productsListError = error => ({ type: PRODUCTS_LIST_ERROR, payload: error });
export const productsChangePageInit = page => ({ type: PRODUCTS_CHANGE_PAGE, payload: { page } });
export const productsOrderByTypeInit = (type, page) => ({ type: PRODUCTS_ORDER_BY_TYPE, payload: { type, page } });
