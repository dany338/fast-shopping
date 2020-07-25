import {
  PRODUCTS_LIST_INIT,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_ERROR,
  PRODUCTS_CHANGE_PAGE
} from './types';

export const productsListInit = () => ({ type: PRODUCTS_LIST_INIT });
export const productsListSuccess = data => ({ type: PRODUCTS_LIST_SUCCESS, payload: { data } });
export const productsListError = error => ({ type: PRODUCTS_LIST_ERROR, payload: error });
export const productsChangePageInit = page => ({ type: PRODUCTS_CHANGE_PAGE, payload: { page } });
