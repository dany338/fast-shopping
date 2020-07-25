import {
  ORDERS_LIST_INIT,
  ORDER_ADD_SHOPPING_CART_INIT,
  ORDER_UPDATE_UNITS_SHOPPING_CART_INIT,
  ORDER_CREATE_INIT,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_ERROR
} from './types';

export const orderListInit = () => ({ type: ORDERS_LIST_INIT });
export const addShoppingCartInit = product => ({ type: ORDER_ADD_SHOPPING_CART_INIT, payload: { product } });
export const updateUnitsCartInit = order => ({ type: ORDER_UPDATE_UNITS_SHOPPING_CART_INIT, payload: { order } });
export const orderCreateInit = () => ({ type: ORDER_CREATE_INIT });
export const orderCreateSuccess = code => ({ type: ORDER_CREATE_SUCCESS, payload: { code } });
export const orderCreateError = error => ({ type: ORDER_CREATE_ERROR, payload: error });
