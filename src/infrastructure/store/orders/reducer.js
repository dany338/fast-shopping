import {
  ORDERS_LIST_INIT,
  ORDER_ADD_SHOPPING_CART_INIT,
  ORDER_UPDATE_UNITS_SHOPPING_CART_INIT,
  ORDER_CREATE_INIT,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_ERROR
} from './types';
/* Constants */
import { LIMIT_BUYS_BY_PRODUCT } from '../../config/const';

const initialState = {
  data: [],
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

      return {
        ...state,
        data: !verify ? [ ...state.data, payload.product ] : state.data.map((product) => (product.id === payload.product.id) ? { ...product, units: (product.units < LIMIT_BUYS_BY_PRODUCT) ? (product.units + 1) : product.units } : product),
        error: '',
        isLoading: false,
      };
    }

    case ORDER_UPDATE_UNITS_SHOPPING_CART_INIT: {
      return {
        ...state,
        data: state.data.map((item) => (item.id === payload.order.id) ? payload.order : item),
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

    default: {
      return state;
    }
  }
};

export { order as default, initialState };
