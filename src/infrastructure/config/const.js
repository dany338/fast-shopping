export const API_URL = 'http://localhost:5000';
export const API_URL_PROD = '';
export const BASE_FONT_SIZE = 12;
export const RECORDS_BY_PAGE = 10;
export const LIMIT_BUYS_BY_PRODUCT = 4;
export const MOST_RECENT = 1;
export const LOWEST_PRICE = 2;
export const HIGHEST_PRICE = 3;
export const BEST_SELLERS = 4;
export const isValidEmail = email => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  return re.exec(email);
};
export function pxToRem(target) {
  return `${(target / BASE_FONT_SIZE) * 1}rem`;
};
