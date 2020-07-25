import {
  USER_CREATE_INIT,
  USER_CREATE_SUCCESS,
  USER_CREATE_ERROR,
  USER_ME_INIT,
  USER_ME_SUCCESS,
  USER_ME_ERROR,
  USER_FORM_CUSTOMER_FIELD_CHANGE
} from './types';

export const userCreateInit = () => ({ type: USER_CREATE_INIT });
export const userCreateSuccess = data => ({ type: USER_CREATE_SUCCESS, payload: { data } });
export const userCreateError = error => ({ type: USER_CREATE_ERROR, payload: error });
export const userMeInit = () => ({ type: USER_ME_INIT });
export const userMeSuccess = data => ({ type: USER_ME_SUCCESS, payload: { data } });
export const userMeError = error => ({ type: USER_ME_ERROR, payload: error });
export const userFormCustomerFieldChangeInit = (name, value) => ({ type: USER_FORM_CUSTOMER_FIELD_CHANGE, payload: { name, value } });
