import {
  PRODUCTS_LIST_INIT,
  PRODUCTS_LIST_SUCCESS,
  PRODUCTS_LIST_ERROR,
  PRODUCTS_CHANGE_PAGE,
  PRODUCTS_ORDER_BY_TYPE
} from './types';
/* Constants */
import { MOST_RECENT, LOWEST_PRICE, HIGHEST_PRICE, BEST_SELLERS } from '../../config/const';

const initialState = {
  data: [],
  dataPagination: [],
  isLoading: false,
  error: '',
  pageCount: 0,
  currentPage: 0,
  to: 10,
  type: '',
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
        dataPagination: state.data.slice( (state.currentPage * payload.to), ((state.currentPage * payload.to) + payload.to) ),
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

    case PRODUCTS_ORDER_BY_TYPE: {
      let purchasesShort = state.data;
      const type = payload.type !== '' ? Number(payload.type) : payload.type;
      if(type === MOST_RECENT) {
        purchasesShort = purchasesShort.sort((a, b) => ((new Date(b.createdAt)) - (new Date(a.createdAt))));
      } else if(type === LOWEST_PRICE) {
        purchasesShort = purchasesShort.sort((a, b) => (a.price - b.price));
      } else if(type === HIGHEST_PRICE) {
        purchasesShort = purchasesShort.sort((a, b) => (b.price - a.price));
      } else if(type === BEST_SELLERS) {
        purchasesShort = purchasesShort.sort((a, b) => (b.sellers - a.sellers));
      } else {
        purchasesShort = purchasesShort.sort((a, b) => (a.id - b.id));
      }
      console.log('purchasesShort', purchasesShort, type);
      return {
        ...state,
        error: '',
        isLoading: false,
        type: type,
        dataPagination: purchasesShort.slice( (payload.page * state.to), ((payload.page * state.to) + state.to) ),
        currentPage: payload.page,
        to: 10,
      };
    }

    default: {
      return state;
    }
  }
};

export { product as default, initialState };
