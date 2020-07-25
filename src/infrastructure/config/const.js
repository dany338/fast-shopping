export const API_URL = 'localhost:4000';
export const RECORDS_BY_PAGE = 10;
export const LIMIT_BUYS_BY_PRODUCT = 4;
export const isValidEmail = email => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return re.exec(email);
};
