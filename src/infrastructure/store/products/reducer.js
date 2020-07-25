import {
  PRODUCTS_LIST_INIT,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_ERROR,
  PRODUCTS_CHANGE_PAGE
} from './types';

const initialState = {
  data: [],
  dataPagination: [],
  isLoading: false,
  error: '',
  pageCount: 0,
  currentPage: 0,
  to: 10,
};

const product = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_LIST_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case PRODUCTS_LIST_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        dataPagination: payload.data,
        pageCount: payload.pageCount,
        to: payload.to,
        isLoading: false,
        error: ''
      };
    }

    case PRODUCTS_LIST_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case PRODUCTS_CHANGE_PAGE: {
      return {
        ...state,
        error: '',
        isLoading: false,
        currentPage: payload.page,
        dataPagination: state.data.slice( (payload.page * state.to), ((payload.page * state.to) + state.to) ),
      };
    }

    default: {
      return state;
    }
  }
};

export { product as default, initialState };
