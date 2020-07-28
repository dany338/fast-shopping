/* eslint-disable import/no-cycle */
import productsReducer from "./products";
import ordersReducer from "./orders";
import usersReducer from "./users";

import { logger } from "./middlewares";

export const initialState = {
  product: productsReducer.initialState,
  order: ordersReducer.initialState,
  user: usersReducer.initialState,
};

export default function mainReducer(state, action) {
  // Receiving previous state here
  const {
    product,
    order,
    user
  } = state;

  // Receiving current state here
  const currentState = {
    product: productsReducer.reducer(product, action),
    order: ordersReducer.reducer(order, action),
    user: usersReducer.reducer(user, action),
  };

  // Middlewares
  logger(action, state, currentState);

  return currentState;
}
