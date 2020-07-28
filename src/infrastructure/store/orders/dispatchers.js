import {
  orderListInit,
  addShoppingCartInit,
  updateUnitsCartInit,
  orderCreateInit,
  orderCreateSuccess,
  orderCreateError,
  orderDeleteInit
} from './actions';
import * as OrdersServices from "../../services";

export const orderDeleteRequest = id => {
  return async dispatch => {
    try {
      dispatch(orderDeleteInit(id));
    } catch (error) {
      console.error(error.toString());
    }
  };
};

export const ordersListRequest = () => {
  return async dispatch => {
    try {
      dispatch(orderListInit());
    } catch (error) {
      console.error(error.toString());
    }
  };
};

export const addShoppingCartRequest = (order) => {
  return async dispatch => {
    try {
      dispatch(addShoppingCartInit(order));
    } catch (error) {
      console.error(error.toString());
    }
  };
};

export const updateUnitsCartRequest = (order) => {
  return async dispatch => {
    try {
      dispatch(updateUnitsCartInit(order));
    } catch (error) {
      console.error(error.toString());
    }
  };
};

export const ordersCreateRequest = (orders, customer, code, total) => {
  return async dispatch => {
    dispatch(orderCreateInit());
    try {
      const info = {
        orders: orders.map(({categories, ...newOrder}) => newOrder),
        customer,
        code,
        total
      }
      const data = await OrdersServices.apiOrders.create(info);
      if(typeof data === 'object') {
        dispatch(orderCreateSuccess(data.code));
        return { msg: 'Save info!', err: false };
      }
      if(typeof data === 'string') {
        dispatch(orderCreateError(data.toString()));
        return { msg: `${data}`, err: true };
      }
      return { msg: '', err: false };
    } catch (error) {
      dispatch(orderCreateError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true };
    }
  };
};
