import {
  USER_CREATE_INIT,
  USER_CREATE_SUCCESS,
  USER_CREATE_ERROR,
  USER_ME_INIT,
  USER_ME_SUCCESS,
  USER_ME_ERROR,
  USER_FORM_CUSTOMER_FIELD_CHANGE
} from './types';

const initialState = {
  data: {},
  isLoading: false,
  error: '',
  customer: {
    id: null,
    fullName: '',
    identification: '',
    address: '',
    phoneNumber: '',
    email: '',
  },
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_CREATE_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case USER_CREATE_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    }

    case USER_CREATE_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case USER_ME_INIT: {
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    }

    case USER_ME_SUCCESS: {
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    }

    case USER_ME_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }

    case USER_FORM_CUSTOMER_FIELD_CHANGE: {
      return {
        ...state,
        customer: {
          ...state.customer,
          [payload.name]: payload.value
        },
      };
    }

    default: {
      return state;
    }
  }
};

export { user as default, initialState };
