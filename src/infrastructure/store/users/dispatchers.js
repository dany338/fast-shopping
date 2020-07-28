import {
  userCreateInit,
  userCreateSuccess,
  userCreateError,
  userMeInit,
  userMeSuccess,
  userMeError,
  userFormCustomerFieldChangeInit
} from './actions';
import * as UsersServices from "../../services";

export const userFormCustomerFieldChangeRequest = (name, value) => {
  return async dispatch => {
    try {
      dispatch(userFormCustomerFieldChangeInit(name, value));
    } catch (error) {
      console.error(error.toString());
    }
  };
};

export const userCreateRequest = (orders, token) => {
  return async dispatch => {
    dispatch(userCreateInit());
    try {
      const data = await UsersServices.apiUsers.create(orders, token);
      if(typeof data === 'object') {
        dispatch(userCreateSuccess(data));
        return { msg: data.message, err: false };
      }
      if(typeof data === 'string') {
        dispatch(userCreateError(data.toString()));
        return { msg: `${data}`, err: true };
      }
      return { msg: '', err: false };
    } catch (error) {
      dispatch(userCreateError('An error was generated please create the administrator!'));
      return { msg: 'An error was generated please create the administrator!', err: true };
    }
  };
};

export const userMeRequest = email => {
  return async dispatch => {
    dispatch(userMeInit());
    try {
      const data = await UsersServices.apiUsers.search(email);
      if(typeof data.ok !== 'undefined' && data.ok) {
        dispatch(userMeSuccess(data.data.dataValues));
        return { msg: data.ok, err: false };
      }
      dispatch(userMeError('Customer not found'));
      return { msg: 'Customer not found', err: true };
    } catch (error) {
      dispatch(userMeError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true };
    }
  };
};
