import Cookies from 'js-cookie';
import {
  ORDERS_LIST_INIT,
  ORDER_ADD_SHOPPING_CART_INIT,
  ORDER_UPDATE_UNITS_SHOPPING_CART_INIT,
  ORDER_CREATE_INIT,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_ERROR,
  ORDER_DELETE_INIT
} from './types';
/* Constants */
import { LIMIT_BUYS_BY_PRODUCT } from '../../config/const';

const initialState = {
  data: Cookies.get('fast_shopping_orders') ? JSON.parse(Cookies.get('fast_shopping_orders')) : [],
  code: null,
  isLoading: false,
  error: '',
};

const order = (state = initialState, { type, payload }) => {
  switch (type) {
    case ORDERS_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: false,
      };
    }

    case ORDER_ADD_SHOPPING_CART_INIT: {
      const isProduct = product => product.id === payload.product.id;
      const verify = state.data.some(isProduct);
      const orders = !verify ? [ ...state.data, payload.product ] : state.data.map((product) => (product.id === payload.product.id) ? { ...product, units: (product.units < LIMIT_BUYS_BY_PRODUCT) ? (product.units + 1) : product.units } : product);

      Cookies.set('fast_shopping_orders', orders, {
        expires: 1
      });

      return {
        ...state,
        data: orders,
        error: '',
        isLoading: false,
      };
    }

    case ORDER_UPDATE_UNITS_SHOPPING_CART_INIT: {
      const orders = state.data.map((item) => (item.id === payload.order.id) ? payload.order : item);
      Cookies.set('fast_shopping_orders', orders, {
        expires: 1
      });

      return {
        ...state,
        data: orders,
        error: '',
        isLoading: false,
      };
    }

    case ORDER_CREATE_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case ORDER_CREATE_SUCCESS: {
      Cookies.remove('fast_shopping_orders');
      Cookies.remove('fast_shopping_customer');
      return {
        ...state,
        data: [],
        code: payload.code,
        isLoading: false,
        error: ''
      };
    }

    case ORDER_CREATE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case ORDER_DELETE_INIT: {
      const orders = state.data.filter((item) => (item.id !== payload));
      Cookies.set('fast_shopping_orders', orders, {
        expires: 1
      });

      return {
        ...state,
        data: orders,
        error: '',
      };
    }

    default: {
      return state;
    }
  }
};

export { order as default, initialState };
